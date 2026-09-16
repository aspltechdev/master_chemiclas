import "./WhyUs.css";
const reasons = [
  {
    number: "01",
    title: "Application-led thinking",
    short: "RIGHT SYSTEM",
    text:
      "Every project begins with understanding the surface, environment, exposure and expected performance before selecting a system.",
  },
  {
    number: "02",
    title: "Multiple systems",
    short: "ONE PARTNER",
    text:
      "Waterproofing, flooring, injection, concrete repair, strengthening and protective coatings brought together under one specialised offering.",
  },
  {
    number: "03",
    title: "Built around performance",
    short: "ENGINEERED SURFACES",
    text:
      "Systems are selected for the actual demands of the application — from wet areas and exposed structures to industrial and high-traffic surfaces.",
  },
  {
    number: "04",
    title: "Project-focused execution",
    short: "SITE REQUIREMENTS",
    text:
      "A practical approach focused on application requirements, surface conditions and the intended performance of the finished system.",
  },
];

const capabilities = [
  "WATERPROOFING",
  "EPOXY FLOORING",
  "PU FLOORING",
  "CONCRETE REPAIR",
  "INJECTION SYSTEMS",
  "PROTECTIVE COATINGS",
];

export default function WhyUs() {
  return (
    <section className="why-section" id="why-us">
      <div className="why-bg-grid" />

      <div className="why-container">

        {/* TOP HEADER */}
        <div className="why-header">

          <div className="why-header-left">
            <span className="section-kicker">
              WHY MASTER CHEMICAL SOLUTION
            </span>

            <h2>
              Surface
              <br />
              <em>thinking.</em>
            </h2>
          </div>

          <div className="why-header-right">

            <div className="why-header-number">
              <span>01</span>
              <i />
              <strong>APPROACH</strong>
            </div>

            <p>
              Construction surfaces are not all the same. The right solution
              starts with understanding the application and ends with a
              system designed around its performance requirements.
            </p>

          </div>

        </div>

        {/* MANIFESTO */}
        <div className="why-manifesto">

          <div className="why-manifesto-mark">
            <span>M</span>
          </div>

          <div className="why-manifesto-content">

            <span className="why-manifesto-label">
              OUR APPROACH
            </span>

            <h3>
              Understand the surface.
              <br />
              Select the system.
              <br />
              <em>Build for performance.</em>
            </h3>

          </div>

          <div className="why-manifesto-side">
            <span>MASTER CHEMICAL SOLUTION</span>

            <p>
              Waterproofing · Flooring · Repair · Protection
            </p>

            <div className="why-manifesto-arrow">
              ↘
            </div>
          </div>

        </div>

        {/* REASONS */}
        <div className="why-content">

          <div className="why-content-intro">

            <span>WHAT DEFINES OUR APPROACH</span>

            <p>
              We bring specialised construction chemical systems together
              to solve different surface and protection requirements across
              a project.
            </p>

          </div>

          <div className="why-list">

            {reasons.map((reason) => (
              <article
                className="why-item"
                key={reason.number}
              >

                <div className="why-item-number">
                  {reason.number}
                </div>

                <div className="why-item-main">

                  <div className="why-item-heading">

                    <div>
                      <span>{reason.short}</span>

                      <h3>
                        {reason.title}
                      </h3>
                    </div>

                    <b>↗</b>

                  </div>

                  <p>
                    {reason.text}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </div>

        {/* CAPABILITY STRIP */}
        <div className="why-capability">

          <div className="why-capability-heading">
            <span>CORE CAPABILITIES</span>
            <strong>06</strong>
          </div>

          <div className="why-capability-list">

            {capabilities.map((capability, index) => (
              <div
                className="why-capability-item"
                key={capability}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>
                  {capability}
                </strong>

                <b>↗</b>
              </div>
            ))}

          </div>

        </div>

        {/* BOTTOM */}
        <div className="why-bottom">

          <div className="why-bottom-left">
            <span />
            <strong>
              FROM SUBSTRATE TO FINISH
            </strong>
          </div>

          <p>
            One specialised partner for waterproofing, flooring,
            repair and surface protection requirements.
          </p>

          <a
            href="https://wa.me/917812043322?text=Hi%20Master%20Chemical%20Solution%2C%20I%20would%20like%20to discuss my project."
            target="_blank"
            rel="noreferrer"
          >
            Talk About Your Project
            <span>↗</span>
          </a>

        </div>

      </div>
    </section>
  );
}