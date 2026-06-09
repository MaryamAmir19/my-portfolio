import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import './CaseStudy.css'

function CaseStudy() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) return <div className="not-found">Project not found.</div>

  return (
    <main className="case-page">
      <Link to="/work" className="back-link">← Back to work</Link>

      <div className="case-header">
        <p className="case-tag">{project.category} · {project.year}</p>
        <h1 className="case-title">{project.title}</h1>
        <p className="case-summary">{project.summary}</p>
      </div>

      <div className="case-cover">
        <span>{project.title} — Project visuals coming soon</span>
      </div>

      <div className="case-steps">
        <div className="case-step">
          <p className="step-num">01 — Problem</p>
          <h2 className="step-title">The challenge</h2>
          <p className="step-text">{project.problem}</p>
        </div>
        <div className="case-step">
          <p className="step-num">02 — Process</p>
          <h2 className="step-title">How I approached it</h2>
          <p className="step-text">{project.process}</p>
        </div>
        <div className="case-step">
          <p className="step-num">03 — Result</p>
          <h2 className="step-title">The outcome</h2>
          <p className="step-text">{project.result}</p>
        </div>
      </div>

      <div className="case-footer">
        <p>Interested in working together?</p>
        <a href="mailto:meriyumaamer0101@gmail.com" className="btn-primary">Get in touch</a>
      </div>
    </main>
  )
}

export default CaseStudy