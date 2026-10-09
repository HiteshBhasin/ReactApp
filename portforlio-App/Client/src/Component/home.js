import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './home.css';
import profile from '../assets/profile.jpg';

const RESUME_URL = 'https://gitresume.co/@hiteshbhasin/hitesh-bhasin';

const links = [
  { label: 'Email', href: 'mailto:bhasinsukh@gmail.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/hitesh-bhasin-4212a719b' },
  { label: 'GitHub', href: 'https://github.com/HiteshBhasin' },
  { label: 'Resume', href: RESUME_URL },
];

const Home = () => {
  const [content, setContent] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/about.txt`)
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.text();
      })
      .then(setContent)
      .catch(() => setFailed(true));
  }, []);

  return (
    <main className="page">
      <header className="intro">
        <img src={profile} alt="Hitesh Bhasin" className="intro-photo" />
        <div>
          <h1 className="intro-name">Hitesh Bhasin</h1>
          <p className="intro-title">Full-Stack Software Developer</p>
          <p className="intro-location">Winnipeg, MB, Canada</p>
          <nav className="intro-links">
            {links.map((l) => (
              <a key={l.label} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <article className="content">
        {failed && <p>Couldn't load this section. Please refresh the page.</p>}
        {!failed && !content && <p className="muted">Loading…</p>}
        {content && (
          <ReactMarkdown
            components={{
              a: ({ node, children, ...props }) => (
                <a {...props} target="_blank" rel="noreferrer">{children}</a>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        )}
      </article>

      <footer className="footer">© {new Date().getFullYear()} Hitesh Bhasin</footer>
    </main>
  );
};

export default Home;
