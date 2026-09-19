// WhatsAppFloat.jsx
import { useEffect, useState } from "react";
import "./WhatsAppFloat.css";

const WHATSAPP_NUMBER = "917812043322"; // country code + number, no + or spaces

const DEFAULT_MESSAGE =
  "Hi Master Chemical Solution, I would like to discuss my project.";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  /* Show button after a small delay so it doesn't compete with the hero on load */
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    DEFAULT_MESSAGE
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`wa-float ${visible ? "wa-float--visible" : ""}`}
      aria-label="Chat with us on WhatsApp"
    >
      {/* Pulse ring */}
      <span className="wa-pulse" aria-hidden="true" />

      {/* WhatsApp SVG icon */}
      <svg
        className="wa-icon"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M16.001 3C8.82 3 3 8.82 3 16.001c0 2.29.6 4.44 1.65 6.3L3 29l6.88-1.6A12.94 12.94 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16.001 3Zm0 23.65c-2.06 0-4-.56-5.66-1.53l-.4-.24-4.08.95.95-3.98-.26-.42A10.6 10.6 0 0 1 5.35 16c0-5.87 4.78-10.65 10.65-10.65 5.87 0 10.65 4.78 10.65 10.65 0 5.87-4.78 10.65-10.65 10.65Zm5.82-7.97c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.57-1.87-1.75-2.19-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.97-2.35-.26-.62-.52-.53-.71-.54-.18-.01-.4-.01-.61-.01a1.18 1.18 0 0 0-.85.4c-.29.32-1.11 1.08-1.11 2.65s1.14 3.07 1.3 3.28c.16.21 2.24 3.42 5.42 4.8.76.33 1.35.52 1.81.67.76.24 1.46.21 2.01.13.61-.09 1.88-.77 2.14-1.51.26-.74.26-1.37.18-1.5-.08-.14-.29-.22-.61-.38Z"
          fill="currentColor"
        />
      </svg>

      {/* Label — visible on desktop hover, hidden by default */}
      <span className="wa-label">Chat on WhatsApp</span>
    </a>
  );
}