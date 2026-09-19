// import "./WhyUs.css";
// const reasons = [
//   {
//     number: "01",
//     title: "Application-led thinking",
//     short: "RIGHT SYSTEM",
//     text:
//       "Every project begins with understanding the surface, environment, exposure and expected performance before selecting a system.",
//   },
//   {
//     number: "02",
//     title: "Multiple systems",
//     short: "ONE PARTNER",
//     text:
//       "Waterproofing, flooring, injection, concrete repair, strengthening and protective coatings brought together under one specialised offering.",
//   },
//   {
//     number: "03",
//     title: "Built around performance",
//     short: "ENGINEERED SURFACES",
//     text:
//       "Systems are selected for the actual demands of the application — from wet areas and exposed structures to industrial and high-traffic surfaces.",
//   },
//   {
//     number: "04",
//     title: "Project-focused execution",
//     short: "SITE REQUIREMENTS",
//     text:
//       "A practical approach focused on application requirements, surface conditions and the intended performance of the finished system.",
//   },
// ];

// const capabilities = [
//   "WATERPROOFING",
//   "EPOXY FLOORING",
//   "PU FLOORING",
//   "CONCRETE REPAIR",
//   "INJECTION SYSTEMS",
//   "PROTECTIVE COATINGS",
// ];

// export default function WhyUs() {
//   return (
//     <section className="why-section" id="why-us">
//       <div className="why-bg-grid" />

//       <div className="why-container">

//         {/* TOP HEADER */}
//         <div className="why-header">

//           <div className="why-header-left">
//             <span className="section-kicker">
//               WHY MASTER CHEMICAL SOLUTION
//             </span>

//             <h2>
//               Surface
//               <br />
//               <em>thinking.</em>
//             </h2>
//           </div>

//           <div className="why-header-right">

//             <div className="why-header-number">
//               <span>01</span>
//               <i />
//               <strong>APPROACH</strong>
//             </div>

//             <p>
//               Construction surfaces are not all the same. The right solution
//               starts with understanding the application and ends with a
//               system designed around its performance requirements.
//             </p>

//           </div>

//         </div>

//         {/* MANIFESTO */}
//         <div className="why-manifesto">

//           <div className="why-manifesto-mark">
//             <span>M</span>
//           </div>

//           <div className="why-manifesto-content">

//             <span className="why-manifesto-label">
//               OUR APPROACH
//             </span>

//             <h3>
//               Understand the surface.
//               <br />
//               Select the system.
//               <br />
//               <em>Build for performance.</em>
//             </h3>

//           </div>

//           <div className="why-manifesto-side">
//             <span>MASTER CHEMICAL SOLUTION</span>

//             <p>
//               Waterproofing · Flooring · Repair · Protection
//             </p>

//             <div className="why-manifesto-arrow">
//               ↘
//             </div>
//           </div>

//         </div>

//         {/* REASONS */}
//         <div className="why-content">

//           <div className="why-content-intro">

//             <span>WHAT DEFINES OUR APPROACH</span>

//             <p>
//               We bring specialised construction chemical systems together
//               to solve different surface and protection requirements across
//               a project.
//             </p>

//           </div>

//           <div className="why-list">

//             {reasons.map((reason) => (
//               <article
//                 className="why-item"
//                 key={reason.number}
//               >

//                 <div className="why-item-number">
//                   {reason.number}
//                 </div>

//                 <div className="why-item-main">

//                   <div className="why-item-heading">

//                     <div>
//                       <span>{reason.short}</span>

//                       <h3>
//                         {reason.title}
//                       </h3>
//                     </div>

//                     <b>↗</b>

//                   </div>

//                   <p>
//                     {reason.text}
//                   </p>

//                 </div>

//               </article>
//             ))}

//           </div>

//         </div>

//         {/* CAPABILITY STRIP */}
//         <div className="why-capability">

//           <div className="why-capability-heading">
//             <span>CORE CAPABILITIES</span>
//             <strong>06</strong>
//           </div>

//           <div className="why-capability-list">

//             {capabilities.map((capability, index) => (
//               <div
//                 className="why-capability-item"
//                 key={capability}
//               >
//                 <span>
//                   {String(index + 1).padStart(2, "0")}
//                 </span>

//                 <strong>
//                   {capability}
//                 </strong>

//                 <b>↗</b>
//               </div>
//             ))}

//           </div>

//         </div>

//         {/* BOTTOM */}
//         <div className="why-bottom">

//           <div className="why-bottom-left">
//             <span />
//             <strong>
//               FROM SUBSTRATE TO FINISH
//             </strong>
//           </div>

//           <p>
//             One specialised partner for waterproofing, flooring,
//             repair and surface protection requirements.
//           </p>

//           <a
//             href="https://wa.me/917812043322?text=Hi%20Master%20Chemical%20Solution%2C%20I%20would%20like%20to discuss my project."
//             target="_blank"
//             rel="noreferrer"
//           >
//             Talk About Your Project
//             <span>↗</span>
//           </a>

//         </div>

//       </div>
//     </section>
//   );
// }



// WhyUs.jsx
import { useEffect, useRef, useState } from "react";
import "./WhyUs.css";

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
    title: "Multiple systems, one partner",
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
  "Waterproofing",
  "Epoxy Flooring",
  "PU Flooring",
  "Concrete Repair",
  "Injection Systems",
  "Protective Coatings",
];

const trustPoints = [
  "ISI-Grade Materials",
  "Trained Applicators",
  "On-Site Supervision",
  "Project Warranty",
];

/* =========================================================
   COMPONENT
========================================================= */
export default function WhyUs() {
  const [headRef, headInView] = useInView();
  const [calloutRef, calloutInView] = useInView();
  const [listRef, listInView] = useInView();
  const [capsRef, capsInView] = useInView();
  const [footRef, footInView] = useInView();

  return (
    <section className="why-section" id="why-us">

      <div className="why-container">

        {/* ================= HEADER ================= */}
        <div
          ref={headRef}
          className={`why-header why-reveal ${
            headInView ? "why-is-visible" : ""
          }`}
        >
          <div className="why-header-left">
            <div className="why-kicker">
              <span className="why-kicker-line" />
              WHY MASTER CHEMICAL SOLUTION
            </div>

            <h2 className="why-title">
              Surface thinking,
              <br />
              <em>not surface treatment.</em>
            </h2>
          </div>

          <div className="why-header-right">
            <p>
              Construction surfaces are not all the same. The right solution
              starts with understanding the application and ends with a
              system designed around its performance requirements.
            </p>
          </div>
        </div>

        {/* ================= CALLOUT ================= */}
        <div
          ref={calloutRef}
          className={`why-callout why-reveal ${
            calloutInView ? "why-is-visible" : ""
          }`}
        >
          <div className="why-callout-body">
            <span className="why-callout-label">OUR APPROACH</span>

            <h3 className="why-callout-title">
              Understand the surface. Select the system.
              <span> Build for performance.</span>
            </h3>
          </div>

          <div className="why-callout-side">
            <ul className="why-callout-points">
              {trustPoints.map((point) => (
                <li key={point}>
                  <span className="why-check">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ================= REASONS LIST ================= */}
        <div className="why-content">

          <div className="why-content-intro">
            <div className="why-kicker">
              <span className="why-kicker-line" />
              WHAT DEFINES OUR APPROACH
            </div>

            <p>
              We bring specialised construction chemical systems together to
              solve different surface and protection requirements across a
              project.
            </p>
          </div>

          <div
            ref={listRef}
            className={`why-list ${listInView ? "why-list--visible" : ""}`}
          >
            {reasons.map((reason, i) => (
              <article
                className="why-item"
                key={reason.number}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="why-item-number">{reason.number}</div>

                <div className="why-item-body">
                  <span className="why-item-label">{reason.short}</span>
                  <h3 className="why-item-title">{reason.title}</h3>
                  <p className="why-item-text">{reason.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ================= CAPABILITY STRIP ================= */}
        <div
          ref={capsRef}
          className={`why-caps why-reveal ${
            capsInView ? "why-is-visible" : ""
          }`}
        >
          <div className="why-caps-head">
            <span>Core Capabilities</span>
            <strong>06</strong>
          </div>

          <ul className="why-caps-list">
            {capabilities.map((capability, index) => (
              <li key={capability} className="why-cap">
                <span className="why-cap-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="why-cap-name">{capability}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div
          ref={footRef}
          className={`why-bottom why-reveal ${
            footInView ? "why-is-visible" : ""
          }`}
        >
          <div className="why-bottom-left">
            <span className="why-red-line" />
            <strong>FROM SUBSTRATE TO FINISH</strong>
          </div>

          <p>
            One specialised partner for waterproofing, flooring, repair and
            surface protection requirements.
          </p>

          <a
            href="https://wa.me/917812043322?text=Hi%20Master%20Chemical%20Solution%2C%20I%20would%20like%20to%20discuss%20my%20project."
            target="_blank"
            rel="noreferrer"
            className="why-bottom-link"
          >
            Talk About Your Project →
          </a>
        </div>

      </div>
    </section>
  );
}