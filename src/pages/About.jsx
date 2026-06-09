import './About.css'

function About() {
  return (
    <>
      <main className="about-page">
        <div className="about-header">
          <p className="section-label">About me</p>
          <h1 className="about-title">I design interfaces people <span>love to use</span></h1>
        </div>

        <div className="about-content">
          <div className="about-bio">
            <p>Hi, I'm Maryam Amir — a UI/UX designer passionate about creating digital products that feel natural and effortless to use.</p>
            <p>I specialize in turning complex problems into clean, intuitive interfaces — whether that's a mobile app, a web platform, or a brand website.</p>
            <p>My process is grounded in user research and real empathy for the people using the products I design. I believe great design is invisible — it just works.</p>
            <a href="mailto:meriyumaamer0101@gmail.com" className="btn-primary">Work with me</a>
          </div>

          <div className="about-skills">
            <p className="skills-label">Design skills</p>
            <ul>
              <li>Information Architecture (IA)</li>
              <li>Usability Testing</li>
              <li>UI Design</li>
              <li>UX Research</li>
              <li>Wireframing & Prototyping</li>
              <li>Visual Design</li>
              <li>Design Systems</li>
              <li>User Testing</li>
            </ul>
          </div>

          <div className="about-skills">
            <p className="skills-label">Tools</p>
            <ul>
              <li>Figma</li>
              <li>React.js</li>
              <li>GitHub</li>
              <li>VS Code</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}

export default About