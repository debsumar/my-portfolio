// App.tsx with animations integrated
import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Linkedin, Github, MapPin, Code, Briefcase, Award, Layers } from 'lucide-react';
import './App.css';
import initAllAnimations from './animation'; // Import the animation functions

// Define types for our state and props
interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

// Skills type
type Skill = string;
type Interest = string;

// Project type
interface Project {
  title: string;
  date: string;
  description: string;
  technologies: string[];
}

// Experience type
interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  projects?: {
    name: string;
    period: string;
    technologies: string;
  }[];
}

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Skills data
  const skills: Skill[] = [
    'Flutter', 'Node', 'Ionic', 'JavaScript', 'NestJS', 'Git',
    'TypeORM', 'AWS Cloud', 'SQL', 'LLD', 'Docker', 'Dart',
    'TypeScript', 'MCP', 'iOS/Android'
  ];

  // Interests data
  const interests: Interest[] = ['Responsive Design', 'Clean Architecture', 'Generative AI'];

  // Projects data
  const projects: Project[] = [
    {
      title: 'Random Lottie Generator',
      date: 'March 2021',
      description: 'Flutter app that displays dynamic animations pre-page load; enhanced UI engagement.',
      technologies: ['Flutter', 'Lottie', 'Animation']
    },
    {
      title: 'MPin',
      date: 'January 2021',
      description: 'Custom lock screen with Flutter to demonstrate user interaction security and smooth UX.',
      technologies: ['Flutter', 'Security', 'UX Design']
    }
  ];

  // Experience data
  const experiences: Experience[] = [
    {
      title: 'Software Engineer',
      company: 'Kare4u Healthcare Solutions Pvt Ltd.',
      period: '2021 - Present',
      description: [
        'Mobile App Development across multiple platforms for different clients.',
        'Built scalable backend APIs using NestJS, PostgreSQL & GraphQL; deployed on AWS Lambda & ECS.',
        'Engineered server-driven UI system in Flutter, enabling real-time dynamic screens across apps.',
        'Developed high-performance Nest APIs, utilizing Type ORM and PostgreSQL, with GraphQL and REST.',
        'Developed seamless real-time chat across three apps using Ionic, Firebase, Flutter for enhancing user engagement.'
      ],
      projects: [
        {
          name: 'ActivityPro',
          period: '2022-till date',
          technologies: 'Flutter, Ionic, TypeScript, AWS Cloud, NestJS'
        },
        {
          name: 'One Wellbeing',
          period: '2023',
          technologies: 'Flutter, REST, Azure'
        },
        {
          name: 'Ownlife',
          period: '2021',
          technologies: 'Flutter'
        },
        {
          name: 'Sitemaster',
          period: '2021',
          technologies: 'Flutter, NodeJS, AWS Cloud'
        }
      ]
    },
    {
      title: 'Intern',
      company: 'Kare4u Healthcare Solutions Pvt Ltd.',
      period: '2020 - 2021',
      description: [
        'Platform enhancement: Created and integrated GraphQL APIs into the app (Sports Club Activity Management app)',
        'Integrated Lottie animations for a more engaging app interface.',
        'Developed UI using Ionic and Flutter as per the UX provided by the business team'
      ]
    }
  ];

  // Initialize animations and handle scroll section updates
  useEffect(() => {
    // Initialize all animations
    initAllAnimations();

    // Track active section on scroll
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (!element) return;

        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string): void => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  // Section component to keep consistent styling
  const Section: React.FC<SectionProps> = ({ id, title, children }) => (
    <section id={id} className={`section ${id === 'experience' || id === 'projects' ? 'section-alt' : ''}`}>
      <div className="container">
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
    </section>
  );

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container navbar-container">
          <div className="navbar-content">
            <div className="logo">Debanjan Sumar</div>

            {/* Desktop Navigation */}
            <div className="nav-links">
              {['home', 'about', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`nav-link ${activeSection === section ? 'active' : ''}`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="mobile-menu-btn">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="mobile-menu">
              {['home', 'about', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`mobile-nav-link ${activeSection === section ? 'active' : ''}`}
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title reveal">
              Hi, I'm <span className="accent">Debanjan Sumar</span>
            </h1>
            <h2 className="hero-subtitle reveal">
              Full Stack Developer
            </h2>
            <p className="hero-description reveal">
              Results-oriented developer with 3+ years of experience building scalable,
              cross-platform mobile and web apps using Flutter, Node, and AWS.
            </p>
            <div className="hero-buttons reveal">
              <button
                onClick={() => scrollToSection('contact')}
                className="btn btn-primary"
              >
                Contact Me
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="btn btn-secondary"
              >
                View Projects
              </button>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://github.com/debsumar.png"
              alt="Debanjan Sumar GitHub Avatar"
              className="avatar"
              style={{ width: 400, height: 400, borderRadius: '50%', objectFit: 'cover', border: '4px solid #4f46e5', background: '#fff' }}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="About Me">
        <div className="about-grid">
          <div className="about-col reveal">
            <h3 className="sub-heading">Who I Am</h3>
            <p className="text">
              I'm a passionate Full Stack Developer based in Bhubaneswar, Odisha, with over 3 years of professional
              experience. I specialize in building scalable, cross-platform mobile and web applications
              that deliver exceptional user experiences.
            </p>
            <p className="text">
              My expertise lies in server-driven UI systems, real-time features, and cloud-native deployments.
              I have successfully delivered SaaS platforms used by over 100 customers.
            </p>
            <div className="languages">
              <h3 className="sub-heading">Languages</h3>
              <div className="lang-list">
                <p className="text">English (Fluent)</p>
                <p className="text">Hindi (Proficient)</p>
                <p className="text">Bengali (Native)</p>
              </div>
            </div>
          </div>
          <div className="about-col reveal">
            <h3 className="sub-heading">My Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="skill-item"
                >
                  {skill}
                </div>
              ))}
            </div>
            <div className="interests">
              <h3 className="sub-heading">Interests</h3>
              <div className="interests-list">
                {interests.map((interest) => (
                  <span key={interest} className="interest-tag">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Professional Experience">
        <div className="experience-list">
          {experiences.map((experience, index) => (
            <div key={index} className="experience-card reveal">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">{experience.title}</h3>
                  <p className="experience-company">{experience.company}</p>
                </div>
                <div className="experience-period">
                  <span className="period-tag">
                    {experience.period}
                  </span>
                </div>
              </div>
              <ul className="experience-description">
                {experience.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              {experience.projects && (
                <div className="key-projects">
                  <h4 className="projects-heading">Key Projects:</h4>
                  <div className="projects-list">
                    {experience.projects.map((project, i) => (
                      <div key={i} className="project-item">
                        <p className="project-name">{project.name} ({project.period})</p>
                        <p className="project-tech">{project.technologies}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Education Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-card reveal">
            <div className="education-header">
              <div>
                <h3 className="education-degree">B. Tech in Computer Science Engineering</h3>
                <p className="education-school">Lovely Professional University</p>
              </div>
              <div>
                <span className="period-tag">
                  2017 - 2021
                </span>
              </div>
            </div>
            <p className="education-grade">1st Class</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <Section id="projects" title="Personal Projects">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card reveal">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-date">{project.date}</div>
              <p className="project-description">
                {project.description}
              </p>
              <div className="tech-tags">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Contact Me">
        <div className="contact-grid">
          <div className="contact-form-container reveal">
            <h3 className="sub-heading">Get In Touch</h3>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="contact-form"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>Don't fill this out if you're human: <input name="bot-field" /></label>
              </p>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full">
                Send Message
              </button>
            </form>
          </div>
          <div className="contact-info reveal">
            <h3 className="sub-heading">Contact Information</h3>
            <div className="contact-list">
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="contact-label">Email</h4>
                  <a href="mailto:junesumar0106@gmail.com" className="contact-link">
                    junesumar0106@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h4 className="contact-label">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/debsumar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    linkedin.com/in/debsumar
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <Github size={24} />
                </div>
                <div>
                  <h4 className="contact-label">GitHub</h4>
                  <p className="contact-text">Connect with me on GitHub for code samples</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="contact-label">Location</h4>
                  <p className="contact-text">Bhubaneswar, Odisha, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <div className="footer-logo">Debanjan Sumar</div>
              <p className="footer-tagline">Full Stack Developer</p>
            </div>
            <div className="footer-links">
              <a
                href="https://www.linkedin.com/in/debsumar/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:junesumar0106@gmail.com"
                className="footer-link"
              >
                <Mail size={20} />
              </a>
              <a
                href="#"
                className="footer-link"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
          <div className="footer-copyright">
            © {new Date().getFullYear()} Debanjan Sumar. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;