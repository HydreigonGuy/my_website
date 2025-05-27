
function displayDocDocker() {
    document.getElementById("doc_contents").innerHTML = '\
    <h1>DevOps - Docker</h1>\
    Docker is a tool to create, handle and run containers.\
    <h3>Docker Compose</h3>\
    Docker Compose is a tool to help easily handle docker images.\
    <br>\
    To build the image:\
    <p class="doc_code_segment">sudo docker-compose build</p>\
    To run the image:\
    <p class="doc_code_segment">sudo docker-compose up</p>\
    To run the image while rebuilding the image (to update the files / dependencies):\
    <p class="doc_code_segment">sudo docker-compose up --build</p>\
    Docker Compose is controlled by the docker-compose.yaml file. Here is an example file:\
    <p class="doc_file_segment">\
        version: \'3\'<br/>\
        services:<br/>\
        &emsp;app:<br/>\
        &emsp;&emsp;container_name: name_of_service<br/>\
        &emsp;&emsp;build:<br/>\
        &emsp;&emsp;&emsp;context: path_to_dockerfile<br/>\
        &emsp;&emsp;ports:<br/>\
        &emsp;&emsp;&emsp;- "80:80"<br/>\
        &emsp;&emsp;volumes:<br/>\
        &emsp;&emsp;&emsp;- ./src:/usr/src/app/\
    </p>\
    <p>\
        Or you can une Docker Compose for an already existing image:\
    </p>\
    <p class="doc_file_segment">\
        version: \'3\'<br/>\
        services:<br/>\
        &emsp;front-web:<br/>\
        &emsp;&emsp;image: image_name<br/>\
        &emsp;&emsp;restart: always<br/>\
        &emsp;&emsp;ports:<br/>\
        &emsp;&emsp;&emsp;- 80:80<br/>\
        &emsp;&emsp;&emsp;- 443:443<br/>\
        &emsp;&emsp;volumes:<br/>\
        &emsp;&emsp;&emsp;- certs:/etc/letsencrypt/<br/>\
        <br/>\
        volumes:<br/>\
        &emsp;certs:\
    </p>\
    <h3>Docker</h3>\
    <p>\
        To build a docker image:\
    </p>\
    <p class="doc_code_segment">\
        sudo docker build .\
    </p>\
    <p>\
        In the command above, <b>.</b> is the path to the dockerfile.\
        Once built, docker will give you the image\'s ID that you can then run in a container with:\
    </p>\
    <p class="doc_code_segment">\
        sudo docker run IMAGE_ID\
    </p>\
    <p>\
        You can also get the ID and a lot more info running:\
    </p>\
    <p class="doc_code_segment">\
        sudo docker image ls\
    </p>\
    <p>\
        To kill a docker container, get it\'s container ID with:\
    </p>\
    <p class="doc_code_segment">\
        sudo docker ps\
    </p>\
    <p>\
        Then you can kill it with:\
    </p>\
    <p class="doc_code_segment">\
        sudo docker kill CONTAINER_ID\
    </p>\
    <h3>Cleaning Up</h3>\
    <p>\
        Docker Images can take up a lot of space on a server, make sure you regularly remove unused images with:\
    </p>\
    <p class="doc_code_segment">\
        sudo docker image prune\
    </p>\
    <h3>Building images for different CPU types</h3>\
    <p>\
        You can use docker buildx to build images for different CPU types, if you wish to run a docker image on something that doesn\'t use a normal CPU architecture, like a raspberry pi for example.\
        You can install it by running:\
    </p>\
    <p class="doc_code_segment">\
        sudo apt install docker-buildx\
    </p>\
    <p>\
        And build and push the image with this command:\
    </p>\
    <p class="doc_code_segment">\
        sudo docker buildx build -t <b>image name</b>  --progress plain --platform linux/amd64,linux/arm/v7,linux/arm64 --push .\
    </p>\
    <h3>Useful links</h3>\
    <a href="https://www.docker.com/" target="_blank">Docker Website</a>\
    <a href="https://hub.docker.com/" target="_blank">Docker Hub</a>\
    ';
}

function displayDocTraefik() {
    document.getElementById("doc_contents").innerHTML = `
            <h1>DevOps - Traefik</h1>
            <p>
            Traefik is a tool for routing, load balancing, and ssl certificate handelling, amongst other things.
            </p>
            <p>The easiest way to set it up is through docker.</p>
            <p>Create a <b>docker-compose.yaml</b> file with the following contents:</p>
            <p class='doc_file_segment'>
            version: '3'<br/>
            <br/>
            services:<br/>
            &emsp;traefik:<br/>
            &emsp;&emsp;image: "traefik:v2.10"<br/>
            &emsp;&emsp;container_name: "traefik"<br/>
            &emsp;&emsp;ports:<br/>
            &emsp;&emsp;&emsp;- "80:80"<br/>
            &emsp;&emsp;&emsp;- "443:443"<br/>
            &emsp;&emsp;&emsp;- "8080:8080"<br/>
            &emsp;volumes:<br/>
            &emsp;&emsp;&emsp;- <b>PATH_TO_CONF_FOLDER</b>:/etc/traefik<br/>
            &emsp;&emsp;&emsp;- traefik-ssl-certs:/ssl-certs<br/>
            &emsp;&emsp;&emsp;- /var/run/docker.sock:/var/run/docker.sock:ro<br/>
            &emsp;&emsp;networks:<br/>
            &emsp;&emsp;&emsp;- web<br/>
            <br/>
            volumes:<br/>
            &emsp;traefik-ssl-certs:<br/>
            &emsp;&emsp;driver: local<br/>
            <br/>
            networks:<br/>
            &emsp;web:<br/>
            &emsp;&emsp;external: true
            </p>
            <p>
                Note that here we expose the port 8080, this is to expose an unprotected dashboard, this is usefull for testing, but should not be used in a production environment.
            </p>
            <p>
                You should replace "PATH_TO_CONF_FOLDER" with a path to a folder that will contain a <b>traefik.yaml</b> file with the following contents:
            </p>
            <p class='doc_file_segment'>
                global:<br/>
                &emsp;checkNewVersion: true<br/>
                &emsp;sendAnonymousUsage: false<br/>
                <br/>
                # for the dashboard, but it's not secure so be careful<br/>
                api:<br/>
                &emsp;dashboard: true<br/>
                &emsp;insecure: true<br/>
                <br/>
                entryPoints:<br/>
                &emsp;web:<br/>
                &emsp;&emsp;address: :80<br/>
                &emsp;&emsp;http:<br/>
                &emsp;&emsp;&emsp;redirections:<br/>
                &emsp;&emsp;&emsp;&emsp;entrypoint:<br/>
                &emsp;&emsp;&emsp;&emsp;&emsp;to: websecure<br/>
                &emsp;&emsp;&emsp;&emsp;&emsp;scheme: https<br/>
                &emsp;websecure:<br/>
                &emsp;&emsp;address: :443<br/>
                <br/>
                certificatesResolvers:<br/>
                &emsp;production:<br/>
                &emsp;&emsp;acme:<br/>
                &emsp;&emsp;&emsp;email: "<b>put your email address here</b>"<br/>
                &emsp;&emsp;&emsp;storage: /ssl-certs/acme.json<br/>
                &emsp;&emsp;&emsp;caServer: "https://acme-v02.api.letsencrypt.org/directory"<br/>
                &emsp;&emsp;&emsp;httpChallenge:<br/>
                &emsp;&emsp;&emsp;&emsp;entryPoint: web<br/>
                <br/>
                providers:<br/>
                &emsp;docker:<br/>
                &emsp;&emsp;exposedByDefault: false
            </p>
            <p>
                Once you ran the traefik docker-compose, it's running on your server, now you can set it up with your services.
            </p>
            <p>
                Here is an example docker-compose.yaml file that automatically sets up your service with traefik.
            </p>
            <p class='doc_file_segment'>
                version: '3'<br/>
                <br/>
                services:<br/>
                &emsp;my-web:<br/>
                &emsp;&emsp;image: $IMAGE_NAME<br/>
                &emsp;&emsp;container_name: "my_website"<br/>
                &emsp;&emsp;restart: always<br/>
                &emsp;&emsp;labels:<br/>
                &emsp;&emsp;&emsp;- "traefik.enable=true"<br/>
                &emsp;&emsp;&emsp;- "traefik.http.routers.my_website.rule=Host(\`$DOMAIN_NAME\`)"<br/>
                &emsp;&emsp;&emsp;- "traefik.http.routers.my_website.entrypoints=websecure"<br/>
                &emsp;&emsp;&emsp;- "traefik.http.routers.my_website.tls=true"<br/>
                &emsp;&emsp;&emsp;- "traefik.http.routers.my_website.tls.certresolver=production"<br/>
                &emsp;&emsp;networks:<br/>
                &emsp;&emsp;&emsp;- web<br/>
                <br/>
                networks:<br/>
                &emsp;web:<br/>
                &emsp;&emsp;external: true
            </p>
            <h3>Useful links</h3>
            <a class="url" href="https://traefik.io/traefik/" target="_blank">Traefik Website</a>
            <a class="url" href="https://github.com/traefik/traefik" target="_blank">Traefik Github</a>
            <a class="url" href="https://www.youtube.com/watch?v=wLrmmh1eI94&ab_channel=ChristianLempa" target="_blank">Youtube Traefik Tutorial I like</a>

    `;
}

function displayDocPrometheus() {
    document.getElementById("doc_contents").innerHTML = `
            <h1>DevOps - Prometheus</h1>
            <p>
                Prometheus is a monitoring tool, it helps you monitor your server(s).
                You can link it to grafana to see nice graphs to easily visualize everything.
            </p>
            <p>
                Prometheus is very easy to deploy, just run:
            </p>
            <p class='doc_code_segment'>
            sudo docker run -d --name prometheus -p 9090:9090 -v <b>PATH</b>/prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus
            </p>
            <p>
                You'll need to give it a <b>prometheus.yml</b> file to configure the prometheus.
                Here is an example prometheus.yml file:
            </p>
            <p class='doc_file_segment'>
                global:<br/>
                &emsp;scrape_interval: 5s<br/>
                &emsp;external_labels:<br/>
                &emsp;&emsp;monitor: 'node'<br/>
                scrape_configs:<br/>
                &emsp;- job_name: 'prometheus'<br/>
                &emsp;&emsp;static_configs:<br/>
                &emsp;&emsp;&emsp;- targets: ['192.168.1.124:9090']<br/>
                &emsp;- job_name: 'node-exporter'<br/>
                &emsp;&emsp;static_configs:<br/>
                &emsp;&emsp;&emsp;- targets: ['192.168.1.124:9100']<br/>
                &emsp;- job_name: 'cadvisor'<br/>
                &emsp;&emsp;static_configs:<br/>
                &emsp;&emsp;&emsp;- targets: ['192.168.1.124:9018']
            </p>
            <p>
                Prometheus by itself can't access anything, you need to configure it and hook it up to things it can track.
            </p>
            <p>
                <b>Node exporter</b> is a tool to allow you to see a lot of usefull informations about your system.
                To launch it, just run:
            </p>
            <p class='doc_code_segment'>
            sudo docker run -d --net="host" --pid="host" -v "/:/host:ro,rslave" quay.io/prometheus/node-exporter:latest --path.rootfs=/host
            </p>
            <p>
                <b>Cadvisor</b> allows you to track docker images and deployments. To launch it, just run:
            </p>
            <p class='doc_code_segment'>
            sudo docker run
            --volume=/:/rootfs:ro
            --volume=/var/run:/var/run:ro
            --volume=/sys:/sys:ro
            --volume=/var/lib/docker/:/var/lib/docker:ro
            --volume=/dev/disk/:/dev/disk:ro
            --publish=8080:8080
            --detach=true
            --name=cadvisor
            --privileged
            --device=/dev/kmsg
            gcr.io/cadvisor/cadvisor:v0.47.2
            </p>
            <h3>Grafana</h3>
            <p>
                You can use Grafana to visualize the data that prometheus has collected, it's also very easy to deploy, just run:
            </p>
            <p class='doc_code_segment'>
            sudo docker run -d --name=grafana -p 3456:3000 grafana/grafana
            </p>
            <h3>Useful links</h3>
            <a class="url" href="https://prometheus.io/" target="_blank">Prometheus official website</a>
            <a class="url" href="https://grafana.com/" target="_blank">Grafana official website</a>
            <a class="url" href="https://github.com/google/cadvisor" target="_blank">Cadvisor Github</a>
            <a class="url" href="https://github.com/prometheus/node_exporter" target="_blank">Node Exporter Github</a>
    `
}

function displayDocCertbot() {
    document.getElementById("doc_contents").innerHTML = `
            <h1>DevOps - Certbot and Let's Encrypt</h1>
            <p>
                Certbot is used to generate and handle SSL certificates.
                This can also be done automatically with <a class="url inline" href="/devops/traefik">traefik</a>, it's recomended to uses it instead of this.
                You should only really use this if you want to know more about generation SSL certificates.
            </p>
            <p>
                This is for a service running with nginx.
                If you wish to use this with something other than NGINX, I advise against it but you can look at the documentation to see how to go about it.
                You need to have your service linked to a domain name,
                you cannot generate an SSL certificate for an IP addresse.
                Make sure your service is available when you try to generate the ssl certificate.
                Make sure the port 443 is exposed and available.
            </p>
            <h3>Installation</h3>
            <p class='doc_code_segment'>
            sudo apt install certbot python3-certbot-nginx
            </p>
            <h3>Generate SSL Certificate</h3>
            <p class='doc_code_segment'>
            certbot --nginx --agree-tos --no-eff-email -m <b>YOUR_EMAIL_ADDRESS</b> -d <b>YOUR_DOMAIN_NAME</b>
            </p>
            <h3>Restart NGINX</h3>
            <p class='doc_code_segment'>
            nginx -t && nginx -s reload
            </p>
            <p>
                Now your certificate should be generated and your website should have automatically been changed to port 443.
                A certificate lasts about 3 months, and you'll need to renew it with this command:
            </p>
            <p class='doc_code_segment'>
            certbot renew
            </p>
            <h3>Useful links</h3>
            <a class="url" href="https://certbot.eff.org/" target="_blank">Certbot official website</a>
            <a class="url" href="https://letsencrypt.org/" target="_blank">Let's Encrypt official website</a>
    `
}

function displayDocDB() {
    document.getElementById("doc_contents").innerHTML = `
            <h1>DevOps - Databases</h1>
            <p>
                Databases are important when deploying servers.
                Here are databases, how to deploy them, and usefull commands to know:
            </p>
            <h3>Postgres</h3>
            <p>
                Postgres is an SQL based database, it's made for storing structured data and it does it really well.
                You should use this when you have structured data, and it's very effective for linking objects together.
                You should not use this with unstructured data.
                Everytime you want to change a data structure, you will have to migrate the database.
                When filling the database, it is faster to make few requests that each write / read a lot of data than a lot of small requests.
            </p>
            <p>To launch, create a <b>docker-compose.yaml</b> with the following contents:</p>
            <p class='doc_file_segment'>
                version: '3.1'<br/>
                services:<br/>
                &emsp;# postgres image<br/>
                &emsp;db:<br/>
                &emsp;&emsp;image: postgres<br/>
                &emsp;&emsp;restart: always<br/>
                &emsp;&emsp;environment:<br/>
                &emsp;&emsp;&emsp;POSTGRES_PASSWORD: <b>PASSWORD</b><br/>
                <br/>
                &emsp;# example deployment app<br/>
                &emsp;adminer:<br/>
                &emsp;&emsp;image: adminer<br/>
                &emsp;&emsp;restart: always<br/>
                &emsp;&emsp;ports:<br/>
                &emsp;&emsp;&emsp;- 8080:8080
            </p>
            <h3>MongoDB</h3>
            <p>
                MongoDB is not SQL based, so you don't need to structure data to store it.
                It stores data as JSON.
            </p>
            <p>To launch, create a <b>docker-compose.yaml</b> with the following contents:</p>
            <p class='doc_file_segment'>
                version: '3.1'<br/>
                services:<br/>
                &emsp;# mongodb image<br/>
                &emsp;mongo:<br/>
                &emsp;&emsp;image: mongo<br/>
                &emsp;&emsp;restart: always<br/>
                &emsp;&emsp;environment:<br/>
                &emsp;&emsp;&emsp;MONGO_INITDB_ROOT_USERNAME: <b>USERNAME</b><br/>
                &emsp;&emsp;&emsp;MONGO_INITDB_ROOT_PASSWORD: <b>PASSWORD</b><br/>
                <br/>
                &emsp;# example deployment app<br/>
                &emsp;mongo-express:<br/>
                &emsp;&emsp;image: mongo-express<br/>
                &emsp;&emsp;restart: always<br/>
                &emsp;&emsp;ports:<br/>
                &emsp;&emsp;&emsp;- 8081:8081<br/>
                &emsp;&emsp;environment:<br/>
                &emsp;&emsp;&emsp;ME_CONFIG_MONGODB_ADMINUSERNAME: root<br/>
                &emsp;&emsp;&emsp;ME_CONFIG_MONGODB_ADMINPASSWORD: example<br/>
                &emsp;&emsp;&emsp;ME_CONFIG_MONGODB_URL: mongodb://root:example@mongo:27017/
            </p>
            <p>
                To create a backup:
            </p>
            <p class='doc_code_segment'>
            mongodump -u username -p password -o outpath
            </p>
            <p>To restore a backup:</p>
            <p class='doc_code_segment'>
            mongorestore -u username -p password $PATH_TO_BACKUP
            </p>
            <h3>Useful links</h3>
            <a class="url" href="https://www.postgresql.org/" target="_blank">Postgres official website</a>
            <a class="url" href="https://www.mongodb.com/" target="_blank">MongoDB official website</a>
    `
}

const gitlab_api_doc_map = {
    "create_file":{
        "eng":"Create file",
        "fr":"Créer un fichier"
    },
    "update_file":{
        "eng":"Update file",
        "fr":"Mettre un fichier à jour"
    },
    "get_file":{
        "eng":"Get file",
        "fr":"Récupérer un fichier"
    },
    "create_branch":{
        "eng":"Create branch",
        "fr":"Créer une branche"
    },
    "launch_pipeline":{
        "eng":"Launch pipeline",
        "fr":"Lancer une pipeline"
    }
}

function displayDocGitlabApi() {
    document.getElementById("doc_contents").innerHTML = `
            <h1>DevOps - Gitlab API</h1>
            <h3>` + gitlab_api_doc_map.create_file[lang] + `</h3>
            <p>POST {GITLAB_URL}/api/v4/projects/{PROJECT_ID}/repository/files/{FILENAME}</p>
            <p>Data: {"branch": ... , "content": ... , "commit_message": ... }</p>
            <h3>` + gitlab_api_doc_map.update_file[lang] + `</h3>
            <p>PUT {GITLAB_URL}/api/v4/projects/{PROJECT_ID}/repository/files/{FILENAME}</p>
            <p>Data: {"branch": ... , "content": ... , "commit_message": ... }</p>
            <h3>` + gitlab_api_doc_map.get_file[lang] + `</h3>
            <p>GET {GITLAB_URL}/api/v4/projects/{PROJECT_ID}/repository/files/{FILENAME}?ref={BRANCH_NAME}</p>
            <h3>` + gitlab_api_doc_map.create_branch[lang] + `</h3>
            <p>POST {GITLAB_URL}/api/v4/projects/{PROJECT_ID}/repository/branches?ref={REF_BRANCH}&branch={NEW_BRANCH}</p>
            <h3>` + gitlab_api_doc_map.launch_pipeline[lang] + `</h3>
            <p>POST {GITLAB_URL}/api/v4/projects/{PROJECT_ID}/trigger/pipeline</p>
            <p>Data: {"token": ... , "ref": ... , "variables[{PIPELINE_VARIABLE}]": ... }</p>
    `
}
