// import './CTA.css';
// export default function CTA() {
//   return (
//     <section className="final-cta" id="contact">
//       <div className="final-cta-grid" />
//       <div className="final-cta-glow" />

//       <div className="final-cta-container">

//         {/* TOP TECHNICAL LABEL */}
//         <div className="final-cta-top">
//           <div className="final-cta-status">
//             <span />
//             <strong>PROJECT CONSULTATION</strong>
//           </div>

//           <div className="final-cta-code">
//             <span>MASTER CHEMICAL SOLUTION</span>
//             <b>01 / 01</b>
//           </div>
//         </div>

//         {/* MAIN CONTENT */}
//         <div className="final-cta-main">

//           <div className="final-cta-content">

//             <span className="final-cta-kicker">
//               HAVE A PROJECT IN MIND?
//             </span>

//             <h2>
//               Let's build
//               <br />
//               the right
//               <br />
//               <em>surface system.</em>
//             </h2>

//             <p>
//               Tell us about your project, surface and site requirements.
//               Let's discuss the appropriate waterproofing, flooring,
//               repair or protection system for the application.
//             </p>

//             <div className="final-cta-actions">

//               <a
//                 href="https://wa.me/917812043322?text=Hi%20Master%20Chemical%20Solution%2C%20I%20would%20like%20to%20discuss%20my%20project."
//                 target="_blank"
//                 rel="noreferrer"
//                 className="final-cta-primary"
//               >
//                 <span>Start a Conversation</span>
//                 <b>↗</b>
//               </a>

//               <a
//                 href="tel:+917812043322"
//                 className="final-cta-secondary"
//               >
//                 <span>Call Our Team</span>
//                 <b>→</b>
//               </a>

//             </div>

//           </div>

//           {/* RIGHT VISUAL */}
//           <div className="final-cta-visual">

//             <div className="final-cta-circle final-cta-circle-one" />
//             <div className="final-cta-circle final-cta-circle-two" />

//             <div className="final-cta-cross final-cta-cross-one">
//               +
//             </div>

//             <div className="final-cta-cross final-cta-cross-two">
//               +
//             </div>

//             <div className="final-cta-mark">

//               <span>M</span>

//               <div>
//                 <strong>MASTER</strong>
//                 <small>CHEMICAL SOLUTION</small>
//               </div>

//             </div>

//             <div className="final-cta-visual-label">
//               <span>SYSTEM / 01</span>
//               <strong>ENGINEERED<br />PROTECTION</strong>
//             </div>

//             <div className="final-cta-visual-arrow">
//               ↘
//             </div>

//           </div>

//         </div>

//         {/* SERVICE STRIP */}
//         <div className="final-cta-services">

//           <div className="final-cta-service-label">
//             <span>WHAT WE COVER</span>
//             <strong>04</strong>
//           </div>

//           <div className="final-cta-service">
//             <span>01</span>
//             <strong>WATERPROOFING</strong>
//           </div>

//           <div className="final-cta-service">
//             <span>02</span>
//             <strong>FLOORING</strong>
//           </div>

//           <div className="final-cta-service">
//             <span>03</span>
//             <strong>REPAIR</strong>
//           </div>

//           <div className="final-cta-service">
//             <span>04</span>
//             <strong>PROTECTION</strong>
//           </div>

//         </div>

//         {/* BOTTOM */}
//         <div className="final-cta-bottom">

//           <span>
//             FROM SUBSTRATE TO FINISH
//           </span>

//           <div />

//           <span>
//             BUILT TO PROTECT · FINISHED TO LAST
//           </span>

//         </div>

//       </div>
//     </section>
//   );
// }



// CTA.jsx
import { useEffect, useRef, useState } from "react";
import "./CTA.css";

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
   COMPONENT
========================================================= */
export default function CTA() {
  const [ref, inView] = useInView();

  return (
    <section className="cta-section" id="contact">

      <div
        ref={ref}
        className={`cta-inner cta-reveal ${inView ? "cta-is-visible" : ""}`}
      >
        {/* LEFT — TEXT */}
        <div className="cta-text">
          <span className="cta-kicker">HAVE A PROJECT IN MIND?</span>

          <h2 className="cta-title">
            Let's build the right <em>surface system.</em>
          </h2>

          <p className="cta-desc">
            Tell us about your project, surface and site requirements.
            We'll help identify the appropriate system.
          </p>
        </div>

        {/* RIGHT — BUTTONS */}
        <div className="cta-actions">
          <a
            href="tel:+917812043322"
            className="cta-btn cta-btn--primary"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/917812043322?text=Hi%20Master%20Chemical%20Solution%2C%20I%20would%20like%20to%20discuss%20my%20project."
            target="_blank"
            rel="noreferrer"
            className="cta-btn cta-btn--ghost"
          >
            WhatsApp Us
          </a>
        </div>

      </div>
    </section>
  );
}