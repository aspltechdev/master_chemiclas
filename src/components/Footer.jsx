import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-grid-bg" />

      <div className="footer-container">

        {/* TOP */}
        <div className="footer-top">

          {/* BRAND */}
          <div className="footer-brand">

            <a href="#home" className="footer-logo">
              <img
                src="/logo.png"
                alt="Master Chemical Solution"
              />
            </a>

            <p>
              Specialised construction chemical systems for
              waterproofing, flooring, concrete repair and
              surface protection.
            </p>

            <a
              href="https://wa.me/917812043322?text=Hi%20Master%20Chemical%20Solution%2C%20I%20would%20like%20to%20discuss%20my%20project."
              target="_blank"
              rel="noreferrer"
              className="footer-start"
            >
              <span>Start a Conversation</span>
              <b>↗</b>
            </a>

          </div>


          {/* NAVIGATION */}
          <div className="footer-column">

            <span className="footer-column-title">
              EXPLORE
            </span>

            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#solutions">Solutions</a>
            <a href="#applications">Applications</a>
            <a href="#projects">Projects</a>
            <a href="#why-us">Why Us</a>

          </div>


          {/* SERVICES */}
          <div className="footer-column">

            <span className="footer-column-title">
              CAPABILITIES
            </span>

            <a href="#services">Waterproofing</a>
            <a href="#services">Industrial Flooring</a>
            <a href="#services">Concrete Repair</a>
            <a href="#services">PU & Epoxy Injection</a>
            <a href="#services">Protective Coatings</a>
            <a href="#services">Construction Chemicals</a>

          </div>


          {/* CONTACT */}
          <div className="footer-column footer-contact">

            <span className="footer-column-title">
              CONTACT
            </span>

            <span className="footer-contact-label">
              DISCUSS YOUR REQUIREMENT
            </span>

            <a
              href="tel:+917812043322"
              className="footer-phone"
            >
              +91 78120 43322
            </a>

            <a
              href="https://wa.me/917812043322"
              target="_blank"
              rel="noreferrer"
              className="footer-whatsapp"
            >
              WhatsApp
              <span>↗</span>
            </a>

            <span className="footer-contact-label footer-location-label">
              LOCATION
            </span>

            <p>
              Puducherry, India
            </p>

          </div>

        </div>


        {/* LARGE BRAND */}
        <div className="footer-brand-stage">

          <div className="footer-brand-word">
            MASTER
          </div>

          <div className="footer-brand-stage-line" />

          <div className="footer-brand-meta">

            <span>
              CHEMICAL SOLUTION
            </span>

            <span>
              WATERPROOFING · FLOORING · REPAIR · PROTECTION
            </span>

            <span>
              MCS / 01
            </span>

          </div>

        </div>


        {/* TECHNICAL STRIP */}
        <div className="footer-tech-strip">

          <div className="footer-tech-item">
            <span>01</span>
            <strong>WATERPROOFING</strong>
          </div>

          <div className="footer-tech-item">
            <span>02</span>
            <strong>FLOORING</strong>
          </div>

          <div className="footer-tech-item">
            <span>03</span>
            <strong>REPAIR</strong>
          </div>

          <div className="footer-tech-item">
            <span>04</span>
            <strong>PROTECTION</strong>
          </div>

        </div>


        {/* BOTTOM */}
        <div className="footer-bottom">

          <div className="footer-copyright">
            © {new Date().getFullYear()} Master Chemical Solution
          </div>

          <div className="footer-bottom-center">
            Built to Protect · Finished to Last
          </div>

          <a
            href="#home"
            className="footer-top-link"
          >
            BACK TO TOP
            <span>↑</span>
          </a>

        </div>

      </div>

    </footer>
  );
}