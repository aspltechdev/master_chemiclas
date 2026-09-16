// const serviceGroups = [
//   {
//     number: "01",
//     title: "Waterproofing",
//     short: "Protecting structures from water ingress.",
//     items: [
//       "PU Waterproofing",
//       "Toilet Waterproofing",
//       "Terrace Waterproofing",
//       "Podium Waterproofing",
//       "Basement Waterproofing",
//       "Lift Pit Waterproofing",
//       "Sump Waterproofing",
//       "Overhead Waterproofing",
//     ],
//   },

//   {
//     number: "02",
//     title: "Industrial Flooring",
//     short: "High-performance flooring for demanding spaces.",
//     items: [
//       "Epoxy Resin Flooring",
//       "Epoxy Flooring",
//       "PU Resin Flooring",
//       "PU Flooring",
//       "Cement Self Leveling",
//       "Concrete Polishing",
//       "Terrazzo Flooring",
//       "Sports Flooring",
//     ],
//   },

//   {
//     number: "03",
//     title: "Repair & Injection",
//     short: "Repairing, strengthening and restoring concrete.",
//     items: [
//       "PU Injection",
//       "Epoxy Injection",
//       "RCC Strengthening",
//       "Concrete Repair",
//       "Expansion Joint Treatment",
//       "Anchoring Grout",
//     ],
//   },

//   {
//     number: "04",
//     title: "Surface Protection",
//     short: "Long-lasting protection for exposed surfaces.",
//     items: [
//       "Protective Coatings",
//       "Terrace Coating",
//       "Oxide Flooring",
//       "Kaavi Flooring",
//       "Chemical Surface Treatment",
//       "Tile Adhesives & Grouts",
//     ],
//   },
// ];

// export default function Services() {
//   return (
//     <section className="services-section" id="services">

//       <div className="services-container">

//         {/* HEADER */}

//         <div className="services-header">

//           <div>

//             <span className="section-kicker">
//               WHAT WE DO
//             </span>

//             <h2>
//               Complete solutions
//               <br />
//               for <em>critical surfaces.</em>
//             </h2>

//           </div>

//           <div className="services-intro">

//             <span className="intro-number">
//               04
//             </span>

//             <p>
//               Core solution categories covering waterproofing,
//               flooring, concrete repair and specialised
//               construction chemical applications.
//             </p>

//           </div>

//         </div>


//         {/* SERVICE GRID */}

//         <div className="service-grid">

//           {serviceGroups.map((service) => (

//             <article
//               className="service-card"
//               key={service.number}
//             >

//               {/* CARD TOP */}

//               <div className="service-card-top">

//                 <span className="service-number">
//                   {service.number}
//                 </span>

//                 <span className="service-card-arrow">
//                   ↗
//                 </span>

//               </div>


//               {/* TITLE */}

//               <div className="service-title">

//                 <h3>
//                   {service.title}
//                 </h3>

//                 <p>
//                   {service.short}
//                 </p>

//               </div>


//               {/* ITEMS */}

//               <div className="service-list">

//                 {service.items.map((item, index) => (

//                   <div
//                     className="service-list-item"
//                     key={item}
//                   >

//                     <span>
//                       {String(index + 1).padStart(2, "0")}
//                     </span>

//                     <strong>
//                       {item}
//                     </strong>

//                   </div>

//                 ))}

//               </div>


//               {/* BOTTOM */}

//               <div className="service-card-bottom">

//                 <span>
//                   MASTER CHEMICAL SOLUTION
//                 </span>

//                 <b>
//                   →
//                 </b>

//               </div>

//             </article>

//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }


import { useState } from "react";
import "./Services.css";

const serviceGroups = [
  {
    number: "01",
    title: "Waterproofing",
    label: "WATER PROTECTION",
    short:
      "Protecting structures from water ingress with specialised waterproofing systems.",
    items: [
      "PU Waterproofing",
      "Toilet Waterproofing",
      "Terrace Waterproofing",
      "Podium Waterproofing",
      "Basement Waterproofing",
      "Lift Pit Waterproofing",
      "Sump Waterproofing",
      "Overhead Waterproofing",
    ],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85",
  },

  {
    number: "02",
    title: "Industrial Flooring",
    label: "HIGH PERFORMANCE SURFACES",
    short:
      "High-performance flooring systems designed for demanding industrial and commercial environments.",
    items: [
      "Epoxy Resin Flooring",
      "Epoxy Flooring",
      "PU Resin Flooring",
      "PU Flooring",
      "Cement Self Leveling",
      "Concrete Polishing",
      "Terrazzo Flooring",
      "Sports Flooring",
    ],
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=85",
  },

  {
    number: "03",
    title: "Repair & Injection",
    label: "STRUCTURAL RESTORATION",
    short:
      "Repairing, strengthening and restoring concrete surfaces and structural elements.",
    items: [
      "PU Injection",
      "Epoxy Injection",
      "RCC Strengthening",
      "Concrete Repair",
      "Expansion Joint Treatment",
      "Anchoring Grout",
    ],
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=85",
  },

  {
    number: "04",
    title: "Surface Protection",
    label: "PROTECTIVE SYSTEMS",
    short:
      "Long-lasting surface protection systems for exposed and demanding environments.",
    items: [
      "Protective Coatings",
      "Terrace Coating",
      "Oxide Flooring",
      "Kaavi Flooring",
      "Chemical Surface Treatment",
      "Tile Adhesives & Grouts",
    ],
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=85",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  const active = serviceGroups[activeService];

  return (
    <section className="services-section" id="services">

      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="services-bg-grid" />

      <div className="services-container">

        {/* =========================================
            HEADER
        ========================================= */}

        <div className="services-header">

          <div className="services-heading">

            <span className="section-kicker">
              WHAT WE DO
            </span>

            <h2>
              Engineered
              <br />
              <em>surface solutions.</em>
            </h2>

          </div>

          <div className="services-header-right">

            <div className="services-count">
              <strong>04</strong>
              <span>SERVICE CATEGORIES</span>
            </div>

            <p>
              Specialised construction chemical systems
              designed around the surface, environment
              and performance requirements of every project.
            </p>

          </div>

        </div>


        {/* =========================================
            ACTIVE IMAGE / INFO
        ========================================= */}

        <div className="services-feature">

          <div className="services-feature-image">

            {serviceGroups.map((service, index) => (
              <img
                key={service.number}
                src={service.image}
                alt={service.title}
                className={
                  index === activeService
                    ? "active"
                    : ""
                }
              />
            ))}

            <div className="services-feature-overlay" />

            <div className="services-feature-number">
              {active.number}
            </div>

            <div className="services-feature-label">
              <span>FEATURED SYSTEM</span>
              <strong>{active.label}</strong>
            </div>

          </div>


          <div className="services-feature-content">

            <div className="services-feature-top">

              <span>
                SERVICE / {active.number}
              </span>

              <b>↗</b>

            </div>

            <h3>
              {active.title}
            </h3>

            <p>
              {active.short}
            </p>

            <div className="services-feature-line" />

            <div className="services-feature-meta">

              <span>
                SYSTEMS
              </span>

              <strong>
                {String(active.items.length).padStart(2, "0")}
              </strong>

            </div>

          </div>

        </div>


        {/* =========================================
            SERVICE LIST
        ========================================= */}

        <div className="services-list">

          {serviceGroups.map((service, index) => {

            const isActive =
              index === activeService;

            return (
              <article
                className={
                  isActive
                    ? "service-row active"
                    : "service-row"
                }
                key={service.number}
                onMouseEnter={() =>
                  setActiveService(index)
                }
              >

                {/* Number */}

                <div className="service-row-number">
                  {service.number}
                </div>


                {/* Main title */}

                <div className="service-row-title">

                  <span>
                    {service.label}
                  </span>

                  <h3>
                    {service.title}
                  </h3>

                </div>


                {/* Items */}

                <div className="service-row-items">

                  {service.items.map((item) => (
                    <span key={item}>
                      {item}
                    </span>
                  ))}

                </div>


                {/* Arrow */}

                <div className="service-row-arrow">
                  ↗
                </div>

              </article>
            );
          })}

        </div>


        {/* =========================================
            BOTTOM
        ========================================= */}

        <div className="services-bottom">

          <div className="services-bottom-left">

            <span className="services-red-line" />

            <span>
              FROM SUBSTRATE TO FINISH
            </span>

          </div>

          <p>
            One partner for specialised surface
            protection requirements.
          </p>

          <a
            href="#contact"
            className="services-bottom-link"
          >
            Discuss your requirement
            <span>↗</span>
          </a>

        </div>

      </div>

    </section>
  );
}