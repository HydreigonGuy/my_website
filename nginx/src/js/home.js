
var selected_page = "home";

var lang = "eng";

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

function getTravelPage() {
    return '<h3>' + travel_page_map.title[lang] + '</h3>\
        <a href="/france">' + travel_page_map.france[lang] + '</a>\
        <a href="/korea">' + travel_page_map.korea[lang] + '</a>\
        <a href="/china">' + travel_page_map.china[lang] + '</a>\
        <a href="/japan">' + travel_page_map.japan[lang] + '</a>\
        <a href="/uk">' + travel_page_map.uk[lang] + '</a>'
}

window.onload = function () {
    document.getElementById("content_container").innerHTML = getTravelPage();
}
