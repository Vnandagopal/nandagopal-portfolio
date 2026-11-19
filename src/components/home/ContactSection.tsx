import { type FormEvent } from "react";

import {
    Mail,
    Phone,
    MapPin,
    Send,
    CheckCircle2,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import "./ContactSection.css";

function ContactSection() {

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const name = String(formData.get("name") || "");
        const email = String(formData.get("email") || "");
        const subject = String(formData.get("subject") || "");
        const message = String(formData.get("message") || "");

        const emailSubject = encodeURIComponent(subject);

        const emailBody = encodeURIComponent(
            `Hello Nandagopal,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`
        );

        const gmailUrl =
            `https://mail.google.com/mail/?view=cm&fs=1` +
            `&to=vnandagopal001@gmail.com` +
            `&su=${emailSubject}` +
            `&body=${emailBody}`;

        window.open(gmailUrl, "_blank", "noopener,noreferrer");
    };

    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">

                <div className="contact-heading">
                    <span className="section-eyebrow">CONTACT</span>

                    <h2>
                        Let's build something <span>together.</span>
                    </h2>

                    <p>
                        Have an opportunity, an interesting idea or just want
                        to connect? I'd love to hear from you.
                    </p>
                </div>

                <div className="contact-card">

                    <div className="contact-info">

                        <p className="contact-intro">
                            Have a role or project in mind? I'm currently open
                            to new opportunities and always happy to chat.
                        </p>

                        <div className="contact-info-list">

                            <a
                                href="mailto:vnandagopal001@gmail.com"
                                className="contact-info-item"
                            >
                                <div className="contact-info-icon">
                                    <Mail size={18} />
                                </div>

                                <div>
                                    <strong>Email</strong>
                                    <span>vnandagopal001@gmail.com</span>
                                </div>
                            </a>

                            <a
                                href="tel:+919995120808"
                                className="contact-info-item"
                            >
                                <div className="contact-info-icon">
                                    <Phone size={18} />
                                </div>

                                <div>
                                    <strong>Phone</strong>
                                    <span>+91 99951 20808</span>
                                </div>
                            </a>

                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <MapPin size={18} />
                                </div>

                                <div>
                                    <strong>Location</strong>
                                    <span>Kochi, Kerala, India</span>
                                </div>
                            </div>

                        </div>

                        <div className="contact-socials">

                            <a
                                href="mailto:vnandagopal001@gmail.com"
                                aria-label="Email"
                                title="Email"
                            >
                                <Mail size={18} />
                            </a>

                            <a
                                href="tel:+919995120808"
                                aria-label="Phone"
                                title="Call"
                            >
                                <Phone size={18} />
                            </a>

                            

                            <a
                                href="https://github.com/Vnandagopal"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                title="GitHub"
                            >
                                <FaGithub size={20} />
                            </a>

                        </div>

                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>

                        <div className="contact-form-row">

                            <div className="contact-field">
                                <label htmlFor="contact-name">Name</label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    required
                                    maxLength={100}
                                />
                            </div>

                            <div className="contact-field">
                                <label htmlFor="contact-email">Email</label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    name="email"
                                    placeholder="your@email.com"
                                    required
                                    maxLength={254}
                                />
                            </div>

                        </div>

                        <div className="contact-field">
                            <label htmlFor="contact-subject">Subject</label>
                            <input
                                id="contact-subject"
                                type="text"
                                name="subject"
                                placeholder="What would you like to discuss?"
                                required
                                maxLength={150}
                            />
                        </div>

                        <div className="contact-field">
                            <label htmlFor="contact-message">Message</label>
                            <textarea
                                id="contact-message"
                                name="message"
                                placeholder="Tell me a little about it..."
                                rows={5}
                                required
                                maxLength={5000}
                            />
                        </div>

                        <div className="contact-form-note">
                            <CheckCircle2 size={15} />
                            <span>
                                Your message will be addressed directly to my inbox.
                            </span>
                        </div>

                        <button
                            type="submit"
                            className="contact-submit-button"
                        >
                            <Send size={17} />
                            Send message
                        </button>

                    </form>

                </div>
            </div>
        </section>
    );
}

export default ContactSection;
