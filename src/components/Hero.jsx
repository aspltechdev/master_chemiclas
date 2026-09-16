
// import { useEffect, useState } from "react";
// import "./Hero.css";
// const heroSlides = [
//   {
//     id: "01",
//     category: "WATERPROOFING SYSTEMS",
//     title: "Built to Protect.",
//     highlight: "Finished to Last.",
//     description:
//       "Professional waterproofing systems engineered for terraces, podiums, basements, wet areas and critical structures.",
//     image: "/waterproofing.jpg",
//     tags: ["PU", "TERRACE", "PODIUM", "BASEMENT"],
//   },
//   {
//     id: "02",
//     category: "INDUSTRIAL FLOORING",
//     title: "Performance",
//     highlight: "Under Every Step.",
//     description:
//       "High-performance epoxy, PU and specialised flooring systems designed for industrial, commercial and institutional environments.",
//     image: "/epoxy-flooring.jpg",
//     tags: ["EPOXY", "PU", "SELF LEVEL", "POLISHING"],
//   },
//   {
//     id: "03",
//     category: "CONCRETE REPAIR",
//     title: "Restore Strength.",
//     highlight: "Extend Performance.",
//     description:
//       "Specialised concrete repair, injection and strengthening solutions for demanding structural and construction applications.",
//     image: "/concrete-repair.jpg",
//     tags: ["PU INJECTION", "EPOXY", "RCC", "REPAIR"],
//   },
//   {
//     id: "04",
//     category: "SURFACE PROTECTION",
//     title: "Protection That",
//     highlight: "Goes Further.",
//     description:
//       "Advanced protective coatings and surface treatment systems built for durability, exposure resistance and long-term performance.",
//     image: "/pu-flooring.jpg",
//     tags: ["COATINGS", "PU", "RCC", "CHEMICALS"],
//   },
// ];

// export default function Hero() {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [paused, setPaused] = useState(false);

//   const slide = heroSlides[activeSlide];

//   /* Auto slider */
//   useEffect(() => {
//     if (paused) return;

//     const timer = setInterval(() => {
//       setActiveSlide((current) =>
//         current === heroSlides.length - 1 ? 0 : current + 1
//       );
//     }, 6000);

//     return () => clearInterval(timer);
//   }, [paused]);

//   const nextSlide = () => {
//     setActiveSlide((current) =>
//       current === heroSlides.length - 1 ? 0 : current + 1
//     );
//   };

//   const prevSlide = () => {
//     setActiveSlide((current) =>
//       current === 0 ? heroSlides.length - 1 : current - 1
//     );
//   };

//   return (
//     <section
//       className="hero"
//       id="home"
//       onMouseEnter={() => setPaused(true)}
//       onMouseLeave={() => setPaused(false)}
//     >

//       {/* =================================================
//           BACKGROUND
//       ================================================= */}

//       <div className="hero-background">
//         {heroSlides.map((item, index) => (
//           <div
//             className={`hero-background-slide ${
//               index === activeSlide ? "active" : ""
//             }`}
//             key={item.id}
//           >
//             <img
//               src={item.image}
//               alt={item.category}
//             />
//           </div>
//         ))}
//       </div>

//       <div className="hero-dark-overlay" />
//       <div className="hero-blue-overlay" />

//       {/* Architectural grid */}
//       <div className="hero-grid-overlay" />

//       {/* =================================================
//           TOP INFORMATION
//       ================================================= */}

//       <div className="hero-topbar">

//         <div className="hero-top-left">
//           <span className="hero-status-dot" />
//           <span>MASTER CHEMICAL SOLUTION</span>
//         </div>

//         <div className="hero-top-right">
//           <span>CONSTRUCTION · ENGINEERING · PROTECTION</span>
//         </div>

//       </div>

//       {/* =================================================
//           MAIN CONTENT
//       ================================================= */}

//       <div className="hero-container">

//         {/* LEFT */}

//         <div
//           className="hero-content"
//           key={`content-${slide.id}`}
//         >

//           <div className="hero-category">

//             <span className="hero-category-line" />

//             <span>{slide.category}</span>

//           </div>

//           <div className="hero-heading">

//             <h1>
//               {slide.title}
//               <br />
//               <span>{slide.highlight}</span>
//             </h1>

//           </div>

//           <p className="hero-description">
//             {slide.description}
//           </p>

//           <div className="hero-actions">

//             <a
//               href="https://wa.me/917812043322?text=Hi%20Master%20Chemical%20Solution%2C%20I%20would%20like%20to%20discuss%20my%20project."
//               target="_blank"
//               rel="noreferrer"
//               className="hero-primary-btn"
//             >
//               <span>Get Project Quote</span>
//               <b>↗</b>
//             </a>

//             <a
//               href="tel:+917812043322"
//               className="hero-secondary-btn"
//             >
//               <span>Call Our Team</span>
//               <b>→</b>
//             </a>

//           </div>

//           {/* Bottom proof */}

//           <div className="hero-proof">

//             <div className="hero-proof-icon">
//               ✓
//             </div>

//             <div className="hero-proof-content">
//               <strong>
//                 Complete Surface Protection
//               </strong>

//               <span>
//                 Waterproofing · Flooring · Repair · Coatings
//               </span>
//             </div>

//           </div>

//         </div>

//         {/* =================================================
//             RIGHT TECHNICAL PANEL
//         ================================================= */}

//         <div
//           className="hero-panel"
//           key={`panel-${slide.id}`}
//         >

//           <div className="hero-panel-header">

//             <div>
//               <span>01 / SOLUTION</span>
//               <strong>{slide.id}</strong>
//             </div>

//             <div className="hero-panel-icon">
//               ↗
//             </div>

//           </div>

//           <div className="hero-panel-main">

//             <span className="hero-panel-small">
//               ENGINEERED FOR
//             </span>

//             <h2>
//               {slide.category}
//             </h2>

//             <div className="hero-panel-divider" />

//             <div className="hero-panel-list">

//               {slide.tags.map((tag, index) => (
//                 <div
//                   className="hero-panel-item"
//                   key={tag}
//                 >

//                   <span>
//                     {String(index + 1).padStart(2, "0")}
//                   </span>

//                   <strong>{tag}</strong>

//                   <b>↗</b>

//                 </div>
//               ))}

//             </div>

//           </div>

//           <div className="hero-panel-footer">

//             <span>SYSTEM</span>

//             <div className="hero-panel-badges">

//               <i>PU</i>
//               <i>EPOXY</i>
//               <i>RCC</i>

//             </div>

//           </div>

//         </div>

//       </div>

//       {/* =================================================
//           SLIDE NAVIGATION
//       ================================================= */}

//       <div className="hero-navigation">

//         <div className="hero-slide-navigation">

//           {heroSlides.map((item, index) => (
//             <button
//               key={item.id}
//               className={
//                 index === activeSlide
//                   ? "hero-slide-button active"
//                   : "hero-slide-button"
//               }
//               onClick={() => setActiveSlide(index)}
//               aria-label={`Slide ${index + 1}`}
//             >

//               <span>{item.id}</span>

//               <i />

//             </button>
//           ))}

//         </div>

//         <div className="hero-arrow-navigation">

//           <button
//             onClick={prevSlide}
//             aria-label="Previous slide"
//           >
//             ←
//           </button>

//           <button
//             onClick={nextSlide}
//             aria-label="Next slide"
//           >
//             →
//           </button>

//         </div>

//       </div>

//       {/* =================================================
//           SLIDE PROGRESS
//       ================================================= */}

//       <div className="hero-progress">

//         <div
//           className="hero-progress-fill"
//           key={`${activeSlide}-${paused}`}
//         />

//       </div>

//       {/* =================================================
//           SCROLL
//       ================================================= */}

//       <div className="hero-scroll-indicator">

//         <span>SCROLL</span>

//         <div>
//           <i />
//         </div>

//       </div>

//       {/* =================================================
//           LARGE BACKGROUND NUMBER
//       ================================================= */}

//       <div className="hero-background-number">
//         {slide.id}
//       </div>

//     </section>
//   );
// }














































// Hero.jsx
import { useEffect, useState } from "react";
import "./Hero.css";

const heroSlides = [
  {
    id: "01",
    category: "WATERPROOFING SYSTEMS",
    title: "Built to Protect.",
    highlight: "Finished to Last.",
    description:
      "Professional waterproofing systems engineered for terraces, podiums, basements, wet areas and critical structures.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=85",
    tags: ["PU", "TERRACE", "PODIUM", "BASEMENT"],
  },
  {
    id: "02",
    category: "INDUSTRIAL FLOORING",
    title: "Performance",
    highlight: "Under Every Step.",
    description:
      "High-performance epoxy, PU and specialised flooring systems designed for industrial, commercial and institutional environments.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=2400&q=85",
    tags: ["EPOXY", "PU", "SELF LEVEL", "POLISHING"],
  },
  {
    id: "03",
    category: "CONCRETE REPAIR",
    title: "Restore Strength.",
    highlight: "Extend Performance.",
    description:
      "Specialised concrete repair, injection and strengthening solutions for demanding structural and construction applications.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2400&q=85",
    tags: ["PU INJECTION", "EPOXY", "RCC", "REPAIR"],
  },
  {
    id: "04",
    category: "SURFACE PROTECTION",
    title: "Protection That",
    highlight: "Goes Further.",
    description:
      "Advanced protective coatings and surface treatment systems built for durability, exposure resistance and long-term performance.",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=2400&q=85",
    tags: ["COATINGS", "PU", "RCC", "CHEMICALS"],
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  const slide = heroSlides[activeSlide];

  /* Auto slider */
  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setActiveSlide((current) =>
        current === heroSlides.length - 1 ? 0 : current + 1
      );
    }, 6000);

    return () => clearInterval(timer);
  }, [paused]);

  const nextSlide = () => {
    setActiveSlide((current) =>
      current === heroSlides.length - 1 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setActiveSlide((current) =>
      current === 0 ? heroSlides.length - 1 : current - 1
    );
  };

  return (
    <section
      className="hero"
      id="home"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* =================================================
          BACKGROUND
      ================================================= */}
      <div className="hero-background">
        {heroSlides.map((item, index) => (
          <div
            className={`hero-background-slide ${
              index === activeSlide ? "active" : ""
            }`}
            key={item.id}
          >
            <img src={item.image} alt={item.category} />
          </div>
        ))}
      </div>

      <div className="hero-dark-overlay" />
      <div className="hero-blue-overlay" />

      {/* Architectural grid */}
      <div className="hero-grid-overlay" />

      {/* =================================================
          TOP INFORMATION
      ================================================= */}
      <div className="hero-topbar">
        <div className="hero-top-left">
          <span className="hero-status-dot" />
          <span>MASTER CHEMICAL SOLUTION</span>
        </div>

        <div className="hero-top-right">
          <span>CONSTRUCTION · ENGINEERING · PROTECTION</span>
        </div>
      </div>

      {/* =================================================
          MAIN CONTENT
      ================================================= */}
      <div className="hero-container">
        {/* LEFT */}
        <div className="hero-content" key={`content-${slide.id}`}>
          <div className="hero-category">
            <span className="hero-category-line" />
            <span>{slide.category}</span>
          </div>

          <div className="hero-heading">
            <h1>
              {slide.title}
              <br />
              <span>{slide.highlight}</span>
            </h1>
          </div>

          <p className="hero-description">{slide.description}</p>

          <div className="hero-actions">
            <a
              href="https://wa.me/917812043322?text=Hi%20Master%20Chemical%20Solution%2C%20I%20would%20like%20to%20discuss%20my%20project."
              target="_blank"
              rel="noreferrer"
              className="hero-primary-btn"
            >
              <span>Get Project Quote</span>
              <b>↗</b>
            </a>

            <a href="tel:+917812043322" className="hero-secondary-btn">
              <span>Call Our Team</span>
              <b>→</b>
            </a>
          </div>

          {/* Bottom proof */}
          <div className="hero-proof">
            <div className="hero-proof-icon">✓</div>

            <div className="hero-proof-content">
              <strong>Complete Surface Protection</strong>
              <span>Waterproofing · Flooring · Repair · Coatings</span>
            </div>
          </div>
        </div>

        {/* =================================================
            RIGHT TECHNICAL PANEL
        ================================================= */}
        <div className="hero-panel" key={`panel-${slide.id}`}>
          <div className="hero-panel-header">
            <div>
              <span>01 / SOLUTION</span>
              <strong>{slide.id}</strong>
            </div>

            <div className="hero-panel-icon">↗</div>
          </div>

          <div className="hero-panel-main">
            <span className="hero-panel-small">ENGINEERED FOR</span>

            <h2>{slide.category}</h2>

            <div className="hero-panel-divider" />

            <div className="hero-panel-list">
              {slide.tags.map((tag, index) => (
                <div className="hero-panel-item" key={tag}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{tag}</strong>
                  <b>↗</b>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-panel-footer">
            <span>SYSTEM</span>

            <div className="hero-panel-badges">
              <i>PU</i>
              <i>EPOXY</i>
              <i>RCC</i>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================
          SLIDE NAVIGATION
      ================================================= */}
      <div className="hero-navigation">
        <div className="hero-slide-navigation">
          {heroSlides.map((item, index) => (
            <button
              key={item.id}
              className={
                index === activeSlide
                  ? "hero-slide-button active"
                  : "hero-slide-button"
              }
              onClick={() => setActiveSlide(index)}
              aria-label={`Slide ${index + 1}`}
            >
              <span>{item.id}</span>
              <i />
            </button>
          ))}
        </div>

        <div className="hero-arrow-navigation">
          <button onClick={prevSlide} aria-label="Previous slide">
            ←
          </button>

          <button onClick={nextSlide} aria-label="Next slide">
            →
          </button>
        </div>
      </div>

      {/* =================================================
          SLIDE PROGRESS
      ================================================= */}
      <div className="hero-progress">
        <div
          className="hero-progress-fill"
          key={`${activeSlide}-${paused}`}
        />
      </div>

      {/* =================================================
          SCROLL
      ================================================= */}
      <div className="hero-scroll-indicator">
        <span>SCROLL</span>

        <div>
          <i />
        </div>
      </div>

      {/* =================================================
          LARGE BACKGROUND NUMBER
      ================================================= */}
      <div className="hero-background-number">{slide.id}</div>
    </section>
  );
}