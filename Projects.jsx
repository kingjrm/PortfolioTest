import React from 'react';
import ProjectCard from './ProjectCard';

export default function Projects({ projects = [], onOpen }){
	return (
		<div id="projects" className="projects-grid">
			{projects.map(p => <ProjectCard key={p.id} project={p} onOpen={() => onOpen(p)} />)}
		</div>
	);
}
