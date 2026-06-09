import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import './Home.css'

function Home() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-left">
          <p className="hero-tag">UI / UX Designer</p>
          <h1 className="hero-title">
            Hello, my name is&nbsp;&nbsp;<span>Maryam Amir</span>
          </h1>
          <p className="hero-sub">
            I'm graduated with a Bachelor's (Honours) in Computer Science, specialising in UI/UX and Visual Design.
          </p>
          <p className="hero-sub">
            I'm passionate about crafting user-centred digital experiences — for web and mobile — that are both intuitive and visually compelling. I love asking <em>why</em> before jumping into design, and I thrive across the full design process: from wireframing and prototyping to high-fidelity UI and branding.
          </p>
          <p className="hero-sub">
            Feel free to explore my work — if you're looking for a designer who brings both creative craft and product thinking to the table, I'd love to connect. Your interest means the world!
          </p>
          <div className="hero-btns">
            <Link to="/work" className="btn-primary">View my work</Link>
            <a href="mailto:meriyumaamer0101@gmail.com" className="btn-secondary">Get in touch</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-blob">
            <img src="" alt="Maryam Amir" className="hero-photo" />
          </div>
        </div>
      </section>

      {/* ── SKILLS & TOOLS ── */}
      <section className="skills-section">
        <h2 className="skills-heading">Skills & Tools</h2>

        <div className="skills-grid">

          <div className="skills-card">
            <h3 className="skills-card-title">Design Skills & Tools</h3>
            <ul className="skills-list">
              <li>UI Design</li>
              <li>UX Research</li>
              <li>Wireframing & Prototyping</li>
              <li>Design Systems</li>
              <li>Visual Design & Branding</li>
              <li>Responsive Web Design</li>
              <li>Mobile App Design</li>
              <li>Figma</li>
            </ul>
          </div>

          <div className="skills-card">
            <h3 className="skills-card-title">Soft Skills</h3>
            <ul className="skills-list">
              <li>Problem Solving</li>
              <li>User Empathy</li>
              <li>Communication</li>
              <li>Attention to Detail</li>
              <li>Team Collaboration</li>
              <li>Time Management</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ── STATEMENT BANNER ── */}
      <section className="statement-section">
        <h2 className="statement-text">
          Let's make <span className="statement-italic">something</span> real.
        </h2>
        <p className="statement-sub">Available for freelance work — UI/UX design and product design</p>
      </section>

      {/* ── SELECTED WORK ── */}
      <section className="featured">
        <p className="section-label">Selected work</p>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={project.id} className={`project-row ${index % 2 !== 0 ? 'reverse' : ''}`}>
              <div className="project-row-image" style={{ background: project.color }}></div>
              <div className="project-row-text">
                <p className="card-tag">{project.category}</p>
                <h3 className="project-row-title">{project.title}</h3>
                <p className="project-row-desc">{project.summary}</p>
                <Link to={`/case-study/${project.id}`} className="project-row-link">View case study →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}

export default Home