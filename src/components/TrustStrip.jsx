// import "./TrustStrip.css";
// const services = [
//   {
//     number: "01",
//     title: "Waterproofing",
//     sub: "Structure Protection",
//   },
//   {
//     number: "02",
//     title: "Industrial Flooring",
//     sub: "High Performance",
//   },
//   {
//     number: "03",
//     title: "Concrete Repair",
//     sub: "Structural Solutions",
//   },
//   {
//     number: "04",
//     title: "PU & Epoxy Injection",
//     sub: "Crack Treatment",
//   },
//   {
//     number: "05",
//     title: "Protective Coatings",
//     sub: "Surface Protection",
//   },
//   {
//     number: "06",
//     title: "Construction Chemicals",
//     sub: "Specialised Systems",
//   },
// ];

// export default function TrustStrip() {
//   return (
//     <section className="trust-strip">

//       {/* =========================================
//           TOP INFORMATION BAR
//       ========================================= */}

//       <div className="trust-top">

//         <div className="trust-container">

//           <div className="trust-label">

//             <span className="trust-status">
//               <i />
//             </span>

//             <div>
//               <small>MASTER CHEMICAL SOLUTION</small>
//               <strong>CORE CAPABILITIES</strong>
//             </div>

//           </div>

//           <div className="trust-top-text">
//             <span>ENGINEERED SURFACES</span>
//             <b>×</b>
//             <span>PROTECTION SYSTEMS</span>
//           </div>

//           <div className="trust-counter">
//             <strong>06</strong>
//             <span>CORE SERVICES</span>
//           </div>

//         </div>

//       </div>


//       {/* =========================================
//           MOVING SERVICE RAIL
//       ========================================= */}

//       <div className="trust-marquee">

//         <div className="trust-track">

//           {[...services, ...services].map(
//             (service, index) => (

//               <article
//                 className="trust-service"
//                 key={`${service.number}-${index}`}
//               >

//                 <div className="trust-service-number">
//                   {service.number}
//                 </div>

//                 <div className="trust-service-content">

//                   <strong>
//                     {service.title}
//                   </strong>

//                   <span>
//                     {service.sub}
//                   </span>

//                 </div>

//                 <div className="trust-service-arrow">
//                   ↗
//                 </div>

//                 <div className="trust-service-line" />

//               </article>

//             )
//           )}

//         </div>

//       </div>


//       {/* =========================================
//           BOTTOM TECHNICAL BAR
//       ========================================= */}

//       <div className="trust-bottom">

//         <div className="trust-container">

//           <div className="trust-bottom-left">
//             <span className="trust-red-line" />
//             <span>
//               WATERPROOFING · FLOORING · REPAIR · PROTECTION
//             </span>
//           </div>

//           <div className="trust-bottom-right">

//             <span>PU</span>
//             <span>EPOXY</span>
//             <span>RCC</span>
//             <span>CHEMICALS</span>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }




// TrustStrip.jsx
import { useEffect, useRef, useState } from "react";
import "./TrustStrip.css";

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
const services = [
  {
    number: "01",
    title: "Waterproofing",
    sub: "Terrace · Podium · Basement · Wet Areas",
  },
  {
    number: "02",
    title: "Industrial Flooring",
    sub: "Epoxy · PU · Self-Level · Polishing",
  },
  {
    number: "03",
    title: "Concrete Repair",
    sub: "RCC Restoration · Structural Fix",
  },
  {
    number: "04",
    title: "PU & Epoxy Injection",
    sub: "Crack Filling · Seepage Control",
  },
  {
    number: "05",
    title: "Protective Coatings",
    sub: "Chemical & Weather Resistance",
  },
  {
    number: "06",
    title: "Construction Chemicals",
    sub: "Admixtures · Bonding Agents",
  },
];

const quickPoints = [
  "ISI-Grade Materials",
  "Trained Applicators",
  "Site Supervision",
  "Project Warranty",
];

/* =========================================================
   COMPONENT
========================================================= */
export default function TrustStrip() {
  const [headRef, headInView] = useInView();
  const [gridRef, gridInView] = useInView();
  const [footRef, footInView] = useInView();

  return (
    <section className="trust-strip" id="services">

      {/* ================= HEADER ================= */}
      <div
        ref={headRef}
        className={`trust-header trust-reveal ${
          headInView ? "trust-is-visible" : ""
        }`}
      >
        <div className="trust-header-left">
          <div className="trust-kicker">
            <span className="trust-kicker-line" />
            OUR CORE SERVICES
          </div>

          <h2 className="trust-title">
            Specialised systems for
            <br />
            <em>every kind of surface.</em>
          </h2>
        </div>

        <div className="trust-header-right">
          <p>
            Six focused service lines covering waterproofing, flooring,
            repair, injection, coatings and specialised construction
            chemicals — supported end-to-end with trained applicators and
            on-site supervision.
          </p>
        </div>
      </div>

      {/* ================= SERVICE GRID ================= */}
      <div
        ref={gridRef}
        className={`trust-grid ${
          gridInView ? "trust-grid--visible" : ""
        }`}
      >
        {services.map((service, i) => (
          <a
            href="#contact"
            className="trust-card"
            key={service.number}
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <div className="trust-card-top">
              <span className="trust-card-number">{service.number}</span>
              <span className="trust-card-arrow">→</span>
            </div>

            <div className="trust-card-body">
              <h3>{service.title}</h3>
              <p>{service.sub}</p>
            </div>

            <div className="trust-card-foot">
              <span>Learn More</span>
              <span className="trust-card-dash" />
            </div>
          </a>
        ))}
      </div>

      {/* ================= BOTTOM STRIP ================= */}
      <div
        ref={footRef}
        className={`trust-bottom trust-reveal ${
          footInView ? "trust-is-visible" : ""
        }`}
      >
        <div className="trust-bottom-left">
          <span className="trust-red-line" />
          <strong>Why clients choose us</strong>
        </div>

        <ul className="trust-bottom-points">
          {quickPoints.map((point) => (
            <li key={point}>
              <span className="trust-check">✓</span>
              {point}
            </li>
          ))}
        </ul>
      </div>

    </section>
  );
}