
import '../../../assets/css/devops.css';

import DevOpsCategoryLink from "../../../components/devops_category_link";

function DevOps() {
  return (
    <>
      <div className='devops_cheatsheet_body'>
        <h1 className='devops_cheatsheet_title'>My DevOps Cheat Sheet</h1>
        <DevOpsCategoryLink items={[
          {"url":"/devops/docker", "title":"Docker"},
        ]}/>
      </div>
    </>
  );
}

export default DevOps;
