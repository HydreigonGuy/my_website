
import '../../../assets/css/devops.css';

import DevOpsCategoryLink from "../../../components/devops_category_link";

function DevOps() {
  return (
    <>
      <div className='devops_cheatsheet_body'>
        <h1 className='devops_cheatsheet_title'>My DevOps Cheat Sheet</h1>
        <DevOpsCategoryLink items={[
          {"url":"/devops/docker", "title":"Docker"},
          {"url":"/devops/traefik", "title":"Traefik"},
          {"url":"/devops/prometheus", "title":"Prometheus"},
          {"url":"/devops/certbot", "title":"Certbot"},
          {"url":"/devops/databases", "title":"Databases"},
        ]}/>
      </div>
    </>
  );
}

export default DevOps;
