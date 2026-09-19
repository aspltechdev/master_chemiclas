// // import "./Footer.css";
// // export default function Footer() {
// //   return (
// //     <footer className="footer">

// //       <div className="footer-grid-bg" />

// //       <div className="footer-container">

// //         {/* TOP */}
// //         <div className="footer-top">

// //           {/* BRAND */}
// //           <div className="footer-brand">

// //             <a href="#home" className="footer-logo">
// //               <img
// //                 src="/logo.png"
// //                 alt="Master Chemical Solution"
// //               />
// //             </a>

// //             <p>
// //               Specialised construction chemical systems for
// //               waterproofing, flooring, concrete repair and
// //               surface protection.
// //             </p>

// //             <a
// //               href="https://wa.me/917812043322?text=Hi%20Master%20Chemical%20Solution%2C%20I%20would%20like%20to%20discuss%20my%20project."
// //               target="_blank"
// //               rel="noreferrer"
// //               className="footer-start"
// //             >
// //               <span>Start a Conversation</span>
// //               <b>↗</b>
// //             </a>

// //           </div>


// //           {/* NAVIGATION */}
// //           <div className="footer-column">

// //             <span className="footer-column-title">
// //               EXPLORE
// //             </span>

// //             <a href="#home">Home</a>
// //             <a href="#services">Services</a>
// //             <a href="#solutions">Solutions</a>
// //             <a href="#applications">Applications</a>
// //             <a href="#projects">Projects</a>
// //             <a href="#why-us">Why Us</a>

// //           </div>


// //           {/* SERVICES */}
// //           <div className="footer-column">

// //             <span className="footer-column-title">
// //               CAPABILITIES
// //             </span>

// //             <a href="#services">Waterproofing</a>
// //             <a href="#services">Industrial Flooring</a>
// //             <a href="#services">Concrete Repair</a>
// //             <a href="#services">PU & Epoxy Injection</a>
// //             <a href="#services">Protective Coatings</a>
// //             <a href="#services">Construction Chemicals</a>

// //           </div>


// //           {/* CONTACT */}
// //           <div className="footer-column footer-contact">

// //             <span className="footer-column-title">
// //               CONTACT
// //             </span>

// //             <span className="footer-contact-label">
// //               DISCUSS YOUR REQUIREMENT
// //             </span>

// //             <a
// //               href="tel:+917812043322"
// //               className="footer-phone"
// //             >
// //               +91 78120 43322
// //             </a>

// //             <a
// //               href="https://wa.me/917812043322"
// //               target="_blank"
// //               rel="noreferrer"
// //               className="footer-whatsapp"
// //             >
// //               WhatsApp
// //               <span>↗</span>
// //             </a>

// //             <span className="footer-contact-label footer-location-label">
// //               LOCATION
// //             </span>

// //             <p>
// //               Puducherry, India
// //             </p>

// //           </div>

// //         </div>


// //         {/* LARGE BRAND */}
// //         <div className="footer-brand-stage">

// //           <div className="footer-brand-word">
// //             MASTER
// //           </div>

// //           <div className="footer-brand-stage-line" />

// //           <div className="footer-brand-meta">

// //             <span>
// //               CHEMICAL SOLUTION
// //             </span>

// //             <span>
// //               WATERPROOFING · FLOORING · REPAIR · PROTECTION
// //             </span>

// //             <span>
// //               MCS / 01
// //             </span>

// //           </div>

// //         </div>


// //         {/* TECHNICAL STRIP */}
// //         <div className="footer-tech-strip">

// //           <div className="footer-tech-item">
// //             <span>01</span>
// //             <strong>WATERPROOFING</strong>
// //           </div>

// //           <div className="footer-tech-item">
// //             <span>02</span>
// //             <strong>FLOORING</strong>
// //           </div>

// //           <div className="footer-tech-item">
// //             <span>03</span>
// //             <strong>REPAIR</strong>
// //           </div>

// //           <div className="footer-tech-item">
// //             <span>04</span>
// //             <strong>PROTECTION</strong>
// //           </div>

// //         </div>


// //         {/* BOTTOM */}
// //         <div className="footer-bottom">

// //           <div className="footer-copyright">
// //             © {new Date().getFullYear()} Master Chemical Solution
// //           </div>

// //           <div className="footer-bottom-center">
// //             Built to Protect · Finished to Last
// //           </div>

// //           <a
// //             href="#home"
// //             className="footer-top-link"
// //           >
// //             BACK TO TOP
// //             <span>↑</span>
// //           </a>

// //         </div>

// //       </div>

// //     </footer>
// //   );
// // }

// // Footer.jsx
// import { useEffect, useRef, useState } from "react";
// import "./Footer.css";
// import logo from "../assets/image.png";

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
//       { threshold: 0.1, rootMargin: "0px 0px -40px 0px", ...options }
//     );

//     observer.observe(node);
//     return () => observer.disconnect();
//   }, [options]);

//   return [ref, inView];
// }

// /* =========================================================
//    DATA
// ========================================================= */
// const exploreLinks = [
//   { label: "Home",         href: "#home" },
//   { label: "About Us",     href: "#about" },
//   { label: "Services",     href: "#services" },
//   { label: "Solutions",    href: "#solutions" },
//   { label: "Applications", href: "#applications" },
//   { label: "Projects",     href: "#projects" },
//   { label: "Why Us",       href: "#why-us" },
// ];

// const capabilityLinks = [
//   "Waterproofing",
//   "Industrial Flooring",
//   "Concrete Repair",
//   "PU & Epoxy Injection",
//   "Protective Coatings",
//   "Construction Chemicals",
// ];

// /* =========================================================
//    COMPONENT
// ========================================================= */
// export default function Footer() {
//   const [ref, inView] = useInView();

//   return (
//     <footer className="ft-section">

//       <div
//         ref={ref}
//         className={`ft-container ft-reveal ${inView ? "ft-is-visible" : ""}`}
//       >

//         {/* ================= TOP GRID ================= */}
//         <div className="ft-top">

//           {/* BRAND */}
//           <div className="ft-brand">
//             <a href="#home" className="ft-logo">
//               <span className="ft-logo-mark">
//                 <img src={logo} alt="" />
//               </span>

//               <span className="ft-logo-text">
//                 <strong>MASTER</strong>
//                 <span>CHEMICAL SOLUTION</span>
//               </span>
//             </a>

//             <p className="ft-brand-text">
//               Specialised construction chemical systems for waterproofing,
//               flooring, concrete repair and surface protection — delivered
//               across Puducherry, Chennai and South India.
//             </p>

//             <a
//               href="https://wa.me/917812043322?text=Hi%20Master%20Chemical%20Solution%2C%20I%20would%20like%20to%20discuss%20my%20project."
//               target="_blank"
//               rel="noreferrer"
//               className="ft-brand-cta"
//             >
//               Start a Conversation →
//             </a>
//           </div>

//           {/* EXPLORE */}
//           <nav className="ft-col" aria-label="Explore">
//             <h4 className="ft-col-title">Explore</h4>

//             <ul className="ft-col-list">
//               {exploreLinks.map((link) => (
//                 <li key={link.href}>
//                   <a href={link.href}>{link.label}</a>
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           {/* CAPABILITIES */}
//           <nav className="ft-col" aria-label="Capabilities">
//             <h4 className="ft-col-title">Capabilities</h4>

//             <ul className="ft-col-list">
//               {capabilityLinks.map((label) => (
//                 <li key={label}>
//                   <a href="#services">{label}</a>
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           {/* CONTACT */}
//           <div className="ft-col ft-col--contact">
//             <h4 className="ft-col-title">Contact</h4>

//             <div className="ft-contact-block">
//               <span className="ft-contact-label">Call Us</span>
//               <a href="tel:+917812043322" className="ft-contact-value">
//                 +91 78120 43322
//               </a>
//             </div>

//             <div className="ft-contact-block">
//               <span className="ft-contact-label">WhatsApp</span>
//               <a
//                 href="https://wa.me/917812043322"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="ft-contact-value"
//               >
//                 Chat With Us →
//               </a>
//             </div>

//             <div className="ft-contact-block">
//               <span className="ft-contact-label">Email</span>
//               <a
//                 href="mailto:info@masterchemical.in"
//                 className="ft-contact-value"
//               >
//                 info@masterchemical.in
//               </a>
//             </div>

//             <div className="ft-contact-block">
//               <span className="ft-contact-label">Location</span>
//               <span className="ft-contact-value ft-contact-value--plain">
//                 Puducherry, India
//               </span>
//             </div>
//           </div>

//         </div>

//         {/* ================= BOTTOM BAR ================= */}
//         <div className="ft-bottom">

//           <div className="ft-copy">
//             © {new Date().getFullYear()} Master Chemical Solution. All rights reserved.
//           </div>

//           <div className="ft-tagline">
//             Built to Protect · Finished to Last
//           </div>

//           <a href="#home" className="ft-top-link">
//             Back to Top ↑
//           </a>

//         </div>

//       </div>
//     </footer>
//   );
// }

// Footer.jsx
import { useEffect, useRef, useState } from "react";
import "./Footer.css";
import logo from "../assets/image.png";

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
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px", ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

/* =========================================================
   DATA
========================================================= */
const exploreLinks = [
  { label: "Home",         href: "#home" },
  { label: "About Us",     href: "#about" },
  { label: "Services",     href: "#services" },
  { label: "Solutions",    href: "#solutions" },
  { label: "Applications", href: "#applications" },
  { label: "Projects",     href: "#projects" },
  { label: "Why Us",       href: "#why-us" },
];

const capabilityLinks = [
  "Waterproofing",
  "Industrial Flooring",
  "Concrete Repair",
  "PU & Epoxy Injection",
  "Protective Coatings",
  "Construction Chemicals",
];

/* =========================================================
   COMPONENT
========================================================= */
export default function Footer() {
  const [ref, inView] = useInView();

  return (
    <footer className="ft-section">

      <div
        ref={ref}
        className={`ft-container ft-reveal ${inView ? "ft-is-visible" : ""}`}
      >

        {/* ================= TOP GRID ================= */}
        <div className="ft-top">

          {/* BRAND */}
          <div className="ft-brand">
            <a href="#home" className="ft-logo">
              <span className="ft-logo-mark">
                <img src={logo} alt="" />
              </span>

              <span className="ft-logo-text">
                <strong>MASTER</strong>
                <span>CHEMICAL SOLUTION</span>
              </span>
            </a>

            <p className="ft-brand-text">
              Specialised construction chemical systems for waterproofing,
              flooring, concrete repair and surface protection — delivered
              across Puducherry, Chennai and South India.
            </p>

            <a
              href="https://wa.me/917812043322?text=Hi%20Master%20Chemical%20Solution%2C%20I%20would%20like%20to%20discuss%20my%20project."
              target="_blank"
              rel="noreferrer"
              className="ft-brand-cta"
            >
              Start a Conversation →
            </a>
          </div>

          {/* EXPLORE */}
          <nav className="ft-col" aria-label="Explore">
            <h4 className="ft-col-title">Explore</h4>

            <ul className="ft-col-list">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CAPABILITIES */}
          <nav className="ft-col" aria-label="Capabilities">
            <h4 className="ft-col-title">Capabilities</h4>

            <ul className="ft-col-list">
              {capabilityLinks.map((label) => (
                <li key={label}>
                  <a href="#services">{label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CONTACT */}
          <div className="ft-col ft-col--contact">
            <h4 className="ft-col-title">Contact</h4>

            <div className="ft-contact-block">
              <span className="ft-contact-label">Call Us</span>
              <a href="tel:+917812043322" className="ft-contact-value">
                +91 78120 43322
              </a>
            </div>

            <div className="ft-contact-block">
              <span className="ft-contact-label">WhatsApp</span>
              <a
                href="https://wa.me/917812043322"
                target="_blank"
                rel="noreferrer"
                className="ft-contact-value"
              >
                Chat With Us →
              </a>
            </div>

            <div className="ft-contact-block">
              <span className="ft-contact-label">Email</span>
              <a
                href="mailto:info@masterchemical.in"
                className="ft-contact-value"
              >
                info@masterchemical.in
              </a>
            </div>

            <div className="ft-contact-block">
              <span className="ft-contact-label">Location</span>
              <span className="ft-contact-value ft-contact-value--plain">
                Puducherry, India
              </span>
            </div>
          </div>

        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="ft-bottom">

          <div className="ft-copy">
            © {new Date().getFullYear()} Master Chemical Solution. All rights reserved.
          </div>

          <div className="ft-tagline">
            Built to Protect · Finished to Last
          </div>

          <a href="#home" className="ft-top-link">
            Back to Top ↑
          </a>

          {/* CRAFTED BY — centered full-width line */}
          <div className="ft-credit">
            Crafted by{" "}
            <a
              href="https://aspltech.com"
              target="_blank"
              rel="noreferrer"
              className="ft-credit-link"
            >
              ASPL Tech Solutions Pvt Ltd
            </a>
            {" "}· Bangalore
          </div>

        </div>

      </div>
    </footer>
  );
}