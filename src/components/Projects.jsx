// Projects.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import "./Projects.css";

/* =========================================================
   SCROLL REVEAL HOOK
========================================================= */
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px", ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

/* =========================================================
   DATA
========================================================= */
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

/* Categories derived from data — no orphaned categories */
const categories = [
  "ALL",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

/* =========================================================
   COMPONENT
========================================================= */
export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [activeId, setActiveId] = useState(projects[0].number);

  const [headRef, headInView]       = useInView();
  const [filterRef, filterInView]   = useInView();
  const [featureRef, featureInView] = useInView();
  const [wallRef, wallInView]       = useInView();
  const [footRef, footInView]       = useInView();

  /* Filtered set — memoised */
  const filteredProjects = useMemo(() => {
    if (activeCategory === "ALL") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  /* Featured derived FROM the filtered set — always in sync */
  const featured = useMemo(() => {
    return (
      filteredProjects.find((p) => p.number === activeId) ||
      filteredProjects[0]
    );
  }, [filteredProjects, activeId]);

  /* When category changes, snap featured to the first item of the new set */
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    const next =
      category === "ALL"
        ? projects[0]
        : projects.find((p) => p.category === category);
    if (next) setActiveId(next.number);
  };

  return (
    <section className="proj-section" id="projects">

      <div className="proj-container">

        {/* ================= HEADER ================= */}
        <div
          ref={headRef}
          className={`proj-header proj-reveal ${
            headInView ? "proj-is-visible" : ""
          }`}
        >
          <div className="proj-header-left">
            <div className="proj-kicker">
              <span className="proj-kicker-line" />
              PROJECT EXPERIENCE
            </div>

            <h2 className="proj-title">
              Work across
              <br />
              <em>real projects.</em>
            </h2>
          </div>

          <div className="proj-header-right">
            <p>
              Experience across institutional, infrastructure, residential,
              educational, commercial and construction environments —
              delivered across Puducherry and Chennai.
            </p>
          </div>
        </div>

        {/* ================= FILTER ================= */}
        <div
          ref={filterRef}
          className={`proj-filter proj-reveal ${
            filterInView ? "proj-is-visible" : ""
          }`}
        >
          <span className="proj-filter-label">Filter</span>

          <div className="proj-filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`proj-filter-btn ${
                  activeCategory === category ? "is-active" : ""
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* ================= FEATURED ================= */}
        {featured && (
          <div
            ref={featureRef}
            className={`proj-feature proj-reveal ${
              featureInView ? "proj-is-visible" : ""
            }`}
          >
            {/* IMAGE */}
            <div className="proj-feature-image">
              <img
                key={featured.number}
                src={featured.image}
                alt={featured.name}
                loading="lazy"
              />

              <div className="proj-feature-tag">
                <span>PROJECT</span>
                <strong>{featured.number} / 15</strong>
              </div>

              <div className="proj-feature-location">
                <span>Location</span>
                <strong>{featured.location}</strong>
              </div>
            </div>

            {/* CONTENT */}
            <div className="proj-feature-content" key={featured.number}>
              <div className="proj-feature-top">
                <span className="proj-feature-category">
                  {featured.category}
                </span>
                <span className="proj-feature-dash" />
              </div>

              <h3 className="proj-feature-name">{featured.name}</h3>
              <p className="proj-feature-type">{featured.type}</p>
              <p className="proj-feature-desc">{featured.description}</p>

              {/* ---- FACTS GRID (fills the middle space) ---- */}
              <div className="proj-facts">
                <div className="proj-fact">
                  <span>Type</span>
                  <strong>{featured.type}</strong>
                </div>
                <div className="proj-fact">
                  <span>Location</span>
                  <strong>{featured.location}</strong>
                </div>
                <div className="proj-fact">
                  <span>Category</span>
                  <strong>{featured.category}</strong>
                </div>
                <div className="proj-fact">
                  <span>Scope</span>
                  <strong>{featured.systems.length} Systems</strong>
                </div>
              </div>

              {/* ---- APPLICATION SYSTEMS ---- */}
              <div className="proj-detail-group">
                <span className="proj-detail-label">
                  Application Systems
                </span>

                <ul className="proj-systems">
                  {featured.systems.map((system) => (
                    <li key={system}>
                      <span className="proj-system-tick">✓</span>
                      {system}
                    </li>
                  ))}
                </ul>
              </div>

              {/* ---- CTA pinned to bottom ---- */}
              <a
                href="#contact"
                className="proj-feature-link"
              >
                <span>Discuss a Similar Project</span>
                <span className="proj-feature-link-arrow">→</span>
              </a>
            </div>
          </div>
        )}

        {/* ================= ARCHIVE HEADER ================= */}
        <div className="proj-wall-header">
          <div className="proj-wall-count">
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

        {/* ================= WALL ================= */}
        <div
          ref={wallRef}
          className={`proj-wall ${wallInView ? "proj-wall--visible" : ""}`}
        >
          {filteredProjects.length === 0 ? (
            <div className="proj-empty">
              No projects listed in this category yet.
            </div>
          ) : (
            filteredProjects.map((project, i) => {
              const isActive = featured?.number === project.number;
              return (
                <article
                  key={project.number}
                  className={`proj-card ${isActive ? "is-active" : ""}`}
                  onMouseEnter={() => setActiveId(project.number)}
                  onClick={() => setActiveId(project.number)}
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <div className="proj-card-image">
                    <img
                      src={project.image}
                      alt={project.name}
                      loading="lazy"
                    />
                    <span className="proj-card-number">
                      {project.number}
                    </span>
                  </div>

                  <div className="proj-card-body">
                    <span className="proj-card-category">
                      {project.category}
                    </span>

                    <h4 className="proj-card-name">{project.name}</h4>

                    <span className="proj-card-location">
                      {project.type} · {project.location}
                    </span>
                  </div>
                </article>
              );
            })
          )}
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div
          ref={footRef}
          className={`proj-bottom proj-reveal ${
            footInView ? "proj-is-visible" : ""
          }`}
        >
          <div className="proj-bottom-left">
            <span className="proj-red-line" />
            <strong>SELECTED PROJECT / CLIENT EXPERIENCE</strong>
          </div>

          <p>
            Every project brings a different surface, environment and
            performance requirement.
          </p>

          <a href="#contact" className="proj-bottom-link">
            Discuss Your Project →
          </a>
        </div>

      </div>
    </section>
  );
}