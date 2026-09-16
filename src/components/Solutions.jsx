import { useState } from "react";
import "./Solutions.css";

const solutions = [
  {
    id: "01",
    category: "WATERPROOFING",
    title: "PU Waterproofing",
    subtitle: "Seamless protection against water ingress.",
    description:
      "Seamless waterproofing systems designed to protect critical structures from water ingress, moisture penetration and exposure-related damage.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=85",
    applications: [
      "Terrace",
      "Podium",
      "Basement",
      "Lift Pit",
    ],
    performance: [
      "Seamless membrane",
      "Water resistant",
      "Flexible system",
    ],
  },

  {
    id: "02",
    category: "INDUSTRIAL FLOORING",
    title: "Epoxy Flooring",
    subtitle: "High-performance floors for demanding environments.",
    description:
      "Durable resin flooring systems engineered for industrial, commercial, institutional and high-traffic environments.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=2000&q=85",
    applications: [
      "Factories",
      "Warehouses",
      "Commercial",
      "Institutional",
    ],
    performance: [
      "High durability",
      "Chemical resistant",
      "Easy maintenance",
    ],
  },

  {
    id: "03",
    category: "RESIN FLOORING",
    title: "PU Resin Flooring",
    subtitle: "Resilient surfaces built for performance.",
    description:
      "Polyurethane flooring systems designed for environments requiring flexibility, durability, impact resistance and long-term performance.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2000&q=85",
    applications: [
      "Industrial",
      "Heavy Duty",
      "High Traffic",
      "Commercial",
    ],
    performance: [
      "Impact resistant",
      "Flexible finish",
      "Heavy duty",
    ],
  },

  {
    id: "04",
    category: "CONCRETE REPAIR",
    title: "Repair & Strengthening",
    subtitle: "Restore concrete. Reinforce performance.",
    description:
      "Specialised repair, injection and strengthening systems for damaged, aging and structurally demanding concrete surfaces.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=85",
    applications: [
      "PU Injection",
      "Epoxy Injection",
      "RCC Repair",
      "Anchoring",
    ],
    performance: [
      "Crack treatment",
      "Structural repair",
      "Strengthening",
    ],
  },
];

export default function Solutions() {
  const [activeSolution, setActiveSolution] = useState(0);

  const solution = solutions[activeSolution];

  return (
    <section className="solutions-section" id="solutions">

      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="solutions-bg-grid" />

      <div className="solutions-container">

        {/* =========================================
            HEADER
        ========================================= */}

        <div className="solutions-header">

          <div className="solutions-heading">

            <span className="section-kicker">
              FEATURED SOLUTIONS
            </span>

            <h2>
              Engineered
              <br />
              <em>for the surface.</em>
            </h2>

          </div>

          <div className="solutions-header-info">

            <div className="solutions-counter">

              <strong>
                {solution.id}
              </strong>

              <span>
                / 04
              </span>

            </div>

            <p>
              From waterproofing systems to industrial
              flooring and concrete restoration, every
              solution is selected around the actual
              demands of the project.
            </p>

          </div>

        </div>


        {/* =========================================
            FEATURED SOLUTION
        ========================================= */}

        <div className="solutions-feature">

          {/* IMAGE */}

          <div className="solutions-feature-image">

            {solutions.map((item, index) => (
              <img
                key={item.id}
                src={item.image}
                alt={item.title}
                className={
                  index === activeSolution
                    ? "active"
                    : ""
                }
              />
            ))}

            <div className="solutions-image-overlay" />

            <div className="solutions-image-number">
              {solution.id}
            </div>

            <div className="solutions-image-caption">
              <span>MASTER CHEMICAL SOLUTION</span>
              <strong>
                ENGINEERED SURFACE SYSTEM
              </strong>
            </div>

          </div>


          {/* CONTENT */}

          <div className="solutions-feature-content">

            <div className="solutions-feature-top">

              <span>
                {solution.category}
              </span>

              <div>
                SOLUTION
                <strong>{solution.id}</strong>
              </div>

            </div>


            <div className="solutions-feature-body">

              <h3>
                {solution.title}
              </h3>

              <h4>
                {solution.subtitle}
              </h4>

              <p>
                {solution.description}
              </p>


              {/* Applications */}

              <div className="solutions-detail-group">

                <span>
                  APPLICATIONS
                </span>

                <div className="solutions-tags">

                  {solution.applications.map(
                    (item) => (
                      <span key={item}>
                        {item}
                      </span>
                    )
                  )}

                </div>

              </div>


              {/* Performance */}

              <div className="solutions-detail-group">

                <span>
                  SYSTEM CHARACTERISTICS
                </span>

                <div className="solutions-performance">

                  {solution.performance.map(
                    (item, index) => (
                      <div key={item}>

                        <i>
                          {String(index + 1).padStart(
                            2,
                            "0"
                          )}
                        </i>

                        <strong>
                          {item}
                        </strong>

                      </div>
                    )
                  )}

                </div>

              </div>

            </div>


            {/* CTA */}

            <div className="solutions-feature-footer">

              <a
                href="https://wa.me/917812043322?text=Hi%20Master%20Chemical%20Solution%2C%20I%20would%20like%20to%20know%20more%20about%20your%20solution."
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  Discuss This Solution
                </span>

                <b>↗</b>
              </a>

            </div>

          </div>

        </div>


        {/* =========================================
            SOLUTION NAVIGATION
        ========================================= */}

        <div className="solutions-navigation">

          {solutions.map((item, index) => {

            const active =
              index === activeSolution;

            return (
              <button
                key={item.id}
                className={
                  active
                    ? "solution-nav-item active"
                    : "solution-nav-item"
                }
                onMouseEnter={() =>
                  setActiveSolution(index)
                }
                onClick={() =>
                  setActiveSolution(index)
                }
              >

                <span className="solution-nav-number">
                  {item.id}
                </span>

                <div className="solution-nav-title">

                  <small>
                    {item.category}
                  </small>

                  <strong>
                    {item.title}
                  </strong>

                </div>

                <span className="solution-nav-arrow">
                  ↗
                </span>

              </button>
            );

          })}

        </div>


        {/* =========================================
            BOTTOM
        ========================================= */}

        <div className="solutions-bottom">

          <div className="solutions-bottom-label">

            <span />

            <strong>
              APPLICATION-LED APPROACH
            </strong>

          </div>

          <p>
            The right system starts with understanding
            the surface, environment and project requirement.
          </p>

          <a href="#contact">
            Find the right system
            <span>↗</span>
          </a>

        </div>

      </div>

    </section>
  );
}