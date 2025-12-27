import React, { useEffect, useState } from 'react';

export default function Onboarding({ steps = [], onComplete = () => {} }) {
  const [index, setIndex] = useState(0);
  const last = index === steps.length - 1;

  useEffect(() => {
    function handleKey(e) {
      // Enter or Space
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        next();
      }
      // Escape to skip onboarding
      if (e.key === 'Escape') {
        onComplete();
      }
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [index, steps.length]);

  function next() {
    if (last) {
      onComplete();
    } else {
      setIndex(i => Math.min(i + 1, steps.length - 1));
    }
  }

  return (
    <div className="onboard-backdrop" role="dialog" aria-modal="true" onClick={next}>
      <div className="onboard-card" onClick={(e)=>e.stopPropagation()}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',gap:12}}>
          <h2 style={{margin:0}}>{steps[index]?.title}</h2>
          <div className="small" style={{color:'var(--muted)'}}>{index + 1}/{steps.length}</div>
        </div>

        <p style={{color:'var(--muted)',marginTop:10,whiteSpace:'pre-wrap'}}>{steps[index]?.body}</p>

        <div style={{display:'flex',justifyContent:'flex-end',gap:8,marginTop:14}}>
          <button className="secondary" onClick={onComplete}>Skip</button>
          <button className="btn" onClick={next}>{ last ? 'Start' : 'Continue (Enter)' }</button>
        </div>

        <div style={{marginTop:12, fontSize:12, color:'var(--muted)'}}>Tip: Press Enter to advance</div>
      </div>
    </div>
  );
}
