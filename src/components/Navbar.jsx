// // import { useState } from "react";

// // export default function Navbar() {
// //   const [open, setOpen] = useState(false);

// //   const closeMenu = () => setOpen(false);

// //   return (
// //     <header className="navbar">
// //       <div className="navbar-inner">

// //         <a href="#home" className="logo">
// //           <img src="/logo.png" alt="Master Chemical Solution" />

// //           <div>
// //             <strong>MASTER</strong>
// //             <span>CHEMICAL SOLUTION</span>
// //           </div>
// //         </a>

// //         <nav className={open ? "nav-links open" : "nav-links"}>
// //           <a href="#services" onClick={closeMenu}>
// //             Services
// //           </a>

// //           <a href="#solutions" onClick={closeMenu}>
// //             Solutions
// //           </a>

// //           <a href="#projects" onClick={closeMenu}>
// //             Projects
// //           </a>

// //           <a href="#why-us" onClick={closeMenu}>
// //             Why Us
// //           </a>

// //           <a
// //             href="tel:+917812043322"
// //             className="nav-button"
// //             onClick={closeMenu}
// //           >
// //             Call Now
// //           </a>
// //         </nav>

// //         <button
// //           className="menu-button"
// //           onClick={() => setOpen(!open)}
// //           aria-label="Open menu"
// //         >
// //           <span />
// //           <span />
// //           <span />
// //         </button>

// //       </div>
// //     </header>
// //   );
// // }

// import { useState, useEffect } from "react";
// import "./Navbar.css";
// import logo from "../assets/image.png";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const closeMenu = () => setOpen(false);

//   // Lock body scroll when mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [open]);

//   // Add shadow when page is scrolled
//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 8);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // Close menu on Escape key
//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "Escape") closeMenu();
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   return (
//     <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
//       <div className="navbar-inner">

//         {/* ---------- LOGO ---------- */}
//         <a href="#home" className="logo" onClick={closeMenu} aria-label="Master Chemical Solution — Home">
//           <span className="logo-mark" aria-hidden="true">
//             <img src={logo} alt="" />
//           </span>
//           <span className="logo-text">
//             <strong>MASTER</strong>
//             <span>CHEMICAL SOLUTION</span>
//           </span>
//         </a>

//         {/* ---------- NAV ---------- */}
//         <nav
//           id="primary-navigation"
//           className={`nav-links ${open ? "open" : ""}`}
//           aria-label="Primary"
//         >
//           <a href="#services" onClick={closeMenu}>Services</a>
//           <a href="#solutions" onClick={closeMenu}>Solutions</a>
//           <a href="#projects" onClick={closeMenu}>Projects</a>
//           <a href="#why-us" onClick={closeMenu}>Why Us</a>

//           <a
//             href="tel:+917812043322"
//             className="nav-button"
//             onClick={closeMenu}
//           >
//             <span className="nav-button-icon" aria-hidden="true">📞</span>
//             Call Now
//           </a>
//         </nav>

//         {/* ---------- MOBILE TOGGLE ---------- */}
//         <button
//           type="button"
//           className={`menu-button ${open ? "is-open" : ""}`}
//           onClick={() => setOpen((v) => !v)}
//           aria-label={open ? "Close menu" : "Open menu"}
//           aria-expanded={open}
//           aria-controls="primary-navigation"
//         >
//           <span />
//           <span />
//           <span />
//         </button>

//         {/* ---------- MOBILE OVERLAY ---------- */}
//         <button
//           type="button"
//           className={`nav-overlay ${open ? "is-visible" : ""}`}
//           onClick={closeMenu}
//           aria-hidden="true"
//           tabIndex={-1}
//         />
//       </div>
//     </header>
//   );
// }



// Navbar.jsx
import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/image.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setOpen(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Add shadow when page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="navbar-inner">

        {/* ---------- LOGO ---------- */}
        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
          aria-label="Master Chemical Solution — Home"
        >
          <span className="logo-mark" aria-hidden="true">
            <img src={logo} alt="" />
          </span>
          <span className="logo-text">
            <strong>MASTER</strong>
            <span>CHEMICAL SOLUTION</span>
          </span>
        </a>

        {/* ---------- NAV ---------- */}
        <nav
          id="primary-navigation"
          className={`nav-links ${open ? "open" : ""}`}
          aria-label="Primary"
        >
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#solutions" onClick={closeMenu}>Solutions</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#why-us" onClick={closeMenu}>Why Us</a>

          <a
            href="tel:+917812043322"
            className="nav-button"
            onClick={closeMenu}
          >
            <span className="nav-button-icon" aria-hidden="true">📞</span>
            Call Now
          </a>
        </nav>

        {/* ---------- MOBILE TOGGLE ---------- */}
        <button
          type="button"
          className={`menu-button ${open ? "is-open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="primary-navigation"
        >
          <span />
          <span />
          <span />
        </button>

        {/* ---------- MOBILE OVERLAY ---------- */}
        <button
          type="button"
          className={`nav-overlay ${open ? "is-visible" : ""}`}
          onClick={closeMenu}
          aria-hidden="true"
          tabIndex={-1}
        />
      </div>
    </header>
  );
}