import { useState } from "react";
import "./Projects.css";
const projects = [
  {
    number: "01",
    name: "JIPMER",
    type: "Institutional",
    category: "INSTITUTIONAL",
    location: "Puducherry",
    description:
      "Project experience involving specialised construction surface and protection requirements within an institutional environment.",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1800&q=85",
    systems: ["Waterproofing", "Surface Protection"],
  },
  {
    number: "02",
    name: "PWD Water Tank",
    type: "Infrastructure",
    category: "INFRASTRUCTURE",
    location: "Puducherry",
    description:
      "Water-retaining infrastructure application requiring durable protection and waterproofing systems.",
    image:
      "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1800&q=85",
    systems: ["Waterproofing", "Protection"],
  },
  {
    number: "03",
    name: "Casagrand",
    type: "Residential",
    category: "RESIDENTIAL",
    location: "Chennai",
    description:
      "Construction project experience across residential surfaces and building protection applications.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85",
    systems: ["Waterproofing", "Flooring"],
  },
  {
    number: "04",
    name: "Spring Days School",
    type: "Education",
    category: "EDUCATION",
    location: "Puducherry",
    description:
      "Surface and flooring applications for an educational environment with varied functional requirements.",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1800&q=85",
    systems: ["Flooring", "Surface Treatment"],
  },
  {
    number: "05",
    name: "Primrose School",
    type: "Education",
    category: "EDUCATION",
    location: "Puducherry",
    description:
      "Specialised construction surface solutions applied across educational infrastructure.",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1800&q=85",
    systems: ["Flooring", "Protection"],
  },
  {
    number: "06",
    name: "Shanmuga Hyper Mart",
    type: "Commercial",
    category: "COMMERCIAL",
    location: "Puducherry",
    description:
      "Commercial environment requiring practical, durable and high-traffic surface solutions.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1800&q=85",
    systems: ["Flooring", "Surface Protection"],
  },
  {
    number: "07",
    name: "Exotic Buildcon",
    type: "Construction",
    category: "CONSTRUCTION",
    location: "Puducherry",
    description:
      "Construction project experience involving specialised building surface applications.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=85",
    systems: ["Waterproofing", "Repair"],
  },
  {
    number: "08",
    name: "Pragati Construction",
    type: "Construction",
    category: "CONSTRUCTION",
    location: "Puducherry",
    description:
      "Construction-focused project experience across protection and surface treatment requirements.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=85",
    systems: ["Concrete Repair", "Protection"],
  },
  {
    number: "09",
    name: "Ocean Interior",
    type: "Interior & Construction",
    category: "INTERIOR",
    location: "Chennai",
    description:
      "Interior and construction application experience involving finished surface requirements.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85",
    systems: ["Flooring", "Surface Finish"],
  },
  {
    number: "10",
    name: "Ganesan Builder",
    type: "Construction",
    category: "CONSTRUCTION",
    location: "Chennai",
    description:
      "Construction project experience supporting specialised surface and building protection requirements.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=85",
    systems: ["Waterproofing", "Repair"],
  },
  {
    number: "11",
    name: "Subramanian Construction",
    type: "Construction",
    category: "CONSTRUCTION",
    location: "Chennai",
    description:
      "Project experience across construction applications requiring specialised surface systems.",
    image:
      "https://images.unsplash.com/photo-1590725175176-c3b0b7b7b7e5?auto=format&fit=crop&w=1800&q=85",
    systems: ["Waterproofing", "Flooring"],
  },
  {
    number: "12",
    name: "Jeno Maran Builder",
    type: "Construction",
    category: "CONSTRUCTION",
    location: "Puducherry",
    description:
      "Building project experience involving waterproofing and specialised construction surface requirements.",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e768e4a2e0?auto=format&fit=crop&w=1800&q=85",
    systems: ["Waterproofing", "Protection"],
  },
  {
    number: "13",
    name: "Bon Modern",
    type: "Construction",
    category: "CONSTRUCTION",
    location: "Puducherry",
    description:
      "Construction application experience focused on practical surface and protection requirements.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=85",
    systems: ["Flooring", "Protection"],
  },
  {
    number: "14",
    name: "Auro Shade",
    type: "Construction",
    category: "CONSTRUCTION",
    location: "Puducherry",
    description:
      "Project experience involving specialised construction surface and finishing applications.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1800&q=85",
    systems: ["Surface Treatment", "Protection"],
  },
  {
    number: "15",
    name: "Oviod",
    type: "Commercial",
    category: "COMMERCIAL",
    location: "Puducherry",
    description:
      "Commercial project experience involving durable surface and protection systems.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=85",
    systems: ["Flooring", "Protection"],
  },
];

const categories = [
  "ALL",
  "INSTITUTIONAL",
  "INFRASTRUCTURE",
  "RESIDENTIAL",
  "EDUCATION",
  "COMMERCIAL",
  "CONSTRUCTION",
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [activeProject, setActiveProject] = useState(0);

  const filteredProjects =
    activeCategory === "ALL"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const featured =
    filteredProjects.find(
      (project) => project.number === projects[activeProject]?.number
    ) || filteredProjects[0];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-bg-grid" />

      <div className="projects-container">

        {/* HEADER */}
        <div className="projects-header">

          <div className="projects-heading">
            <span className="section-kicker">PROJECT EXPERIENCE</span>

            <h2>
              Work across
              <br />
              <em>real projects.</em>
            </h2>
          </div>

          <div className="projects-header-info">

            <div className="projects-stat">
              <strong>15+</strong>
              <span>PROJECT / CLIENT EXPERIENCES</span>
            </div>

            <p>
              Experience across institutional, infrastructure, residential,
              educational, commercial and construction environments.
            </p>

          </div>

        </div>

        {/* CATEGORY FILTER */}
        <div className="projects-filter">
          <div className="projects-filter-label">
            <span>FILTER PROJECTS</span>
          </div>

          <div className="projects-filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={
                  activeCategory === category
                    ? "active"
                    : ""
                }
                onClick={() => {
                  setActiveCategory(category);
                  setActiveProject(0);
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FEATURED PROJECT */}
        <div className="projects-feature">

          <div className="projects-feature-image">

            <img
              src={featured.image}
              alt={featured.name}
              key={featured.number}
            />

            <div className="projects-feature-overlay" />

            <div className="projects-feature-number">
              {featured.number}
            </div>

            <div className="projects-feature-location">
              <span>PROJECT LOCATION</span>
              <strong>{featured.location}</strong>
            </div>

            <div className="projects-feature-index">
              {featured.number} / 15
            </div>

          </div>

          <div className="projects-feature-content">

            <div className="projects-feature-top">
              <span>{featured.category}</span>
              <b>↗</b>
            </div>

            <div className="projects-feature-main">

              <span className="projects-feature-kicker">
                SELECTED PROJECT
              </span>

              <h3>
                {featured.name}
              </h3>

              <h4>
                {featured.type}
              </h4>

              <p>
                {featured.description}
              </p>

              <div className="projects-feature-divider" />

              <span className="projects-system-label">
                APPLICATION SYSTEMS
              </span>

              <div className="projects-system-list">
                {featured.systems.map((system, index) => (
                  <div key={system}>
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <strong>{system}</strong>
                  </div>
                ))}
              </div>

            </div>

            <div className="projects-feature-bottom">

              <span>MASTER CHEMICAL SOLUTION</span>

              <strong>
                PROJECT EXPERIENCE
              </strong>

            </div>

          </div>

        </div>

        {/* PROJECT WALL */}
        <div className="projects-wall-header">
          <div>
            <span>PROJECT ARCHIVE</span>
            <strong>
              {String(filteredProjects.length).padStart(2, "0")}
            </strong>
          </div>

          <p>
            Selected project and client experience across different
            construction environments.
          </p>
        </div>

        <div className="projects-wall">

          {filteredProjects.map((project) => {

            const originalIndex = projects.findIndex(
              (item) => item.number === project.number
            );

            return (
              <article
                className={
                  featured.number === project.number
                    ? "project-card active"
                    : "project-card"
                }
                key={project.number}
                onMouseEnter={() => setActiveProject(originalIndex)}
                onClick={() => setActiveProject(originalIndex)}
              >

                <div className="project-card-image">
                  <img
                    src={project.image}
                    alt={project.name}
                  />

                  <div className="project-card-overlay" />
                </div>

                <div className="project-card-top">

                  <span>{project.number}</span>

                  <span className="project-card-category">
                    {project.category}
                  </span>

                </div>

                <div className="project-card-content">

                  <span>{project.type}</span>

                  <h3>
                    {project.name}
                  </h3>

                  <div className="project-card-arrow">
                    ↗
                  </div>

                </div>

              </article>
            );
          })}

        </div>

        {/* BOTTOM STRIP */}
        <div className="projects-bottom">

          <div className="projects-bottom-left">
            <span />
            <strong>
              SELECTED PROJECT / CLIENT EXPERIENCE
            </strong>
          </div>

          <p>
            Every project brings a different surface, environment
            and performance requirement.
          </p>

          <a href="#contact">
            Discuss Your Project
            <span>↗</span>
          </a>

        </div>

      </div>
    </section>
  );
}