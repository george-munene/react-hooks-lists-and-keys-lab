import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const projectComps = projects.map( project => 
    <ProjectItem key = {project.id} 
                 name = {project.name} 
                  about = {project.about} 
                  technologies={project.technologies}
    
    />)

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectComps}</div>
    </div>
  );
}

export default ProjectList;
