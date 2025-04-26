
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

var selected_page = getCookie("selected_page");
if (selected_page == "") {
    selected_page = "travels";
}

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

const cv_page_map = {
    "position":{
        "fr":"Développeur DevOps",
        "eng":"DevOps Developper"
    }
}

function getHeaderContents() {
    return '<div class="header_subcontainer">\
            <h2 class="header_title">' + header_map.title[lang] + '</h2>\
            <button class="header_urls" href="" onclick="update_selected_page(\'travels\')">' + header_map.travels[lang] + '</button>\
            <button class="header_urls" href="" onclick="update_selected_page(\'cv\')">' + header_map.cv[lang] + '</button>\
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

function getCVPage() {
    return '<h3>Adrien THIBAULT</h3>\
        <h5>' + cv_page_map.position[lang] + '</h5>'
}

function update_content() {
    document.getElementById("header_container").innerHTML = getHeaderContents();
    document.getElementById("footer_container").innerHTML = getFooterContents();
    if (["travels", "cv"].includes(selected_page)) {
        if (selected_page == "travels") {
            document.getElementById("content_container").innerHTML = getTravelPage();
        }
        if (selected_page == "cv") {
            document.getElementById("content_container").innerHTML = getCVPage();
        }
    } else {
        // default home page
    }
}

window.onload = function () {
    lang = document.getElementById("lang_selector").value = lang;
    update_content();
}

function update_lang() {
    lang = document.getElementById("lang_selector").value;
    document.cookie = "lang=" + lang;
    update_content();
}

function update_selected_page(new_page) {
    selected_page = new_page;
    document.cookie = "selected_page=" + selected_page;
    update_content();
}
