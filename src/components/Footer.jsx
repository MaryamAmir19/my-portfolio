import './Footer.css'

function Footer() {
  return (
    <footer className="about-footer">
      <div className="footer-top">
        <div className="footer-left">
          <p className="footer-heading">Contact</p>
          <div className="contact-links">
            <div className="contact-row">
              <span className="contact-label">Email</span>
              <a href="mailto:meriyumaamer0101@gmail.com" className="contact-value">meriyumaamer0101@gmail.com</a>
            </div>
            <div className="contact-row">
              <span className="contact-label">Phone</span>
              <a href="tel:+923188261253" className="contact-value">+92-318-826-1253</a>
            </div>
            <div className="contact-row">
              <span className="contact-label">LinkedIn</span>
              <a href="https://www.linkedin.com/in/maryamamir19" target="_blank" rel="noreferrer" className="contact-value">linkedin.com/in/maryamamir19</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <a href="mailto:meriyumaamer0101@gmail.com" className="footer-icon" title="Email">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
        </a>
        <a href="https://wa.me/923188261253" target="_blank" rel="noreferrer" className="footer-icon" title="WhatsApp">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/maryamamir19" target="_blank" rel="noreferrer" className="footer-icon" title="LinkedIn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
      </div>
    </footer>
  )
}

export default Footer