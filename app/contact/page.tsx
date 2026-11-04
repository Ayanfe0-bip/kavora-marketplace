import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  Headphones,
  Store,
  Handshake,
  Send,
  HelpCircle,
  Instagram,
  Globe,
} from "lucide-react";

const contactOptions = [
  {
    title: "Customer Support",
    description:
      "Questions about shopping, products or finding a seller? We're here to help.",
    email: "support@kavora.com",
    icon: Headphones,
  },
  {
    title: "Vendor Enquiries",
    description:
      "Interested in bringing your business to KAVORA? Let's explore the possibilities.",
    email: "vendors@kavora.com",
    icon: Store,
  },
  {
    title: "Business Partnerships",
    description:
      "Have a business proposal, partnership idea or collaboration opportunity?",
    email: "partnerships@kavora.com",
    icon: Handshake,
  },
];

const topics = [
  "General Enquiry",
  "Customer Support",
  "Vendor Registration",
  "Business Partnership",
  "Technical Support",
  "Other",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fc] text-[#172033]">
      <style>{`
        * { box-sizing: border-box; }

        .contact-container {
          width: min(1120px, 92%);
          margin: auto;
        }

        .contact-header {
          min-height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          border-bottom: 1px solid #e8ebf1;
        }

        .contact-logo {
          color: #172033;
          font-size: 27px;
          font-weight: 950;
          letter-spacing: -1.5px;
          text-decoration: none;
        }

        .contact-logo span { color: #7655e8; }

        .contact-nav {
          display: flex;
          align-items: center;
          gap: 23px;
        }

        .contact-nav a {
          color: #657086;
          font-size: 13px;
          font-weight: 800;
          text-decoration: none;
        }

        .contact-nav a:hover { color: #7655e8; }

        .contact-hero {
          padding: 75px 0 65px;
          background:
            radial-gradient(circle at 15% 20%, #e9e4ff 0, transparent 32%),
            radial-gradient(circle at 85% 80%, #e3f2ff 0, transparent 30%);
          text-align: center;
        }

        .contact-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 15px;
          border: 1px solid #e3dcff;
          border-radius: 30px;
          background: white;
          color: #7655e8;
          font-size: 11px;
          font-weight: 900;
        }

        .contact-hero h1 {
          max-width: 780px;
          margin: 22px auto 15px;
          font-size: clamp(37px, 6vw, 59px);
          line-height: 1.1;
          font-weight: 950;
          letter-spacing: -2.7px;
        }

        .contact-hero h1 span { color: #7655e8; }

        .contact-hero p {
          max-width: 610px;
          margin: auto;
          color: #778196;
          font-size: 14px;
          line-height: 1.9;
        }

        .contact-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin: 24px 0;
          color: #7655e8;
          font-size: 12px;
          font-weight: 900;
          text-decoration: none;
        }

        .contact-options {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          padding: 55px 0;
        }

        .contact-option {
          padding: 26px;
          border: 1px solid #e8eaf1;
          border-radius: 17px;
          background: white;
        }

        .contact-option-icon {
          width: 49px;
          height: 49px;
          display: grid;
          place-items: center;
          margin-bottom: 20px;
          border-radius: 14px;
          background: #f0edff;
          color: #7655e8;
        }

        .contact-option h2 {
          margin: 0 0 11px;
          font-size: 17px;
          font-weight: 950;
        }

        .contact-option p {
          min-height: 65px;
          color: #7d879a;
          font-size: 12px;
          line-height: 1.8;
        }

        .contact-option a {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-top: 10px;
          color: #7655e8;
          font-size: 11px;
          font-weight: 900;
          text-decoration: none;
          overflow-wrap: anywhere;
        }

        .contact-main {
          display: grid;
          grid-template-columns: .85fr 1.15fr;
          gap: 35px;
          padding: 20px 0 80px;
          align-items: start;
        }

        .contact-info {
          padding: 30px;
          border-radius: 19px;
          background: #211b43;
          color: white;
        }

        .contact-info h2 {
          margin: 0 0 13px;
          font-size: 27px;
          font-weight: 950;
          letter-spacing: -1px;
        }

        .contact-info > p {
          margin: 0 0 30px;
          color: #c8c1e1;
          font-size: 12px;
          line-height: 1.9;
        }

        .contact-detail {
          display: flex;
          align-items: flex-start;
          gap: 13px;
          margin: 24px 0;
        }

        .contact-detail-icon {
          width: 39px;
          height: 39px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          border-radius: 11px;
          background: rgba(255,255,255,.1);
          color: #c4b5fd;
        }

        .contact-detail strong {
          display: block;
          margin-bottom: 6px;
          font-size: 12px;
        }

        .contact-detail span,
        .contact-detail a {
          color: #c8c1e1;
          font-size: 11px;
          line-height: 1.8;
          text-decoration: none;
          overflow-wrap: anywhere;
        }

        .contact-socials {
          display: flex;
          gap: 11px;
          margin-top: 30px;
        }

        .contact-socials a {
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255,255,255,.2);
          border-radius: 11px;
          color: white;
          text-decoration: none;
        }

        .contact-form-card {
          padding: 32px;
          border: 1px solid #e8eaf1;
          border-radius: 19px;
          background: white;
        }

        .contact-form-card h2 {
          margin: 0 0 9px;
          font-size: 25px;
          font-weight: 950;
        }

        .contact-form-card > p {
          margin: 0 0 27px;
          color: #8790a2;
          font-size: 12px;
          line-height: 1.8;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 17px;
        }

        .contact-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .contact-field label {
          color: #39445b;
          font-size: 11px;
          font-weight: 900;
        }

        .contact-field input,
        .contact-field select,
        .contact-field textarea {
          width: 100%;
          padding: 13px 14px;
          border: 1px solid #e5e8f0;
          border-radius: 9px;
          background: #fbfcfe;
          color: #172033;
          font-family: inherit;
          font-size: 12px;
          outline: none;
          transition: border .2s;
        }

        .contact-field input:focus,
        .contact-field select:focus,
        .contact-field textarea:focus {
          border-color: #7655e8;
        }

        .contact-field textarea {
          min-height: 125px;
          resize: vertical;
        }

        .contact-submit {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 15px;
          border: 0;
          border-radius: 10px;
          background: #7655e8;
          color: white;
          font-size: 12px;
          font-weight: 950;
          cursor: pointer;
        }

        .contact-note {
          margin-top: 12px;
          color: #929bad;
          font-size: 10px;
          line-height: 1.8;
        }

        .contact-faq {
          padding: 65px 0;
          background: white;
        }

        .contact-faq-box {
          max-width: 720px;
          margin: auto;
          text-align: center;
        }

        .contact-faq-box > svg {
          color: #7655e8;
        }

        .contact-faq-box h2 {
          margin: 15px 0 10px;
          font-size: 27px;
          font-weight: 950;
        }

        .contact-faq-box p {
          color: #80899c;
          font-size: 13px;
          line-height: 1.9;
        }

        .contact-faq-box a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 15px;
          padding: 13px 19px;
          border-radius: 9px;
          background: #f0edff;
          color: #7655e8;
          font-size: 11px;
          font-weight: 950;
          text-decoration: none;
        }

        .contact-footer {
          padding: 28px 0;
          border-top: 1px solid #e8ebf1;
          color: #8790a2;
          font-size: 11px;
          text-align: center;
        }

        @media (max-width: 850px) {
          .contact-options {
            grid-template-columns: 1fr 1fr;
          }

          .contact-main {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 560px) {
          .contact-header { min-height: 68px; }
          .contact-logo { font-size: 23px; }
          .contact-nav { gap: 12px; }
          .contact-nav a { font-size: 11px; }
          .contact-hero { padding: 55px 0; }
          .contact-options { grid-template-columns: 1fr; }
          .contact-option p { min-height: auto; }
          .contact-main { padding-bottom: 55px; }
          .contact-info,
          .contact-form-card { padding: 24px; }
        }
      `}</style>

      <header className="contact-container contact-header">
        <Link href="/" className="contact-logo">
          KAV<span>O</span>RA.
        </Link>

        <nav className="contact-nav">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/sellers">Shops</Link>
          <Link href="/about">About</Link>
        </nav>
      </header>

      <section className="contact-hero">
        <div className="contact-container">
          <div className="contact-badge">
            <MessageCircle size={14} />
            WE WOULD LOVE TO HEAR FROM YOU
          </div>

          <h1>
            Let's start a <span>conversation.</span>
          </h1>

          <p>
            Whether you are a customer, business owner or potential partner,
            we're happy to hear from you. Reach out and let's connect.
          </p>
        </div>
      </section>

      <div className="contact-container">
        <Link href="/" className="contact-back">
          <ArrowLeft size={15} />
          Back to home
        </Link>

        <section className="contact-options">
          {contactOptions.map((option) => {
            const Icon = option.icon;

            return (
              <article className="contact-option" key={option.title}>
                <div className="contact-option-icon">
                  <Icon size={23} />
                </div>

                <h2>{option.title}</h2>

                <p>{option.description}</p>

                <a href={`mailto:${option.email}`}>
                  <Mail size={14} />
                  {option.email}
                </a>
              </article>
            );
          })}
        </section>

        <section className="contact-main">
          <aside className="contact-info">
            <h2>Contact Information</h2>

            <p>
              Choose the most convenient way to reach our team. We look
              forward to hearing from you.
            </p>

            <div className="contact-detail">
              <div className="contact-detail-icon">
                <Mail size={18} />
              </div>

              <div>
                <strong>Email</strong>
                <a href="mailto:oyebanjioluwasegun128@gmail.com">
                  oyebanjioluwasegun128@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon">
                <MessageCircle size={18} />
              </div>

              <div>
                <strong>WhatsApp</strong>
                <a
                  href="https://wa.me/2349130559723"
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat with our team
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon">
                <MapPin size={18} />
              </div>

              <div>
                <strong>Location</strong>
                <span>Osun State, Nigeria</span>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon">
                <Clock size={18} />
              </div>

              <div>
                <strong>Enquiry Hours</strong>
                <span>Monday – Saturday</span>
                <span>Response times may vary.</span>
              </div>
            </div>

            <div className="contact-socials">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={17} />
              </a>

              <a href="mailto:oyebanjioluwasegun128@gmail.com" aria-label="Email">
                <Mail size={17} />
              </a>

              <a
                href="https://wa.me/2349130559723"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <MessageCircle size={17} />
              </a>
            </div>
          </aside>

          <div className="contact-form-card">
            <h2>Send Us a Message</h2>

            <p>
              Fill in the details below. Our contact form is currently a
              design preview; message delivery will be connected in a later
              development phase.
            </p>

            <form className="contact-form">
              <div className="contact-field">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="topic">Enquiry Type</label>

                <select id="topic" name="topic" required defaultValue="">
                  <option value="" disabled>
                    Select an enquiry type
                  </option>

                  {topics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </div>

              <div className="contact-field">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What is your message about?"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="message">Your Message</label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here..."
                  required
                />
              </div>

              <button type="button" className="contact-submit">
                <Send size={15} />
                Message Form Coming Soon
              </button>

              <p className="contact-note">
                Please use the email or WhatsApp contact details on this page
                for enquiries until the contact form is connected.
              </p>
            </form>
          </div>
        </section>
      </div>

      <section className="contact-faq">
        <div className="contact-container contact-faq-box">
          <HelpCircle size={36} />

          <h2>Looking for answers?</h2>

          <p>
            We are preparing helpful information to answer common questions
            about shopping, vendors and using the KAVORA marketplace.
          </p>

          <Link href="/about">
            Learn About KAVORA
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <footer className="contact-footer">
        <div className="contact-container">
          <p>
            © {new Date().getFullYear()} KAVORA Marketplace. All rights
            reserved.
          </p>

          <p>Created by Ayanfe Innovation Labs Limited.</p>
        </div>
      </footer>
    </main>
  );
      }
