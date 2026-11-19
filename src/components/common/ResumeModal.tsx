
import { useEffect } from "react";

import {
  X,
  Download,
  ExternalLink,
  FileText,
} from "lucide-react";

import "./ResumeModal.css";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RESUME_URL = "/resume (4).pdf";

function ResumeModal({ isOpen, onClose }: ResumeModalProps) {

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="resume-modal-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="resume-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-modal-title"
      >

        {/* Modal Header */}
        <div className="resume-modal-header">

          <div className="resume-modal-heading">
            <div className="resume-modal-icon">
              <FileText size={20} />
            </div>

            <div>
              <h2 id="resume-modal-title">
                My Resume<span>.</span>
              </h2>

              <p>
                V Nandagopal · Full Stack Developer
              </p>
            </div>
          </div>

          <div className="resume-modal-actions">

            <a
              href={RESUME_URL}
              download="V-Nandagopal-Resume.pdf"
              className="resume-download-button"
            >
              <Download size={16} />
              <span>Download PDF</span>
            </a>

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-open-button"
              aria-label="Open resume in new tab"
              title="Open in new tab"
            >
              <ExternalLink size={17} />
            </a>

            <button
              type="button"
              className="resume-close-button"
              onClick={onClose}
              aria-label="Close resume"
            >
              <X size={20} />
            </button>

          </div>
        </div>

        {/* PDF Preview */}
        <div className="resume-pdf-container">
          <iframe
            src={`${RESUME_URL}#toolbar=1&navpanes=0`}
            title="V Nandagopal Resume"
            className="resume-pdf-viewer"
          />
        </div>

        {/* Modal Footer */}
        <div className="resume-modal-footer">
          <span>
            V Nandagopal · Full Stack Developer
          </span>

          <span>
            Thanks for taking a look.
          </span>
        </div>

      </div>
    </div>
  );
}

export default ResumeModal;
