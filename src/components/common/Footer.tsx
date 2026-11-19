
import { ArrowUp } from "lucide-react";

import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="portfolio-footer">
      <div className="footer-container">

        <div className="footer-copyright">
          © {currentYear} Nandagopal V. All rights reserved.
        </div>

        <button
          type="button"
          className="footer-back-to-top"
          onClick={handleBackToTop}
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp size={20} />
        </button>

      </div>
    </footer>
  );
}

export default Footer;
