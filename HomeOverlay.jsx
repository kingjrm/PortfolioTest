import React, { useEffect } from 'react';

export default function HomeOverlay({ onEnter = () => {} }) {
	useEffect(() => {
		function handleKey(e) {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				onEnter();
			}
			// allow Escape to skip
			if (e.key === 'Escape') onEnter();
		}
		window.addEventListener('keydown', handleKey);
		return () => window.removeEventListener('keydown', handleKey);
	}, [onEnter]);

	return (
		<div className="home-overlay" role="dialog" aria-modal="true" onClick={onEnter}>
			<div className="home-card" onClick={(e) => e.stopPropagation()}>
				<div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
					<div style={{ width: 96, height: 96, borderRadius: 12, background: 'linear-gradient(135deg,var(--accent-2),var(--accent))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 36 }}>KJ</div>
					<div>
						<h1 style={{ margin: 0 }}>KING JEROME P. LACERNA</h1>
						<p className="small" style={{ marginTop: 6, color: 'var(--muted)' }}>Information Technology • UI/UX • Frontend</p>
					</div>
				</div>

				<p style={{ marginTop: 18, color: 'var(--muted)', lineHeight: 1.5 }}>
					Welcome — press Enter (or click anywhere) to proceed to the details of my portfolio.
				</p>

				<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 18 }}>
					<div className="small" style={{ color: 'var(--muted)' }}>Tip: You can press Escape to skip here as well.</div>
					<button className="btn" onClick={onEnter}>Enter</button>
				</div>
			</div>
		</div>
	);
}
