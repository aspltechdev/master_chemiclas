// // import { useState } from "react";
// // import "./Solutions.css";
// // import s1 from "../assets/s1.png";
// // import s2 from "../assets/s2.png";
// // import s3 from "../assets/s3.png";
// // import s4 from "../assets/s4.png";

// // const solutions = [
// //   {
// //     id: "01",
// //     category: "WATERPROOFING",
// //     title: "PU Waterproofing",
// //     subtitle: "Seamless protection against water ingress.",
// //     description:
// //       "Seamless waterproofing systems designed to protect critical structures from water ingress, moisture penetration and exposure-related damage.",
// //     image:
// //     s1,
// //     applications: [
// //       "Terrace",
// //       "Podium",
// //       "Basement",
// //       "Lift Pit",
// //     ],
// //     performance: [
// //       "Seamless membrane",
// //       "Water resistant",
// //       "Flexible system",
// //     ],
// //   },

// //   {
// //     id: "02",
// //     category: "INDUSTRIAL FLOORING",
// //     title: "Epoxy Flooring",
// //     subtitle: "High-performance floors for demanding environments.",
// //     description:
// //       "Durable resin flooring systems engineered for industrial, commercial, institutional and high-traffic environments.",
// //     image:
// //     s2,
// //     applications: [
// //       "Factories",
// //       "Warehouses",
// //       "Commercial",
// //       "Institutional",
// //     ],
// //     performance: [
// //       "High durability",
// //       "Chemical resistant",
// //       "Easy maintenance",
// //     ],
// //   },

// //   {
// //     id: "03",
// //     category: "RESIN FLOORING",
// //     title: "PU Resin Flooring",
// //     subtitle: "Resilient surfaces built for performance.",
// //     description:
// //       "Polyurethane flooring systems designed for environments requiring flexibility, durability, impact resistance and long-term performance.",
// //     image:
// //    s3,
// //     applications: [
// //       "Industrial",
// //       "Heavy Duty",
// //       "High Traffic",
// //       "Commercial",
// //     ],
// //     performance: [
// //       "Impact resistant",
// //       "Flexible finish",
// //       "Heavy duty",
// //     ],
// //   },

// //   {
// //     id: "04",
// //     category: "CONCRETE REPAIR",
// //     title: "Repair & Strengthening",
// //     subtitle: "Restore concrete. Reinforce performance.",
// //     description:
// //       "Specialised repair, injection and strengthening systems for damaged, aging and structurally demanding concrete surfaces.",
// //     image:
// //       s4,
// //     applications: [
// //       "PU Injection",
// //       "Epoxy Injection",
// //       "RCC Repair",
// //       "Anchoring",
// //     ],
// //     performance: [
// //       "Crack treatment",
// //       "Structural repair",
// //       "Strengthening",
// //     ],
// //   },
// // ];

// // export default function Solutions() {
// //   const [activeSolution, setActiveSolution] = useState(0);

// //   const solution = solutions[activeSolution];

// //   return (
// //     <section className="solutions-section" id="solutions">

// //       {/* =========================================
// //           BACKGROUND
// //       ========================================= */}

// //       <div className="solutions-bg-grid" />

// //       <div className="solutions-container">

// //         {/* =========================================
// //             HEADER
// //         ========================================= */}

// //         <div className="solutions-header">

// //           <div className="solutions-heading">

// //             <span className="section-kicker">
// //               FEATURED SOLUTIONS
// //             </span>

// //             <h2>
// //               Engineered
// //               <br />
// //               <em>for the surface.</em>
// //             </h2>

// //           </div>

// //           <div className="solutions-header-info">

// //             <div className="solutions-counter">

// //               <strong>
// //                 {solution.id}
// //               </strong>

// //               <span>
// //                 / 04
// //               </span>

// //             </div>

// //             <p>
// //               From waterproofing systems to industrial
// //               flooring and concrete restoration, every
// //               solution is selected around the actual
// //               demands of the project.
// //             </p>

// //           </div>

// //         </div>


// //         {/* =========================================
// //             FEATURED SOLUTION
// //         ========================================= */}

// //         <div className="solutions-feature">

// //           {/* IMAGE */}

// //           <div className="solutions-feature-image">

// //             {solutions.map((item, index) => (
// //               <img
// //                 key={item.id}
// //                 src={item.image}
// //                 alt={item.title}
// //                 className={
// //                   index === activeSolution
// //                     ? "active"
// //                     : ""
// //                 }
// //               />
// //             ))}

// //             <div className="solutions-image-overlay" />

// //             <div className="solutions-image-number">
// //               {solution.id}
// //             </div>

// //             <div className="solutions-image-caption">
// //               <span>MASTER CHEMICAL SOLUTION</span>
// //               <strong>
// //                 ENGINEERED SURFACE SYSTEM
// //               </strong>
// //             </div>

// //           </div>


// //           {/* CONTENT */}

// //           <div className="solutions-feature-content">

// //             <div className="solutions-feature-top">

// //               <span>
// //                 {solution.category}
// //               </span>

// //               <div>
// //                 SOLUTION
// //                 <strong>{solution.id}</strong>
// //               </div>

// //             </div>


// //             <div className="solutions-feature-body">

// //               <h3>
// //                 {solution.title}
// //               </h3>

// //               <h4>
// //                 {solution.subtitle}
// //               </h4>

// //               <p>
// //                 {solution.description}
// //               </p>


// //               {/* Applications */}

// //               <div className="solutions-detail-group">

// //                 <span>
// //                   APPLICATIONS
// //                 </span>

// //                 <div className="solutions-tags">

// //                   {solution.applications.map(
// //                     (item) => (
// //                       <span key={item}>
// //                         {item}
// //                       </span>
// //                     )
// //                   )}

// //                 </div>

// //               </div>


// //               {/* Performance */}

// //               <div className="solutions-detail-group">

// //                 <span>
// //                   SYSTEM CHARACTERISTICS
// //                 </span>

// //                 <div className="solutions-performance">

// //                   {solution.performance.map(
// //                     (item, index) => (
// //                       <div key={item}>

// //                         <i>
// //                           {String(index + 1).padStart(
// //                             2,
// //                             "0"
// //                           )}
// //                         </i>

// //                         <strong>
// //                           {item}
// //                         </strong>

// //                       </div>
// //                     )
// //                   )}

// //                 </div>

// //               </div>

// //             </div>


// //             {/* CTA */}

// //             <div className="solutions-feature-footer">

// //               <a
// //                 href="https://wa.me/917812043322?text=Hi%20Master%20Chemical%20Solution%2C%20I%20would%20like%20to%20know%20more%20about%20your%20solution."
// //                 target="_blank"
// //                 rel="noreferrer"
// //               >
// //                 <span>
// //                   Discuss This Solution
// //                 </span>

// //                 <b>↗</b>
// //               </a>

// //             </div>

// //           </div>

// //         </div>


// //         {/* =========================================
// //             SOLUTION NAVIGATION
// //         ========================================= */}

// //         <div className="solutions-navigation">

// //           {solutions.map((item, index) => {

// //             const active =
// //               index === activeSolution;

// //             return (
// //               <button
// //                 key={item.id}
// //                 className={
// //                   active
// //                     ? "solution-nav-item active"
// //                     : "solution-nav-item"
// //                 }
// //                 onMouseEnter={() =>
// //                   setActiveSolution(index)
// //                 }
// //                 onClick={() =>
// //                   setActiveSolution(index)
// //                 }
// //               >

// //                 <span className="solution-nav-number">
// //                   {item.id}
// //                 </span>

// //                 <div className="solution-nav-title">

// //                   <small>
// //                     {item.category}
// //                   </small>

// //                   <strong>
// //                     {item.title}
// //                   </strong>

// //                 </div>

// //                 <span className="solution-nav-arrow">
// //                   ↗
// //                 </span>

// //               </button>
// //             );

// //           })}

// //         </div>


// //         {/* =========================================
// //             BOTTOM
// //         ========================================= */}

// //         <div className="solutions-bottom">

// //           <div className="solutions-bottom-label">

// //             <span />

// //             <strong>
// //               APPLICATION-LED APPROACH
// //             </strong>

// //           </div>

// //           <p>
// //             The right system starts with understanding
// //             the surface, environment and project requirement.
// //           </p>

// //           <a href="#contact">
// //             Find the right system
// //             <span>↗</span>
// //           </a>

// //         </div>

// //       </div>

// //     </section>
// //   );
// // }


// // Solutions.jsx
// import { useEffect, useRef, useState } from "react";
// import "./Solutions.css";
// import s1 from "../assets/s1.png";
// import s2 from "../assets/s2.png";
// import s3 from "../assets/s3.png";
// import s4 from "../assets/s4.png";

// /* =========================================================
//    SCROLL REVEAL HOOK
// ========================================================= */
// function useInView(options = {}) {
//   const ref = useRef(null);
//   const [inView, setInView] = useState(false);

//   useEffect(() => {
//     const node = ref.current;
//     if (!node) return;

//     if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
//       setInView(true);
//       return;
//     }

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setInView(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.15, rootMargin: "0px 0px -60px 0px", ...options }
//     );

//     observer.observe(node);
//     return () => observer.disconnect();
//   }, [options]);

//   return [ref, inView];
// }

// /* =========================================================
//    DATA
// ========================================================= */
// const solutions = [
//   {
//     id: "01",
//     category: "WATERPROOFING",
//     title: "PU Waterproofing",
//     subtitle: "Seamless protection against water ingress.",
//     description:
//       "Seamless waterproofing systems designed to protect critical structures from water ingress, moisture penetration and exposure-related damage.",
//     image: s1,
//     applications: ["Terrace", "Podium", "Basement", "Lift Pit"],
//     performance: [
//       "Seamless membrane",
//       "Water resistant",
//       "Flexible system",
//     ],
//   },
//   {
//     id: "02",
//     category: "INDUSTRIAL FLOORING",
//     title: "Epoxy Flooring",
//     subtitle: "High-performance floors for demanding environments.",
//     description:
//       "Durable resin flooring systems engineered for industrial, commercial, institutional and high-traffic environments.",
//     image: s2,
//     applications: ["Factories", "Warehouses", "Commercial", "Institutional"],
//     performance: [
//       "High durability",
//       "Chemical resistant",
//       "Easy maintenance",
//     ],
//   },
//   {
//     id: "03",
//     category: "RESIN FLOORING",
//     title: "PU Resin Flooring",
//     subtitle: "Resilient surfaces built for performance.",
//     description:
//       "Polyurethane flooring systems designed for environments requiring flexibility, durability, impact resistance and long-term performance.",
//     image: s3,
//     applications: ["Industrial", "Heavy Duty", "High Traffic", "Commercial"],
//     performance: [
//       "Impact resistant",
//       "Flexible finish",
//       "Heavy duty",
//     ],
//   },
//   {
//     id: "04",
//     category: "CONCRETE REPAIR",
//     title: "Repair & Strengthening",
//     subtitle: "Restore concrete. Reinforce performance.",
//     description:
//       "Specialised repair, injection and strengthening systems for damaged, aging and structurally demanding concrete surfaces.",
//     image: s4,
//     applications: ["PU Injection", "Epoxy Injection", "RCC Repair", "Anchoring"],
//     performance: [
//       "Crack treatment",
//       "Structural repair",
//       "Strengthening",
//     ],
//   },
// ];

// /* =========================================================
//    COMPONENT
// ========================================================= */
// export default function Solutions() {
//   const [activeSolution, setActiveSolution] = useState(0);

//   const [headRef, headInView] = useInView();
//   const [featureRef, featureInView] = useInView();
//   const [navRef, navInView] = useInView();
//   const [footRef, footInView] = useInView();

//   const solution = solutions[activeSolution];

//   return (
//     <section className="sol-section" id="why-us">

//       <div className="sol-container">

//         {/* ================= HEADER ================= */}
//         <div
//           ref={headRef}
//           className={`sol-header sol-reveal ${
//             headInView ? "sol-is-visible" : ""
//           }`}
//         >
//           <div className="sol-header-left">
//             <div className="sol-kicker">
//               <span className="sol-kicker-line" />
//               FEATURED SOLUTIONS
//             </div>

//             <h2 className="sol-title">
//               Engineered systems
//               <br />
//               <em>for every surface.</em>
//             </h2>
//           </div>

//           <div className="sol-header-right">
//             <p>
//               From waterproofing systems to industrial flooring and concrete
//               restoration, every solution is selected around the actual
//               demands of the project — site conditions, exposure and
//               performance requirement.
//             </p>
//           </div>
//         </div>

//         {/* ================= FEATURE ================= */}
//         <div
//           ref={featureRef}
//           className={`sol-feature sol-reveal ${
//             featureInView ? "sol-is-visible" : ""
//           }`}
//         >
//           {/* ---- IMAGE ---- */}
//           <div className="sol-feature-image">
//             {solutions.map((item, index) => (
//               <img
//                 key={item.id}
//                 src={item.image}
//                 alt={item.title}
//                 className={index === activeSolution ? "is-active" : ""}
//                 loading="lazy"
//               />
//             ))}

//             <div className="sol-feature-tag">
//               <span>SOLUTION</span>
//               <strong>{solution.id} / 04</strong>
//             </div>
//           </div>

//           {/* ---- CONTENT ---- */}
//           <div className="sol-feature-content" key={solution.id}>
//             <div className="sol-feature-top">
//               <span className="sol-feature-category">
//                 {solution.category}
//               </span>
//               <span className="sol-feature-dash" />
//             </div>

//             <h3 className="sol-feature-title">{solution.title}</h3>
//             <p className="sol-feature-subtitle">{solution.subtitle}</p>
//             <p className="sol-feature-desc">{solution.description}</p>

//             {/* Applications */}
//             <div className="sol-detail-group">
//               <span className="sol-detail-label">Applications</span>
//               <div className="sol-tags">
//                 {solution.applications.map((item) => (
//                   <span key={item}>{item}</span>
//                 ))}
//               </div>
//             </div>

//             {/* Performance */}
//             <div className="sol-detail-group">
//               <span className="sol-detail-label">System Characteristics</span>
//               <ul className="sol-perf">
//                 {solution.performance.map((item) => (
//                   <li key={item}>
//                     <span className="sol-perf-tick">✓</span>
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* CTA */}
//             <a
//               href="https://wa.me/917812043322?text=Hi%20Master%20Chemical%20Solution%2C%20I%20would%20like%20to%20know%20more%20about%20your%20solution."
//               target="_blank"
//               rel="noreferrer"
//               className="sol-feature-link"
//             >
//               Discuss This Solution →
//             </a>
//           </div>
//         </div>

//         {/* ================= NAVIGATION ================= */}
//         <div
//           ref={navRef}
//           className={`sol-nav ${navInView ? "sol-nav--visible" : ""}`}
//         >
//           {solutions.map((item, index) => {
//             const active = index === activeSolution;
//             return (
//               <button
//                 key={item.id}
//                 type="button"
//                 className={`sol-nav-item ${active ? "is-active" : ""}`}
//                 onMouseEnter={() => setActiveSolution(index)}
//                 onClick={() => setActiveSolution(index)}
//                 aria-label={`Show ${item.title}`}
//               >
//                 <span className="sol-nav-number">{item.id}</span>

//                 <span className="sol-nav-text">
//                   <small>{item.category}</small>
//                   <strong>{item.title}</strong>
//                 </span>

//                 <span className="sol-nav-arrow">→</span>
//               </button>
//             );
//           })}
//         </div>

//         {/* ================= BOTTOM CTA ================= */}
//         <div
//           ref={footRef}
//           className={`sol-bottom sol-reveal ${
//             footInView ? "sol-is-visible" : ""
//           }`}
//         >
//           <div className="sol-bottom-left">
//             <span className="sol-red-line" />
//             <strong>APPLICATION-LED APPROACH</strong>
//           </div>

//           <p>
//             The right system starts with understanding the surface,
//             environment and project requirement.
//           </p>

//           <a href="#contact" className="sol-bottom-link">
//             Find the Right System →
//           </a>
//         </div>

//       </div>
//     </section>
//   );
// }

// Solutions.jsx
import { useEffect, useRef, useState } from "react";
import "./Solutions.css";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";

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
const solutions = [
  {
    id: "01",
    category: "WATERPROOFING",
    title: "PU Waterproofing",
    subtitle: "Seamless protection against water ingress.",
    description:
      "Seamless waterproofing systems designed to protect critical structures from water ingress, moisture penetration and exposure-related damage.",
    image: s1,
    applications: ["Terrace", "Podium", "Basement", "Lift Pit"],
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
    image: s2,
    applications: ["Factories", "Warehouses", "Commercial", "Institutional"],
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
    image: s3,
    applications: ["Industrial", "Heavy Duty", "High Traffic", "Commercial"],
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
    image: s4,
    applications: ["PU Injection", "Epoxy Injection", "RCC Repair", "Anchoring"],
    performance: [
      "Crack treatment",
      "Structural repair",
      "Strengthening",
    ],
  },
];

/* =========================================================
   COMPONENT
========================================================= */
export default function Solutions() {
  const [activeSolution, setActiveSolution] = useState(0);

  const [headRef, headInView]       = useInView();
  const [featureRef, featureInView] = useInView();
  const [navRef, navInView]         = useInView();
  const [footRef, footInView]       = useInView();

  const solution = solutions[activeSolution];

  return (
    <section className="sol-section" id="why-us">

      <div className="sol-container">

        {/* ================= HEADER ================= */}
        <div
          ref={headRef}
          className={`sol-header sol-reveal ${
            headInView ? "sol-is-visible" : ""
          }`}
        >
          <div className="sol-header-left">
            <div className="sol-kicker">
              <span className="sol-kicker-line" />
              FEATURED SOLUTIONS
            </div>

            <h2 className="sol-title">
              Engineered systems
              <br />
              <em>for every surface.</em>
            </h2>
          </div>

          <div className="sol-header-right">
            <p>
              From waterproofing systems to industrial flooring and concrete
              restoration, every solution is selected around the actual
              demands of the project — site conditions, exposure and
              performance requirement.
            </p>
          </div>
        </div>

        {/* ================= FEATURE ================= */}
        <div
          ref={featureRef}
          className={`sol-feature sol-reveal ${
            featureInView ? "sol-is-visible" : ""
          }`}
        >
          {/* ---- IMAGE ---- */}
          <div className="sol-feature-image">
            {solutions.map((item, index) => (
              <img
                key={item.id}
                src={item.image}
                alt={item.title}
                className={index === activeSolution ? "is-active" : ""}
                loading="lazy"
              />
            ))}

            <div className="sol-feature-tag">
              <span>SOLUTION</span>
              <strong>{solution.id} / 04</strong>
            </div>
          </div>

          {/* ---- CONTENT ---- */}
          <div className="sol-feature-content" key={solution.id}>
            <div className="sol-feature-top">
              <span className="sol-feature-category">
                {solution.category}
              </span>
              <span className="sol-feature-dash" />
            </div>

            <h3 className="sol-feature-title">{solution.title}</h3>
            <p className="sol-feature-subtitle">{solution.subtitle}</p>
            <p className="sol-feature-desc">{solution.description}</p>

            {/* Applications */}
            <div className="sol-detail-group">
              <span className="sol-detail-label">Applications</span>
              <div className="sol-tags">
                {solution.applications.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            {/* Performance */}
            <div className="sol-detail-group">
              <span className="sol-detail-label">System Characteristics</span>
              <ul className="sol-perf">
                {solution.performance.map((item) => (
                  <li key={item}>
                    <span className="sol-perf-tick">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA — anchored to bottom */}
            <a
              href="https://wa.me/917812043322?text=Hi%20Master%20Chemical%20Solution%2C%20I%20would%20like%20to%20know%20more%20about%20your%20solution."
              target="_blank"
              rel="noreferrer"
              className="sol-feature-link"
            >
              <span>Discuss This Solution</span>
              <span className="sol-feature-link-arrow">→</span>
            </a>
          </div>
        </div>

        {/* ================= NAVIGATION ================= */}
        <div
          ref={navRef}
          className={`sol-nav ${navInView ? "sol-nav--visible" : ""}`}
        >
          {solutions.map((item, index) => {
            const active = index === activeSolution;
            return (
              <button
                key={item.id}
                type="button"
                className={`sol-nav-item ${active ? "is-active" : ""}`}
                onMouseEnter={() => setActiveSolution(index)}
                onClick={() => setActiveSolution(index)}
                aria-label={`Show ${item.title}`}
              >
                <span className="sol-nav-number">{item.id}</span>

                <span className="sol-nav-text">
                  <small>{item.category}</small>
                  <strong>{item.title}</strong>
                </span>

                <span className="sol-nav-arrow">→</span>
              </button>
            );
          })}
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div
          ref={footRef}
          className={`sol-bottom sol-reveal ${
            footInView ? "sol-is-visible" : ""
          }`}
        >
          <div className="sol-bottom-left">
            <span className="sol-red-line" />
            <strong>APPLICATION-LED APPROACH</strong>
          </div>

          <p>
            The right system starts with understanding the surface,
            environment and project requirement.
          </p>

          <a href="#contact" className="sol-bottom-link">
            Find the Right System →
          </a>
        </div>

      </div>
    </section>
  );
}