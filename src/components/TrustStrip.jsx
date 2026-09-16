import "./TrustStrip.css";
const services = [
  {
    number: "01",
    title: "Waterproofing",
    sub: "Structure Protection",
  },
  {
    number: "02",
    title: "Industrial Flooring",
    sub: "High Performance",
  },
  {
    number: "03",
    title: "Concrete Repair",
    sub: "Structural Solutions",
  },
  {
    number: "04",
    title: "PU & Epoxy Injection",
    sub: "Crack Treatment",
  },
  {
    number: "05",
    title: "Protective Coatings",
    sub: "Surface Protection",
  },
  {
    number: "06",
    title: "Construction Chemicals",
    sub: "Specialised Systems",
  },
];

export default function TrustStrip() {
  return (
    <section className="trust-strip">

      {/* =========================================
          TOP INFORMATION BAR
      ========================================= */}

      <div className="trust-top">

        <div className="trust-container">

          <div className="trust-label">

            <span className="trust-status">
              <i />
            </span>

            <div>
              <small>MASTER CHEMICAL SOLUTION</small>
              <strong>CORE CAPABILITIES</strong>
            </div>

          </div>

          <div className="trust-top-text">
            <span>ENGINEERED SURFACES</span>
            <b>×</b>
            <span>PROTECTION SYSTEMS</span>
          </div>

          <div className="trust-counter">
            <strong>06</strong>
            <span>CORE SERVICES</span>
          </div>

        </div>

      </div>


      {/* =========================================
          MOVING SERVICE RAIL
      ========================================= */}

      <div className="trust-marquee">

        <div className="trust-track">

          {[...services, ...services].map(
            (service, index) => (

              <article
                className="trust-service"
                key={`${service.number}-${index}`}
              >

                <div className="trust-service-number">
                  {service.number}
                </div>

                <div className="trust-service-content">

                  <strong>
                    {service.title}
                  </strong>

                  <span>
                    {service.sub}
                  </span>

                </div>

                <div className="trust-service-arrow">
                  ↗
                </div>

                <div className="trust-service-line" />

              </article>

            )
          )}

        </div>

      </div>


      {/* =========================================
          BOTTOM TECHNICAL BAR
      ========================================= */}

      <div className="trust-bottom">

        <div className="trust-container">

          <div className="trust-bottom-left">
            <span className="trust-red-line" />
            <span>
              WATERPROOFING · FLOORING · REPAIR · PROTECTION
            </span>
          </div>

          <div className="trust-bottom-right">

            <span>PU</span>
            <span>EPOXY</span>
            <span>RCC</span>
            <span>CHEMICALS</span>

          </div>

        </div>

      </div>

    </section>
  );
}