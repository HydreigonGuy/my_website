

const travel_page_map = {
    "title":{
        "fr":"Voyages d'Adrien",
        "eng":"Adrien's Travels"
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


function formatTravelContents() {
    return `
    <div class="travel_page_body">
        <h2 class="travel_page_title">${travel_page_map["title"][lang]}</h2>
        <div class="travel_page_lang_btn_container">
            <button>FR</button> | <button>ENG</button>
        </div>
    </div>`
}


function updateContent() {
    document.getElementById("page_body").innerHTML = formatTravelContents();
}


window.onload = function () {
    updateContent();
}
