import React from "react";

class Projects extends React.Component {
    render() {
        return (
            <div className="projects">
                <p className="project-header">{this.props.project.title}</p>
                <a href={this.props.project.href}>
                <img className="images"  height="400px" src={this.props.project.url} alt={this.props.project.alt}/>
                </a>
                <h5 className="projectsDescription">{this.props.project.description}</h5>
            </div>
        );
    }
}

export default Projects;
