// import "./Applications.css";
// const applications = [
//   {
//     number: "01",
//     title: "Wet Areas",
//     label: "WATERPROOFING",
//     description:
//       "Waterproofing systems for toilets, bathrooms and other moisture-prone areas.",
//     image:
//       "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85",
//     tags: ["Toilet", "Bathroom", "Wet Area"],
//   },
//   {
//     number: "02",
//     title: "Terrace & Roof",
//     label: "ROOF PROTECTION",
//     description:
//       "Protection systems designed for exposed terraces, roofs and weather-facing surfaces.",
//     image:
//       "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
//     tags: ["Terrace", "Roof", "Tile Coating"],
//   },
//   {
//     number: "03",
//     title: "Podium & Basement",
//     label: "STRUCTURAL WATERPROOFING",
//     description:
//       "Below-ground and podium waterproofing systems for critical structural protection.",
//     image:
//       "https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1600&q=85",
//     tags: ["Podium", "Basement", "Foundation"],
//   },
//   {
//     number: "04",
//     title: "Lift Pit & Sump",
//     label: "WATER PROTECTION",
//     description:
//       "Specialised waterproofing solutions for lift pits, sumps and water-retaining structures.",
//     image:
//       "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85",
//     tags: ["Lift Pit", "Sump", "Tank"],
//   },
//   {
//     number: "05",
//     title: "Industrial Floors",
//     label: "HEAVY-DUTY SURFACES",
//     description:
//       "High-performance flooring systems for industrial, commercial and high-traffic environments.",
//     image:
//       "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=85",
//     tags: ["Epoxy", "PU", "Self Level"],
//   },
//   {
//     number: "06",
//     title: "Sports Surfaces",
//     label: "PERFORMANCE FLOORING",
//     description:
//       "Specialised sports flooring systems designed around performance and surface requirements.",
//     image:
//       "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=85",
//     tags: ["Sports", "Performance", "Flooring"],
//   },
// ];

// export default function Applications() {
//   return (
//     <section className="applications-section" id="applications">
//       <div className="applications-grid-bg" />

//       <div className="applications-container">

//         {/* HEADER */}
//         <div className="applications-header">

//           <div className="applications-heading">
//             <span className="section-kicker">APPLICATION AREAS</span>

//             <h2>
//               Built for
//               <br />
//               <em>real surfaces.</em>
//             </h2>
//           </div>

//           <div className="applications-header-info">
//             <div className="applications-stat">
//               <strong>06</strong>
//               <span>KEY APPLICATION AREAS</span>
//             </div>

//             <p>
//               Different surfaces demand different systems. Our solutions
//               are selected around the environment, exposure and performance
//               requirements of each application.
//             </p>
//           </div>

//         </div>

//         {/* FEATURED APPLICATION */}
//         <div className="applications-feature">

//           <div className="applications-feature-image">
//             <img
//               src={applications[0].image}
//               alt={applications[0].title}
//             />

//             <div className="applications-feature-overlay" />

//             <div className="applications-feature-number">
//               01
//             </div>

//             <div className="applications-feature-caption">
//               <span>APPLICATION / 01</span>
//               <strong>WET AREA PROTECTION</strong>
//             </div>

//             <div className="applications-image-mark">
//               MCS
//             </div>
//           </div>

//           <div className="applications-feature-content">

//             <div className="applications-feature-top">
//               <span>APPLICATION SYSTEM</span>
//               <b>↗</b>
//             </div>

//             <div className="applications-feature-main">
//               <span className="applications-feature-label">
//                 WATERPROOFING
//               </span>

//               <h3>
//                 Wet Areas
//               </h3>

//               <p>
//                 Specialised waterproofing systems for toilets, bathrooms
//                 and moisture-prone areas where water protection is critical.
//               </p>

//               <div className="applications-feature-divider" />

//               <div className="applications-feature-tags">
//                 <span>TOILET</span>
//                 <span>BATHROOM</span>
//                 <span>WET AREA</span>
//               </div>
//             </div>

//             <div className="applications-feature-bottom">
//               <span>
//                 PROTECTION SYSTEM
//               </span>

//               <strong>
//                 PU WATERPROOFING
//               </strong>
//             </div>

//           </div>

//         </div>

//         {/* APPLICATION LIST */}
//         <div className="applications-list">

//           {applications.map((application, index) => (
//             <article
//               className="application-item"
//               key={application.number}
//             >

//               <div className="application-item-number">
//                 {application.number}
//               </div>

//               <div className="application-item-image">
//                 <img
//                   src={application.image}
//                   alt={application.title}
//                 />

//                 <div className="application-item-image-overlay" />
//               </div>

//               <div className="application-item-content">

//                 <span className="application-item-label">
//                   {application.label}
//                 </span>

//                 <h3>
//                   {application.title}
//                 </h3>

//                 <p>
//                   {application.description}
//                 </p>

//                 <div className="application-item-tags">
//                   {application.tags.map((tag) => (
//                     <span key={tag}>{tag}</span>
//                   ))}
//                 </div>

//               </div>

//               <div className="application-item-arrow">
//                 ↗
//               </div>

//             </article>
//           ))}

//         </div>

//         {/* BOTTOM CTA */}
//         <div className="applications-bottom">

//           <div className="applications-bottom-label">
//             <span />
//             <strong>SURFACE → SYSTEM → PERFORMANCE</strong>
//           </div>

//           <p>
//             Tell us about your surface and project environment.
//             We'll help identify the appropriate system.
//           </p>

//           <a
//             href="https://wa.me/917812043322?text=Hi%20Master%20Chemical%20Solution%2C%20I%20need%20help%20choosing%20a solution for my project."
//             target="_blank"
//             rel="noreferrer"
//           >
//             Discuss Your Application
//             <span>↗</span>
//           </a>

//         </div>

//       </div>
//     </section>
//   );
// }

// Applications.jsx
import { useEffect, useRef, useState } from "react";
import "./Applications.css";

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
const applications = [
  {
    number: "01",
    title: "Wet Areas",
    label: "WATERPROOFING",
    description:
      "Waterproofing systems for toilets, bathrooms and other moisture-prone areas.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85",
    tags: ["Toilet", "Bathroom", "Wet Area"],
  },
  {
    number: "02",
    title: "Terrace & Roof",
    label: "ROOF PROTECTION",
    description:
      "Protection systems designed for exposed terraces, roofs and weather-facing surfaces.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
    tags: ["Terrace", "Roof", "Tile Coating"],
  },
  {
    number: "03",
    title: "Podium & Basement",
    label: "STRUCTURAL WATERPROOFING",
    description:
      "Below-ground and podium waterproofing systems for critical structural protection.",
    image:
      "https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1600&q=85",
    tags: ["Podium", "Basement", "Foundation"],
  },
  {
    number: "04",
    title: "Lift Pit & Sump",
    label: "WATER PROTECTION",
    description:
      "Specialised waterproofing solutions for lift pits, sumps and water-retaining structures.",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85",
    tags: ["Lift Pit", "Sump", "Tank"],
  },
  {
    number: "05",
    title: "Industrial Floors",
    label: "HEAVY-DUTY SURFACES",
    description:
      "High-performance flooring systems for industrial, commercial and high-traffic environments.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=85",
    tags: ["Epoxy", "PU", "Self Level"],
  },
  {
    number: "06",
    title: "Sports Surfaces",
    label: "PERFORMANCE FLOORING",
    description:
      "Specialised sports flooring systems designed around performance and surface requirements.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=85",
    tags: ["Sports", "Performance", "Flooring"],
  },
];

/* =========================================================
   COMPONENT
========================================================= */
export default function Applications() {
  const [headRef, headInView] = useInView();
  const [gridRef, gridInView] = useInView();
  const [footRef, footInView] = useInView();

  return (
    <section className="app-section" id="applications">

      <div className="app-container">

        {/* ================= HEADER ================= */}
        <div
          ref={headRef}
          className={`app-header app-reveal ${
            headInView ? "app-is-visible" : ""
          }`}
        >
          <div className="app-header-left">
            <div className="app-kicker">
              <span className="app-kicker-line" />
              APPLICATION AREAS
            </div>

            <h2 className="app-title">
              Built for
              <br />
              <em>real surfaces.</em>
            </h2>
          </div>

          <div className="app-header-right">
            <p>
              Different surfaces demand different systems. Our solutions are
              selected around the environment, exposure and performance
              requirements of each application — from wet areas and terraces
              to industrial floors and sports surfaces.
            </p>
          </div>
        </div>

        {/* ================= GRID ================= */}
        <div
          ref={gridRef}
          className={`app-grid ${gridInView ? "app-grid--visible" : ""}`}
        >
          {applications.map((application, index) => (
            <a
              href="#contact"
              className="app-card"
              key={application.number}
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              {/* IMAGE */}
              <div className="app-card-image">
                <img
                  src={application.image}
                  alt={application.title}
                  loading="lazy"
                />

                <span className="app-card-number">
                  {application.number}
                </span>
              </div>

              {/* BODY */}
              <div className="app-card-body">
                <span className="app-card-label">{application.label}</span>

                <h3 className="app-card-title">{application.title}</h3>

                <p className="app-card-desc">{application.description}</p>

                <div className="app-card-tags">
                  {application.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* FOOT */}
              <div className="app-card-foot">
                <span>View Solution</span>
                <span className="app-card-arrow">→</span>
              </div>
            </a>
          ))}
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div
          ref={footRef}
          className={`app-bottom app-reveal ${
            footInView ? "app-is-visible" : ""
          }`}
        >
          <div className="app-bottom-left">
            <span className="app-red-line" />
            <strong>SURFACE → SYSTEM → PERFORMANCE</strong>
          </div>

          <p>
            Tell us about your surface and project environment. We'll help
            identify the appropriate system.
          </p>

          <a
            href="https://wa.me/917812043322?text=Hi%20Master%20Chemical%20Solution%2C%20I%20need%20help%20choosing%20a%20solution%20for%20my%20project."
            target="_blank"
            rel="noreferrer"
            className="app-bottom-link"
          >
            Discuss Your Application →
          </a>
        </div>

      </div>
    </section>
  );
}