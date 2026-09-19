// import "./About.css";

// const aboutStats = [
//   {
//     value: "04",
//     label: "CORE",
//     text: "Solution Categories",
//   },
//   {
//     value: "30+",
//     label: "SYSTEMS",
//     text: "Specialised Applications",
//   },
//   {
//     value: "15+",
//     label: "PROJECTS",
//     text: "Project / Client Experiences",
//   },
//   {
//     value: "01",
//     label: "APPROACH",
//     text: "Surface-to-System Thinking",
//   },
// ];

// const capabilities = [
//   "Waterproofing",
//   "Industrial Flooring",
//   "PU & Epoxy Systems",
//   "Concrete Repair",
//   "Injection Systems",
//   "RCC Strengthening",
//   "Protective Coatings",
//   "Surface Treatment",
// ];

// export default function About() {
//   return (
//     <section className="about-section" id="about">
//       <div className="about-bg-grid" />
//       <div className="about-glow about-glow-one" />
//       <div className="about-glow about-glow-two" />

//       <div className="about-container">

//         {/* HEADER */}
//         <div className="about-header">
//           <div className="about-heading">
//             <div className="about-kicker">
//               <span />
//               ABOUT MASTER CHEMICAL SOLUTION
//             </div>

//             <h2>
//               Built around
//               <br />
//               <em>the surface.</em>
//             </h2>
//           </div>

//           <div className="about-header-copy">
//             <div className="about-header-code">
//               <span>MCS / COMPANY PROFILE</span>
//               <strong>01 — ABOUT</strong>
//             </div>

//             <p>
//               Master Chemical Solution provides specialised construction
//               chemical systems for waterproofing, flooring, concrete repair,
//               strengthening and surface protection applications.
//             </p>

//             <p>
//               Our approach starts with understanding the surface, site
//               conditions and performance requirement — then selecting the
//               appropriate system for the application.
//             </p>
//           </div>
//         </div>

//         {/* MAIN STORY */}
//         <div className="about-story">

//           {/* IMAGE */}
//           <div className="about-image-wrap">
//             <div className="about-image">
//               <img
//                 src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=90"
//                 alt="Construction chemical application"
//               />

//               <div className="about-image-overlay" />

//               <div className="about-image-top">
//                 <span>FIELD APPLICATION</span>
//                 <strong>CONSTRUCTION SYSTEMS</strong>
//               </div>

//               <div className="about-image-mark">
//                 <span>M</span>
//               </div>

//               <div className="about-image-bottom">
//                 <span>ENGINEERED SURFACES</span>
//                 <span>01 / 04</span>
//               </div>
//             </div>

//             <div className="about-image-accent" />
//           </div>

//           {/* CONTENT */}
//           <div className="about-story-content">

//             <div className="about-story-index">
//               <span>01</span>
//               <div />
//               <span>OUR APPROACH</span>
//             </div>

//             <h3>
//               Construction chemicals
//               <br />
//               <span>with a purpose.</span>
//             </h3>

//             <p className="about-lead">
//               Every structure has a different requirement. Exposure,
//               substrate condition, moisture, traffic, usage and environment
//               all influence how a system should perform.
//             </p>

//             <p>
//               Master Chemical Solution brings together specialised systems
//               across waterproofing, industrial flooring, repair, injection,
//               strengthening and protective coatings. Rather than treating
//               every project the same, we focus on the application and the
//               performance expected from the finished surface.
//             </p>

//             <div className="about-divider" />

//             <div className="about-principle">
//               <div className="about-principle-icon">
//                 <span />
//               </div>

//               <div>
//                 <span>OUR PRINCIPLE</span>
//                 <strong>
//                   Understand the surface.
//                   <br />
//                   Select the right system.
//                 </strong>
//               </div>
//             </div>

//             <a href="#contact-form" className="about-link">
//               <span>Discuss Your Project</span>
//               <b>↗</b>
//             </a>
//           </div>
//         </div>

//         {/* STATS */}
//         <div className="about-stats">
//           {aboutStats.map((stat) => (
//             <article className="about-stat" key={stat.value + stat.label}>
//               <div className="about-stat-number">
//                 {stat.value}
//               </div>

//               <div className="about-stat-content">
//                 <span>{stat.label}</span>
//                 <strong>{stat.text}</strong>
//               </div>

//               <div className="about-stat-arrow">↗</div>
//             </article>
//           ))}
//         </div>

//         {/* CAPABILITY MATRIX */}
//         <div className="about-capabilities">

//           <div className="about-capabilities-intro">
//             <div className="about-capabilities-kicker">
//               <span />
//               WHAT WE BRING TO THE PROJECT
//             </div>

//             <h3>
//               One specialised
//               <br />
//               <em>solution partner.</em>
//             </h3>

//             <p>
//               From waterproofing and flooring to concrete restoration and
//               protective systems, our capabilities cover multiple stages of
//               surface performance.
//             </p>
//           </div>

//           <div className="about-capability-grid">
//             {capabilities.map((item, index) => (
//               <div
//                 className="about-capability"
//                 key={item}
//               >
//                 <span>
//                   {String(index + 1).padStart(2, "0")}
//                 </span>

//                 <strong>{item}</strong>

//                 <b>↗</b>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* BOTTOM TECHNICAL STRIP */}
//         <div className="about-bottom">
//           <div className="about-bottom-left">
//             <span className="about-red-line" />
//             <strong>FROM SUBSTRATE TO FINISH</strong>
//           </div>

//           <div className="about-bottom-center">
//             <span>DIAGNOSE</span>
//             <b>→</b>
//             <span>SELECT</span>
//             <b>→</b>
//             <span>APPLY</span>
//             <b>→</b>
//             <span>PROTECT</span>
//           </div>

//           <div className="about-bottom-code">
//             MCS / 01
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }


// About.jsx
import { useEffect, useRef, useState } from "react";
import "./About.css";

/* =========================================================
   SCROLL REVEAL HOOK
   Adds "is-visible" class when element enters viewport
========================================================= */
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target); // reveal once
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
const aboutStats = [
  { value: "04",  label: "CORE",      text: "Solution Categories" },
  { value: "30+", label: "SYSTEMS",   text: "Specialised Applications" },
  { value: "15+", label: "YEARS",     text: "On-Site Experience" },
  { value: "01",  label: "APPROACH",  text: "Surface-to-System Thinking" },
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

const processSteps = ["DIAGNOSE", "SELECT", "APPLY", "PROTECT"];

/* =========================================================
   COMPONENT
========================================================= */
export default function About() {
  const [headerRef, headerInView] = useInView();
  const [imageRef, imageInView] = useInView();
  const [storyRef, storyInView] = useInView();
  const [statsRef, statsInView] = useInView();
  const [capRef, capInView] = useInView();
  const [bottomRef, bottomInView] = useInView();

  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* ================= HEADER ================= */}
        <div
          ref={headerRef}
          className={`about-header reveal ${headerInView ? "is-visible" : ""}`}
        >
          <div className="about-heading">
            <div className="about-kicker">
              <span className="about-kicker-line" />
              ABOUT MASTER CHEMICAL SOLUTION
            </div>

            <h2 className="about-title">
              Built around
              <br />
              <em>the surface.</em>
            </h2>
          </div>

          <div className="about-header-copy">
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

        {/* ================= MAIN STORY ================= */}
        <div className="about-story">

          {/* IMAGE */}
          <div
            ref={imageRef}
            className={`about-image-wrap reveal-left ${
              imageInView ? "is-visible" : ""
            }`}
          >
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=90"
                alt="Construction chemical application"
              />

              <div className="about-image-badge">
                <strong>15+</strong>
                <span>Years On-Site</span>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div
            ref={storyRef}
            className={`about-story-content reveal-right ${
              storyInView ? "is-visible" : ""
            }`}
          >
            <div className="about-story-index">
              <span>01</span>
              <div />
              <span>OUR APPROACH</span>
            </div>

            <h3 className="about-story-title">
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

            <div className="about-principle">
              <div className="about-principle-icon">✓</div>

              <div>
                <span>OUR PRINCIPLE</span>
                <strong>
                  Understand the surface. Select the right system.
                </strong>
              </div>
            </div>

            <a href="#contact" className="about-link">
              Discuss Your Project →
            </a>
          </div>
        </div>

        {/* ================= STATS ================= */}
        <div
          ref={statsRef}
          className={`about-stats ${statsInView ? "is-visible" : ""}`}
        >
          {aboutStats.map((stat, i) => (
            <article
              className="about-stat reveal-up"
              key={stat.value + stat.label}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="about-stat-number">{stat.value}</div>

              <div className="about-stat-content">
                <span>{stat.label}</span>
                <strong>{stat.text}</strong>
              </div>
            </article>
          ))}
        </div>

        {/* ================= CAPABILITIES ================= */}
        <div
          ref={capRef}
          className={`about-capabilities ${capInView ? "is-visible" : ""}`}
        >
          <div className="about-capabilities-intro reveal-left">
            <div className="about-kicker">
              <span className="about-kicker-line" />
              WHAT WE BRING TO THE PROJECT
            </div>

            <h3 className="about-cap-title">
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
                className="about-capability reveal-up"
                key={item}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>

        {/* ================= BOTTOM STRIP ================= */}
        <div
          ref={bottomRef}
          className={`about-bottom reveal ${bottomInView ? "is-visible" : ""}`}
        >
          <div className="about-bottom-left">
            <span className="about-red-line" />
            <strong>FROM SUBSTRATE TO FINISH</strong>
          </div>

          <div className="about-bottom-center">
            {processSteps.map((step, i) => (
              <span key={step} className="about-process">
                <span>{step}</span>
                {i < processSteps.length - 1 && <b>→</b>}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}