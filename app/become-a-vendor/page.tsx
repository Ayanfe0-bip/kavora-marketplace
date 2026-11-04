import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  Store,
  ShoppingBag,
  TrendingUp,
  Users,
  Package,
  ShieldCheck,
  Headset,
  CheckCircle2,
  MessageCircle,
  Sparkles,
} from "lucide-react";

const benefits = [
  {
    icon: Store,
    title: "Your Own Digital Store",
    description:
      "Get an individual storefront where customers can discover your business and explore your products.",
  },
  {
    icon: Users,
    title: "Reach More Customers",
    description:
      "Make your business discoverable to customers searching for products across the KAVORA marketplace.",
  },
  {
    icon: Package,
    title: "Product Management",
    description:
      "Access planned tools for organising product listings, prices and inventory from one dashboard.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description:
      "Build your online presence and create new opportunities to grow your customer base.",
  },
];

const steps = [
  {
    number: "01",
    title: "Express Your Interest",
    description:
      "Contact the KAVORA team and tell us about your business and the products you sell.",
  },
  {
    number: "02",
    title: "Business Review",
    description:
      "Our team will review your business information and explain the onboarding requirements.",
  },
  {
    number: "03",
    title: "Store Setup",
    description:
      "Once vendor onboarding becomes available, approved sellers can prepare their digital storefronts.",
  },
  {
    number: "04",
    title: "Start Selling",
    description:
      "After the marketplace's vendor, product, ordering and payment systems are operational, sellers can begin receiving orders.",
  },
];

const requirements = [
  "A genuine business or legitimate product offering.",
  "Accurate business name and contact information.",
  "Clear product photographs and descriptions.",
  "Reliable information about product prices and availability.",
  "Willingness to follow KAVORA's vendor policies.",
];

export default function BecomeAVendorPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fc] text-[#172033]">
      <style>{`
        * { box-sizing: border-box; }

        .vendor-container {
          width: min(1100px, 92%);
          margin: auto;
        }

        .vendor-header {
          min-height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          border-bottom: 1px solid #e8ebf1;
        }

        .vendor-logo {
          color: #172033;
          font-size: 27px;
          font-weight: 950;
          letter-spacing: -1.5px;
          text-decoration: none;
        }

        .vendor-logo span { color: #7655e8; }

        .vendor-nav {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .vendor-nav a {
          color: #657086;
          font-size: 13px;
          font-weight: 800;
          text-decoration: none;
        }

        .vendor-nav a:hover { color: #7655e8; }

        .vendor-hero {
          position: relative;
          overflow: hidden;
          padding: 85px 0;
          background:
            radial-gradient(circle at 10% 20%, #e9e4ff 0, transparent 32%),
            radial-gradient(circle at 90% 80%, #e3f2ff 0, transparent 30%);
        }

        .vendor-hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          align-items: center;
          gap: 50px;
        }

        .vendor-badge {
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

        .vendor-hero h1 {
          margin: 23px 0 18px;
          font-size: clamp(39px, 6vw, 62px);
          font-weight: 950;
          letter-spacing: -2.8px;
          line-height: 1.08;
        }

        .vendor-hero h1 span { color: #7655e8; }

        .vendor-hero-copy {
          max-width: 570px;
          color: #778196;
          font-size: 14px;
          line-height: 1.9;
        }

        .vendor-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 28px;
        }

        .vendor-primary {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 15px 21px;
          border-radius: 9px;
          background: #7655e8;
          color: white;
          font-size: 12px;
          font-weight: 950;
          text-decoration: none;
          box-shadow: 0 9px 22px #7655e833;
        }

        .vendor-secondary {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 15px 21px;
          border: 1px solid #e0e3eb;
          border-radius: 9px;
          background: white;
          color: #273149;
          font-size: 12px;
          font-weight: 900;
          text-decoration: none;
        }

        .vendor-hero-card {
          padding: 30px;
          border: 1px solid #e9e5f7;
          border-radius: 23px;
          background: white;
          box-shadow: 0 20px 55px #28204b12;
        }

        .vendor-card-icon {
          width: 65px;
          height: 65px;
          display: grid;
          place-items: center;
          border-radius: 19px;
          background: #f0edff;
          color: #7655e8;
        }

        .vendor-hero-card h2 {
          margin: 22px 0 10px;
          font-size: 23px;
          font-weight: 950;
        }

        .vendor-hero-card p {
          color: #7b8498;
          font-size: 12px;
          line-height: 1.9;
        }

        .vendor-card-stat {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 23px;
          padding: 13px;
          border-radius: 10px;
          background: #f7f6ff;
          color: #6550bd;
          font-size: 11px;
          font-weight: 900;
        }

        .vendor-section {
          padding: 75px 0;
        }

        .vendor-section-heading {
          max-width: 650px;
          margin: 0 auto 38px;
          text-align: center;
        }

        .vendor-section-heading span {
          color: #7655e8;
          font-size: 11px;
          font-weight: 950;
          letter-spacing: 1.5px;
        }

        .vendor-section-heading h2 {
          margin: 13px 0;
          font-size: clamp(27px, 4vw, 37px);
          font-weight: 950;
          letter-spacing: -1.2px;
        }

        .vendor-section-heading p {
          color: #7b8498;
          font-size: 13px;
          line-height: 1.9;
        }

        .vendor-benefits {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 17px;
        }

        .vendor-benefit {
          padding: 24px 20px;
          border: 1px solid #e8eaf1;
          border-radius: 16px;
          background: white;
        }

        .vendor-benefit-icon {
          width: 47px;
          height: 47px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: #f0edff;
          color: #7655e8;
        }

        .vendor-benefit h3 {
          margin: 18px 0 9px;
          font-size: 15px;
          font-weight: 950;
        }

        .vendor-benefit p {
          margin: 0;
          color: #7b8498;
          font-size: 11px;
          line-height: 1.9;
        }

        .vendor-process {
          background: white;
        }

        .vendor-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .vendor-step {
          padding: 23px;
          border: 1px solid #e8eaf1;
          border-radius: 15px;
          background: #fcfcff;
        }

        .vendor-step-number {
          color: #7655e8;
          font-size: 27px;
          font-weight: 950;
        }

        .vendor-step h3 {
          margin: 14px 0 9px;
          font-size: 14px;
          font-weight: 950;
        }

        .vendor-step p {
          margin: 0;
          color: #7b8498;
          font-size: 11px;
          line-height: 1.9;
        }

        .vendor-requirements-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 55px;
        }

        .vendor-requirements-grid h2 {
          margin: 13px 0;
          font-size: 32px;
          font-weight: 950;
          letter-spacing: -1px;
        }

        .vendor-requirements-grid > div > p {
          color: #7b8498;
          font-size: 13px;
          line-height: 1.9;
        }

        .vendor-check-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 25px;
          border: 1px solid #e8eaf1;
          border-radius: 17px;
          background: white;
        }

        .vendor-check {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          color: #626e83;
          font-size: 12px;
          line-height: 1.7;
        }

        .vendor-check svg {
          flex-shrink: 0;
          color: #7655e8;
        }

        .vendor-notice {
          margin-top: 25px;
          padding: 17px;
          border: 1px solid #e5ddff;
          border-radius: 12px;
          background: #f2efff;
          color: #77718f;
          font-size: 11px;
          line-height: 1.9;
        }

        .vendor-cta {
          padding: 65px 25px;
          border-radius: 22px;
          background: linear-gradient(120deg, #211b43, #55418f);
          color: white;
          text-align: center;
        }

        .vendor-cta h2 {
          margin: 15px 0 10px;
          font-size: clamp(27px, 4vw, 36px);
          font-weight: 950;
        }

        .vendor-cta p {
          max-width: 560px;
          margin: auto;
          color: #d6d0ed;
          font-size: 12px;
          line-height: 1.9;
        }

        .vendor-cta a {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          margin-top: 24px;
          padding: 15px 23px;
          border-radius: 9px;
          background: white;
          color: #6546d4;
          font-size: 12px;
          font-weight: 950;
          text-decoration: none;
        }

        .vendor-footer {
          margin-top: 70px;
          padding: 27px 0;
          border-top: 1px solid #e8ebf1;
          color: #8790a2;
          font-size: 11px;
          text-align: center;
        }

        @media (max-width: 850px) {
          .vendor-hero-grid { grid-template-columns: 1fr 0.8fr; gap: 25px; }
          .vendor-benefits, .vendor-steps { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 600px) {
          .vendor-header { min-height: 68px; }
          .vendor-logo { font-size: 23px; }
          .vendor-nav { gap: 12px; }
          .vendor-nav a { font-size: 11px; }
          .vendor-hero { padding: 55px 0; }
          .vendor-hero-grid { grid-template-columns: 1fr; }
          .vendor-hero h1 { font-size: 43px; }
          .vendor-hero-card { padding: 24px; }
          .vendor-section { padding: 55px 0; }
          .vendor-benefits, .vendor-steps { grid-template-columns: 1fr; }
          .vendor-requirements-grid { grid-template-columns: 1fr; gap: 25px; }
          .vendor-requirements-grid h2 { font-size: 28px; }
          .vendor-cta { padding: 45px 20px; }
        }
      `}</style>

      <header className="vendor-container vendor-header">
        <Link href="/" className="vendor-logo">
          KAV<span>O</span>RA.
        </Link>

        <nav className="vendor-nav">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/sellers">Shops</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <section className="vendor-hero">
        <div className="vendor-container vendor-hero-grid">
          <div>
            <div className="vendor-badge">
              <Sparkles size={14} />
              SELL ON KAVORA
            </div>

            <h1>
              Your Business.
              <br />
              <span>More Possibilities.</span>
            </h1>

            <p className="vendor-hero-copy">
              Take your business beyond the physical shop. KAVORA is
              building a marketplace where independent businesses can
              showcase their products and connect with more customers.
            </p>

            <div className="vendor-actions">
              <a
                href="https://wa.me/2349130559723?text=Hello%20KAVORA%2C%20I%20am%20interested%20in%20joining%20as%20a%20vendor."
                target="_blank"
                rel="noopener noreferrer"
                className="vendor-primary"
              >
                Express Your Interest
                <ArrowRight size={16} />
              </a>

              <Link href="/products" className="vendor-secondary">
                Explore Marketplace
              </Link>
            </div>
          </div>

          <div className="vendor-hero-card">
            <div className="vendor-card-icon">
              <Store size={33} />
            </div>

            <h2>Bring Your Shop Online.</h2>

            <p>
              Whether you run a fashion store, beauty business, electronics
              shop or another retail business, KAVORA is being designed to
              help customers discover what you offer.
            </p>

            <div className="vendor-card-stat">
              <ShoppingBag size={18} />
              One marketplace. Multiple businesses.
            </div>

            <div className="vendor-card-stat">
              <Users size={18} />
              Built to connect sellers and customers.
            </div>
          </div>
        </div>
      </section>

      <section className="vendor-container vendor-section">
        <div className="vendor-section-heading">
          <span>WHY SELL WITH US?</span>
          <h2>Build Your Business Beyond Borders.</h2>
          <p>
            KAVORA aims to give independent businesses useful digital
            storefronts and tools to grow their online presence.
          </p>
        </div>

        <div className="vendor-benefits">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article className="vendor-benefit" key={benefit.title}>
                <div className="vendor-benefit-icon">
                  <Icon size={22} />
                </div>

                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="vendor-process">
        <div className="vendor-container vendor-section">
          <div className="vendor-section-heading">
            <span>THE ONBOARDING JOURNEY</span>
            <h2>How Joining KAVORA Will Work.</h2>
            <p>
              Our planned onboarding process is designed to make it easier
              for businesses to become part of the marketplace.
            </p>
          </div>

          <div className="vendor-steps">
            {steps.map((step) => (
              <article className="vendor-step" key={step.number}>
                <div className="vendor-step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="vendor-container vendor-section">
        <div className="vendor-requirements-grid">
          <div>
            <div className="vendor-badge">
              <ShieldCheck size={14} />
              VENDOR REQUIREMENTS
            </div>

            <h2>Who Can Join KAVORA?</h2>

            <p>
              We welcome enquiries from genuine businesses and independent
              sellers interested in building their digital presence.
            </p>

            <p>
              We aim to create a marketplace where customers can discover
              different products and businesses in one place.
            </p>
          </div>

          <div>
            <div className="vendor-check-list">
              {requirements.map((requirement) => (
                <div className="vendor-check" key={requirement}>
                  <CheckCircle2 size={18} />
                  <span>{requirement}</span>
                </div>
              ))}
            </div>

            <div className="vendor-notice">
              <strong>Note:</strong> These are preliminary expectations,
              not a completed registration checklist. Final onboarding
              requirements, verification procedures and any applicable
              fees will be announced before vendor registration opens.
            </div>
          </div>
        </div>
      </section>

      <section className="vendor-container">
        <div className="vendor-cta">
          <Headset size={35} />

          <h2>Let's Talk About Your Business.</h2>

          <p>
            Interested in becoming one of the businesses on KAVORA?
            Contact our team to express your interest and learn about
            upcoming vendor onboarding.
          </p>

          <a
            href="https://wa.me/2349130559723?text=Hello%20KAVORA%2C%20I%20want%20to%20know%20more%20about%20becoming%20a%20vendor."
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={17} />
            Chat With KAVORA
            <ArrowRight size={15} />
          </a>
        </div>
      </section>

      <footer className="vendor-container vendor-footer">
        <p>
          © {new Date().getFullYear()} KAVORA Marketplace. All rights
          reserved.
        </p>

        <p>Created by Ayanfe Innovation Labs Limited.</p>

        <Link
          href="/"
          style={{
            color: "#7655e8",
            textDecoration: "none",
            fontWeight: 800,
          }}
        >
          <ArrowLeft
            size={12}
            style={{
              display: "inline",
              verticalAlign: "middle",
              marginRight: 5,
            }}
          />
          Back to KAVORA
        </Link>
      </footer>
    </main>
  );
      }
