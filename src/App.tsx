import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import './App.css';
import { experiences, contact } from './data';

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          <div className="logo-icon"></div>
          <div className="logo-text">
            <span>Debanjan</span>
            <span>Sumar</span>
          </div>
        </div>

        <div className="nav-links desktop-only">
          <button onClick={() => scrollToSection('work')}>Work</button>
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('blog')}>Blog</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <button onClick={() => scrollToSection('work')}>Work</button>
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('blog')}>Blog</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </div>
      )}

      {/* Hero Section */}
      <header className="hero-section">
        <h1 className="hero-title">
          FULL STACK <br /> DEVELOPER
        </h1>

        <div className="hero-intro">
          <div className="intro-col">
            <p>
              I'm currently orchestrating experiences at <strong>Kare4u Healthcare Solutions</strong>,
              building scalable mobile and web apps.
            </p>
          </div>
          <div className="intro-col">
            <p>
              I'm a passionate developer with over 3 years of experience
              who uses code, data, and thoughtful architecture to create delightful products that scale.
            </p>
          </div>
          <div className="intro-cta">
            <a href={`mailto:${contact.email}`} className="get-in-touch">
              GET IN TOUCH <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </header>

      {/* Showcase Grid Section */}
      <section id="work" className="showcase-section">
        <div className="grid-background">
          {/* Vertical Lines */}
          <div className="grid-line v-line" style={{ left: '10%' }}></div>
          <div className="grid-line v-line" style={{ left: '30%' }}></div>
          <div className="grid-line v-line" style={{ left: '50%' }}></div>
          <div className="grid-line v-line" style={{ left: '70%' }}></div>
          <div className="grid-line v-line" style={{ left: '90%' }}></div>

          {/* Horizontal Lines */}
          <div className="grid-line h-line" style={{ top: '10%' }}></div>
          <div className="grid-line h-line" style={{ top: '30%' }}></div>
          <div className="grid-line h-line" style={{ top: '50%' }}></div>
          <div className="grid-line h-line" style={{ top: '70%' }}></div>
          <div className="grid-line h-line" style={{ top: '90%' }}></div>
        </div>

        <div className="showcase-content">
          {/* Central Image */}
          <div className="central-image-container">
            <img
              src="https://github.com/debsumar.png"
              alt="Debanjan Sumar"
              className="central-image"
            />
          </div>

          {/* Stickers */}
          <div className="sticker sticker-circle sticker-cyan pos-1">
            <div className="sticker-content">
              <span>FULL STACK</span>
              <strong>DEVELOPMENT</strong>
              <span className="small">WEB & MOBILE</span>
            </div>
          </div>

          <div className="sticker sticker-rect sticker-pink pos-2">
            <div className="sticker-content">
              <strong>FLUTTER</strong>
              <span>EXPERT</span>
            </div>
          </div>

          <div className="sticker sticker-rect sticker-yellow pos-3">
            <div className="sticker-content">
              <strong>AWS CLOUD</strong>
              <span>ARCHITECTURE</span>
            </div>
          </div>

          <div className="sticker sticker-rect sticker-orange pos-4">
            <div className="sticker-content">
              <strong>BACKEND</strong>
              <span>SYSTEMS</span>
            </div>
          </div>

          <div className="sticker sticker-rect sticker-cyan-rect pos-5">
            <div className="sticker-content">
              <strong>REACT & NODE</strong>
              <span>ECOSYSTEM</span>
            </div>
          </div>

          <div className="sticker sticker-circle sticker-green pos-6">
            <div className="sticker-content circular-text">
              <svg viewBox="0 0 100 100" width="100" height="100">
                <path id="curve" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent" />
                <text>
                  <textPath href="#curve" fill="currentColor">
                    CLEAN CODE • SCALABLE •
                  </textPath>
                </text>
              </svg>
              <div className="center-icon">⚡</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="content-section dark-bg">
        <div className="container">
          <h2 className="section-title">SELECTED WORKS</h2>
          <div className="projects-grid">
            {experiences[0].projects?.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-info">
                  <h3>{project.name}</h3>
                  <p className="project-tech">{project.technologies}</p>
                  <span className="project-year">{project.period}</span>
                </div>
                <div className="project-arrow">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="about" className="content-section light-bg">
        <div className="container">
          <h2 className="section-title dark-text">EXPERIENCE</h2>
          <div className="experience-list">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="exp-header">
                  <h3 className="exp-role">{exp.title}</h3>
                  <span className="exp-company">{exp.company}</span>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <ul className="exp-desc">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="content-section dark-bg contact-section">
        <div className="container">
          <h2 className="section-title">LET'S TALK</h2>
          <div className="contact-links">
            <a href={`mailto:${contact.email}`} className="big-link">
              {contact.email}
            </a>
            <div className="social-links">
              <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Additional Content placeholder */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Debanjan Sumar</p>
      </footer>
    </div>
  );
};

export default App;