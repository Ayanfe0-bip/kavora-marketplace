import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  RefreshCw,
  PackageCheck,
  ShieldCheck,
  Clock,
  AlertCircle,
  MessageCircle,
  Mail,
  CheckCircle2,
  XCircle,
  HelpCircle,
} from "lucide-react";

const returnSteps = [
  {
    number: "01",
    title: "Contact KAVORA",
    description:
      "Contact our team with your order details and explain why you want to return the product.",
  },
  {
    number: "02",
    title: "Provide Evidence",
    description:
      "Where relevant, provide clear photographs or videos showing damage, defects or an incorrect item.",
  },
  {
    number: "03",
    title: "Review the Request",
    description:
      "The request and applicable vendor return conditions will need to be reviewed before any return is approved.",
  },
  {
    number: "04",
    title: "Agree on the Next Step",
    description:
      "If a return is approved, the customer and vendor will need to agree on the return method and any applicable refund or exchange arrangement.",
  },
];

const eligibleItems = [
  "An item arrives damaged.",
  "The product received is different from the product ordered.",
  "An item has a significant undisclosed defect.",
  "The wrong product or variant was supplied.",
  "A product is missing from an order.",
];

const nonEligibleItems = [
  "A customer simply changes their mind after purchase.",
  "Damage caused by improper use or handling after delivery.",
  "A product has been altered or damaged by the customer.",
  "A return request is made outside the applicable return period, where a valid deadline applies.",
  "A complaint cannot be reasonably connected to the product or order.",
];

export default function ReturnsPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fc] text-[#172033]">
      <style>{`
        * { box-sizing: border-box; }

        .returns-container {
          width: min(1050px, 92%);
          margin: auto;
        }

        .returns-header {
          min-height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          border-bottom: 1px solid #e8ebf1;
        }

        .returns-logo {
          color: #172033;
          font-size: 27px;
          font-weight: 950;
          letter-spacing: -1.5px;
          text-decoration: none;
        }

        .returns-logo span { color: #7655e8; }

        .returns-nav {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .returns-nav a {
          color: #657086;
          font-size: 12px;
          font-weight: 800;
          text-decoration: none;
        }

        .returns-nav a:hover { color: #7655e8; }

        .returns-hero {
          padding: 70px 0;
          background:
            radial-gradient(circle at 10% 20%, #e9e4ff 0, transparent 32%),
            radial-gradient(circle at 90% 80%, #e3f2ff 0, transparent 30%);
          text-align: center;
        }

        .returns-badge {
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

        .returns-hero h1 {
          margin: 20px auto 13px;
          font-size: clamp(35px, 6vw, 55px);
          font-weight: 950;
          letter-spacing: -2px;
        }

        .returns-hero h1 span { color: #7655e8; }

        .returns-hero p {
          max-width: 620px;
          margin: auto;
          color: #778196;
          font-size: 13px;
          line-height: 1.9;
        }

        .returns-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin: 25px 0;
          color: #7655e8;
          font-size: 12px;
          font-weight: 900;
          text-decoration: none;
        }

        .returns-notice {
          display: flex;
          align-items: flex-start;
          gap: 13px;
          padding: 20px;
          border: 1px solid #e5ddff;
          border-radius: 14px;
          background: #f2efff;
        }

        .returns-notice svg {
          flex-shrink: 0;
          color: #7655e8;
        }

        .returns-notice strong {
          display: block;
          margin-bottom: 7px;
          color: #6043cb;
          font-size: 13px;
          font-weight: 950;
        }

        .returns-notice p {
          margin: 0;
          color: #77718f;
          font-size: 12px;
          line-height: 1.9;
        }

        .returns-section {
          padding: 43px 0;
        }

        .returns-heading {
          margin-bottom: 25px;
        }

        .returns-heading span {
          color: #7655e8;
          font-size: 10px;
          font-weight: 950;
          letter-spacing: 1.5px;
        }

        .returns-heading h2 {
          margin: 10px 0;
          font-size: clamp(24px, 4vw, 32px);
          font-weight: 950;
          letter-spacing: -1px;
        }

        .returns-heading p {
          max-width: 650px;
          color: #7b8498;
          font-size: 12px;
          line-height: 1.9;
        }

        .returns-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .returns-card {
          padding: 24px;
          border: 1px solid #e8eaf1;
          border-radius: 15px;
          background: white;
        }

        .returns-card h3 {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 0 0 19px;
          font-size: 15px;
          font-weight: 950;
        }

        .returns-card h3 svg { color: #7655e8; }

        .returns-list {
          display: grid;
          gap: 15px;
          padding: 0;
          margin: 0;
          list-style: none;
        }

        .returns-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #707b91;
          font-size: 11px;
          line-height: 1.8;
        }

        .returns-list svg {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .returns-steps {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .returns-step {
          display: flex;
          gap: 15px;
          padding: 21px;
          border: 1px solid #e8eaf1;
          border-radius: 14px;
          background: white;
        }

        .returns-number {
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

        .returns-step h3 {
          margin: 2px 0 8px;
          font-size: 13px;
          font-weight: 950;
        }

        .returns-step p {
          margin: 0;
          color: #7b8498;
          font-size: 11px;
          line-height: 1.9;
        }

        .returns-info {
          padding: 23px;
          margin-top: 20px;
          border: 1px solid #e8eaf1;
          border-radius: 14px;
          background: white;
        }

        .returns-info h3 {
          margin: 0 0 10px;
          font-size: 14px;
          font-weight: 950;
        }

        .returns-info p {
          margin: 0;
          color: #778196;
          font-size: 11px;
          line-height: 2;
        }

        .returns-warning {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 19px;
          margin-top: 20px;
          border: 1px solid #f2e5c8;
          border-radius: 13px;
          background: #fffaf0;
        }

        .returns-warning svg {
          flex-shrink: 0;
          color: #bd8731;
        }

        .returns-warning p {
          margin: 0;
          color: #8b744d;
          font-size: 11px;
          line-height: 1.9;
        }

        .returns-contact {
          padding: 40px 25px;
          margin: 35px 0 55px;
          border-radius: 18px;
          background: linear-gradient(120deg, #211b43, #55418f);
          color: white;
          text-align: center;
        }

        .returns-contact h2 {
          margin: 13px 0 10px;
          font-size: clamp(24px, 4vw, 32px);
          font-weight: 950;
        }

        .returns-contact p {
          max-width: 560px;
          margin: auto;
          color: #d6d0ed;
          font-size: 12px;
          line-height: 1.9;
        }

        .returns-buttons {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 23px;
        }

        .returns-buttons a {
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

        .returns-buttons a.secondary {
          border: 1px solid #ffffff55;
          background: transparent;
          color: white;
        }

        .returns-footer {
          padding: 27px 0;
          border-top: 1px solid #e8ebf1;
          color: #8790a2;
          font-size: 11px;
          text-align: center;
        }

        @media (max-width: 650px) {
          .returns-header { min-height: 68px; }
          .returns-logo { font-size: 23px; }
          .returns-nav { gap: 12px; }
          .returns-nav a { font-size: 10px; }
          .returns-hero { padding: 50px 0; }
          .returns-grid { grid-template-columns: 1fr; }
          .returns-steps { grid-template-columns: 1fr; }
          .returns-section { padding: 30px 0; }
        }
      `}</style>

      <header className="returns-container returns-header">
        <Link href="/" className="returns-logo">
          KAV<span>O</span>RA.
        </Link>

        <nav className="returns-nav">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/support">Support</Link>
          <Link href="/faq">FAQ</Link>
        </nav>
      </header>

      <section className="returns-hero">
        <div className="returns-container">
          <div className="returns-badge">
            <RefreshCw size={14} />
            CUSTOMER POLICY
          </div>

          <h1>
            Returns & <span>Refunds.</span>
          </h1>

          <p>
            Our proposed returns and refunds framework is designed
            to encourage fair transactions between customers and
            independent marketplace vendors.
          </p>
        </div>
      </section>

      <div className="returns-container">
        <Link href="/" className="returns-back">
          <ArrowLeft size={15} />
          Back to home
        </Link>

        <div className="returns-notice">
          <AlertCircle size={23} />

          <div>
            <strong>Important: Policy under development</strong>
            <p>
              KAVORA is still being developed. Online checkout,
              payment processing, order tracking and formal return
              management are not yet operational. This page describes
              a proposed policy and is not a confirmation that returns
              or refunds can currently be processed through the platform.
              Final conditions will be published before commercial launch.
            </p>
          </div>
        </div>

        <section className="returns-section">
          <div className="returns-heading">
            <span>01 / UNDERSTANDING RETURNS</span>
            <h2>When May a Return Be Considered?</h2>
            <p>
              The following situations may qualify for a return review
              under the proposed marketplace policy.
            </p>
          </div>

          <div className="returns-grid">
            <div className="returns-card">
              <h3>
                <CheckCircle2 size={20} />
                Potentially Eligible
              </h3>

              <ul className="returns-list">
                {eligibleItems.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={15} color="#16a36a" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="returns-card">
              <h3>
                <XCircle size={20} />
                Potentially Not Eligible
              </h3>

              <ul className="returns-list">
                {nonEligibleItems.map((item) => (
                  <li key={item}>
                    <XCircle size={15} color="#d36b6b" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="returns-warning">
            <AlertCircle size={20} />
            <p>
              These examples are proposed guidelines, not automatic
              approval or rejection rules. Applicable consumer protection
              laws and the circumstances of each transaction must be
              considered. Nothing on this page removes any rights
              customers may have under applicable law.
            </p>
          </div>
        </section>

        <section className="returns-section">
          <div className="returns-heading">
            <span>02 / RETURN PROCESS</span>
            <h2>How a Return Request May Work</h2>
            <p>
              Once the marketplace return system is available, the
              proposed process will follow these steps.
            </p>
          </div>

          <div className="returns-steps">
            {returnSteps.map((step) => (
              <article className="returns-step" key={step.number}>
                <div className="returns-number">{step.number}</div>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="returns-section">
          <div className="returns-heading">
            <span>03 / REFUNDS AND EXCHANGES</span>
            <h2>How Refunds May Be Handled</h2>
            <p>
              Refund and exchange arrangements will be finalized
              before KAVORA enables commercial transactions.
            </p>
          </div>

          <div className="returns-info">
            <h3>
              <RefreshCw
                size={18}
                style={{
                  display: "inline",
                  verticalAlign: "middle",
                  marginRight: 8,
                  color: "#7655e8",
                }}
              />
              Refunds
            </h3>

            <p>
              Where a refund is approved, the applicable amount,
              payment method, processing steps and expected timeline
              will be communicated to the customer. Refunds will
              depend on the payment arrangement and applicable law.
            </p>
          </div>

          <div className="returns-info">
            <h3>
              <PackageCheck
                size={18}
                style={{
                  display: "inline",
                  verticalAlign: "middle",
                  marginRight: 8,
                  color: "#7655e8",
                }}
              />
              Exchanges
            </h3>

            <p>
              An exchange may be considered where the vendor has
              the correct replacement product available. The vendor
              and customer must agree on the arrangement, subject
              to applicable consumer rights.
            </p>
          </div>

          <div className="returns-info">
            <h3>
              <Clock
                size={18}
                style={{
                  display: "inline",
                  verticalAlign: "middle",
                  marginRight: 8,
                  color: "#7655e8",
                }}
              />
              Return Time Limits
            </h3>

            <p>
              Specific return windows and processing timelines have
              not yet been established. KAVORA will publish clear
              deadlines before accepting orders through the marketplace.
            </p>
          </div>
        </section>

        <section className="returns-section">
          <div className="returns-heading">
            <span>04 / RESPONSIBILITIES</span>
            <h2>Customers and Vendors</h2>
          </div>

          <div className="returns-grid">
            <div className="returns-card">
              <h3>
                <ShieldCheck size={20} />
                Customer Responsibilities
              </h3>

              <ul className="returns-list">
                <li>
                  <CheckCircle2 size={15} color="#16a36a" />
                  Provide accurate order information.
                </li>

                <li>
                  <CheckCircle2 size={15} color="#16a36a" />
                  Report product problems promptly.
                </li>

                <li>
                  <CheckCircle2 size={15} color="#16a36a" />
                  Provide truthful descriptions and evidence.
                </li>

                <li>
                  <CheckCircle2 size={15} color="#16a36a" />
                  Keep relevant order and communication records.
                </li>
              </ul>
            </div>

            <div className="returns-card">
              <h3>
                <StoreIcon />
                Vendor Responsibilities
              </h3>

              <ul className="returns-list">
                <li>
                  <CheckCircle2 size={15} color="#16a36a" />
                  Provide accurate product descriptions.
                </li>

                <li>
                  <CheckCircle2 size={15} color="#16a36a" />
                  Package products appropriately.
                </li>

                <li>
                  <CheckCircle2 size={15} color="#16a36a" />
                  Communicate clearly about product issues.
                </li>

                <li>
                  <CheckCircle2 size={15} color="#16a36a" />
                  Respect applicable consumer protection obligations.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="returns-contact">
          <HelpCircle size={34} />

          <h2>Need Help With a Product?</h2>

          <p>
            If you have a question about a product, vendor or a
            potential return, contact the KAVORA team. We can receive
            enquiries while the formal return system is being developed.
          </p>

          <div className="returns-buttons">
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

        <footer className="returns-footer">
          <p>
            Proposed policy — last updated November 4, 2026.
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

function StoreIcon() {
 return <PackageCheck size={20} />;
}
