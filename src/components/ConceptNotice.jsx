
import { useEffect, useState } from "react";
import "./ConceptNotice.css";

const STORAGE_KEY = "gogo-concept-notice-dismissed";

function ConceptNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem(STORAGE_KEY);

      if (dismissed !== "true") {
        setVisible(true);
      }
    } catch {
      // Show the notice if browser storage is unavailable.
      setVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // The notice will still close for this visit.
    }

    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="concept-notice-overlay">
      <section
        className="concept-notice"
        role="dialog"
        aria-modal="true"
        aria-labelledby="concept-notice-title"
        aria-describedby="concept-notice-description"
      >
        <div className="concept-notice-icon">
          <span>i</span>
        </div>

        <div className="concept-notice-content">
          <h2 id="concept-notice-title">
            A quick note about this website
          </h2>

          <p id="concept-notice-description">
            You're viewing an independently created website
            concept for Gogo Mercedes. This is an unofficial
            preview and has not been commissioned or approved
            by the business. All business details and content
            should be confirmed by the owner before publication.
          </p>

          <button
            type="button"
            className="concept-notice-button"
            onClick={handleDismiss}
          >
            I understand
          </button>
        </div>
      </section>
    </div>
  );
}

export default ConceptNotice;
