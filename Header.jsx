import React, { useState } from 'react';

export default function Header({ theme, setTheme, activeTab, onChangeTab }){
	const [open, setOpen] = useState(false);
	return (
		<header className="header fade">
			<div className="brand">
				<div className="logo">KJ</div>
				<div className="name">
					<h1 style={{margin:0,fontSize:16}}>JEROME</h1>
					<p style={{margin:0,fontSize:12,color:'var(--muted)'}}>Information Technology • UI/UX • Frontend</p>
				</div>
			</div>

			<nav className="nav" aria-label="Main">
				{/* tabs */}
				<button onClick={()=>onChangeTab && onChangeTab('about')} style={{ background: 'transparent', border: 0, padding: 8, borderRadius: 8, color: activeTab === 'about' ? 'var(--text)' : 'var(--muted)', fontWeight: 700 }}>Home</button>

				<button onClick={()=>onChangeTab && onChangeTab('projects')} style={{ background: 'transparent', border: 0, padding: 8, borderRadius: 8, color: activeTab === 'projects' ? 'var(--text)' : 'var(--muted)', fontWeight: 700 }}>Projects</button>

				<button onClick={()=>onChangeTab && onChangeTab('contact')} style={{ background: 'transparent', border: 0, padding: 8, borderRadius: 8, color: activeTab === 'contact' ? 'var(--text)' : 'var(--muted)', fontWeight: 700 }}>Contact</button>

				<button title="Toggle theme" onClick={()=> setTheme && setTheme(prev => prev === 'light' ? 'dark' : 'light')} style={{background:'transparent',border:0,color:'var(--muted)',cursor:'pointer'}}>🌓</button>

				<a className="btn" href="assets/CV-Lacerna-King-Jerome.pdf" download>Download CV</a>

				{/* simple mobile toggle */}
				<button onClick={()=>setOpen(s=>!s)} style={{display:'none'}} aria-hidden>Menu</button>
			</nav>
		</header>
	);
}
