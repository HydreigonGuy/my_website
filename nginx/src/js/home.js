
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
    },
    "exp_title":{
        "fr":"Expérience Professionelle",
        "eng":"Professional Experience"
    },
    "diplomas_title":{
        "fr":"Diplômes",
        "eng":"Diplomas"
    },
    "projects_title":{
        "fr":"Projets",
        "eng":"Projects"
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
    return '<h3 class="content_title">' + travel_page_map.title[lang] + '</h3>\
        <a class="travel_url" href="/france">\
            <img src="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/france/paris/IMG20240914202245.jpg"/>\
            ' + travel_page_map.france[lang] + '\
        </a>\
        <a class="travel_url" href="/korea">\
            <img src="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/korea/seoul/IMG20231014142928.jpg" />\
            ' + travel_page_map.korea[lang] + '\
        </a>\
        <a class="travel_url" href="/china">\
            <img src="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/china/shang-hai/IMG20240624200828.jpg" />\
            ' + travel_page_map.china[lang] + '\
        </a>\
        <a class="travel_url" href="/japan">\
            <img src="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/japan/kyoto/IMG20240222094915.jpg" />\
            ' + travel_page_map.japan[lang] + '\
        </a>\
        <a class="travel_url" href="/uk">\
            <img src="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/uk/york/IMG20241113162256.jpg" />\
            ' + travel_page_map.uk[lang] + '\
        </a>'
}

function getCVPage() {
    return '<div class="cv_content">\
            <h3>Adrien THIBAULT</h3>\
            <h5>' + cv_page_map.position[lang] + '</h5>\
            <div>\
                <h4>' + cv_page_map.exp_title[lang] + '</h4>\
            </div>\
            <div>\
                <h4>' + cv_page_map.diplomas_title[lang] + '</h4>\
            </div>\
            <div>\
                <h4>' + cv_page_map.projects_title[lang] + '</h4>\
            </div>\
        </div>'
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
