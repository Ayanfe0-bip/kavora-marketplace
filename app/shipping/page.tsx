import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Truck,
  MapPin,
  Package,
  Clock,
  Navigation,
  ShieldCheck,
  AlertCircle,
  MessageCircle,
  Mail,
  CheckCircle2,
  Globe,
  Store,
} from "lucide-react";

const deliveryFeatures = [
  {
    icon: MapPin,
    title: "Local Delivery",
    description:
      "Our initial marketplace focus includes Ede and Osogbo, Osun State.",
  },
  {
    icon: Globe,
    title: "Nationwide Expansion",
    description:
      "KAVORA plans to support deliveries to customers across Nigeria as logistics partnerships develop.",
  },
  {
    icon: Navigation,
    title: "Order Tracking",
    description:
      "Order tracking and delivery status updates are planned features for a future marketplace release.",
  },
];

const deliverySteps = [
  {
    number: "01",
    title: "Choose Your Product",
    description:
      "Browse the marketplace and explore products offered by participating vendors.",
  },
  {
    number: "02",
    title: "Confirm Delivery Details",
    description:
      "When checkout becomes available, provide an accurate delivery address and contact number.",
  },
  {
    number: "03",
    title: "Vendor Prepares Your Order",
    description:
      "The vendor prepares and packages the product according to the agreed arrangement.",
  },
  {
    number: "04",
    title: "Delivery Arrangement",
    description:
      "The vendor and customer will follow the available delivery arrangement and communicate relevant updates.",
  },
];

export default function ShippingPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fc] text-[#172033]">
      <style>{`
        * { box-sizing: border-box; }

        .shipping-container {
          width: min(1050px, 92%);
          margin: auto;
        }

        .shipping-header {
          min-height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          border-bottom: 1px solid #e8ebf1;
        }

        .shipping-logo {
          color: #172033;
          font-size: 27px;
          font-weight: 950;
          letter-spacing: -1.5px;
          text-decoration: none;
        }

        .shipping-logo span { color: #7655e8; }

        .shipping-nav {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .shipping-nav a {
          color: #657086;
          font-size: 12px;
          font-weight: 800;
          text-decoration: none;
        }

        .shipping-nav a:hover { color: #7655e8; }

        .shipping-hero {
          padding: 70px 0;
          background:
            radial-gradient(circle at 10% 20%, #e9e4ff 0, transparent 32%),
            radial-gradient(circle at 90% 80%, #e3f2ff 0, transparent 30%);
          text-align: center;
        }

        .shipping-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 15px;
          border: 1px solid #e3dcff;
          border-radius: 30px;
          background: white;
          color: #7655e8;
          font-size: 11px;
          font-weight: 950;
        }

        .shipping-hero h1 {
          margin: 20px auto 13px;
          font-size: clamp(35px, 6vw, 55px);
          font-weight: 950;
          letter-spacing: -2px;
        }

        .shipping-hero h1 span { color: #7655e8; }

        .shipping-hero p {
          max-width: 620px;
          margin: auto;
          color: #778196;
          font-size: 13px;
          line-height: 1.9;
        }

        .shipping-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin: 25px 0;
          color: #7655e8;
          font-size: 12px;
          font-weight: 900;
          text-decoration: none;
        }

        .shipping-notice {
          display: flex;
          align-items: flex-start;
          gap: 13px;
          padding: 20px;
          border: 1px solid #e5ddff;
          border-radius: 14px;
          background: #f2efff;
        }

        .shipping-notice svg {
          flex-shrink: 0;
          color: #7655e8;
        }

        .shipping-notice strong {
          display: block;
          margin-bottom: 7px;
          color: #6043cb;
          font-size: 13px;
          font-weight: 950;
        }

        .shipping-notice p {
          margin: 0;
          color: #77718f;
          font-size: 12px;
          line-height: 1.9;
        }

        .shipping-section {
          padding: 43px 0;
        }

        .shipping-heading {
          margin-bottom: 25px;
        }

        .shipping-heading span {
          color: #7655e8;
          font-size: 10px;
          font-weight: 950;
          letter-spacing: 1.5px;
        }

        .shipping-heading h2 {
          margin: 10px 0;
          font-size: clamp(24px, 4vw, 32px);
          font-weight: 950;
          letter-spacing: -1px;
        }

        .shipping-heading p {
          max-width: 650px;
          color: #7b8498;
          font-size: 12px;
          line-height: 1.9;
        }

        .shipping-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 17px;
        }

        .shipping-card {
          padding: 23px;
          border: 1px solid #e8eaf1;
          border-radius: 15px;
          background: white;
        }

        .shipping-icon {
          display: grid;
          width: 47px;
          height: 47px;
          place-items: center;
          border-radius: 13px;
          background: #f0edff;
          color: #7655e8;
        }

        .shipping-card h3 {
          margin: 17px 0 9px;
          font-size: 14px;
          font-weight: 950;
        }

        .shipping-card p {
          margin: 0;
          color: #7b8498;
          font-size: 11px;
          line-height: 1.9;
        }

        .shipping-steps {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .shipping-step {
          display: flex;
          gap: 15px;
          padding: 21px;
          border: 1px solid #e8eaf1;
          border-radius: 14px;
          background: white;
        }

        .shipping-number {
          display: grid;
          flex-shrink: 0;
          width: 39px;
          height: 39px;
          place-items: center;
          border-radius: 11px;
          background: #f0edff;
          color: #7655e8;
          font-size: 12px;
          font-weight: 950;
        }

        .shipping-step h3 {
          margin: 2px 0 8px;
          font-size: 13px;
          font-weight: 950;
        }

        .shipping-step p {
          margin: 0;
          color: #7b8498;
          font-size: 11px;
          line-height: 1.9;
        }

        .shipping-info {
          padding: 23px;
          margin-top: 17px;
          border: 1px solid #e8eaf1;
          border-radius: 14px;
          background: white;
        }

        .shipping-info h3 {
          display: flex;
          align-items: center;
          gap: 9px;
          margin: 0 0 10px;
          font-size: 14px;
          font-weight: 950;
        }

        .shipping-info h3 svg { color: #7655e8; }

        .shipping-info p {
          margin: 0;
          color: #778196;
          font-size: 11px;
          line-height: 2;
        }

        .shipping-warning {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 19px;
          margin-top: 20px;
          border: 1px solid #f2e5c8;
          border-radius: 13px;
          background: #fffaf0;
        }

        .shipping-warning svg {
          flex-shrink: 0;
          color: #bd8731;
        }

        .shipping-warning p {
          margin: 0;
          color: #8b744d;
          font-size: 11px;
          line-height: 1.9;
        }

        .shipping-contact {
          padding: 40px 25px;
          margin: 35px 0 55px;
          border-radius: 18px;
          background: linear-gradient(120deg, #211b43, #55418f);
          color: white;
          text-align: center;
        }

        .shipping-contact h2 {
          margin: 13px 0 10px;
          font-size: clamp(24px, 4vw, 32px);
          font-weight: 950;
        }

        .shipping-contact p {
          max-width: 560px;
          margin: auto;
          color: #d6d0ed;
          font-size: 12px;
          line-height: 1.9;
        }

        .shipping-buttons {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 23px;
        }

        .shipping-buttons a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 19px;
          border-radius: 9px;
          background: white;
          color: #6546d4;
          font-size: 11px;
          font-weight: 950;
          text-decoration: none;
        }

        .shipping-buttons a.secondary {
          border: 1px solid #ffffff55;
          background: transparent;
          color: white;
        }

        .shipping-footer {
          padding: 27px 0;
          border-top: 1px solid #e8ebf1;
          color: #8790a2;
          font-size: 11px;
          text-align: center;
        }

        @media (max-width: 800px) {
          .shipping-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 600px) {
          .shipping-header { min-height: 68px; }
          .shipping-logo { font-size: 23px; }
          .shipping-nav { gap: 12px; }
          .shipping-nav a { font-size: 10px; }
          .shipping-hero { padding: 50px 0; }
          .shipping-grid { grid-template-columns: 1fr; }
          .shipping-steps { grid-template-columns: 1fr; }
          .shipping-section { padding: 30px 0; }
        }
      `}</style>

      <header className="shipping-container shipping-header">
        <Link href="/" className="shipping-logo">
          KAV<span>O</span>RA.
        </Link>

        <nav className="shipping-nav">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/support">Support</Link>
          <Link href="/faq">FAQ</Link>
        </nav>
      </header>

      <section className="shipping-hero">
        <div className="shipping-container">
          <div className="shipping-badge">
            <Truck size={14} />
            DELIVERY INFORMATION
          </div>

          <h1>
            Shipping & <span>Delivery.</span>
          </h1>

          <p>
            Discover our planned delivery approach, starting with
            local communities and expanding towards a nationwide
            shopping experience.
          </p>
        </div>
      </section>

      <div className="shipping-container">
        <Link href="/" className="shipping-back">
          <ArrowLeft size={15} />
          Back to home
        </Link>

        <div className="shipping-notice">
          <AlertCircle size={23} />

          <div>
            <strong>Delivery services are not yet operational</strong>
            <p>
              KAVORA is currently under development. Delivery partners,
              shipping prices, delivery timelines and order tracking
              have not yet been finalized. This page explains our plans
              and does not represent an active delivery service.
            </p>
          </div>
        </div>

        <section className="shipping-section">
          <div className="shipping-heading">
            <span>01 / OUR DELIVERY PLANS</span>
            <h2>Where We Plan to Deliver</h2>
            <p>
              Our expansion strategy starts locally before extending
              to more communities across Nigeria.
            </p>
          </div>

          <div className="shipping-grid">
            {deliveryFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  className="shipping-card"
                  key={feature.title}
                >
                  <div className="shipping-icon">
                    <Icon size={22} />
                  </div>

                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="shipping-section">
          <div className="shipping-heading">
            <span>02 / DELIVERY JOURNEY</span>
            <h2>How Delivery Is Expected to Work</h2>
            <p>
              These are the proposed stages customers can expect
              once marketplace ordering becomes available.
            </p>
          </div>

          <div className="shipping-steps">
            {deliverySteps.map((step) => (
              <article
                className="shipping-step"
                key={step.number}
              >
                <div className="shipping-number">
                  {step.number}
                </div>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="shipping-section">
          <div className="shipping-heading">
            <span>03 / IMPORTANT INFORMATION</span>
            <h2>Delivery Questions</h2>
            <p>
              Important details that will be confirmed before
              the marketplace begins accepting customer orders.
            </p>
          </div>

          <div className="shipping-info">
            <h3>
              <Package size={19} />
              Delivery Fees
            </h3>

            <p>
              Delivery fees have not yet been established. The final
              cost may depend on the delivery location, package size,
              weight and logistics provider. Any applicable delivery
              charge should be shown before a customer confirms an order.
            </p>
          </div>

          <div className="shipping-info">
            <h3>
              <Clock size={19} />
              Delivery Timelines
            </h3>

            <p>
              Specific delivery estimates will be published when
              logistics arrangements are confirmed. Delivery times
              may vary depending on location, vendor preparation
              and the selected delivery service.
            </p>
          </div>

          <div className="shipping-info">
            <h3>
              <Navigation size={19} />
              Order Tracking
            </h3>

            <p>
              A customer-facing order tracking feature is planned.
              Until it becomes available, delivery updates will
              depend on the communication arrangement established
              between the customer, vendor and delivery provider.
            </p>
          </div>

          <div className="shipping-info">
            <h3>
              <AlertCircle size={19} />
              Failed or Delayed Deliveries
            </h3>

            <p>
              If a delivery is delayed, unsuccessful or cannot be
              completed, the customer and vendor should communicate
              to establish the next steps. A formal procedure will
              be published before commercial launch.
            </p>
          </div>

          <div className="shipping-info">
            <h3>
              <ShieldCheck size={19} />
              Lost or Damaged Packages
            </h3>

            <p>
              Any reported loss or delivery damage will need to be
              reviewed using the relevant order information and
              available evidence. Responsibility and any applicable
              remedy will depend on the final delivery terms and
              applicable consumer protection laws.
            </p>
          </div>

          <div className="shipping-warning">
            <AlertCircle size={20} />
            <p>
              Customers should provide accurate delivery details
              and keep relevant order records. Vendors and logistics
              providers will be expected to handle packages responsibly.
              Final responsibilities and procedures will be published
              before the service launches.
            </p>
          </div>
        </section>

        <section className="shipping-section">
          <div className="shipping-heading">
            <span>04 / OUR MARKETPLACE</span>
            <h2>Vendor and Customer Responsibilities</h2>
          </div>

          <div className="shipping-grid">
            <article className="shipping-card">
              <div className="shipping-icon">
                <Store size={22} />
              </div>

              <h3>For Vendors</h3>

              <p>
                Vendors will be expected to prepare orders carefully,
                provide accurate product information and communicate
                delivery arrangements clearly.
              </p>
            </article>

            <article className="shipping-card">
              <div className="shipping-icon">
                <ShieldCheck size={22} />
              </div>

              <h3>For Customers</h3>

              <p>
                Customers should provide accurate contact and delivery
                details, remain reachable where necessary and report
                delivery problems promptly.
              </p>
            </article>

            <article className="shipping-card">
              <div className="shipping-icon">
                <Truck size={22} />
              </div>

              <h3>For Delivery Partners</h3>

              <p>
                Logistics partners will be expected to handle packages
                responsibly and communicate delivery progress according
                to agreed service arrangements.
              </p>
            </article>
          </div>
        </section>

        <section className="shipping-contact">
          <Truck size={35} />

          <h2>Have a Delivery Question?</h2>

          <p>
            Contact our team for general enquiries about KAVORA's
            delivery plans, vendor participation or marketplace
            development.
          </p>

          <div className="shipping-buttons">
            <a
              href="https://wa.me/2349130559723"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={15} />
              WhatsApp Support
              <ArrowRight size={14} />
            </a>

            <a
              className="secondary"
              href="mailto:oyebanjioluwasegun128@gmail.com"
            >
              <Mail size={15} />
              Email Us
            </a>
          </div>
        </section>

        <footer className="shipping-footer">
          <p>
            Delivery information — last updated November 4, 2026.
          </p>

          <p>
            © {new Date().getFullYear()} KAVORA Marketplace.
            All rights reserved.
          </p>

          <p>Created by Ayanfe Innovation Labs Limited.</p>
        </footer>
      </div>
    </main>
  );
      }
