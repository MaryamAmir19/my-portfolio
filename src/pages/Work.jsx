import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import './Work.css'

function Work() {
  return (
    <main className="work-page">
      <div className="work-header">
        <p className="section-label">All work</p>
        <h1 className="work-title">Selected projects</h1>
        <p className="work-sub">A collection of UI/UX design work across mobile apps and websites.</p>
      </div>
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
    </main>
  )
}

export default Work