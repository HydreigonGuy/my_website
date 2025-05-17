
function ProjectInfo(props) {
  const text = {
    "Go":{"eng":"Go", "fr":"Go"},
    "View the code":{"eng":"View the code", "fr":"Voir le code"},
  } 
  return (
    <div className="project-content">
        {props.image &&
            <img src={props.image} className='project-content-image' />
        }
        <h3>{props.title}</h3>
        <p>
            {props.info}
        </p>

        <div className="links-area">
            {props.try_url && props.code_url ?
                <>
                    <a  href={props.try_url} className="half-url-content project-content-url" target="_blank">{text["Go"][props.lang]}</a>
                    <a href={props.code_url} className="half-url-content project-content-url" target="_blank">{text["View the code"][props.lang]}</a>
                </>
            : props.try_url ?
                <a className="project-content-url" href={props.try_url} target="_blank">{text["Go"][props.lang]}</a>
            : props.code_url &&
                <a className="project-content-url" href={props.code_url} target="_blank">{text["View the code"][props.lang]}</a>
            }
        </div>
    </div>
  );
}

export default ProjectInfo;
