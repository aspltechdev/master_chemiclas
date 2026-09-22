// import { useState } from "react";
// import "./Contact.css";

// const W3FORMS_ACCESS_KEY =
//   import.meta.env.VITE_W3FORMS_ACCESS_KEY || "YOUR_W3FORMS_ACCESS_KEY";

// const serviceOptions = [
//   "Waterproofing",
//   "Industrial Flooring",
//   "PU / Epoxy Flooring",
//   "Repair & Injection",
//   "Concrete Repair",
//   "RCC Strengthening",
//   "Protective Coatings",
//   "Other Requirement",
// ];

// export default function Contact() {
//   const [status, setStatus] = useState("idle");

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (status === "sending") return;

//     setStatus("sending");

//     const form = event.currentTarget;
//     const formData = new FormData(form);

//     try {
//       const response = await fetch("https://api.w3forms.com/submit", {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//         },
//         body: formData,
//       });

//       const data = await response.json();

//       if (!response.ok || !data.success) {
//         throw new Error(
//           data?.message || data?.error || "Something went wrong."
//         );
//       }

//       form.reset();
//       setStatus("success");
//     } catch (error) {
//       console.error("W3Forms Error:", error);
//       setStatus("error");
//     }
//   };

//   return (
//     <section className="contact-section" id="contact-form">
//       <div className="contact-bg-grid" />
//       <div className="contact-glow contact-glow-one" />
//       <div className="contact-glow contact-glow-two" />

//       <div className="contact-container">

//         {/* =====================================================
//             HEADER
//         ===================================================== */}

//         <div className="contact-header">
//           <div className="contact-heading">
//             <div className="contact-kicker">
//               <span />
//               PROJECT CONSULTATION
//             </div>

//             <h2>
//               Let's discuss
//               <br />
//               your <em>project.</em>
//             </h2>
//           </div>

//           <div className="contact-header-info">
//             <div className="contact-header-code">
//               <span>MASTER CHEMICAL SOLUTION</span>
//               <strong>01 / CONTACT</strong>
//             </div>

//             <p>
//               Tell us about your surface, site condition and project
//               requirement. Our team can help identify the appropriate
//               waterproofing, flooring, repair or protection system.
//             </p>
//           </div>
//         </div>

//         {/* =====================================================
//             MAIN CONTACT GRID
//         ===================================================== */}

//         <div className="contact-main">

//           {/* LEFT INFO */}

//           <aside className="contact-info">

//             <div className="contact-info-top">
//               <span>START WITH THE SURFACE</span>

//               <div className="contact-info-mark">
//                 <span>M</span>
//               </div>
//             </div>

//             <div className="contact-info-content">
//               <h3>
//                 One project.
//                 <br />
//                 One right system.
//               </h3>

//               <p>
//                 Share your requirement with us and our team will
//                 understand the application before recommending a
//                 suitable construction chemical system.
//               </p>
//             </div>

//             {/* CONTACT DETAILS */}

//             <div className="contact-details">

//               <div className="contact-detail">
//                 <span>CALL OUR TEAM</span>

//                 <a href="tel:+917812043322">
//                   +91 78120 43322
//                 </a>
//               </div>

//               <div className="contact-detail">
//                 <span>WHATSAPP</span>

//                 <a
//                   href="https://wa.me/917812043322"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   Start WhatsApp
//                   <b>↗</b>
//                 </a>
//               </div>

//               <div className="contact-detail">
//                 <span>LOCATION</span>

//                 <p>
//                   Puducherry, India
//                 </p>
//               </div>

//             </div>

//             {/* SERVICES */}

//             <div className="contact-services">

//               <div className="contact-services-heading">
//                 <span>WHAT WE COVER</span>
//                 <strong>08</strong>
//               </div>

//               <div className="contact-services-list">
//                 {serviceOptions.map((service, index) => (
//                   <div
//                     className="contact-service-item"
//                     key={service}
//                   >
//                     <span>
//                       {String(index + 1).padStart(2, "0")}
//                     </span>

//                     <strong>{service}</strong>

//                     <b>↗</b>
//                   </div>
//                 ))}
//               </div>

//             </div>

//           </aside>

//           {/* =====================================================
//               FORM
//           ===================================================== */}

//           <div className="contact-form-wrap">

//             <div className="contact-form-top">
//               <div>
//                 <span>ENQUIRY FORM</span>
//                 <strong>PROJECT INFORMATION</strong>
//               </div>

//               <div className="contact-form-status">
//                 <i />
//                 SECURE SUBMISSION
//               </div>
//             </div>

//             {status === "success" ? (
//               <div className="contact-success">

//                 <div className="contact-success-icon">
//                   ✓
//                 </div>

//                 <span>MESSAGE RECEIVED</span>

//                 <h3>
//                   Thank you for
//                   <br />
//                   contacting us.
//                 </h3>

//                 <p>
//                   Your project enquiry has been submitted successfully.
//                   Our team will get in touch with you shortly.
//                 </p>

//                 <button
//                   type="button"
//                   onClick={() => setStatus("idle")}
//                 >
//                   Submit Another Enquiry
//                   <span>↗</span>
//                 </button>

//               </div>
//             ) : (
//               <form
//                 className="contact-form"
//                 onSubmit={handleSubmit}
//               >

//                 {/* W3FORMS */}

//                 <input
//                   type="hidden"
//                   name="access_key"
//                   value={W3FORMS_ACCESS_KEY}
//                 />

//                 <input
//                   type="hidden"
//                   name="subject"
//                   value="New Project Enquiry — Master Chemical Solution"
//                 />

//                 <input
//                   type="hidden"
//                   name="from_name"
//                   value="Master Chemical Solution Website"
//                 />

//                 {/* HONEYPOT */}

//                 <input
//                   type="text"
//                   name="company_website"
//                   tabIndex="-1"
//                   autoComplete="off"
//                   className="contact-honeypot"
//                   aria-hidden="true"
//                 />

//                 {/* ROW 1 */}

//                 <div className="contact-form-row">

//                   <div className="contact-field">
//                     <label htmlFor="contact-name">
//                       <span>01</span>
//                       YOUR NAME *
//                     </label>

//                     <input
//                       id="contact-name"
//                       type="text"
//                       name="name"
//                       placeholder="Enter your name"
//                       required
//                       autoComplete="name"
//                     />
//                   </div>

//                   <div className="contact-field">
//                     <label htmlFor="contact-company">
//                       <span>02</span>
//                       COMPANY / ORGANISATION
//                     </label>

//                     <input
//                       id="contact-company"
//                       type="text"
//                       name="company"
//                       placeholder="Company name"
//                       autoComplete="organization"
//                     />
//                   </div>

//                 </div>

//                 {/* ROW 2 */}

//                 <div className="contact-form-row">

//                   <div className="contact-field">
//                     <label htmlFor="contact-email">
//                       <span>03</span>
//                       EMAIL ADDRESS *
//                     </label>

//                     <input
//                       id="contact-email"
//                       type="email"
//                       name="email"
//                       placeholder="your@email.com"
//                       required
//                       autoComplete="email"
//                     />
//                   </div>

//                   <div className="contact-field">
//                     <label htmlFor="contact-phone">
//                       <span>04</span>
//                       PHONE NUMBER *
//                     </label>

//                     <input
//                       id="contact-phone"
//                       type="tel"
//                       name="phone"
//                       placeholder="+91 XXXXX XXXXX"
//                       required
//                       autoComplete="tel"
//                     />
//                   </div>

//                 </div>

//                 {/* ROW 3 */}

//                 <div className="contact-form-row">

//                   <div className="contact-field">
//                     <label htmlFor="contact-service">
//                       <span>05</span>
//                       REQUIRED SERVICE *
//                     </label>

//                     <select
//                       id="contact-service"
//                       name="service"
//                       required
//                       defaultValue=""
//                     >
//                       <option value="" disabled>
//                         Select a service
//                       </option>

//                       {serviceOptions.map((service) => (
//                         <option
//                           key={service}
//                           value={service}
//                         >
//                           {service}
//                         </option>
//                       ))}
//                     </select>
//                   </div>

//                   <div className="contact-field">
//                     <label htmlFor="contact-location">
//                       <span>06</span>
//                       PROJECT LOCATION
//                     </label>

//                     <input
//                       id="contact-location"
//                       type="text"
//                       name="project_location"
//                       placeholder="City / Location"
//                     />
//                   </div>

//                 </div>

//                 {/* MESSAGE */}

//                 <div className="contact-field contact-message-field">

//                   <label htmlFor="contact-message">
//                     <span>07</span>
//                     PROJECT REQUIREMENT *
//                   </label>

//                   <textarea
//                     id="contact-message"
//                     name="message"
//                     placeholder="Tell us about your project, surface condition, area or requirement..."
//                     rows="6"
//                     required
//                   />

//                 </div>

//                 {/* FOOTER */}

//                 <div className="contact-form-footer">

//                   <div className="contact-privacy">
//                     <span>↳</span>

//                     <p>
//                       By submitting this form, you agree to be
//                       contacted regarding your project enquiry.
//                     </p>
//                   </div>

//                   <button
//                     type="submit"
//                     className="contact-submit"
//                     disabled={status === "sending"}
//                   >
//                     {status === "sending" ? (
//                       <>
//                         <span>Sending...</span>
//                         <i className="contact-loader" />
//                       </>
//                     ) : (
//                       <>
//                         <span>Send Project Enquiry</span>
//                         <b>↗</b>
//                       </>
//                     )}
//                   </button>

//                 </div>

//                 {status === "error" && (
//                   <div className="contact-error">
//                     <span>!</span>
//                     <p>
//                       We couldn't submit your enquiry right now.
//                       Please try again or contact us directly.
//                     </p>
//                   </div>
//                 )}

//               </form>
//             )}

//           </div>
//         </div>

//         {/* =====================================================
//             BOTTOM STRIP
//         ===================================================== */}

//         <div className="contact-bottom">

//           <div className="contact-bottom-left">
//             <span />
//             <strong>
//               FROM SUBSTRATE TO FINISH
//             </strong>
//           </div>

//           <p>
//             Waterproofing · Flooring · Repair · Protection
//           </p>

//           <div className="contact-bottom-code">
//             MCS / CONTACT / 01
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

// src/components/Contact.jsx
import { useEffect, useRef, useState } from "react";
import "./Contact.css";

/* SCROLL REVEAL */
function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(node);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

/* CONFIG */
const W3FORMS_ACCESS_KEY =
  import.meta.env.VITE_W3FORMS_ACCESS_KEY?.trim() || "";

const serviceOptions = [
  "Waterproofing",
  "Industrial Flooring",
  "PU / Epoxy Flooring",
  "Repair & Injection",
  "Concrete Repair",
  "RCC Strengthening",
  "Protective Coatings",
  "Other Requirement",
];

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const submittingRef = useRef(false);

  const [headRef, headInView] = useInView();
  const [infoRef, infoInView] = useInView();
  const [formRef, formInView] = useInView();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (submittingRef.current) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    setErrorMessage("");

    // Ignore automated submissions that fill this hidden field.
    if (String(formData.get("company_website") || "").trim()) {
      return;
    }

    if (
      !W3FORMS_ACCESS_KEY ||
      W3FORMS_ACCESS_KEY === "YOUR_W3FORMS_ACCESS_KEY"
    ) {
      console.error(
        "Missing VITE_W3FORMS_ACCESS_KEY. Add it to .env and restart Vite."
      );
      setErrorMessage(
        "The enquiry form is temporarily unavailable. Please contact us directly."
      );
      setStatus("error");
      return;
    }

    // Trim text fields before submitting.
    for (const [key, value] of formData.entries()) {
      if (typeof value === "string") {
        formData.set(key, value.trim());
      }
    }

    const requiredFields = ["name", "email", "phone", "service", "message"];

    if (requiredFields.some((field) => !formData.get(field))) {
      setErrorMessage("Please complete all required fields.");
      setStatus("error");
      return;
    }

    formData.delete("company_website");
    formData.set("access_key", W3FORMS_ACCESS_KEY);

    submittingRef.current = true;
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Your enquiry could not be submitted. Please try again."
        );
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("Web3Forms submission error:", error);

      setErrorMessage(
        error instanceof TypeError
          ? "Unable to connect. Please check your internet connection and try again."
          : error.message ||
              "We couldn't submit your enquiry. Please try again or contact us directly."
      );

      setStatus("error");
    } finally {
      submittingRef.current = false;
    }
  };

  return (
    <section className="cform-section" id="contact-form">
      <div className="cform-container">
        {/* HEADER */}
        <div
          ref={headRef}
          className={`cform-header cform-reveal ${
            headInView ? "cform-is-visible" : ""
          }`}
        >
          <div className="cform-header-left">
            <div className="cform-kicker">
              <span className="cform-kicker-line" />
              PROJECT CONSULTATION
            </div>

            <h2 className="cform-title">
              Let's discuss
              <br />
              your <em>project.</em>
            </h2>
          </div>

          <div className="cform-header-right">
            <p>
              Tell us about your surface, site condition and project requirement.
              Our team will help identify the appropriate waterproofing, flooring,
              repair or protection system.
            </p>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="cform-main">
          {/* LEFT: INFORMATION */}
          <aside
            ref={infoRef}
            className={`cform-info cform-reveal-left ${
              infoInView ? "cform-is-visible" : ""
            }`}
          >
            <div className="cform-info-block">
              <span className="cform-info-label">START WITH THE SURFACE</span>

              <h3 className="cform-info-title">
                One project.
                <br />
                One right system.
              </h3>

              <p className="cform-info-text">
                Share your requirement with us and our team will understand the
                application before recommending a suitable construction chemical
                system.
              </p>
            </div>

            <div className="cform-details">
              <div className="cform-detail">
                <span className="cform-detail-label">Call Our Team</span>
                <a href="tel:+917812043322" className="cform-detail-value">
                  +91 78120 43322
                </a>
              </div>

              <div className="cform-detail">
                <span className="cform-detail-label">WhatsApp</span>
                <a
                  href="https://wa.me/917812043322"
                  target="_blank"
                  rel="noreferrer"
                  className="cform-detail-value"
                >
                  Start a Chat →
                </a>
              </div>

              <div className="cform-detail">
                <span className="cform-detail-label">Location</span>
                <span className="cform-detail-value cform-detail-value--plain">
                  Puducherry, India
                </span>
              </div>

              <div className="cform-detail">
                <span className="cform-detail-label">Working Hours</span>
                <span className="cform-detail-value cform-detail-value--plain">
                  Mon–Sat · 9 AM – 7 PM
                </span>
              </div>
            </div>

            <div className="cform-services">
              <div className="cform-services-head">
                <span>What We Cover</span>
                <strong>
                  {String(serviceOptions.length).padStart(2, "0")}
                </strong>
              </div>

              <ul className="cform-services-list">
                {serviceOptions.map((service, index) => (
                  <li key={service}>
                    <span className="cform-service-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* RIGHT: FORM */}
          <div
            ref={formRef}
            className={`cform-form-wrap cform-reveal-right ${
              formInView ? "cform-is-visible" : ""
            }`}
          >
            {status === "success" ? (
              <div className="cform-success" role="status" aria-live="polite">
                <div className="cform-success-icon">✓</div>

                <span className="cform-success-kicker">MESSAGE RECEIVED</span>

                <h3 className="cform-success-title">
                  Thank you for
                  <br />
                  contacting us.
                </h3>

                <p className="cform-success-text">
                  Your project enquiry has been submitted successfully. Our team
                  will get in touch with you shortly.
                </p>

                <button
                  type="button"
                  className="cform-success-btn"
                  onClick={() => {
                    setErrorMessage("");
                    setStatus("idle");
                  }}
                >
                  Submit Another Enquiry →
                </button>
              </div>
            ) : (
              <form
                className="cform-form"
                onSubmit={handleSubmit}
                aria-busy={status === "sending"}
              >
                {/* WEB3FORMS SETTINGS */}
                <input
                  type="hidden"
                  name="access_key"
                  value={W3FORMS_ACCESS_KEY}
                />

                <input
                  type="hidden"
                  name="subject"
                  value="New Project Enquiry — Master Chemical Solution"
                />

                <input
                  type="hidden"
                  name="from_name"
                  value="Master Chemical Solution Website"
                />

                {/* HONEYPOT */}
                <input
                  type="text"
                  name="company_website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="cform-honeypot"
                  aria-hidden="true"
                  style={{ display: "none" }}
                />

                <div className="cform-form-head">
                  <h3>Request a Free Site Visit</h3>
                  <p>Our engineer will call you within 30 minutes.</p>
                </div>

                {/* ROW 1 */}
                <div className="cform-row">
                  <div className="cform-field">
                    <label htmlFor="cform-name">
                      Full Name <span>*</span>
                    </label>
                    <input
                      id="cform-name"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      required
                      autoComplete="name"
                    />
                  </div>

                  <div className="cform-field">
                    <label htmlFor="cform-company">
                      Company / Organisation
                    </label>
                    <input
                      id="cform-company"
                      type="text"
                      name="company"
                      placeholder="Company name"
                      autoComplete="organization"
                    />
                  </div>
                </div>

                {/* ROW 2 */}
                <div className="cform-row">
                  <div className="cform-field">
                    <label htmlFor="cform-email">
                      Email Address <span>*</span>
                    </label>
                    <input
                      id="cform-email"
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      required
                      autoComplete="email"
                    />
                  </div>

                  <div className="cform-field">
                    <label htmlFor="cform-phone">
                      Phone Number <span>*</span>
                    </label>
                    <input
                      id="cform-phone"
                      type="tel"
                      name="phone"
                      placeholder="+91 XXXXX XXXXX"
                      required
                      autoComplete="tel"
                    />
                  </div>
                </div>

                {/* ROW 3 */}
                <div className="cform-row">
                  <div className="cform-field">
                    <label htmlFor="cform-service">
                      Required Service <span>*</span>
                    </label>
                    <select
                      id="cform-service"
                      name="service"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {serviceOptions.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="cform-field">
                    <label htmlFor="cform-location">Project Location</label>
                    <input
                      id="cform-location"
                      type="text"
                      name="project_location"
                      placeholder="City / Location"
                    />
                  </div>
                </div>

                {/* MESSAGE */}
                <div className="cform-field">
                  <label htmlFor="cform-message">
                    Project Requirement <span>*</span>
                  </label>
                  <textarea
                    id="cform-message"
                    name="message"
                    placeholder="Tell us about your project, surface condition, area or requirement..."
                    rows={5}
                    required
                  />
                </div>

                {/* FOOTER */}
                <div className="cform-form-footer">
                  <p className="cform-privacy">
                    By submitting, you agree to be contacted about your project
                    enquiry.
                  </p>

                  <button
                    type="submit"
                    className="cform-submit"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? (
                      <>
                        <span>Sending...</span>
                        <i className="cform-loader" aria-hidden="true" />
                      </>
                    ) : (
                      <span>Send Project Enquiry →</span>
                    )}
                  </button>
                </div>

                {status === "error" && (
                  <div className="cform-error" role="alert">
                    {errorMessage}
                  </div>
                )}
              </form>
            )}
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="cform-bottom">
          <div className="cform-bottom-left">
            <span className="cform-red-line" />
            <strong>FROM SUBSTRATE TO FINISH</strong>
          </div>

          <p>Waterproofing · Flooring · Repair · Protection</p>
        </div>
      </div>
    </section>
  );
}