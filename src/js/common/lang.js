
// requires import of cookies.js

var lang = getCookie("lang");
const authorised_langs = ["eng", "fr"];


function setLang(new_lang) {
    if (authorised_langs.includes(new_lang)) {
        lang = new_lang;
        document.cookie = "lang=" + lang;
    }
}


// If language is not set or set to an invalid value, set it as english
if (lang == "" || !authorised_langs.includes(lang)) {
    setLang("eng");
}
