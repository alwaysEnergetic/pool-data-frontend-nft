const resources = {
    section1: {
        welcome: {
            en: "Welcome to",
            ar: "مرحبا بك في"
            
        },
        body: {
            en: "Journey through the METAGATE and explore lucrative opportunities in the web3 multiverse. Our ground-breaking launchpad offers early access to exclusive IMOs and NFT collection drops, only at METAGATE",
            ar:"انطلق في رحلة عبر Metagate واستكشف فرص تقنية الweb3 عبر الإستثمار في الفنون الرقمية (NFT) و الطرح الأولي لمشاريع الميتافيرس حصرياً على Metagate"
        }
    },
    buttons: {
        languageButton: {
            en: "EN",
            ar: "عربي",
        },
        twitterButtonLink: {
            en: "https://twitter.com/MetagateWorld",
            ar: "https://twitter.com/MetagateAR",
        }
    },
    section10 : {
        top: {
            en: "what are you",
            ar: "مرحبا بك في"
            
        },
        down : {
            en:'waiting for?'
        },
        body :{
            en: 'Join the Metagalactic Alliance today and help us protect the Flames of Creation from the menacing horde of monsters that await you in the World of Aetherya.'
        }

    }
}

const styles = {
    en: {
        textAlign: 'left',
        direction: 'ltr',

    },
    center :{
        textAlign:'center'
    },
    ar: {
        textAlign: 'right',
        direction: 'rtl',
    },
    items: {
        discordButton: {
            en: {
                marginRight: '24px',
                marginLeft: '0px',
            },
            ar: {
                marginRight: '0px',
                marginLeft: '24px',
            }
        }
    }
}

const langs = ['en', 'ar'];

const isRTL = {
    en: false,
    ar: true,
}

exports.txt = (category, item, lang) => {
    if (resources[category]) {
        if (resources[category][item]) {
            if (resources[category][item][lang]) {
                return resources[category][item][lang];
            } else {
                return "MISSING " + category + " ITEM " + item + " LANG " + lang;
            }
        } else {
            return "MISSING " + category + " ITEM " + item;
        }
    } else {
        return "MISSING " + category;
    }
}

exports.stl = (lang, item = 'default') => {
    if (item === 'default') {
        if (styles[lang]) {
            return styles[lang];
        } else {
            return {};
        }
    } else {
        if (styles.items[item]) {
            if (styles.items[item][lang]) {
                return styles.items[item][lang];
            } else {
                return {};
            }
        } else {
            return {};
        }
    }
    
}

exports.nextLang = (lang) => {
    let i = langs.indexOf(lang);
    if (i < 0) {
        return langs[0];
    } else {
        i += 1;
        if (i >= langs.length) {
            i = 0;
        }
        return langs[i];
    }
}

exports.getRTL = (lang) => {
    if (isRTL[lang] !== undefined) {
        return isRTL[lang];
    } else {
        return false;
    }
}