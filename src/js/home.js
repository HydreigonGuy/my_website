
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
        "travels":{
            "fr":"Voyages d'Adrien",
            "eng":"Adrien's Travels"
        },
        "cv":{
            "fr":"CV d'Adrien",
            "eng":"Adrien's CV"
        },
        "doc":{
            "fr":"Notes d'Adrien",
            "eng":"Adrien's Cheat Sheets"
        }
    },
    "travels":{
        "fr":"Voyages",
        "eng":"Travels"
    },
    "cv":{
        "fr":"CV",
        "eng":"CV"
    },
    "doc":{
        "fr":"Notes",
        "eng":"Cheat Sheets"
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
    "lyra_position":{
        "fr":"DevOps et Développeur Fullstack",
        "eng":"DevOps and Fullstack Developer"
    },
    "predicloud_position":{
        "fr":"DevOps et Développeur Fullstack et IA",
        "eng":"DevOps and Fullstack and AI Developer"
    },
    "torus_position":{
        "fr":"Développeur Fullstack",
        "eng":"Fullstack Developer"
    },
    "skills_title":{
        "fr":"Compétences",
        "eng":"Skills"
    },
    "diplomas_title":{
        "fr":"Diplômes",
        "eng":"Diplomas"
    },
    "diploma_epitech_title":{
        "fr":"Master en informatique obtenu à l'Epitech",
        "eng":"Master's degree in computer science from Epitech"
    },
    "diploma_bac_text":{
        "fr":"BAC S SVT spé. Maths obtenu en 2020 mention Très Bien au Lycée Français Victor Hugo de Francfort en Allemagne",
        "eng":"French highschool diploma, science option specialising in Maths with highest honour obtained in 2020 at the Lycée Français Victor Hugo in Frankfurt Germany."
    },
    "diploma_cambridge_text":{
        "fr":"Obtenu en 2019 grade A, niveau C2",
        "eng":"Obtained in 2019 grade A, level C2."
    },
    "projects_title":{
        "fr":"Projets",
        "eng":"Projects"
    },
    "autone_title":{
        "fr":"Autone",
        "eng":"Autone"
    },
    "autone_text":{
        "fr":"Autone est un site web qui utilise une IA pour générer une partition à partir d'une musique que l'on lui présente.",
        "eng":"Autone is a website that uses AI to generate sheet music for any given music."
    },
    "my_website_title":{
        "fr":"Mon Site Web",
        "eng":"My Website"
    },
    "my_website_text":{
        "fr":"Ici c'est mon site web, un projet ou je présente mes voyages et où je m'améliore en developpement frontend.",
        "eng":"This is my website, a project to show off my travels and improve my abilities in frontend developping."
    }
}

const doc_page_map = {
    "korean_title":{
        "fr":"Coréen",
        "eng":"Korean"
    }
}

const selected_page_class_map = {
    "header_url":{
        "travels":"travels_header_urls",
        "cv":"cv_header_urls"
    },
    "footer_link":{
        "travels":"travels_footer_link",
        "cv":"cv_footer_link"
    }
}

function getHeaderContents() {
    formated = '<div class="header_subcontainer">\
            <h2 class="header_title">' + header_map.title[selected_page][lang] + '</h2>'
    if (selected_page != 'travels')
        formated += '<button class="header_urls ' + selected_page_class_map.header_url[selected_page] + '" href="" onclick="update_selected_page(\'travels\')">' + header_map.travels[lang] + '</button>'
    if (selected_page != 'cv')
        formated += '<button class="header_urls ' + selected_page_class_map.header_url[selected_page] + '" href="" onclick="update_selected_page(\'cv\')">' + header_map.cv[lang] + '</button>'
    if (selected_page != 'doc')
        formated += '<button class="header_urls ' + selected_page_class_map.header_url[selected_page] + '" href="" onclick="update_selected_page(\'doc\')">' + header_map.doc[lang] + '</button>'
    formated += '</div>';
    return formated
}

function getFooterContents() {
    return '<div class="footer_subcontainer">\
            <p class="footer_title">' + footer_map.links[lang] + '</p>\
            <a class="footer_link ' + selected_page_class_map.footer_link[selected_page] + '" href="https://www.instagram.com/hydreigon_chad?igsh=MWxxcjM0cjZ0YnM2Nw==" target="_blank">Instagram</a>\
            <a class="footer_link ' + selected_page_class_map.footer_link[selected_page] + '" href="https://github.com/HydreigonGuy" target="_blank">Gitlab</a>\
            <a class="footer_link ' + selected_page_class_map.footer_link[selected_page] + '" href="https://www.linkedin.com/in/adrien-thibault/" target="_blank">Linkedin</a>\
        </div>'
}

function getTravelPage() {
    return '<!--h3 class="content_title">' + travel_page_map.title[lang] + '</h3-->\
        <a class="travel_url" href="/france">\
            <p>' + travel_page_map.france[lang] + '</p>\
            <img src="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/france/paris/IMG20240914202245.jpg"/>\
        </a><a class="travel_url" href="/korea">\
            <p>' + travel_page_map.korea[lang] + '</p>\
            <img src="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/korea/seoul/IMG20231014142928.jpg" />\
        </a><a class="travel_url" href="/china">\
            <p>' + travel_page_map.china[lang] + '</p>\
            <img src="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/china/shang-hai/IMG20240624200828.jpg" />\
        </a><a class="travel_url" href="/japan">\
            <p>' + travel_page_map.japan[lang] + '</p>\
            <img src="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/japan/kyoto/IMG20240222094915.jpg" />\
        </a><a class="travel_url" href="/uk">\
            <p>' + travel_page_map.uk[lang] + '</p>\
            <img src="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/uk/york/IMG20241113162256.jpg" />\
        </a>'
}

function getCVPage() {
    return '<div class="cv_content">\
            <img class="cv_img" src="/img/me.jpg" /><div class="cv_right_of_img">\
                <div>\
                    <h3 class="cv_name">Adrien THIBAULT</h3>\
                    <h5 class="cv_position">' + cv_page_map.position[lang] + '</h5>\
                </div><br/>\
                <div class="cv_diplomas_container">\
                    <h3>' + cv_page_map.diplomas_title[lang] + '</h3>\
                    <h4>' + cv_page_map.diploma_epitech_title[lang] + '</h4>\
                    <h4>Baccalauréat <button id="bac_diploma_toggle_btn" onclick="toggle_diploma_text_visibility(\'bac\')" class="cv_diplome_toggle_btn">+</button></h4>\
                    <p id="bac_diploma_text" class="invisible">' + cv_page_map.diploma_bac_text[lang] + '</p>\
                    <h4>Cambridge Certificate in Advanced English  <button id="cambridge_diploma_toggle_btn" onclick="toggle_diploma_text_visibility(\'cambridge\')" class="cv_diplome_toggle_btn">+</button></h4>\
                    <p id="cambridge_diploma_text" class="invisible">' + cv_page_map.diploma_cambridge_text[lang] + '</p>\
                </div><div class="cv_skills_container">\
                    <h4>' + cv_page_map.skills_title[lang] +  '</h4>\
                    <p>DevOps - Docker, Kubernetes, Jenkins, Ansible, Openshift</p>\
                    <p>Python, Javascript / Typescript, C, C++, Rust, Haskell, Shellscript</p>\
                </div>\
            </div>\
            <div>\
                <h4 class="cv_exp_title">' + cv_page_map.exp_title[lang] + '</h4>\
                <div class="cv_exp_company_container">\
                    <img src="https://www.lyra.com/in/wp-content/uploads/sites/8/2020/01/Lyra-Network-Introduces-NAC-GPRS-SIM-Solution-for-Last-Mile-Connectivity.png" />\
                    <h4>Lyra</h4>\
                    <p>03/2025 - 08/2025</p>\
                    <p>' + cv_page_map.lyra_position[lang] + '</p>\
                </div><div class="cv_exp_company_container">\
                    <img src="https://media.licdn.com/dms/image/C4D0BAQGx5zk_JxQcsg/company-logo_200_200/0/1639936754642/predicloud_logo?e=2147483647&v=beta&t=djy3qu4zFoViKIYOrxhRqgfOZTUhTG7JT9F2YWv3nVg" />\
                    <h4>Predicloud</h4>\
                    <p>10/22 - 8/23</p>\
                    <p>' + cv_page_map.predicloud_position[lang] + '</p>\
                </div><div class="cv_exp_company_container">\
                    <img src="https://www.torus.ai/wp-content/uploads/2023/05/logo-torus.png" />\
                    <h4>Torus Actions</h4>\
                    <p>07/21 - 12/21</p>\
                    <p>' + cv_page_map.torus_position[lang] + '</p>\
                </div>\
            </div>\
            <div>\
                <h4 class="cv_projects_title">' + cv_page_map.projects_title[lang] + '</h4>\
                <div class="cv_project_container">\
                    <b>' + cv_page_map.autone_title[lang] + '</b>\
                    <p>' + cv_page_map.autone_text[lang] + '</p>\
                </div><div class="cv_project_container">\
                    <b>' + cv_page_map.my_website_title[lang] + '</b>\
                    <p>' + cv_page_map.my_website_text[lang] + '</p>\
                </div>\
            </div>\
        </div>'
}

function getDocPage() {
    return '<h3>DevOps</h3>\
        <a class="doc_url">Docker</a>\
        <a class="doc_url">Traefik</a>\
        <a class="doc_url">Prometheus</a>\
        <a class="doc_url">Certbot</a>\
        <a class="doc_url">DB admin</a>\
        <h3>' + doc_page_map.korean_title[lang] + '</h3>\
        '
}

function update_content() {
    document.getElementById("header_container").innerHTML = getHeaderContents();
    document.getElementById("footer_container").innerHTML = getFooterContents();
    if (["travels", "cv", "doc"].includes(selected_page)) {
        if (selected_page == "travels") {
            document.getElementById("page_body").className = "header_container travels_body";
            document.getElementById("header_container").className = "travels_header";
            document.getElementById("lang_selector").className = "language_selector travels_language_selector";
            document.getElementById("footer_container").className = "footer_container travels_footer_container";
            document.getElementById("content_container").className = "content_container travels_content_container";
            document.getElementById("content_container").innerHTML = getTravelPage();
        }
        if (selected_page == "cv") {
            document.getElementById("page_body").className = "header_container cv_body";
            document.getElementById("header_container").className = "cv_header";
            document.getElementById("lang_selector").className = "language_selector cv_language_selector";
            document.getElementById("footer_container").className = "footer_container cv_footer_container";
            document.getElementById("content_container").className = "content_container cv_content_container";
            document.getElementById("content_container").innerHTML = getCVPage();
        }
        if (selected_page == "doc") {
            document.getElementById("page_body").className = "header_container doc_body";
            document.getElementById("header_container").className = "";
            document.getElementById("lang_selector").className = "language_selector";
            document.getElementById("footer_container").className = "footer_container";
            document.getElementById("content_container").className = "content_container";
            document.getElementById("content_container").innerHTML = getDocPage();
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

function toggle_diploma_text_visibility(name) {
    if (document.getElementById(name + "_diploma_text").className == "invisible") {
        document.getElementById(name + "_diploma_toggle_btn").innerHTML = "-";
        document.getElementById(name + "_diploma_text").className = "";
    } else {
        document.getElementById(name + "_diploma_toggle_btn").innerHTML = "+";
        document.getElementById(name + "_diploma_text").className = "invisible";
    }
}
