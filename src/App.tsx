import './App.css'

function App() {
  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <img src="/vite.svg" className="portfolio-logo" alt="Logo" />
        <h1>Debanjan Sumar</h1>
        <p className="portfolio-title">Full Stack Developer | Open Source Enthusiast</p>
        <nav className="portfolio-nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <section id="about" className="portfolio-section">
          <h2>About Me</h2>
          <p>
            Hi! I'm Debanjan, a passionate developer with experience in building web applications using React, Node.js, and more. I love solving problems and contributing to open source.
          </p>
        </section>
        <section id="projects" className="portfolio-section">
          <h2>Projects</h2>
          <div className="portfolio-projects">
            <div className="portfolio-project">
              <h3>Awesome Project 1</h3>
              <p>A web app that does amazing things. Built with React and Node.js.</p>
              <a href="https://github.com/debsumar/awesome-project-1" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
            <div className="portfolio-project">
              <h3>Open Source Contribution</h3>
              <p>Contributor to several open source projects, improving code and documentation.</p>
              <a href="https://github.com/debsumar" target="_blank" rel="noopener noreferrer">My GitHub</a>
            </div>
          </div>
        </section>
        <section id="contact" className="portfolio-section">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:debanjan@example.com">debanjan@example.com</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/debsumar" target="_blank" rel="noopener noreferrer">debsumar</a></p>
        </section>
      </main>
      <footer className="portfolio-footer">
        <p>&copy; {new Date().getFullYear()} Debanjan Sumar. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
