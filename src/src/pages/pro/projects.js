
import '../../assets/css/projects.css';

import ProjectInfo from '../../components/project_info';

function Projects() {
    return (
        <>
            <ProjectInfo
                title="Autone"
                info="Autone is a website and mobile application that generates music sheets from a given music."
                try_url="https://autone.app"
                />

            <ProjectInfo
                title="My Website"
                info="This is my website! A website made in REACT."
                try_url="https://adrien-thibault.de"
                code_url="https://github.com/HydreigonGuy/my_website"
                />

            <ProjectInfo
                title="My RPG"
                info="I made an RPG in C with the CSFML library!"
                code_url="https://github.com/HydreigonGuy/my_rpg"
                />
            
            <ProjectInfo
                title="My Malloc"
                info="I recoded malloc in C."
                code_url="https://github.com/HydreigonGuy/malloc"
                />

            <ProjectInfo
                title="Tekspice"
                info=""
                code_url="https://github.com/HydreigonGuy/tekspice"
                />
            
            <ProjectInfo
                title="Zappy"
                info="Zappy is a project in C of a game, not to be played by humans, but by an AI.
                There is a server which runs the game and a client that runs an AI that will play the game.
                The AI moves around and tries to collect ressources to multiply and level up.
                Multiple AIs can connect and the AI that reaches the highest level wins!"
                code_url="https://github.com/HydreigonGuy/zappy"
                />

            <ProjectInfo
                title="Glados"
                info="This is a project where as a group we created our own language and made a compiler and an interpreter for it."
                code_url="https://github.com/HydreigonGuy/glados"
                />

            <ProjectInfo
                title="My Defender"
                info="I made a tower defence game in C with the CSFML library!"
                code_url="https://github.com/HydreigonGuy/my_defender"
                />

        </>
    );
}

export default Projects;
