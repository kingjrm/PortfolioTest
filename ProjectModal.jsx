import React from 'react';

export default function ProjectModal({ project, onClose }){
	if(!project) return null;
	return (
		<div className="modal-backdrop" onClick={onClose}>
			<div className="modal card" onClick={(e)=>e.stopPropagation()}>
				<div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
					<h3>{project.title}</h3>
					<button className="close" onClick={onClose}>✕</button>
				</div>
				<div className="small" style={{marginBottom:12}}>{project.date}</div>
				<p style={{color:'var(--muted)'}}>{project.details}</p>

				<div style={{marginTop:12,display:'flex',gap:8}}>
					{/* show live demo button when demo URL exists */}
					{project.demo && (
						<a className="btn" href={project.demo} target="_blank" rel="noopener noreferrer">Live demo</a>
					)}
					{/* show source button when source URL exists */}
					{project.source && (
						<a className="secondary" href={project.source} target="_blank" rel="noopener noreferrer">Source</a>
					)}
					{/* fallback when neither link exists */}
					{!project.demo && !project.source && (
						<span className="small" style={{color:'var(--muted)'}}>No live demo or source available.</span>
					)}
				</div>
			</div>
		</div>
	);
}
