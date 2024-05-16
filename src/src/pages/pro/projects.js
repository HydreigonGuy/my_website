
import '../../assets/css/projects.css';

import autone_img from '../../assets/images/pro/autone.png';
import my_web_img from '../../assets/images/pro/my_web.png';
import my_rpg_img from '../../assets/images/pro/my_rpg.png';

import ProjectInfo from '../../components/project_info';

import { useSearchParams } from "react-router-dom";

function Projects() {
    const text = {
        "Projects":{"eng":"Projects", "fr":"Projets"},
        "My Website":{"eng":"My Website", "fr":"Mon Site Web"},
        "":{"eng":"", "fr":""},
    }
    let [searchParams, setSearchParams] = useSearchParams();
    var lang = searchParams.get("lang")

    if (!["eng", "fr"].includes(lang))
        lang = "eng"
    return (
        <>
            <div className="projects-header">
                <h1>{text["Projects"][lang]}</h1>

                <div className='language-selector-container'>
                    <a className='language-selector' href='?lang=eng'>ENG</a>
                    <a className='language-selector' href='?lang=fr'>FR</a>
                </div>
            </div>
            <div className="prijects-body">
            <ProjectInfo
                title="Autone"
                info="Autone is a website and mobile application that generates music sheets from a given music."
                try_url="https://autone.app"
                image={autone_img}
                lang={lang}
                />

            <ProjectInfo
                title={text["My Website"][lang]}
                info="This is my website! A website made in REACT."
                try_url="https://adrien-thibault.de"
                code_url="https://github.com/HydreigonGuy/my_website"
                image={my_web_img}
                lang={lang}
                />

            <ProjectInfo
                title="My RPG"
                info="I made an RPG in C with the CSFML library!"
                code_url="https://github.com/HydreigonGuy/my_rpg"
                image={my_rpg_img}
                lang={lang}
                />
            
            <ProjectInfo
                title="My Malloc"
                info="I recoded malloc in C."
                code_url="https://github.com/HydreigonGuy/malloc"
                lang={lang}
                />

            <ProjectInfo
                title="Tekspice"
                info=""
                code_url="https://github.com/HydreigonGuy/tekspice"
                lang={lang}
                />
            
            <ProjectInfo
                title="Zappy"
                info="Zappy is a project in C of a game, not to be played by humans, but by an AI.
                There is a server which runs the game and a client that runs an AI that will play the game.
                The AI moves around and tries to collect ressources to multiply and level up.
                Multiple AIs can connect and the AI that reaches the highest level wins!"
                code_url="https://github.com/HydreigonGuy/zappy"
                lang={lang}
                />

            <ProjectInfo
                title="Glados"
                info="This is a project where as a group we created our own language and made a compiler and an interpreter for it."
                code_url="https://github.com/HydreigonGuy/glados"
                lang={lang}
                />

            <ProjectInfo
                title="My Defender"
                info="I made a tower defence game in C with the CSFML library!"
                code_url="https://github.com/HydreigonGuy/my_defender"
                lang={lang}
                />
            </div>

        </>
    );
}

export default Projects;
