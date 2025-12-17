

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
        <a class="travel_url" href="/france">
            <p>${travel_page_map.france[lang]}</p>
            <img src="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/france/paris/IMG20240914202245.jpg"/>
        </a><a class="travel_url" href="/korea">
            <p>${travel_page_map.korea[lang]}</p>
            <img src="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/korea/seoul/IMG20231014142928.jpg" />
        </a><a class="travel_url" href="/china">
            <p>${travel_page_map.china[lang]}</p>
            <img src="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/china/shang-hai/IMG20240624200828.jpg" />
        </a><a class="travel_url" href="/japan">
            <p>${travel_page_map.japan[lang]}</p>
            <img src="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/japan/kyoto/IMG20240222094915.jpg" />
        </a><a class="travel_url" href="/uk">
            <p>${travel_page_map.uk[lang]}</p>
            <img src="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/uk/york/IMG20241113162256.jpg" />
        </a>
    </div>`
}


function updateContent() {
    document.getElementById("page_body").innerHTML = formatTravelContents();
}


window.onload = function () {
    updateContent();
}
