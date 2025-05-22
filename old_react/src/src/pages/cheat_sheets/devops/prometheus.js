
import '../../../assets/css/devops.css';

function devops_docker() {
    return (
        <div className='devops_cheatsheet_body'>
            <h1>DevOps - Prometheus</h1>
            <p>
                Prometheus is a monitoring tool, it helps you monitor your server(s).
                You can link it to grafana to see nice graphs to easily visualize everything.
            </p>
            <p>
                Prometheus is very easy to deploy, just run:
            </p>
            <p className='bash_code'>
            sudo docker run -d --name prometheus -p 9090:9090 -v <b>PATH</b>/prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus
            </p>
            <p>
                You'll need to give it a <b>prometheus.yml</b> file to configure the prometheus.
                Here is an example prometheus.yml file:
            </p>
            <p className='file_contents'>
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
            <p className='bash_code'>
            sudo docker run -d --net="host" --pid="host" -v "/:/host:ro,rslave" quay.io/prometheus/node-exporter:latest --path.rootfs=/host
            </p>
            <p>
                <b>Cadvisor</b> allows you to track docker images and deployments. To launch it, just run:
            </p>
            <p className='bash_code'>
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
            <p className='bash_code'>
            sudo docker run -d --name=grafana -p 3456:3000 grafana/grafana
            </p>
            <h3>Useful links</h3>
            <a className="url" href="https://prometheus.io/" target="_blank">Prometheus official website</a>
            <a className="url" href="https://grafana.com/" target="_blank">Grafana official website</a>
            <a className="url" href="https://github.com/google/cadvisor" target="_blank">Cadvisor Github</a>
            <a className="url" href="https://github.com/prometheus/node_exporter" target="_blank">Node Exporter Github</a>
        </div>
    );
}

export default devops_docker;
