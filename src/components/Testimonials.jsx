// Testimonials.jsx
import { useEffect, useRef, useState } from "react";
import "./Testimonials.css";

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
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px", ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

/* =========================================================
   DATA — replace with real client testimonials
========================================================= */
const testimonials = [
  {
    id: "01",
    quote:
      "Their team understood our terrace waterproofing requirement in the very first site visit. The system they recommended has held up through two monsoons without a single complaint.",
    name: "Rajesh Kumar",
    role: "Project Manager",
    company: "Casagrand Builders",
    location: "Chennai",
    projectType: "Terrace Waterproofing",
    initials: "RK",
  },
  {
    id: "02",
    quote:
      "We needed a durable epoxy floor for our warehouse that could handle heavy forklift traffic. Master Chemical Solution delivered on time, and the finish quality is excellent.",
    name: "S. Muthu",
    role: "Facility Head",
    company: "Shanmuga Hyper Mart",
    location: "Puducherry",
    projectType: "Industrial Epoxy Flooring",
    initials: "SM",
  },
  {
    id: "03",
    quote:
      "Our school building had recurring seepage issues in the toilet blocks. Their PU injection and waterproofing system solved it completely. Professional team, fair pricing.",
    name: "Priya Venkatesan",
    role: "Administrator",
    company: "Spring Days School",
    location: "Puducherry",
    projectType: "Toilet Waterproofing & Injection",
    initials: "PV",
  },
  {
    id: "04",
    quote:
      "We've worked with them on multiple residential sites. They understand site conditions, suggest the right system, and their applicators are properly trained.",
    name: "A. Ganesan",
    role: "Managing Director",
    company: "Ganesan Builders",
    location: "Chennai",
    projectType: "Residential Waterproofing",
    initials: "AG",
  },
  {
    id: "05",
    quote:
      "The concrete repair and RCC strengthening work on our aging water tank was handled with real technical care. Detailed method statement, proper materials, no shortcuts.",
    name: "K. Subramanian",
    role: "Executive Engineer",
    company: "PWD — Puducherry",
    location: "Puducherry",
    projectType: "Concrete Repair & Strengthening",
    initials: "KS",
  },
  {
    id: "06",
    quote:
      "Quick response, clear communication, and their coating system has performed exactly as promised. Will definitely consider them for our next commercial project.",
    name: "Fathima Rizwan",
    role: "Director",
    company: "Oviod Commercial Spaces",
    location: "Puducherry",
    projectType: "Protective Coatings",
    initials: "FR",
  },
];

/* =========================================================
   COMPONENT
========================================================= */
export default function Testimonials() {
  const [headRef, headInView] = useInView();
  const [gridRef, gridInView] = useInView();

  return (
    <section className="tst-section" id="testimonials">

      <div className="tst-container">

        {/* ================= HEADER ================= */}
        <div
          ref={headRef}
          className={`tst-header tst-reveal ${
            headInView ? "tst-is-visible" : ""
          }`}
        >
          <div className="tst-header-left">
            <div className="tst-kicker">
              <span className="tst-kicker-line" />
              CLIENT FEEDBACK
            </div>

            <h2 className="tst-title">
              Trusted by builders,
              <br />
              <em>engineers and facility teams.</em>
            </h2>
          </div>

          <div className="tst-header-right">
            <p>
              Feedback from project managers, engineers and clients we've
              worked with across residential, commercial, institutional and
              infrastructure projects in Puducherry and Chennai.
            </p>
          </div>
        </div>

        {/* ================= GRID ================= */}
        <div
          ref={gridRef}
          className={`tst-grid ${gridInView ? "tst-grid--visible" : ""}`}
        >
          {testimonials.map((t, i) => (
            <article
              key={t.id}
              className="tst-card"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Quote mark */}
              <div className="tst-quote-mark">"</div>

              {/* Stars */}
              <div className="tst-stars" aria-label="5 out of 5 stars">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>

              {/* Quote */}
              <p className="tst-quote">{t.quote}</p>

              {/* Divider */}
              <div className="tst-divider" />

              {/* Author */}
              <div className="tst-author">
                <div className="tst-avatar" aria-hidden="true">
                  {t.initials}
                </div>

                <div className="tst-author-info">
                  <strong className="tst-author-name">{t.name}</strong>
                  <span className="tst-author-role">
                    {t.role} · {t.company}
                  </span>
                  <span className="tst-author-meta">
                    {t.location} · {t.projectType}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}