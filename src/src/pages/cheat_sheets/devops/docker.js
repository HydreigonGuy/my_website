
import '../../../assets/css/devops.css';

function devops_docker() {
    return (
        <div className='devops_cheatsheet_body'>
            <h1>DevOps - Docker</h1>
            <p>
                Docker is a tool to create, handle and run containers.
            </p>
            <h3>Docker Compose</h3>
            <p>
                Docker Compose is a tool to help easily handle docker images.
            </p>
            <p>
                To build the image:
            </p>
            <p className='bash_code'>
                sudo docker-compose build
            </p>
            <p>
                To run the image:
            </p>
            <p className='bash_code'>
                sudo docker-compose up
            </p>
            <p>
                To run the image while rebuilding the image (to update the files / dependencies):
            </p>
            <p className='bash_code'>
                sudo docker-compose up --build
            </p>
            <p>
                Docker Compose is controlled by the <b>docker-compose.yaml</b> file. Here is an example file:
            </p>
            <p className='file_contents'>
                version: '3'<br/>
                services:<br/>
                &emsp;app:<br/>
                &emsp;&emsp;container_name: name_of_service<br/>
                &emsp;&emsp;build:<br/>
                &emsp;&emsp;&emsp;context: path_to_dockerfile<br/>
                &emsp;&emsp;ports:<br/>
                &emsp;&emsp;&emsp;- "80:80"<br/>
                &emsp;&emsp;volumes:<br/>
                &emsp;&emsp;&emsp;- ./src:/usr/src/app/
            </p>
            <p>
                Or you can une Docker Compose for an already existing image:
            </p>
            <p className='file_contents'>
                version: '3'<br/>
                services:<br/>
                &emsp;front-web:<br/>
                &emsp;&emsp;image: image_name<br/>
                &emsp;&emsp;restart: always<br/>
                &emsp;&emsp;ports:<br/>
                &emsp;&emsp;&emsp;- 80:80<br/>
                &emsp;&emsp;&emsp;- 443:443<br/>
                &emsp;&emsp;volumes:<br/>
                &emsp;&emsp;&emsp;- certs:/etc/letsencrypt/<br/>
                <br/>
                volumes:<br/>
                &emsp;certs:
            </p>
            <h3>Docker</h3>
            <p>
                To build a docker image:
            </p>
            <p className='bash_code'>
                sudo docker build .
            </p>
            <p>
                In the command above, <b>.</b> is the path to the dockerfile.
                Once built, docker will give you the image's ID that you can then run in a container with:
            </p>
            <p className='bash_code'>
                sudo docker run IMAGE_ID
            </p>
            <p>
                You can also get the ID and a lot more info running:
            </p>
            <p className='bash_code'>
                sudo docker image ls
            </p>
            <p>
                To kill a docker container, get it's container ID with:
            </p>
            <p className='bash_code'>
                sudo docker ps
            </p>
            <p>
                Then you can kill it with:
            </p>
            <p className='bash_code'>
                sudo docker kill CONTAINER_ID
            </p>
            <h3>Cleaning Up</h3>
            <p>
                Docker Images can take up a lot of space on a server, make sure you regularly remove unused images with:
            </p>
            <p className='bash_code'>
                sudo docker image prune
            </p>
            <h3>Useful links</h3>
            <a className="url" href="https://www.docker.com/" target="_blank">Docker Website</a>
            <a className="url" href="https://hub.docker.com/" target="_blank">Docker Hub</a>
        </div>
    );
}

export default devops_docker;
