import Link from "next/link";
import {
  ArrowLeft,
  FileText,
  ShieldCheck,
  Users,
  Store,
  ShoppingBag,
  CreditCard,
  Truck,
  AlertTriangle,
  Scale,
  Mail,
  ArrowRight,
} from "lucide-react";

const termsSections = [
  {
    icon: FileText,
    title: "1. Introduction and Acceptance",
    paragraphs: [
      "Welcome to KAVORA, a multi-vendor marketplace initiative developed by Ayanfe Innovation Labs Limited.",
      "These Terms and Conditions explain the rules governing access to and use of the KAVORA website and its services.",
      "By accessing or using KAVORA, you agree to comply with these terms and any additional policies that may apply to specific services.",
      "If you do not agree with these terms, you should discontinue using the platform.",
    ],
  },
  {
    icon: Users,
    title: "2. Eligibility and User Accounts",
    paragraphs: [
      "Users must provide accurate information when account registration becomes available.",
      "You are responsible for maintaining the confidentiality of your login credentials and for activities carried out through your account.",
      "You must notify the KAVORA team if you suspect unauthorised access to your account.",
      "Account registration and verification requirements will be published when the relevant features are introduced.",
    ],
  },
  {
    icon: ShoppingBag,
    title: "3. Customer Responsibilities",
    paragraphs: [
      "Customers are expected to provide accurate contact and delivery information when placing orders.",
      "Customers should review product descriptions, prices, seller information and applicable policies before making purchasing decisions.",
      "Users must not misuse the platform, submit fraudulent orders, interfere with its operation or engage in unlawful activities.",
    ],
  },
  {
    icon: Store,
    title: "4. Vendor Responsibilities",
    paragraphs: [
      "Vendors who join KAVORA must provide truthful business information and accurate product descriptions.",
      "Vendors are responsible for ensuring that their products are lawful, genuine and accurately represented.",
      "Vendors must provide accurate pricing, availability and relevant product information.",
      "Vendors must comply with applicable consumer protection, business, tax and other legal requirements.",
      "Specific vendor agreements and onboarding requirements will be introduced before vendor services become operational.",
    ],
  },
  {
    icon: ShoppingBag,
    title: "5. Products, Listings and Pricing",
    paragraphs: [
      "Product descriptions, images, availability and prices are provided for informational purposes.",
      "Some products displayed during the development period may be demonstration listings and may not be available for purchase.",
      "Actual product availability and pricing must be confirmed through the operational marketplace before an order is accepted.",
      "KAVORA reserves the right to remove listings that are misleading, unlawful, inappropriate or inconsistent with platform policies.",
    ],
  },
  {
    icon: CreditCard,
    title: "6. Orders and Payments",
    paragraphs: [
      "The ordering and checkout systems are planned marketplace features and may not currently be operational.",
      "Payment methods, payment processing arrangements, seller settlements and applicable charges will be communicated before live transactions begin.",
      "Users should not interpret demonstration product listings or interface elements as confirmation that KAVORA is currently accepting payments.",
      "Where payment services are introduced, transactions will be subject to the applicable payment provider's terms and conditions.",
    ],
  },
  {
    icon: Truck,
    title: "7. Delivery and Fulfilment",
    paragraphs: [
      "Delivery and order fulfilment arrangements are being developed.",
      "Delivery coverage, charges, estimated delivery times and available logistics partners will be communicated when these services become available.",
      "Customers and vendors will be expected to follow the applicable delivery and fulfilment procedures.",
      "KAVORA will publish additional delivery terms before facilitating live orders.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "8. Returns, Refunds and Exchanges",
    paragraphs: [
      "A formal returns, refunds and exchanges policy will be published before live transactions begin.",
      "The applicable policy will explain eligibility, time limits, product conditions and the procedure for submitting requests.",
      "Customers should review the relevant policy before completing purchases once ordering becomes available.",
    ],
  },
  {
    icon: AlertTriangle,
    title: "9. Prohibited Activities",
    paragraphs: [
      "Users must not use KAVORA to sell or promote illegal products or services.",
      "Users must not engage in fraud, impersonation, harassment, scams, unauthorised access, malicious activity or misleading advertising.",
      "Users must not upload content that violates another person's intellectual property or privacy rights.",
      "KAVORA may restrict or remove content and suspend access where there is a reasonable concern about misuse or violation of these terms.",
    ],
  },
  {
    icon: Scale,
    title: "10. Intellectual Property",
    paragraphs: [
      "The KAVORA name, branding, website design, platform materials and original content are protected by applicable intellectual property laws.",
      "Users must not reproduce, distribute, modify or commercially exploit KAVORA materials without appropriate authorisation.",
      "Vendors retain responsibility for ensuring that they have the rights to use the photographs, descriptions, logos and other materials they upload.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "11. Platform Availability and Limitations",
    paragraphs: [
      "KAVORA is under active development. Features may be added, changed, suspended or removed as the platform evolves.",
      "We aim to maintain a reliable service but cannot guarantee uninterrupted access, error-free operation or continuous availability.",
      "To the extent permitted by applicable law, KAVORA will not be responsible for losses arising from circumstances outside its reasonable control.",
      "Nothing in these terms excludes or limits any consumer or other legal rights that cannot lawfully be excluded or limited.",
    ],
  },
  {
    icon: Users,
    title: "12. Suspension and Termination",
    paragraphs: [
      "KAVORA may restrict, suspend or terminate access where a user violates these terms, engages in fraudulent activity or creates a significant risk to the platform or other users.",
      "Users may request assistance with account closure or related matters through the official contact channels.",
      "Any outstanding legal or contractual obligations may continue after an account is closed.",
    ],
  },
  {
    icon: Scale,
    title: "13. Applicable Law",
    paragraphs: [
      "These terms are intended to operate in accordance with the laws applicable in the Federal Republic of Nigeria.",
      "Any dispute relating to the use of KAVORA will be handled in accordance with applicable Nigerian law and the relevant dispute resolution procedures.",
    ],
  },
  {
    icon: FileText,
    title: "14. Changes to These Terms",
    paragraphs: [
      "We may update these Terms and Conditions as KAVORA introduces new features, changes its operations or responds to legal requirements.",
      "Updated terms will be published on this page with a revised date.",
      "Continued use of the platform after applicable changes take effect may constitute acceptance of the revised terms, subject to applicable law.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fc] text-[#172033]">
      <style>{`
        * { box-sizing: border-box; }

        .terms-container {
          width: min(950px, 92%);
          margin: auto;
        }

        .terms-header {
          min-height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          border-bottom: 1px solid #e8ebf1;
        }

        .terms-logo {
          color: #172033;
          font-size: 27px;
          font-weight: 950;
          letter-spacing: -1.5px;
          text-decoration: none;
        }

        .terms-logo span { color: #7655e8; }

        .terms-nav {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .terms-nav a {
          color: #657086;
          font-size: 13px;
          font-weight: 800;
          text-decoration: none;
        }

        .terms-nav a:hover { color: #7655e8; }

        .terms-hero {
          padding: 65px 0 55px;
          background:
            radial-gradient(circle at 15% 20%, #e9e4ff 0, transparent 32%),
            radial-gradient(circle at 85% 80%, #e3f2ff 0, transparent 30%);
        }

        .terms-badge {
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

        .terms-hero h1 {
          margin: 20px 0 12px;
          font-size: clamp(36px, 6vw, 54px);
          font-weight: 950;
          letter-spacing: -2px;
        }

        .terms-hero h1 span { color: #7655e8; }

        .terms-hero p {
          max-width: 620px;
          color: #778196;
          font-size: 13px;
          line-height: 1.9;
        }

        .terms-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin: 25px 0;
          color: #7655e8;
          font-size: 12px;
          font-weight: 900;
          text-decoration: none;
        }

        .terms-notice {
          display: flex;
          gap: 14px;
          padding: 21px;
          margin-bottom: 35px;
          border: 1px solid #e5ddff;
          border-radius: 14px;
          background: #f2efff;
        }

        .terms-notice-icon {
          flex-shrink: 0;
          color: #7655e8;
        }

        .terms-notice strong {
          display: block;
          margin-bottom: 7px;
          color: #6043cb;
          font-size: 13px;
          font-weight: 950;
        }

        .terms-notice p {
          margin: 0;
          color: #77718f;
          font-size: 12px;
          line-height: 1.9;
        }

        .terms-section {
          display: flex;
          gap: 17px;
          padding: 25px 0;
          border-bottom: 1px solid #e8ebf1;
        }

        .terms-section-icon {
          width: 43px;
          height: 43px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          border-radius: 13px;
          background: #f0edff;
          color: #7655e8;
        }

        .terms-section-content {
          flex: 1;
          min-width: 0;
        }

        .terms-section h2 {
          margin: 3px 0 13px;
          font-size: 17px;
          font-weight: 950;
        }

        .terms-section p {
          margin: 0 0 10px;
          color: #788196;
          font-size: 12px;
          line-height: 1.95;
        }

        .terms-section p:last-child { margin-bottom: 0; }

        .terms-contact {
          margin-top: 45px;
          padding: 35px 25px;
          border-radius: 18px;
          background: linear-gradient(120deg, #211b43, #55418f);
          color: white;
          text-align: center;
        }

        .terms-contact h2 {
          margin: 12px 0 9px;
          font-size: 24px;
          font-weight: 950;
        }

        .terms-contact p {
          max-width: 520px;
          margin: auto;
          color: #d6d0ed;
          font-size: 12px;
          line-height: 1.9;
        }

        .terms-contact a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 20px;
          padding: 13px 20px;
          border-radius: 9px;
          background: white;
          color: #6546d4;
          font-size: 11px;
          font-weight: 950;
          text-decoration: none;
        }

        .terms-footer {
          margin-top: 65px;
          padding: 27px 0;
          border-top: 1px solid #e8ebf1;
          color: #8790a2;
          font-size: 11px;
          text-align: center;
        }

        @media (max-width: 560px) {
          .terms-header { min-height: 68px; }
          .terms-logo { font-size: 23px; }
          .terms-nav { gap: 12px; }
          .terms-nav a { font-size: 11px; }
          .terms-hero { padding: 48px 0; }
          .terms-section { gap: 12px; padding: 21px 0; }
          .terms-section-icon {
            width: 37px;
            height: 37px;
          }
          .terms-section h2 { font-size: 15px; }
          .terms-contact { padding: 30px 18px; }
        }
      `}</style>

      <header className="terms-container terms-header">
        <Link href="/" className="terms-logo">
          KAV<span>O</span>RA.
        </Link>

        <nav className="terms-nav">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <section className="terms-hero">
        <div className="terms-container">
          <div className="terms-badge">
            <FileText size={14} />
            PLATFORM GUIDELINES
          </div>

          <h1>
            Terms & <span>Conditions.</span>
          </h1>

          <p>
            Please read these terms carefully to understand the rules
            governing your access to and use of the KAVORA marketplace.
          </p>

          <p>Last updated: November 4, 2026</p>
        </div>
      </section>

      <div className="terms-container">
        <Link href="/" className="terms-back">
          <ArrowLeft size={15} />
          Back to home
        </Link>

        <div className="terms-notice">
          <div className="terms-notice-icon">
            <ShieldCheck size={24} />
          </div>

          <div>
            <strong>Important development notice</strong>

            <p>
              KAVORA is currently under development. Some services described
              in these terms are planned features and are not yet available
              for live transactions. These terms must be reviewed and
              finalised before the marketplace begins full commercial
              operations.
            </p>
          </div>
        </div>

        <section>
          {termsSections.map((section) => {
            const Icon = section.icon;

            return (
              <article className="terms-section" key={section.title}>
                <div className="terms-section-icon">
                  <Icon size={20} />
                </div>

                <div className="terms-section-content">
                  <h2>{section.title}</h2>

                  {section.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </article>
            );
          })}
        </section>

        <section className="terms-contact">
          <Mail size={30} />

          <h2>Need clarification?</h2>

          <p>
            If you have questions about these Terms and Conditions,
            contact the KAVORA team.
          </p>

          <a href="mailto:oyebanjioluwasegun128@gmail.com">
            Contact Our Team
            <ArrowRight size={15} />
          </a>
        </section>

        <footer className="terms-footer">
          <div className="terms-container">
            <p>
              © {new Date().getFullYear()} KAVORA Marketplace. All rights
              reserved.
            </p>

            <p>Created by Ayanfe Innovation Labs Limited.</p>
          </div>
        </footer>
      </div>
    </main>
  );
    }
