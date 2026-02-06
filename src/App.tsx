import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Copy, Check, Zap } from 'lucide-react';
import { experiences, contact, skills, projects } from './data';

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };


  return (
    <div className="app-container">

      <div className="grain-overlay" aria-hidden="true" />

      <nav className="navbar nav-motion">
        <div className="logo">
          <div className="logo-icon">
            <Zap size={20} fill="currentColor" />
          </div>
          <div className="logo-text">
            <span>Debanjan</span>
            <span>Sumar</span>
          </div>
        </div>

        <div className="nav-links desktop-only">
          <button onClick={() => scrollToSection('work')}>Work</button>
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </div>

        <p className="status-chip desktop-only">OPEN FOR REMOTE PRODUCT BUILDS</p>

        <button
          className="mobile-menu-btn brutal-button"
          aria-label="Toggle menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <button className="brutal-button" onClick={() => scrollToSection('work')}>Work</button>
          <button className="brutal-button" onClick={() => scrollToSection('about')}>About</button>
          <button className="brutal-button" onClick={() => scrollToSection('contact')}>Contact</button>
        </div>
      )}

      <header className="hero-section">
        <p className="hero-kicker">4+ YEARS OF SHIPPING POLISHED SAAS</p>
        <h1 className="hero-title">
          FULL STACK
          <br />
          DEVELOPER
        </h1>

        <div className="hero-intro">
          <div className="bento-intro-v1">
            <div className="bento-main-bio brutal-card">
              <p>
                I engineer high-performance mobile and web experiences at <strong>ActivityPro</strong>,
                specializing in the intersection of scalable cloud backends and fluid mobile journeys.
              </p>
            </div>
            <div className="bento-sidebar">
              <div className="metric-box brutal-card">
                <span className="metric-value">50K+</span>
                <span className="metric-label">App Users</span>
              </div>
              <a href="#contact" className="bento-cta brutal-card">
                GET IN TOUCH <ArrowUpRight size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* KEY SKILLS: TECHNICAL BLUEPRINT */}
        <div className="skills-wall blueprint-grid">
          <div className="skills-wall-header">
            <h2>Key Skills</h2>
            <div className="line" />
          </div>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <span key={`v2-${skill}-${index}`} className="skill-pill">{skill}</span>
            ))}
          </div>
        </div>
      </header >

      <section id="work" className="content-section light-bg">
        <div className="container">
          <h2 className="section-title dark-text">MY WORK</h2>
          <div className="projects-grid">
            {projects.map((project, index) => {
              const accentClasses = ['accent-lime', 'accent-blue', 'accent-pink', 'accent-orange'];
              const accentClass = accentClasses[index % accentClasses.length];

              return (
                <a
                  key={index}
                  href={project.link || '#'}
                  target={project.link ? "_blank" : "_blank"}
                  rel="noreferrer"
                  className={`project-card brutal-card ${accentClass}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div className="project-accent-bar" />
                  <div className="project-card-body">
                    <div className="project-info">
                      <div className="project-meta-top">
                        <span className="project-category">{project.category}</span>
                        <span className="project-status-badge">LIVE ⚡</span>
                      </div>
                      <h3>{project.title}</h3>
                      <p className="project-desc">{project.description}</p>

                      <div className="project-tech-tags">
                        {project.technologies.slice(0, 4).map((tech, i) => (
                          <span key={i} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>

                    <div className="project-footer">
                      <span className="project-year">{project.date}</span>
                      <div className="project-arrow-box">
                        <span className="view-text">VIEW CASE</span>
                        <div className="project-arrow">
                          <ArrowUpRight size={18} />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="content-section light-bg">
        <div className="container">
          <h2 className="section-title dark-text">CAREER OVERVIEW</h2>
          <div className="experience-list">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item brutal-card">
                <div className="exp-dot" />
                <div className="exp-header">
                  <div className="exp-role-row">
                    <h3 className="exp-role">{exp.title}</h3>
                    <span className="exp-period">{exp.period}</span>
                  </div>
                  <div className="exp-meta-row">
                    <span className="exp-company">{exp.company}</span>
                  </div>
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

      <section id="interests" className="showcase-section">
        <div className="grid-background" aria-hidden="true">
          <div className="grid-line v-line" style={{ left: '10%' }} />
          <div className="grid-line v-line" style={{ left: '30%' }} />
          <div className="grid-line v-line" style={{ left: '50%' }} />
          <div className="grid-line v-line" style={{ left: '70%' }} />
          <div className="grid-line v-line" style={{ left: '90%' }} />
          <div className="grid-line h-line" style={{ top: '10%' }} />
          <div className="grid-line h-line" style={{ top: '30%' }} />
          <div className="grid-line h-line" style={{ top: '50%' }} />
          <div className="grid-line h-line" style={{ top: '70%' }} />
          <div className="grid-line h-line" style={{ top: '90%' }} />
        </div>

        <div className="showcase-header">
          <h2 className="section-title dark-text">INTERESTS</h2>
          <p>
            I specialize in building high-availability systems that scale. From engineering server-driven UI engines to
            integrating LLMs via RAG and AWS Bedrock, I focus on products that solve complex challenges with 99.9% uptime.
          </p>
        </div>

        <div className="showcase-content">
          <div className="central-image-container brutal-card">
            <img
              src="https://github.com/debsumar.png"
              alt="Debanjan Sumar"
              className="central-image"
            />
          </div>

          <div className="sticker sticker-circle sticker-cyan pos-1">
            <div className="sticker-content">
              <span>ENGINEERING</span>
              <strong>SERVER DRIVEN</strong>
              <span className="small">UI ENGINES</span>
            </div>
          </div>

          <div className="sticker sticker-rect sticker-pink pos-2">
            <div className="sticker-content">
              <strong>LLM & RAG</strong>
              <span>INTEGRATION</span>
            </div>
          </div>

          <div className="sticker sticker-rect sticker-yellow pos-3">
            <div className="sticker-content">
              <strong>99.9% UPTIME</strong>
              <span>SAAS SYSTEMS</span>
            </div>
          </div>

          <div className="sticker sticker-rect sticker-orange pos-4">
            <div className="sticker-content">
              <strong>FLUTTER ARCHITECT</strong>
              <span>50K+ USERS</span>
            </div>
          </div>

          <div className="sticker sticker-rect sticker-cyan-rect pos-5">
            <div className="sticker-content">
              <strong>HIGH-PERFORMANCE</strong>
              <span>FLUTTER APPS</span>
            </div>
          </div>

          <div className="sticker sticker-circle sticker-green pos-6">
            <div className="sticker-content circular-text">
              <svg viewBox="0 0 100 100" width="100" height="100">
                <path id="curve" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent" />
                <text>
                  <textPath href="#curve" fill="currentColor">
                    SCALABLE APIS • REAL TIME •
                  </textPath>
                </text>
              </svg>
              <div className="center-icon">⚡</div>
            </div>
          </div>
        </div>
      </section>



      <section id="contact" className="content-section dark-bg contact-section">
        <div className="container">
          <h2 className="section-title">LET&apos;S TALK</h2>

          <div className="contact-grid">
            <div className="email-primary brutal-card">
              <span className="email-label">GOT A PROJECT IN MIND?</span>
              <div className="email-action-row">
                <a href={`mailto:${contact.email}`} className="email-address">
                  {contact.email}
                </a>
                <button
                  onClick={copyToClipboard}
                  className="copy-trigger brutal-button"
                  aria-label="Copy email"
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                  <span>{copied ? 'COPIED!' : 'COPY'}</span>
                </button>
              </div>
            </div>

            <div className="social-bento">
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className="social-item brutal-card linkedin">
                <div className="social-info">
                  <span className="social-label">NETWORKING</span>
                  <span className="social-value">LINKEDIN</span>
                </div>
                <ArrowUpRight size={20} />
              </a>
              <a href={contact.github} target="_blank" rel="noreferrer" className="social-item brutal-card github">
                <div className="social-info">
                  <span className="social-label">SOURCE CODE</span>
                  <span className="social-value">GITHUB</span>
                </div>
                <ArrowUpRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Debanjan Sumar</p>
      </footer>
    </div >
  );
};

export default App;
