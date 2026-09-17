import "./About.css";

const aboutStats = [
  {
    value: "04",
    label: "CORE",
    text: "Solution Categories",
  },
  {
    value: "30+",
    label: "SYSTEMS",
    text: "Specialised Applications",
  },
  {
    value: "15+",
    label: "PROJECTS",
    text: "Project / Client Experiences",
  },
  {
    value: "01",
    label: "APPROACH",
    text: "Surface-to-System Thinking",
  },
];

const capabilities = [
  "Waterproofing",
  "Industrial Flooring",
  "PU & Epoxy Systems",
  "Concrete Repair",
  "Injection Systems",
  "RCC Strengthening",
  "Protective Coatings",
  "Surface Treatment",
];

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-bg-grid" />
      <div className="about-glow about-glow-one" />
      <div className="about-glow about-glow-two" />

      <div className="about-container">

        {/* HEADER */}
        <div className="about-header">
          <div className="about-heading">
            <div className="about-kicker">
              <span />
              ABOUT MASTER CHEMICAL SOLUTION
            </div>

            <h2>
              Built around
              <br />
              <em>the surface.</em>
            </h2>
          </div>

          <div className="about-header-copy">
            <div className="about-header-code">
              <span>MCS / COMPANY PROFILE</span>
              <strong>01 — ABOUT</strong>
            </div>

            <p>
              Master Chemical Solution provides specialised construction
              chemical systems for waterproofing, flooring, concrete repair,
              strengthening and surface protection applications.
            </p>

            <p>
              Our approach starts with understanding the surface, site
              conditions and performance requirement — then selecting the
              appropriate system for the application.
            </p>
          </div>
        </div>

        {/* MAIN STORY */}
        <div className="about-story">

          {/* IMAGE */}
          <div className="about-image-wrap">
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=90"
                alt="Construction chemical application"
              />

              <div className="about-image-overlay" />

              <div className="about-image-top">
                <span>FIELD APPLICATION</span>
                <strong>CONSTRUCTION SYSTEMS</strong>
              </div>

              <div className="about-image-mark">
                <span>M</span>
              </div>

              <div className="about-image-bottom">
                <span>ENGINEERED SURFACES</span>
                <span>01 / 04</span>
              </div>
            </div>

            <div className="about-image-accent" />
          </div>

          {/* CONTENT */}
          <div className="about-story-content">

            <div className="about-story-index">
              <span>01</span>
              <div />
              <span>OUR APPROACH</span>
            </div>

            <h3>
              Construction chemicals
              <br />
              <span>with a purpose.</span>
            </h3>

            <p className="about-lead">
              Every structure has a different requirement. Exposure,
              substrate condition, moisture, traffic, usage and environment
              all influence how a system should perform.
            </p>

            <p>
              Master Chemical Solution brings together specialised systems
              across waterproofing, industrial flooring, repair, injection,
              strengthening and protective coatings. Rather than treating
              every project the same, we focus on the application and the
              performance expected from the finished surface.
            </p>

            <div className="about-divider" />

            <div className="about-principle">
              <div className="about-principle-icon">
                <span />
              </div>

              <div>
                <span>OUR PRINCIPLE</span>
                <strong>
                  Understand the surface.
                  <br />
                  Select the right system.
                </strong>
              </div>
            </div>

            <a href="#contact-form" className="about-link">
              <span>Discuss Your Project</span>
              <b>↗</b>
            </a>
          </div>
        </div>

        {/* STATS */}
        <div className="about-stats">
          {aboutStats.map((stat) => (
            <article className="about-stat" key={stat.value + stat.label}>
              <div className="about-stat-number">
                {stat.value}
              </div>

              <div className="about-stat-content">
                <span>{stat.label}</span>
                <strong>{stat.text}</strong>
              </div>

              <div className="about-stat-arrow">↗</div>
            </article>
          ))}
        </div>

        {/* CAPABILITY MATRIX */}
        <div className="about-capabilities">

          <div className="about-capabilities-intro">
            <div className="about-capabilities-kicker">
              <span />
              WHAT WE BRING TO THE PROJECT
            </div>

            <h3>
              One specialised
              <br />
              <em>solution partner.</em>
            </h3>

            <p>
              From waterproofing and flooring to concrete restoration and
              protective systems, our capabilities cover multiple stages of
              surface performance.
            </p>
          </div>

          <div className="about-capability-grid">
            {capabilities.map((item, index) => (
              <div
                className="about-capability"
                key={item}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{item}</strong>

                <b>↗</b>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM TECHNICAL STRIP */}
        <div className="about-bottom">
          <div className="about-bottom-left">
            <span className="about-red-line" />
            <strong>FROM SUBSTRATE TO FINISH</strong>
          </div>

          <div className="about-bottom-center">
            <span>DIAGNOSE</span>
            <b>→</b>
            <span>SELECT</span>
            <b>→</b>
            <span>APPLY</span>
            <b>→</b>
            <span>PROTECT</span>
          </div>

          <div className="about-bottom-code">
            MCS / 01
          </div>
        </div>

      </div>
    </section>
  );
}