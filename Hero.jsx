import React, { useEffect, useState } from 'react';

export default function Hero() {
  const lines = [
    "Hi, I'm King Jerome Lacerna.",
    "I design interfaces and build responsive frontends.",
  ];
  const [text, setText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);

  // typewriter effect
  useEffect(() => {
    if (lineIndex >= lines.length) {
      setDone(true);
      return;
    }
    if (charIndex <= lines[lineIndex].length) {
      const t = setTimeout(() => {
        setText(lines[lineIndex].slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 28 + Math.random() * 30);
      return () => clearTimeout(t);
    }
    // pause then go to next line
    const pause = setTimeout(() => {
      setCharIndex(0);
      setLineIndex((i) => i + 1);
    }, 700);
    return () => clearTimeout(pause);
  }, [charIndex, lineIndex]);

  return (
    <section className="hero card fade" aria-labelledby="hero-heading">
      <div className="hero-left">
        <h2 id="hero-heading" className={`hero-title ${done ? 'reveal' : ''}`}>
          <span className="typewriter">{text}</span>
          <span className="cursor" aria-hidden>{done ? '' : '▍'}</span>
        </h2>

        <p className="hero-sub">
          Fourth-year Information Technology student focused on UI/UX design and frontend implementation.
          I create clean, usable interfaces and turn prototypes into production-ready HTML/CSS.
        </p>

        <div className="cta">
          <a className="btn" href="assets/CV-Lacerna-King-Jerome.pdf" download>Download CV</a>
          <a
            className="ghost"
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            Contact
          </a>
        </div>
      </div>

      <div className="hero-right" aria-hidden>
        <div className="profile-card interactive">
          <div className="blob" />
          <div className="avatar">
            {/* served from src/assets/picture.jpg -> available at /assets/picture.jpg when running vite src */}
            <img src="/assets/picture.jpg" alt="King Jerome P. Lacerna" loading="lazy" />
          </div>
          <div className="profile-meta">
            <strong>King Jerome P. Lacerna</strong>
            <div className="small">4th Year — BS Information Technology (Service Management)</div>

            <ul className="highlights" aria-hidden>
              <li><strong>Focus</strong><span className="muted">UI/UX & Frontend</span></li>
              <li><strong>Approach</strong><span className="muted">User-centered & iterative</span></li>
              <li><strong>Availability</strong><span className="muted">Open for collaboration</span></li>
            </ul>

            <div className="skill-bars" aria-hidden>
              <div className="bar">
                <label>Figma</label>
                <div className="track"><div className="fill" style={{width:'86%'}} /></div>
              </div>

              <div className="bar">
                <label>HTML / CSS</label>
                <div className="track"><div className="fill" style={{width:'92%'}} /></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
