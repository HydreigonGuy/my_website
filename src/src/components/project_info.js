
function ProjectInfo(props) {
  return (
    <div className="project-content">
        <h3>{props.title}</h3>
        <p>
            {props.info}
        </p>

        <div className="links-area">
            {props.try_url && props.code_url ?
                <>
                    <a href={props.try_url} className="half-url-content" target="_blank">Go</a>
                    <a href={props.code_url} className="half-url-content" target="_blank">View the code</a>
                </>
            : props.try_url ?
                <a href={props.try_url} target="_blank">Go</a>
            : props.code_url &&
                <a href={props.code_url} target="_blank">View the code</a>
            }
        </div>
    </div>
  );
}

export default ProjectInfo;
