
import '../../../assets/css/devops.css';

function devops_docker() {
    return (
        <div className='devops_cheatsheet_body'>
            <h1>DevOps - Certbot and Let's Encrypt</h1>
            <p>
                Certbot is used to generate and handle SSL certificates.
                This can also be done automatically with <a className="url inline" href="/devops/traefik">traefik</a>, it's recomended to uses it instead of this.
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
            <p className='bash_code'>
            sudo apt install certbot python3-certbot-nginx
            </p>
            <h3>Generate SSL Certificate</h3>
            <p className='bash_code'>
            certbot --nginx --agree-tos --no-eff-email -m <b>YOUR_EMAIL_ADDRESS</b> -d <b>YOUR_DOMAIN_NAME</b>
            </p>
            <h3>Restart NGINX</h3>
            <p className='bash_code'>
            nginx -t && nginx -s reload
            </p>
            <p>
                Now your certificate should be generated and your website should have automatically been changed to port 443.
                A certificate lasts about 3 months, and you'll need to renew it with this command:
            </p>
            <p className='bash_code'>
            certbot renew
            </p>
            <h3>Useful links</h3>
            <a className="url" href="https://certbot.eff.org/" target="_blank">Certbot official website</a>
            <a className="url" href="https://letsencrypt.org/" target="_blank">Let's Encrypt official website</a>
        </div>
    );
}

export default devops_docker;
