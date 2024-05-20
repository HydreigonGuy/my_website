
import picture_of_me from '../../assets/images/pro/me.png';
import '../../assets/css/cv.css';

import background_img from '../../assets/images/korea/daegu/IMG20240407143458.jpg';

import waterfall_background_img from '../../assets/images/korea/sejong/IMG20230915143919.jpg';
import sankeien_background_img from '../../assets/images/japan/yokohama/IMG20240220130536.jpg';

import ProgressiveImg from '../../components/image_loading';

import { useSearchParams } from "react-router-dom";

function CV() {
    var flower_bg = {
        backgroundImage: `url(${background_img})`
      };
    var waterfall_bg = {
        backgroundImage: `url(${waterfall_background_img})`
      };
    var sankeien_bg = {
        backgroundImage: `url(${sankeien_background_img})`
      };

    const text = {
        "Skills":{"eng":"Skills", "fr":"Compétences"},
        "Programming Languages":{"eng":"Programming Languages", "fr":"Languages Informatiques"},
        "Misc Tech Skills":{"eng":"Misc Tech Skills", "fr":"Compétences Informatiques Diverses"},
        "OS skill":{"eng":"Linux and OS handling", "fr":"Linux et gestions d'OS"},
        "SSL skill":{"eng":"SSL certificate generation and handling", "fr":"Gestion et génération de certificats SSL"},
        "DNS skill":{"eng":"DNS routing and handling", "fr":"Routing et gestion DNS"},
        "Profetionnal Experience":{"eng":"Professional Experience", "fr":"Expérience Profetionelle"},
        "Torus time":{"eng":"6 month internship + 7 month part time job", "fr":"Stage de 6 mois + CDD temps partiel de 7 mois"},
        "Torus job":{"eng":"fullstack web developper.", "fr":"développeur web full stack"},
        "Torus description":{
            "eng":"Torus is a medical AI company that creates tools to find diseases using AI. I worked on many different projects including tools to create datasets for training the AIs and the websites to use them.",
            "fr":"Torus est une entreprise d'IA dans le secteur médical. Torus crée des outils qui utilisent l'IA pour détecter des maladies. Chez Torus, j'ai travaillé sur de nombreux projets dont des outils pour générer des datasets pour entrainer les IA ainsi que les outils pour utiliser ces IA."
        },
        "Predicloud time":{"eng":"6 month part time internship + 4 month full time internship ", "fr":"Stage a temp partiel de 6 mois + Stage de 4 mois temps plein"},
        "Predicloud job":{"eng":"DevOps developper, AI developper, Web + Mobile fullstack developper", "fr":"Développeur DevOps, développeur IA, développeur Web + Mobile fullstack"},
        "Predicloud text":{
            "eng":"Predicloud is a company that offers to host services for commpanies and monitor them. They also help companies in their projects in many different fields. Here, I worked on a lot of DevOps for the company as well as helped make websites and mobile applications for clients and even worked on an AI.",
            "fr":"Predicloud est une entreprise qui déploie les services de nos clients sur son cluster kubernetes et les moniteurs. Predicloud propose aussi de l'aide pour les projets techniques dans de domaines divers. Ici, j'ai travillé sur des sites webs et des applications mobiles pour des clients ainsi qu'une IA."},
        "Diplomas":{"eng":"Diplomas", "fr":"Diplômes"},
        "Info Bac":{
            "eng":"S SVT spé. Maths obtained in 2020 mention Très Bien at the Lycée Français Victor Hugo in Frankfurt Germany.",
            "fr":"S SVT spé. Maths obtenu en 2020 mention Très Bien au Lycée Français Victor Hugo de Francfort en Allemagne"},
        "Info Cambridge":{
            "eng":"Obtained in 2019 grade A, level C2.",
            "fr":"Obtenu en 2019 grade A, niveau C2"},
        "Projects":{"eng":"Projects", "fr":"Projets"},
        "See more":{"eng":"See more", "fr":"Voire plus"},
        "Languages":{"eng":"Language Skills", "fr":"Compétences Languistiques"},
        "Developper":{"eng":"Developper", "fr":"Développeur"},
        "Student":{"eng":"4th year Student at EPITECH", "fr":"Étudiant en 4ème année à EPITECH"},
        "French":{"eng":"French", "fr":"Français"},
        "English":{"eng":"English", "fr":"Anglais"},
        "Korean":{"eng":"Korean", "fr":"Coréen"},
        "German":{"eng":"German", "fr":"Allemand"},
        "language fluent":{"eng":"C2 - Proficient", "fr":"C2 - Maitrise parfaite"},
        "language basic":{"eng":"Basic comunication", "fr":"Débutant"},
        "Contact Me!":{"eng":"Contact Me!", "fr":"Contactez Moi!"},
        "PHONE":{"eng":"PHONE", "fr":"TELEPHONE"},
        "Autone project info":{
            "eng":"Autone is a school project spanding over 3 years in a group of 7 students. The task was to create a company from the ground up, find a problem and establish a solution with our technical knowledge. We chose to create a website and mobile application that can record an audio and generate a partition for it. This is done with the use of AI.",
            "fr":"Autone est un projet scholaire durrant 3 fait dans un groupe de 7 étudiants qui a pour but de créer une entreprise."},
        "My Website":{"eng":"My Website", "fr":"Mon Site Web"},
        "My Website project info":{
            "eng":"This webpage is a part of my website. My website is by far my biggest personnal project, I have been working on it for months and still regularly add to it. I originally made it to share pictures of my travels with friends and to practice web development.",
            "fr":"Ceci est mon site web."},
        "About me":{"eng":"About me", "fr":"À propos de moi"},
        "About me text":{
            "eng":"I'm a traveller, I've lived in many different countries. Living in different countries has made me a big fan of travelling, but also made in interrested in history of different countries. I like all kinds of physical activity.",
            "fr":"Je suis un voyageur, et j'aime le sport."},
        "Hobbies":{"eng":"Hobbies", "fr":"Hobbies"},
        "Travelling":{"eng":"Travelling", "fr":"Voyager"},
        "Gym":{"eng":"Gym", "fr":"Gym"},
        "Hiking":{"eng":"Hiking", "fr":"Rendonées"},
    }
    let [searchParams, setSearchParams] = useSearchParams();
    var lang = searchParams.get("lang")

    if (!["eng", "fr"].includes(lang))
        lang = "eng"
    return (
        <>
            {/* Row 1 with picture of me and Title */}
            <div className='row grey-row'>
                <div className='content top-pic-width' style={flower_bg}>
                    <img src={picture_of_me} className='picture' />
                </div>
                <div className='content lift-text title-text'>
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
            <div className='row row-2 image-bg-row' style={waterfall_bg}>
                <div className='center-text two-thirds-width black-background-cover'>
                    <h2>{text["Profetionnal Experience"][lang]}</h2>
                    <div className='content company-content'>
                        <a className='company-url' href="https://www.torus.ai/" target='_blank'>
                            <img className='company-img' src="https://www.torus.ai/wp-content/uploads/2023/05/logo-torus.png"/>
                            <h5>Torus Actions</h5>
                        </a>

                        <p className='internship-durration-text'>{text["Torus time"][lang]}</p>
                        <p className='internship-job-description-text'>{text["Torus job"][lang]}</p>
                        <p className='job-description'>{text["Torus description"][lang]}</p>
                        {/*
                            <a>{text["See more"][lang]}</a>
                        */}
                    </div>
                    <div className='content company-content'>
                        <a className='company-url' href="https://www.predicloud.com/" target='_blank'>
                            <img className='company-img' src="https://media.licdn.com/dms/image/C4D0BAQGx5zk_JxQcsg/company-logo_200_200/0/1639936754642/predicloud_logo?e=2147483647&v=beta&t=djy3qu4zFoViKIYOrxhRqgfOZTUhTG7JT9F2YWv3nVg"/>
                            <h5>Predicloud</h5>
                        </a>

                        <p className='internship-durration-text'>{text["Predicloud time"][lang]}</p>
                        <p className='internship-job-description-text'>{text["Predicloud job"][lang]}</p>
                        <p className='job-description'>{text["Predicloud text"][lang]}</p>
                        {/*
                            <a>{text["See more"][lang]}</a>
                        */}
                    </div>
                </div>

                <div className='center-text third-width black-background-cover diplomas-hidden-row'>
                    <h2>{text["Diplomas"][lang]}</h2>
                    <div className='content diploma-content'>
                        <h5>Baccalauréat</h5>

                        <p className='diploma-content-description'>{text["Info Bac"][lang]}</p>
                    </div>

                    <div className='content diploma-content'>
                        <h5>Cambridge Certificate in Advanced English</h5>

                        <p className='diploma-content-description'>{text["Info Cambridge"][lang]}</p>
                    </div>
                </div>
            </div>

            {/* Row 3 with Skills */}
            <div className='row center-text grey-row'>
                <h2>{text["Skills"][lang]}</h2>

                <div className='content skills-content'>
                    <h5>{text["Programming Languages"][lang]}</h5>

                    <p className='skill'>C</p>
                    <p className='skill'>C++</p>
                    <p className='skill'>Python</p>
                    <p className='skill'>Javascript</p>
                    <p className='skill'>Haskell</p>
                    <p className='skill'>HTML + CSS</p>
                </div>
                
                <div className='content skills-content'>
                    <h5>DevOps</h5>

                    <p className='skill'>Docker + Docker-Compose</p>
                    <p className='skill'>Kubernetes</p>
                    <p className='skill'>Github Actions</p>
                    <p className='skill'>Traefik</p>
                    <p className='skill'>Prometheus + Grafana + Loki</p>
                </div>

                <div  className='content skills-content skills-hide-when-small'>
                    <h5>Databases</h5>

                    <p className='skill'>Postgres</p>
                    <p className='skill'>MongoDB</p>
                </div>

                <div  className='content skills-content'>
                    <h5>{text["Misc Tech Skills"][lang]}</h5>

                    <p className='skill'>{text["OS skill"][lang]}</p>
                    <p className='skill'>{text["SSL skill"][lang]}</p>
                    <p className='skill'>{text["DNS skill"][lang]}</p>
                    <p className='skill'>Git + Github Actions</p>
                    <p className='skill'>Unity</p>
                </div>

                <div  className='content skills-content'>
                    <h5>{text["Languages"][lang]}</h5>

                    <p className='skill'>{text["French"][lang]} - {text["language fluent"][lang]}</p>
                    <p className='skill'>{text["English"][lang]} - {text["language fluent"][lang]}</p>
                    <p className='skill'>{text["Korean"][lang]} - {text["language basic"][lang]}</p>
                    <p className='skill'>{text["German"][lang]} - {text["language basic"][lang]}</p>
                </div>
            </div>

            {/* Projects row */}
            <div className='row center-text image-bg-row' style={sankeien_bg}>
                <div className='content black-background-cover center-text'>
                    <h2>{text["Projects"][lang]}</h2>
                    <div className='content projects-content'>
                        <h4>Autone</h4>
                        <p className='project-description-text'>{text["Autone project info"][lang]}</p>
                    </div>
                    <div className='content projects-content center-text'>
                        <h4>{text["My Website"][lang]}</h4>
                        <p className='project-description-text'>{text["My Website project info"][lang]}</p>
                    </div>
                    <br/>
                    <a href="/projects">{text["See more"][lang]}</a>
                </div>
            </div>

            {/* Row About me */}
            {/*<div className='row green-row'>
                <div className='content about-me-content'>
                    <h2>{text["About me"][lang]}</h2>

                    <p>
                        {text["About me text"][lang]}
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
                    <h2>{text["Hobbies"][lang]}</h2>

                    <p>{text["Travelling"][lang]}</p>
                    <p>{text["Gym"][lang]}</p>
                    <p>{text["Hiking"][lang]}</p>
                </div>
            </div>*/}

            {/* Row for contact info */}
            <div className='row center-text dark-green-row'>
                <h2>{text["Contact Me!"][lang]}</h2>

                <div className='content contact-content'>
                    <h5>EMAIL</h5>
                    <p>adrien.thibault@epitech.eu</p>
                </div>
                <div className='content contact-content'>
                    <h5>{text["PHONE"][lang]}</h5>
                    {/* French number - reenable when returning to France <p>+33 7 69 29 66 24</p>*/}
                    <p>SK - +82 10 44 29 86 21</p>
                </div>

            </div>
        </>
    );
}

export default CV;
