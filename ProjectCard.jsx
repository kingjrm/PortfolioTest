import React from 'react';

export default function ProjectCard({ project, onOpen }){
	return (
		<article className="project-card" role="button" onClick={onOpen}>
			<div>
				<h4>{project.title}</h4>
				<div className="small">{project.short}</div>
			</div>
			<div className="meta">
				<span className="small">{project.date}</span>
				<button className="view-btn" onClick={(e)=>{e.stopPropagation(); onOpen();}}>View</button>
			</div>
		</article>
	);
}
