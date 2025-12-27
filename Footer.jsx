import React, { useState } from 'react';

export default function Footer(){
	const [form, setForm] = useState({name:'', email:'', message:''});
	const [status, setStatus] = useState({ type:'', text:'' });
	const [sending, setSending] = useState(false);

	function submit(e){
		e.preventDefault();
		if(!form.name || !form.email || !form.message){
			setStatus({ type:'error', text:'Please fill all fields.' });
			return;
		}
		setSending(true);
		setStatus({ type:'info', text:'Opening mail client...' });

		const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
		const body = encodeURIComponent(`${form.message}\n\nContact: ${form.email}`);
		window.location.href = `mailto:lacernakingjerome@gmail.com?subject=${subject}&body=${body}`;

		// optimistic UI: clear form and show success shortly after
		setTimeout(() => {
			setForm({name:'', email:'', message:''});
			setSending(false);
			setStatus({ type:'success', text:'Mail client opened. Thanks — I will respond soon.' });
		}, 900);
	}

	return (
		<footer id="contact" className="card contact-card" style={{marginTop:14}}>
			<div className="section-title"><h3>Contact</h3><span className="tag">Get in touch</span></div>

			<div className="contact-grid">
				<form className="contact-form" onSubmit={submit} style={{minWidth:0}} aria-labelledby="contact">
					<label className="small" htmlFor="c-name">Your name</label>
					<input id="c-name" className="input" placeholder="Your name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required aria-required="true"/>

					<label className="small" htmlFor="c-email">Email</label>
					<input id="c-email" type="email" className="input" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required aria-required="true"/>

					<label className="small" htmlFor="c-message">Message</label>
					<textarea id="c-message" rows="6" className="input" placeholder="Write your message..." value={form.message} onChange={e=>setForm({...form,message:e.target.value})} required aria-required="true"/>

					<div className="contact-actions">
						<button className="submit" type="submit" disabled={sending}>{sending ? 'Sending...' : 'Send message'}</button>
						<button type="button" className="ghost" onClick={()=>{ setForm({name:'', email:'', message:''}); setStatus({type:'', text:''}); }}>Reset</button>
					</div>

					{status.text && (
						<div className={`status ${status.type}`} style={{marginTop:10}} role="status" aria-live="polite">
							{status.text}
						</div>
					)}
				</form>

				<aside className="card contact-info" aria-label="Contact information" style={{padding:16}}>
					<div style={{display:'flex',gap:10,alignItems:'center'}}>
						<div style={{width:56,height:56, borderRadius:10, background:'linear-gradient(135deg,var(--accent-2),var(--accent))', display:'flex',alignItems:'center',justifyContent:'center', color:'#fff', fontWeight:700}}>KJ</div>
						<div>
							<strong>King Jerome P. Lacerna</strong>
							<div className="small" style={{marginTop:6}}>4th Year — BS Information Technology</div>
						</div>
					</div>

					<hr style={{border:'none',borderTop:'1px solid rgba(255,255,255,0.04)', margin:'12px 0'}}/>

					<div><strong>Phone</strong>
						<div className="small"><a href="tel:09634831345" style={{color:'var(--muted)', textDecoration:'none'}}>📞 0963-483-1345</a></div>
					</div>

					<div style={{marginTop:8}}><strong>Email</strong>
						<div className="small"><a href="mailto:lacernakingjerome@gmail.com" style={{color:'var(--muted)', textDecoration:'none'}}>✉️ lacernakingjerome@gmail.com</a></div>
					</div>

					<div style={{marginTop:8}}><strong>GitHub</strong>
						<div className="small"><a className="inline" href="https://github.com/kingjrm" target="_blank" rel="noopener noreferrer">github.com/kingjrm</a></div>
					</div>

					<div style={{marginTop:12}} className="footer-note small">Prefer a different layout or full case study? I can prepare a multi-page site or provide project writeups on request.</div>
				</aside>
			</div>
		</footer>
	);
}
