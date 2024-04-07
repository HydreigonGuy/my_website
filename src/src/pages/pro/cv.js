
import picture_of_me from '../../assets/images/me.png';
import '../../assets/css/cv.css';

import background_img from '../../assets/images/korea/daegu/IMG20240407143533.jpg';
import background_img_small from '../../assets/images/korea/daegu/small/IMG20240407143533.jpg';

import ProgressiveImg from '../../components/image_loading';

import { useSearchParams } from "react-router-dom";

function CV() {
    const text = {
        "Skills":{"eng":"Skills", "fr":"Compétences"},
        "Programming Languages":{"eng":"Programming Languages", "fr":"Languages Informatiques"},
        "Misc Tech Skills":{"eng":"Misc Tech Skills", "fr":"Compétences Informatiques Diverses"},
        "OS skill":{"eng":"Linux and OS handelling", "fr":"Linux et gestions d'OS"},
        "SSL skill":{"eng":"SSL certificate generation and handelling", "fr":"Gestion et génération de certificats SSL"},
        "DNS skill":{"eng":"DNS routing and handelling", "fr":"Routing et gestion DNS"},
        "Profetionnal Experience":{"eng":"Profetionnal Experiences", "fr":"Expériences Profetionelles"},
        "Torus text":{
            "eng":"Internship as a fullstack web developper. Part time job as a fullstack web developper.",
            "fr":"Stage en tant que développeur web full stack. Travail a temps partiel en tant que développeur web full stack."},
        "Predicloud text":{
            "eng":"Part time internship as a DevOps developper and a web and mobile fullstack developper. Internship as a DevOps developper and an AI developper.",
            "fr":"Stage en temps partiel en tant que développeur DevOps ainsi que développeur web et mobile full stack. Stage en tant que développeur DevOps ainsi que développeur IA."},
        "Diplomas":{"eng":"Diplomas", "fr":"Diplômes"},
        "Info Bac":{
            "eng":"S SVT spé. Maths obtained in 2020 mention Très Bien at the Lycée Français Victor Hugo in Frankfurt Germany. The Baccalauréat is the diploma obtained at the end of HighSchool in France.",
            "fr":"S SVT spé. Maths obtenu en 2020 mention Très Bien au Lycée Français Victor Hugo de Francfort en Allemagne"},
        "Info Cambridge":{
            "eng":"Obtained in 2019 grade A, level C2.",
            "fr":"Obtenu en 2019 grade A, niveau C2"},
        "Projects":{"eng":"Projects", "fr":"Projets"},
        "See more":{"eng":"See more", "fr":"Voire plus"},
        "Languages":{"eng":"Language Skills", "fr":"Compétences Languistiques"},
        "Developper":{"eng":"Developper", "fr":"Développeur"},
        "Student":{"eng":"4th year Student at EPITECH", "fr":"Étudiant en 3ème année à EPITECH"},
        "French":{"eng":"French", "fr":"Français"},
        "English":{"eng":"English", "fr":"Anglais"},
        "Korean":{"eng":"Korean", "fr":"Coréen"},
        "German":{"eng":"German", "fr":"Allemand"},
        "language fluent":{"eng":"C2 - Proficient", "fr":"C2 - Maitrise parfaite"},
        "language basic":{"eng":"Basic comunication", "fr":"Comunications basiques"},
    }
    let [searchParams, setSearchParams] = useSearchParams();
    var lang = searchParams.get("lang")

    if (!["eng", "fr"].includes(lang))
        lang = "eng"
    return (
        <>
            {/* Row 1 with picture of me and Title */}
            <div className='row'>
                <div className='content third-width'>
                    <ProgressiveImg src={background_img} placeholderSrc={background_img_small} className='picture-background-img'/>
                    <img src={picture_of_me} className='picture' />
                </div>
                <div className='content two-thirds-width lift-text'>
                    <h1>Adrien THIBAULT</h1>

                    <h3>{text["Developper"][lang]}</h3>
                    <h3>{text["Student"][lang]}</h3>
                </div>
                <div className='language-selector-container'>
                    <a className='language-selector' href='?lang=eng'>ENG</a>
                    <a className='language-selector' href='?lang=fr'>FR</a>
                </div>
            </div>

            {/* Row 2 with Profetional experience and Diplomas */}
            <div className='row'>
                <div className='center-text two-thirds-width'>
                    <h2>{["Profetionnal Experience"]}</h2>
                    <div className='content company-content'>
                        <a className='company-url' href="https://www.torus.ai/" target='_blank'>
                            <img className='company-img' src="https://www.torus.ai/wp-content/uploads/2023/05/logo-torus.png"/>
                            <h5>Torus Actions</h5>
                        </a>

                        {text["Torus text"][lang]}
                    </div>
                    <div className='content company-content'>
                        <a className='company-url' href="https://www.predicloud.com/" target='_blank'>
                            <img className='company-img' src="https://media.licdn.com/dms/image/C4D0BAQGx5zk_JxQcsg/company-logo_200_200/0/1639936754642/predicloud_logo?e=2147483647&v=beta&t=djy3qu4zFoViKIYOrxhRqgfOZTUhTG7JT9F2YWv3nVg"/>
                            <h5>Predicloud</h5>
                        </a>

                        {text["Predicloud text"][lang]}
                    </div>
                </div>

                <div className='center-text third-width'>
                    <h2>{text["Diplomas"][lang]}</h2>
                    <div className='content diploma-content'>
                        <h5>Baccalauréat</h5>

                        {text["Info Bac"][lang]}
                    </div>

                    <div className='content diploma-content'>
                        <h5>Cambridge Certificate in Advanced English</h5>

                        {text["Info Cambridge"][lang]}
                    </div>
                </div>
            </div>

            {/* Row 3 with Skills */}
            <div className='row center-text'>
                <h2>{text["Skills"][lang]}</h2>

                <div className='content skills-content'>
                    <h5>{text["Programming Languages"][lang]}</h5>

                    <p>C</p>
                    <p>C++</p>
                    <p>Python</p>
                    <p>Javascript</p>
                    <p>Haskell</p>
                    <p>HTML + CSS</p>
                </div>
                
                <div className='content skills-content'>
                    <h5>DevOps</h5>

                    <p>Docker + Docker-Compose</p>
                    <p>Kubernetes</p>
                    <p>Github Actions</p>
                    <p>Traefik</p>
                    <p>Prometheus + Grafana + Loki</p>
                </div>

                <div  className='content skills-content'>
                    <h5>Databases</h5>

                    <p>Postgres</p>
                    <p>MongoDB</p>
                </div>

                <div  className='content skills-content'>
                    <h5>{text["Misc Tech Skills"][lang]}</h5>

                    <p>{text["OS skill"][lang]}</p>
                    <p>{text["SSL skill"][lang]}</p>
                    <p>{text["DNS skill"][lang]}</p>
                    <p>Git + Github Actions</p>
                    <p>Unity</p>
                </div>

                <div  className='content skills-content'>
                    <h5>{text["Languages"][lang]}</h5>

                    <p>{text["French"][lang]} - {text["language fluent"][lang]}</p>
                    <p>{text["English"][lang]} - {text["language fluent"][lang]}</p>
                    <p>{text["Korean"][lang]} - {text["language basic"][lang]}</p>
                    <p>{text["German"][lang]} - {text["language basic"][lang]}</p>
                </div>
            </div>



            <div>
                <h2>{text["Projects"][lang]}</h2>

                <a href="/projects">{text["See more"][lang]}</a>
            </div>

            <div className='row'>
                <div className='content about-me-content'>
                    <h2>About me</h2>

                    <p>
                        I'm a traveller, I've lived in many different countries.
                        Living in different countries has made me a big fan of travelling, but also made in interrested in history of different countries.
                        I like all kinds of physical activity.
                    </p>
                </div>
                <div className='content about-me-content'>
                    <h2>Countries I lived in</h2>

                    <p>China : 2007 - 2009 (2 years)</p>
                    <p>USA : 2010 - 2015 (5 years)</p>
                    <p>Germany : 2016 - 2020 (4 years)</p>
                    <p>Korea : 2023 - 2024 (1 year)</p>
                    <p>France : the rest</p>
                </div>
                <div className='content about-me-content'>
                    <h2>Hobbies</h2>

                    <p>Travelling</p>
                    <p>Gym</p>
                    <p>Hiking</p>
                </div>
            </div>

            <div className='row center-text'>
                <h2>Contact Me!</h2>

                <div className='content contact-content'>
                    <h5>EMAIL</h5>
                    <p>adrien.thibault@epitech.eu</p>
                </div>
                <div className='content contact-content'>
                    <h5>PHONE</h5>
                    {/* French number - reenable when returning to France <p>+33 7 69 29 66 24</p>*/}
                    <p>SK - +82 10 44 29 86 21</p>
                </div>

            </div>
        </>
    );
}

export default CV;
