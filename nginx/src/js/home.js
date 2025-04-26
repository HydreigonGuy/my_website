
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

var selected_page = "home";

var lang = getCookie("lang");
if (lang == "") {
    lang = "eng";
}

const header_map = {
    "title":{
        "fr":"Site d'Adrien",
        "eng":"Adrien's Website"
    },
    "travels":{
        "fr":"Voyages",
        "eng":"Travels"
    },
    "cv":{
        "fr":"CV",
        "eng":"CV"
    }
}

const footer_map = {
    "links":{
        "fr":"Liens",
        "eng":"Links"
    }
}

const travel_page_map = {
    "title":{
        "fr":"Voyages",
        "eng":"Travels"
    },
    "france":{
        "fr":"France",
        "eng":"France"
    },
    "korea":{
        "fr":"Corée",
        "eng":"Korea"
    },
    "china":{
        "fr":"Chine",
        "eng":"China"
    },
    "japan":{
        "fr":"Japon",
        "eng":"Japan"
    },
    "uk":{
        "fr":"Royaume Uni",
        "eng":"UK"
    }
}

function getHeaderContents() {
    return '<div class="header_subcontainer">\
            <h2 class="header_title">' + header_map.title[lang] + '</h2>\
            <a class="header_urls" href="">' + header_map.travels[lang] + '</a>\
            <a class="header_urls" href="">' + header_map.cv[lang] + '</a>\
        </div>'
}

function getFooterContents() {
    return '<div class="footer_subcontainer">\
            <p class="footer_title">' + footer_map.links[lang] + '</p>\
            <a class="footer_link" href="">Instagram</a>\
            <a class="footer_link" href="">Gitlab</a>\
            <a class="footer_link" href="">Linkedin</a>\
        </div>'
}

function getTravelPage() {
    return '<h3>' + travel_page_map.title[lang] + '</h3>\
        <a href="/france">' + travel_page_map.france[lang] + '</a>\
        <a href="/korea">' + travel_page_map.korea[lang] + '</a>\
        <a href="/china">' + travel_page_map.china[lang] + '</a>\
        <a href="/japan">' + travel_page_map.japan[lang] + '</a>\
        <a href="/uk">' + travel_page_map.uk[lang] + '</a>'
}

function update_content() {
    document.getElementById("header_container").innerHTML = getHeaderContents();
    document.getElementById("footer_container").innerHTML = getFooterContents();
    document.getElementById("content_container").innerHTML = getTravelPage();
}

window.onload = function () {
    update_content();
}

function update_lang() {
    lang = document.getElementById("lang_selector").value;
    document.cookie = "lang=" + lang;
    update_content();
}
