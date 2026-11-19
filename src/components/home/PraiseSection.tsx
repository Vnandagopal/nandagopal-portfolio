
import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

import "./PraiseSection.css";

const testimonials = [
  {
    id: 1,
    quote:
      "Nandagopal is a curious and dedicated developer who approaches challenges with a willingness to learn. His contribution to building and improving product features, along with his collaborative attitude, makes him a dependable teammate.",
    name: "Sheeba Gracelin",
    role: "Software Development Engineer",
    company: "Risknox.ai",
    initials: "SG",
  },
  {
    id: 2,
    quote:
      "Nandagopal has shown a genuine interest in building meaningful technology solutions. His commitment to learning, taking ownership and contributing to products reflects the kind of mindset that helps a team grow.",
    name: "Vivek Chandran",
    role: "Chief Executive Officer",
    company: "Risknox.ai",
    initials: "VC",
  },
  {
    id: 3,
    quote:
      "Nandagopal brings enthusiasm and a practical approach to software development. He has worked across frontend and backend technologies, and continues to develop his ability to understand problems and deliver thoughtful solutions.",
    name: "Gokul",
    role: "Chief Technology Officer",
    company: "Risknox.ai",
    initials: "G",
  },
];

function PraiseSection() {
  const [activePage, setActivePage] = useState(0);

  const testimonialsPerPage = 2;
  const totalPages = Math.ceil(
    testimonials.length / testimonialsPerPage
  );

  const visibleTestimonials = testimonials.slice(
    activePage * testimonialsPerPage,
    activePage * testimonialsPerPage + testimonialsPerPage
  );

  const previousPage = () => {
    setActivePage((current) =>
      current === 0 ? totalPages - 1 : current - 1
    );
  };

  const nextPage = () => {
    setActivePage((current) =>
      current === totalPages - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="praise-section" id="praise">
      <div className="praise-container">

        {/* Heading */}
        <div className="praise-heading">
          <span className="section-eyebrow">PRAISE</span>

          <h2>
            Kind words from <span>colleagues.</span>
          </h2>
        </div>

        {/* Testimonial carousel */}
        <div className="praise-carousel">

          <div className="praise-grid">
            {visibleTestimonials.map((testimonial) => (
              <article
                className="praise-card"
                key={testimonial.id}
              >
                <Quote
                  className="praise-quote-icon"
                  size={21}
                  strokeWidth={2.5}
                />

                <p className="praise-quote">
                  "{testimonial.quote}"
                </p>

                <div className="praise-person">
                  <div className="praise-avatar">
                    {testimonial.initials}
                  </div>

                  <div className="praise-person-info">
                    <strong>{testimonial.name}</strong>
                    <span>
                      {testimonial.role}, {testimonial.company}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Carousel controls */}
          <div className="praise-controls">

            <div className="praise-dots">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`praise-dot ${
                    activePage === index ? "active" : ""
                  }`}
                  onClick={() => setActivePage(index)}
                  aria-label={`Go to testimonial page ${index + 1}`}
                  aria-current={activePage === index ? "true" : undefined}
                />
              ))}
            </div>

            <div className="praise-arrows">
              <button
                type="button"
                onClick={previousPage}
                aria-label="Previous testimonials"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                type="button"
                onClick={nextPage}
                aria-label="Next testimonials"
              >
                <ChevronRight size={18} />
              </button>
            </div>

          </div>
        </div>

        <div className="praise-note">
          <span />
          Good work is always a team effort.
        </div>

      </div>
    </section>
  );
}

export default PraiseSection;
