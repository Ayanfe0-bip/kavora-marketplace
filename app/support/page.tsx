import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Headset,
  MessageCircle,
  Mail,
  ShoppingBag,
  Store,
  CreditCard,
  Truck,
  ShieldCheck,
  HelpCircle,
  Clock,
  FileText,
  ChevronRight,
} from "lucide-react";

const supportCategories = [
  {
    icon: ShoppingBag,
    title: "Shopping Assistance",
    description:
      "Questions about products, categories, seller storefronts and marketplace browsing.",
    link: "/products",
    label: "Explore products",
  },
  {
    icon: Store,
    title: "Vendor Assistance",
    description:
      "Information for businesses interested in joining and selling through KAVORA.",
    link: "/become-a-vendor",
    label: "Become a vendor",
  },
  {
    icon: CreditCard,
    title: "Payments and Orders",
    description:
      "Learn about planned checkout, payment processing and order management features.",
    link: "/faq",
    label: "Read FAQs",
  },
  {
    icon: Truck,
    title: "Delivery Information",
    description:
      "Find information about planned delivery arrangements and future order tracking.",
    link: "/faq",
    label: "Delivery questions",
  },
  {
    icon: ShieldCheck,
    title: "Privacy and Security",
    description:
      "Understand how KAVORA intends to protect information and respect user privacy.",
    link: "/privacy",
    label: "Privacy policy",
  },
  {
    icon: HelpCircle,
    title: "General Questions",
    description:
      "Find answers to common questions about KAVORA and its development.",
    link: "/faq",
    label: "Visit FAQ centre",
  },
];

const quickLinks = [
  {
    title: "Frequently Asked Questions",
    description: "Answers to common marketplace questions.",
    href: "/faq",
  },
  {
    title: "Privacy Policy",
    description: "Learn about our intended privacy practices.",
    href: "/privacy",
  },
  {
    title: "Terms and Conditions",
    description: "Read the rules governing platform use.",
    href: "/terms",
  },
  {
    title: "Become a Vendor",
    description: "Learn how to express interest in selling.",
    href: "/become-a-vendor",
  },
];

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fc] text-[#172033]">
      <style>{`
        * { box-sizing: border-box; }

        .support-container {
          width: min(1100px, 92%);
          margin: auto;
        }

        .support-header {
          min-height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          border-bottom: 1px solid #e8ebf1;
        }

        .support-logo {
          color: #172033;
          font-size: 27px;
          font-weight: 950;
          letter-spacing: -1.5px;
          text-decoration: none;
        }

        .support-logo span { color: #7655e8; }

        .support-nav {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .support-nav a {
          color: #657086;
          font-size: 13px;
          font-weight: 800;
          text-decoration: none;
        }

        .support-nav a:hover { color: #7655e8; }

        .support-hero {
          padding: 75px 0;
          background:
            radial-gradient(circle at 10% 20%, #e9e4ff 0, transparent 32%),
            radial-gradient(circle at 90% 80%, #e3f2ff 0, transparent 30%);
          text-align: center;
        }

        .support-badge {
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

        .support-hero h1 {
          margin: 22px auto 15px;
          font-size: clamp(38px, 6vw, 58px);
          font-weight: 950;
          letter-spacing: -2.5px;
        }

        .support-hero h1 span { color: #7655e8; }

        .support-hero p {
          max-width: 610px;
          margin: auto;
          color: #778196;
          font-size: 14px;
          line-height: 1.9;
        }

        .support-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin: 25px 0;
          color: #7655e8;
          font-size: 12px;
          font-weight: 900;
          text-decoration: none;
        }

        .support-notice {
          display: flex;
          align-items: flex-start;
          gap: 13px;
          padding: 20px;
          margin-bottom: 35px;
          border: 1px solid #e5ddff;
          border-radius: 14px;
          background: #f2efff;
        }

        .support-notice svg {
          flex-shrink: 0;
          color: #7655e8;
        }

        .support-notice strong {
          display: block;
          margin-bottom: 7px;
          color: #6043cb;
          font-size: 13px;
          font-weight: 950;
        }

        .support-notice p {
          margin: 0;
          color: #77718f;
          font-size: 12px;
          line-height: 1.9;
        }

        .support-section {
          padding: 45px 0;
        }

        .support-heading {
          margin-bottom: 30px;
          text-align: center;
        }

        .support-heading span {
          color: #7655e8;
          font-size: 11px;
          font-weight: 950;
          letter-spacing: 1.5px;
        }

        .support-heading h2 {
          margin: 12px 0 9px;
          font-size: clamp(25px, 4vw, 35px);
          font-weight: 950;
          letter-spacing: -1px;
        }

        .support-heading p {
          color: #7b8498;
          font-size: 12px;
          line-height: 1.9;
        }

        .support-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 17px;
        }

        .support-card {
          padding: 24px;
          border: 1px solid #e8eaf1;
          border-radius: 16px;
          background: white;
          transition: transform .2s, box-shadow .2s;
        }

        .support-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px #2520440c;
        }

        .support-card-icon {
          width: 47px;
          height: 47px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: #f0edff;
          color: #7655e8;
        }

        .support-card h3 {
          margin: 18px 0 9px;
          font-size: 15px;
          font-weight: 950;
        }

        .support-card p {
          min-height: 55px;
          margin: 0 0 18px;
          color: #7b8498;
          font-size: 11px;
          line-height: 1.9;
        }

        .support-card a {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #7655e8;
          font-size: 11px;
          font-weight: 950;
          text-decoration: none;
        }

        .support-contact {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 17px;
          margin: 35px 0 55px;
        }

        .support-contact-card {
          padding: 27px;
          border: 1px solid #e8eaf1;
          border-radius: 17px;
          background: white;
        }

        .support-contact-card svg {
          color: #7655e8;
        }

        .support-contact-card h3 {
          margin: 15px 0 8px;
          font-size: 17px;
          font-weight: 950;
        }

        .support-contact-card p {
          margin: 0;
          color: #7b8498;
          font-size: 12px;
          line-height: 1.9;
        }

        .support-contact-card a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 19px;
          padding: 12px 16px;
          border-radius: 8px;
          background: #f0edff;
          color: #6546d4;
          font-size: 11px;
          font-weight: 950;
          text-decoration: none;
        }

        .support-hours {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 13px;
          color: #8790a2;
          font-size: 10px;
        }

        .support-quick {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 13px;
        }

        .support-quick-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 17px;
          border: 1px solid #e8eaf1;
          border-radius: 12px;
          background: white;
          text-decoration: none;
        }

        .support-quick-link strong {
          display: block;
          margin-bottom: 5px;
          color: #263149;
          font-size: 12px;
        }

        .support-quick-link span {
          color: #8992a4;
          font-size: 10px;
        }

        .support-quick-link > svg {
          flex-shrink: 0;
          color: #7655e8;
        }

        .support-bottom {
          padding: 55px 25px;
          margin-top: 65px;
          border-radius: 21px;
          background: linear-gradient(120deg, #211b43, #55418f);
          color: white;
          text-align: center;
        }

        .support-bottom h2 {
          margin: 15px 0 10px;
          font-size: clamp(25px, 4vw, 34px);
          font-weight: 950;
        }

        .support-bottom p {
          max-width: 550px;
          margin: auto;
          color: #d6d0ed;
          font-size: 12px;
          line-height: 1.9;
        }

        .support-bottom a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 22px;
          padding: 14px 22px;
          border-radius: 9px;
          background: white;
          color: #6546d4;
          font-size: 11px;
          font-weight: 950;
          text-decoration: none;
        }

        .support-footer {
          margin-top: 65px;
          padding: 27px 0;
          border-top: 1px solid #e8ebf1;
          color: #8790a2;
          font-size: 11px;
          text-align: center;
        }

        @media (max-width: 850px) {
          .support-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 560px) {
          .support-header { min-height: 68px; }
          .support-logo { font-size: 23px; }
          .support-nav { gap: 12px; }
          .support-nav a { font-size: 11px; }
          .support-hero { padding: 55px 0; }
          .support-grid { grid-template-columns: 1fr; }
          .support-contact { grid-template-columns: 1fr; }
          .support-quick { grid-template-columns: 1fr; }
          .support-section { padding: 30px 0; }
          .support-bottom { padding: 40px 20px; }
        }
      `}</style>

      <header className="support-container support-header">
        <Link href="/" className="support-logo">
          KAV<span>O</span>RA.
        </Link>

        <nav className="support-nav">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <section className="support-hero">
        <div className="support-container">
          <div className="support-badge">
            <Headset size={14} />
            KAVORA HELP CENTRE
          </div>

          <h1>
            We're Here to <span>Help.</span>
          </h1>

          <p>
            Need assistance or have a question? Explore our support
            resources or contact the KAVORA team.
          </p>
        </div>
      </section>

      <div className="support-container">
        <Link href="/" className="support-back">
          <ArrowLeft size={15} />
          Back to home
        </Link>

        <div className="support-notice">
          <ShieldCheck size={23} />

          <div>
            <strong>Marketplace development update</strong>

            <p>
              KAVORA is still being developed. Account management, live
              ordering, payments and delivery services are not yet fully
              operational. Our support team can answer general questions
              and receive enquiries while development continues.
            </p>
          </div>
        </div>

        <section className="support-section">
          <div className="support-heading">
            <span>HOW CAN WE HELP?</span>
            <h2>Choose a Support Category</h2>
            <p>
              Find the right information for your question.
            </p>
          </div>

          <div className="support-grid">
            {supportCategories.map((category) => {
              const Icon = category.icon;

              return (
                <article
                  className="support-card"
                  key={category.title}
                >
                  <div className="support-card-icon">
                    <Icon size={22} />
                  </div>

                  <h3>{category.title}</h3>

                  <p>{category.description}</p>

                  <Link href={category.link}>
                    {category.label}
                    <ArrowRight size={14} />
                  </Link>
                </article>
              );
            })}
          </div>
        </section>

        <section>
          <div className="support-heading">
            <span>CONTACT OUR TEAM</span>
            <h2>Get in Touch</h2>
            <p>
              Choose your preferred channel to send an enquiry.
            </p>
          </div>

          <div className="support-contact">
            <div className="support-contact-card">
              <MessageCircle size={29} />

              <h3>WhatsApp Support</h3>

              <p>
                Send us a WhatsApp message for general enquiries,
                vendor interest and marketplace questions.
              </p>

              <a
                href="https://wa.me/2349130559723"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={15} />
                Chat on WhatsApp
                <ArrowRight size={14} />
              </a>

              <div className="support-hours">
                <Clock size={13} />
                Response times may vary.
              </div>
            </div>

            <div className="support-contact-card">
              <Mail size={29} />

              <h3>Email Support</h3>

              <p>
                Send detailed enquiries, suggestions, partnership
                proposals or other questions to our team.
              </p>

              <a href="mailto:oyebanjioluwasegun128@gmail.com">
                <Mail size={15} />
                Send an Email
                <ArrowRight size={14} />
              </a>

              <div className="support-hours">
                <Clock size={13} />
                Response times may vary.
              </div>
            </div>
          </div>
        </section>

        <section className="support-section">
          <div className="support-heading">
            <span>HELPFUL RESOURCES</span>
            <h2>Explore Our Information Pages</h2>
          </div>

          <div className="support-quick">
            {quickLinks.map((item) => (
              <Link
                href={item.href}
                className="support-quick-link"
                key={item.title}
              >
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </div>

                <ChevronRight size={18} />
              </Link>
            ))}
          </div>
        </section>

        <section className="support-bottom">
          <Headset size={36} />

          <h2>We're Listening.</h2>

          <p>
            Your questions, feedback and suggestions help us build a
            better marketplace. Reach out and let us know how we can help.
          </p>

          <a href="https://wa.me/2349130559723">
            <MessageCircle size={16} />
            Contact KAVORA
            <ArrowRight size={14} />
          </a>
        </section>

        <footer className="support-footer">
          <p>
            © {new Date().getFullYear()} KAVORA Marketplace. All rights
            reserved.
          </p>

          <p>Created by Ayanfe Innovation Labs Limited.</p>
        </footer>
      </div>
    </main>
  );
}
