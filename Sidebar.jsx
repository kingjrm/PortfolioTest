import React from 'react';

export default function Sidebar(){
	return (
		<div className="card sidebar fade delay">
			<div className="profile">
				<div className="avatar">
					<img src="/assets/picture.jpg" alt="King Jerome P. Lacerna" loading="lazy" />
				</div>
				<div>
					<strong>King Jerome P. Lacerna</strong>
					<div className="small" style={{marginTop:6}}>4th Year — BS Information Technology (Service Management)</div>
				</div>
			</div>

			<div className="card contact" style={{padding:14,background:'transparent',borderRadius:10,border:'1px dashed rgba(255,255,255,0.02)'}}>
				<div><strong>Location</strong><div className="small">203 Brgy. Bawi, Padre Garcia, Batangas</div></div>
				<div style={{marginTop:8}}><strong>Phone</strong><div className="small">0963-483-1345</div></div>
				<div style={{marginTop:8}}><strong>Email</strong><div className="small">lacernakingjerome@gmail.com</div></div>
				<div style={{marginTop:8}}><strong>GitHub</strong><div className="small"><a className="inline" href="https://github.com/kingjrm" target="_blank" rel="noopener noreferrer">github.com/kingjrm</a></div></div>
			</div>

			<div style={{marginTop:14}}>
				<div className="section-title"><h3>Skills</h3><span className="tag">Tools & Focus</span></div>
				<div className="skills">
					<span className="skill">UI/UX Design</span>
					<span className="skill">Figma</span>
					<span className="skill">Wireframing</span>
					<span className="skill">HTML</span>
					<span className="skill">CSS</span>
					<span className="skill">Responsive Design</span>
					<span className="skill">User Research</span>
				</div>
			</div>

			<div style={{marginTop:16}}>
				<div className="section-title"><h3>Languages</h3><span className="tag">Proficiency</span></div>
				<div className="small">English, Filipino</div>
			</div>

			{/* Additional information (beside Technical Skills) */}
			<div style={{marginTop:16}}>
				<div className="section-title"><h3>Additional Information</h3><span className="tag">Details</span></div>

				{/* Technical Skills note */}
				<div style={{marginTop:6}}>
					<strong>Technical Skills</strong>
					<div className="small">Passionate about designing websites through the use of Figma.</div>
				</div>

				{/* Certifications */}
				<div style={{marginTop:10}}>
					<strong>Certifications</strong>
					<ul style={{marginTop:6, paddingLeft:18}}>
						<li className="small">Techsynergy: Navigating the Digital Landscape</li>
						<li className="small">Techno SDG Exposition — Junior Philippine Computer Society BatStateU TNEU - Lipa Chapter</li>
					</ul>
				</div>

				{/* Awards / Activities */}
				<div style={{marginTop:10}}>
					<strong>Awards / Activities</strong>
					<ul style={{marginTop:6, paddingLeft:18}}>
						<li className="small">Recognized on the Dean's List for academic excellence</li>
						<li className="small">2nd Place — Creative Clicks CICS UI/UX Design Challenge</li>
					</ul>
				</div>
			</div>

		</div>
	);
}
