#!/bin/bash

echo "Deploy to AWS S3"
echo

[[ -z $1 ]] && {
    BASENAME=`basename $0`
    echo "Usage: $BASENAME <profile>"
    exit 1
}

REGION="us-east-1"
PROFILE="$1"
N=2
DIR=`dirname $0`
cd "$DIR" || exit 1

NAME=`cat package.json | jq -r '.name'` || exit 1
[[ -z $NAME ]] && {
    echo "Cannot get package name"
    exit 1
}

BRANCH=`git branch | awk '/^\*/ {print $2}'` || exit 1
[[ -z $BRANCH ]] && {
    echo "Cannot get git branch"
    exit 1
}

S3_CLIENT="client-$N-$BRANCH-$NAME-metagate-dev"

echo "Name:     $NAME"
echo "Branch:   $BRANCH"
echo "Profile:  $PROFILE"
echo "S3 Buckets:"
echo "- client: $S3_CLIENT"
echo

function prep_bucket() {
    aws s3 ls --profile $PROFILE s3://$1 >/dev/null 2>&1 && \
    {
        echo -n "Clearing $1: "
        aws s3 rm --profile $PROFILE s3://$1 --recursive --quiet || exit 1
        echo done
    } || \
    {
        echo -n "Creating $1: "
        aws s3api create-bucket \
            --profile $PROFILE \
            --bucket $1 \
            || exit 1
        echo done
    }
}
function sync_bucket() {
    echo -n "Syncing $1 to $2: "
    [[ -d $1 ]] || {
        echo "error"
        echo "$1 missing"
        exit 1
    }
    aws s3 sync \
        "$1" \
        "s3://$2" \
        --profile $PROFILE \
        --quiet || exit 1
    echo done
}


echo "******************* Build"
echo
[[ -d build ]] && {
    echo "Removing build:      "
    rm -rf build || exit 1
    echo done
}
npm run build

echo "******************* Bucket"
echo
prep_bucket $S3_CLIENT
sync_bucket build/ $S3_CLIENT
