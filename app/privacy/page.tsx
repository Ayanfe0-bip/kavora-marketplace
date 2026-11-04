import Link from "next/link";
import {
  ArrowLeft,
  ShieldCheck,
  LockKeyhole,
  Database,
  Eye,
  UserCheck,
  Mail,
  ArrowRight,
} from "lucide-react";

const sections = [
  {
    icon: Database,
    title: "1. Information We May Collect",
    content: [
      "When KAVORA's account and marketplace services become operational, we may collect information such as your name, email address, phone number, delivery address and account details.",
      "Vendors may also be asked to provide business names, contact details, product information and other information needed to operate their storefronts.",
      "Technical information such as browser type, device information and basic usage data may also be collected to help maintain and improve the platform.",
    ],
  },
  {
    icon: Eye,
    title: "2. How We May Use Your Information",
    content: [
      "Information may be used to create and manage customer and vendor accounts.",
      "It may help us operate marketplace features, improve user experience, respond to enquiries, provide customer support and communicate important service updates.",
      "Where necessary, information may also be used to protect the platform, investigate suspicious activity and comply with applicable legal requirements.",
    ],
  },
  {
    icon: UserCheck,
    title: "3. Customer and Vendor Information",
    content: [
      "Customers may be required to provide relevant information when creating accounts or placing orders once those features are available.",
      "Vendors may provide business and product information for their storefronts. Some vendor information may be publicly visible to marketplace visitors.",
      "Users should avoid publishing sensitive personal information in public product descriptions, reviews or other marketplace content.",
    ],
  },
  {
    icon: LockKeyhole,
    title: "4. Data Security",
    content: [
      "We intend to use appropriate technical and organisational measures to protect information against unauthorised access, loss, misuse or disclosure.",
      "No online platform or electronic storage system can guarantee absolute security. Users should protect their account credentials and avoid sharing passwords.",
      "Security controls will be reviewed as KAVORA's infrastructure and services develop.",
    ],
  },
  {
    icon: Database,
    title: "5. Information Sharing",
    content: [
      "We do not intend to sell users' personal information.",
      "Information may be shared with service providers when necessary to operate features such as hosting, authentication, payment processing, customer communications or delivery.",
      "Information may also be disclosed where required by law or where reasonably necessary to protect users, the platform or other parties.",
    ],
  },
  {
    icon: Eye,
    title: "6. Cookies and Similar Technologies",
    content: [
      "KAVORA may use cookies or similar technologies to support essential website functions, remember preferences, maintain sessions and understand how visitors use the platform.",
      "Details about specific cookies and available controls will be provided as these technologies are implemented.",
    ],
  },
  {
    icon: UserCheck,
    title: "7. Your Privacy Rights",
    content: [
      "Subject to applicable law, users may have rights to request access to their personal information, correct inaccurate information or request deletion where appropriate.",
      "Users may also raise concerns about how their information is collected or used.",
      "Some information may need to be retained where required by law, for legitimate security purposes or to resolve disputes.",
    ],
  },
  {
    icon: LockKeyhole,
    title: "8. Data Retention",
    content: [
      "We intend to retain personal information only for as long as reasonably necessary for the purposes for which it was collected, including operational, security and legal requirements.",
      "Specific retention periods will be established as KAVORA's services and legal obligations are finalised.",
    ],
  },
  {
    icon: Database,
    title: "9. Third-Party Services",
    content: [
      "KAVORA may rely on external service providers for website hosting, database management, authentication, payments, analytics and communications.",
      "These providers may process information according to their own privacy policies and applicable agreements.",
      "We will identify relevant providers and update this policy as integrations are introduced.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "10. Children's Privacy",
    content: [
      "KAVORA is not designed to knowingly collect personal information from children in violation of applicable law.",
      "Where a child is legally required to have parental or guardian consent to use a service, the relevant requirements must be followed.",
    ],
  },
  {
    icon: UserCheck,
    title: "11. Changes to This Policy",
    content: [
      "We may update this Privacy Policy as KAVORA develops, introduces new features or responds to changes in applicable laws.",
      "The latest version will be published on this page. Users should review it periodically.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fc] text-[#172033]">
      <style>{`
        * { box-sizing: border-box; }

        .privacy-container {
          width: min(950px, 92%);
          margin: auto;
        }

        .privacy-header {
          min-height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          border-bottom: 1px solid #e8ebf1;
        }

        .privacy-logo {
          color: #172033;
          font-size: 27px;
          font-weight: 950;
          letter-spacing: -1.5px;
          text-decoration: none;
        }

        .privacy-logo span { color: #7655e8; }

        .privacy-nav {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .privacy-nav a {
          color: #657086;
          font-size: 13px;
          font-weight: 800;
          text-decoration: none;
        }

        .privacy-nav a:hover { color: #7655e8; }

        .privacy-hero {
          padding: 65px 0 55px;
          background:
            radial-gradient(circle at 15% 20%, #e9e4ff 0, transparent 32%),
            radial-gradient(circle at 85% 80%, #e3f2ff 0, transparent 30%);
        }

        .privacy-badge {
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

        .privacy-hero h1 {
          margin: 20px 0 12px;
          font-size: clamp(36px, 6vw, 54px);
          font-weight: 950;
          letter-spacing: -2px;
        }

        .privacy-hero h1 span { color: #7655e8; }

        .privacy-hero p {
          max-width: 620px;
          color: #778196;
          font-size: 13px;
          line-height: 1.9;
        }

        .privacy-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin: 25px 0;
          color: #7655e8;
          font-size: 12px;
          font-weight: 900;
          text-decoration: none;
        }

        .privacy-notice {
          display: flex;
          gap: 14px;
          padding: 21px;
          margin-bottom: 35px;
          border: 1px solid #e5ddff;
          border-radius: 14px;
          background: #f2efff;
        }

        .privacy-notice-icon {
          flex-shrink: 0;
          color: #7655e8;
        }

        .privacy-notice strong {
          display: block;
          margin-bottom: 7px;
          color: #6043cb;
          font-size: 13px;
          font-weight: 950;
        }

        .privacy-notice p {
          margin: 0;
          color: #77718f;
          font-size: 12px;
          line-height: 1.9;
        }

        .privacy-section {
          display: flex;
          gap: 17px;
          padding: 25px 0;
          border-bottom: 1px solid #e8ebf1;
        }

        .privacy-section-icon {
          width: 43px;
          height: 43px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          border-radius: 13px;
          background: #f0edff;
          color: #7655e8;
        }

        .privacy-section-content {
          flex: 1;
          min-width: 0;
        }

        .privacy-section h2 {
          margin: 3px 0 13px;
          font-size: 17px;
          font-weight: 950;
        }

        .privacy-section p {
          margin: 0 0 10px;
          color: #788196;
          font-size: 12px;
          line-height: 1.95;
        }

        .privacy-section p:last-child { margin-bottom: 0; }

        .privacy-contact {
          margin-top: 45px;
          padding: 35px 25px;
          border-radius: 18px;
          background: linear-gradient(120deg, #211b43, #55418f);
          color: white;
          text-align: center;
        }

        .privacy-contact h2 {
          margin: 12px 0 9px;
          font-size: 24px;
          font-weight: 950;
        }

        .privacy-contact p {
          max-width: 520px;
          margin: auto;
          color: #d6d0ed;
          font-size: 12px;
          line-height: 1.9;
        }

        .privacy-contact a {
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

        .privacy-footer {
          margin-top: 65px;
          padding: 27px 0;
          border-top: 1px solid #e8ebf1;
          color: #8790a2;
          font-size: 11px;
          text-align: center;
        }

        @media (max-width: 560px) {
          .privacy-header { min-height: 68px; }
          .privacy-logo { font-size: 23px; }
          .privacy-nav { gap: 12px; }
          .privacy-nav a { font-size: 11px; }
          .privacy-hero { padding: 48px 0; }
          .privacy-section { gap: 12px; padding: 21px 0; }
          .privacy-section-icon {
            width: 37px;
            height: 37px;
          }
          .privacy-section h2 { font-size: 15px; }
          .privacy-contact { padding: 30px 18px; }
        }
      `}</style>

      <header className="privacy-container privacy-header">
        <Link href="/" className="privacy-logo">
          KAV<span>O</span>RA.
        </Link>

        <nav className="privacy-nav">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <section className="privacy-hero">
        <div className="privacy-container">
          <div className="privacy-badge">
            <ShieldCheck size={14} />
            YOUR PRIVACY MATTERS
          </div>

          <h1>
            Privacy <span>Policy.</span>
          </h1>

          <p>
            This policy explains how KAVORA intends to handle personal
            information as our marketplace services are developed.
          </p>

          <p>
            Last updated: November 4, 2026
          </p>
        </div>
      </section>

      <div className="privacy-container">
        <Link href="/" className="privacy-back">
          <ArrowLeft size={15} />
          Back to home
        </Link>

        <div className="privacy-notice">
          <div className="privacy-notice-icon">
            <ShieldCheck size={24} />
          </div>

          <div>
            <strong>Important development notice</strong>

            <p>
              KAVORA is currently under development. This document describes
              intended privacy practices and is not a confirmation that all
              listed systems or processes are already operational. It must
              be reviewed and finalised before live customer registration
              and transactions begin.
            </p>
          </div>
        </div>

        <section>
          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <article className="privacy-section" key={section.title}>
                <div className="privacy-section-icon">
                  <Icon size={20} />
                </div>

                <div className="privacy-section-content">
                  <h2>{section.title}</h2>

                  {section.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </article>
            );
          })}
        </section>

        <section className="privacy-contact">
          <Mail size={30} />

          <h2>Privacy Questions?</h2>

          <p>
            If you have questions or concerns about privacy on KAVORA,
            please contact our team.
          </p>

          <a href="mailto:oyebanjioluwasegun128@gmail.com">
            Contact Privacy Support
            <ArrowRight size={15} />
          </a>
        </section>

        <footer className="privacy-footer">
          <div className="privacy-container">
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
