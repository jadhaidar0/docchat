// props is the data passed in from the parent, like function arguments
function ProjectCard(props) {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default ProjectCard;
