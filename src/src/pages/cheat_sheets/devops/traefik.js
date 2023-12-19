
import '../../../assets/css/devops.css';

function devops_docker() {
    return (
        <div className='devops_cheatsheet_body'>
            <h1>DevOps - Traefik</h1>
            <p>
            Traefik is a tool for routing, load balancing, and ssl certificate handelling, amongst other things.
            </p>
            <p>The easiest way to set it up is through docker.</p>
            <p>Create a <b>docker-compose.yaml</b> file with the following contents:</p>
            <p className='file_contents'>
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
            <p className='file_contents'>
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
            <p className='file_contents'>
                version: '3'<br/>
                <br/>
                services:<br/>
                &emsp;my-web:<br/>
                &emsp;&emsp;image: $IMAGE_NAME<br/>
                &emsp;&emsp;container_name: "my_website"<br/>
                &emsp;&emsp;restart: always<br/>
                &emsp;&emsp;labels:<br/>
                &emsp;&emsp;&emsp;- "traefik.enable=true"<br/>
                &emsp;&emsp;&emsp;- "traefik.http.routers.my_website.rule=Host(`$DOMAIN_NAME`)"<br/>
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
        </div>
    );
}

export default devops_docker;
