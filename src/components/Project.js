import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectCards(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image}/>
            </div>
            <div className="content">
                <h3 className="card-title">{props.name}</h3>
                <h3 class="proj-icons-container">
                <a href={props.github}><img class="ptoject-icon" src="https://img.icons8.com/fluent/48/000000/github.png" alt="github repo"></img></a>
                <a href={props.deploy}><img class="project=icon" src="https://img.icons8.com/fluent/48/000000/domain.png" alt="live application"></img></a>
                </h3>
                <h5 class="topics">
                    ({props.topics})
                </h5>
            </div>
        </div>
    );
}

export default ProjectCards
