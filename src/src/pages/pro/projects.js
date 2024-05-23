
import '../../assets/css/projects.css';

import autone_img from '../../assets/images/pro/autone.png';
import my_web_img from '../../assets/images/pro/my_web.png';
import my_rpg_img from '../../assets/images/pro/my_rpg.png';

import bg_img from '../../assets/images/bg/IMG20240424133146.jpg';

import ProjectInfo from '../../components/project_info';

import { useSearchParams } from "react-router-dom";

function Projects() {
    var bg = {
        backgroundImage: `url(${bg_img})`
      };
    const text = {
        "Projects":{"eng":"Projects", "fr":"Projets"},
        "My Website":{"eng":"My Website", "fr":"Mon Site Web"},
        "Autone info":{
            "eng":"Autone is a website that generates sheet music for a given music.",
            "fr":"Autone est un site web qui génére une partition pour une musique donnée."},
        "my website info":{
            "eng":"This is my website.",
            "fr":"Ceci est mon site web."},
        "my rpg info":{
            "eng":"This is an RPG that I coded in C in my first year at Epitech using the CSFML library.",
            "fr":"Ceci est un RPG que j'ai codé en C durrant ma premiére année à Epitech en utilisant la librairie CSFML."},
        "malloc info":{
            "eng":"In my second year at Epitech, I recoded the malloc function in C.",
            "fr":"En deuxième année à Epitech, j'ai cecodé la fonction malloc en C."},
        "tekspice info":{
            "eng":"Tekspice is a second year Epitech project that makes us code virtual electronic circuits in C++. We can create circuits and the tekspice will tell us the results of the electric outputs.",
            "fr":"Tekspice est un projet de seconde année d'Epitech qui nous demande de recoder des circuits electroniques en C++. Nous pouvons créer des circuits et le tekspice nous donne les etats des sorties."},
        "my defender info":{
            "eng":"I coded a tower defence game in C with the CSFML library in my first year at Epitech.",
            "fr":"J'ai codé un jeu tower defence en C avec la librairie CSFML en premiére année à Epitech."},
        "my hunter info":{
            "eng":"This is the first game that I coded, it was a first year project at Epitech where we needed to code a duck hunt like game in C with the CSFML library.",
            "fr":"Ceci est le premier jeu que j'ai codé, c'etais un projet Epitech de premiére année qui nous demandais de recoder un duck hunt en C avec la librairie CSFML."},
        "my teams info":{
            "eng":"I coded a program that works similarly to microsoft teams in C in my second year of Epitech. It has a server and a client. The server runs hosts all the users, the messages, threads, and channels. The client can interract with the server to loggin, it can then create or view the threads, channels, and messages.",
            "fr":"J'ai codé un programme qui fonctionne similairement à microsoft teams en C en deuxieme année d'Epitech. Ceci contiens un serveur et un client."},
        "wolfram info":{
            "eng":"Wolfram is a project I coded in Haskell in my second year at Epitech. It is a program that generates paterns based on a given rule.",
            "fr":"Wolfram est un projet que j'ai codé en premiere année d'Epitech. C'est un program qui génére une serie en fonction de parametres données."},
        "glados info":{
            "eng":"Glados was a third year project at Epitech coded in Haskell. We needed to code an interpreter for the Lisp language and then create a compiler for our own programming language.",
            "fr":"Glados etais un projet de troisieme année d'Epitech codé en Haskell. Nous avons codé un interpretteur du language Lisp, puis nous avons codé un compilateur pour un language que nous avons nous meme inventé."},
        "zappy info":{
            "eng":"Zappy is a project in C of a game, not to be played by humans, but by an AI. There is a server which runs the game and a client that runs an AI that will play the game. The AI moves around and tries to collect ressources to multiply and level up. Multiple AIs can connect and the AI that reaches the highest level wins!",
            "fr":"Zappy est un Jeu codé en C, mais ce n'est pas un jeu joué par des humains, c'est joué par des IA. Il y a un serveurs qui tourne le jeu et des clients peuvent s'y connecter avec une IA qui joues au jeu. L'IA ce déplace, récupére des ressources et essay de ce multiplier et de monter en niveau. Plusieurs IA peuvent ce connecter au jeu et l'IA qui atteins le plus haut niveau gagne!"},
        "":{"eng":"", "fr":""},
    }
    let [searchParams, setSearchParams] = useSearchParams();
    var lang = searchParams.get("lang")

    if (!["eng", "fr"].includes(lang))
        lang = "eng"
    return (
        <div className='projects-page' style={bg}>
            <div className="projects-header">
                <h1 className='projects-title'>{text["Projects"][lang]}</h1>

                <div className='language-selector-container'>
                    <a className='language-selector' href='?lang=eng'>ENG</a>
                    <a className='language-selector' href='?lang=fr'>FR</a>
                </div>
            </div>
            <div className="projects-body">

            {/*
            <h3 className='projects-label'>Top Projects</h3>
            <div className='project-label-line'/>
            */}

            <div className='project-list'>
                <ProjectInfo
                    title="Autone"
                    info={text["Autone info"][lang]}
                    try_url="https://autone.app"
                    image={autone_img}
                    lang={lang}
                    />
            </div>

            <div className='project-list'>
                <ProjectInfo
                    title={text["My Website"][lang]}
                    info={text["my website info"][lang]}
                    try_url="https://adrien-thibault.de"
                    code_url="https://github.com/HydreigonGuy/my_website"
                    image={my_web_img}
                    lang={lang}
                    />
            </div>

            <div className='project-list'>
                <ProjectInfo
                    title="My RPG"
                    info={text["my rpg info"][lang]}
                    code_url="https://github.com/HydreigonGuy/my_rpg"
                    image={my_rpg_img}
                    lang={lang}
                    />
            </div>

            {/*
            <h3 className='projects-label'>School Projects</h3>
            <div className='project-label-line'/>
            */}
            
            <div className='project-list'>
                <ProjectInfo
                    title="Zappy"
                    info={text["zappy info"][lang]}
                    code_url="https://github.com/HydreigonGuy/zappy"
                    lang={lang}
                    />

                <ProjectInfo
                    title="My Malloc"
                    info={text["malloc info"][lang]}
                    code_url="https://github.com/HydreigonGuy/malloc"
                    lang={lang}
                    />
                
                <ProjectInfo
                    title="Tekspice"
                    info={text["tekspice info"][lang]}
                    code_url="https://github.com/HydreigonGuy/tekspice"
                    lang={lang}
                    />
            </div>

            <div className='project-list'>
                <ProjectInfo
                    title="Glados"
                    info={text["glados info"][lang]}
                    code_url="https://github.com/HydreigonGuy/glados"
                    lang={lang}
                    />
                
                <ProjectInfo
                    title="Wolfram"
                    info={text["wolfram info"][lang]}
                    code_url="https://github.com/HydreigonGuy/wolfram"
                    lang={lang}
                    />

                <ProjectInfo
                    title="My Teams"
                    info={text["my teams info"][lang]}
                    code_url="https://github.com/HydreigonGuy/my_teams"
                    lang={lang}
                    />
            </div>

            <div className='project-list'>
                <ProjectInfo
                    title="My Defender"
                    info={text["my defender info"][lang]}
                    code_url="https://github.com/HydreigonGuy/my_defender"
                    lang={lang}
                    />
                
                <ProjectInfo
                title="My Hunter"
                info={text["my hunter info"][lang]}
                code_url="https://github.com/HydreigonGuy/my_hunter"
                lang={lang}
                />
            </div>

            </div>

        </div>
    );
}

export default Projects;
