import React from "react";

class Projects extends React.Component {
    render() {
        return (
            <div className="projects">
                <br/>
                <p className="project-header">{this.props.project.title}</p>
                <a href={this.props.project.href}>
                <img width="90%"  src={this.props.project.url} alt={this.props.project.alt}/>
                </a>
                <br/>
                <h5 className="projectsDescription">{this.props.project.description}</h5>
                <br/>
            </div>
        );
    }
}

export default Projects;
