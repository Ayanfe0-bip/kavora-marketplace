import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  HelpCircle,
  ShoppingBag,
  Store,
  CreditCard,
  Truck,
  ShieldCheck,
  MessageCircle,
  ChevronDown,
  Users,
  Sparkles,
} from "lucide-react";

const faqGroups = [
  {
    title: "About KAVORA",
    icon: Sparkles,
    questions: [
      {
        question: "What is KAVORA?",
        answer:
          "KAVORA is a multi-vendor marketplace being developed to connect customers with independent businesses. Customers will be able to discover products and explore different shops through one digital platform.",
      },
      {
        question: "Who operates KAVORA?",
        answer:
          "KAVORA is a product initiative of Ayanfe Innovation Labs Limited, a technology-focused company developing digital products and solutions.",
      },
      {
        question: "Where is KAVORA available?",
        answer:
          "KAVORA is being developed in Nigeria, with an initial focus on businesses around Ede and Osogbo in Osun State. The longer-term goal is to expand across Nigeria.",
      },
      {
        question: "Is KAVORA currently fully operational?",
        answer:
          "KAVORA is being developed in stages. Some pages currently display demonstration products and sample information. Features such as customer accounts, vendor management, checkout and payments will be introduced as development progresses.",
      },
    ],
  },
  {
    title: "Shopping and Products",
    icon: ShoppingBag,
    questions: [
      {
        question: "How can I find products?",
        answer:
          "You can explore the marketplace, browse product categories, visit seller storefronts and use the search page to discover listed products.",
      },
      {
        question: "Are all displayed products available for purchase?",
        answer:
          "Some products currently displayed are demonstration listings used during development. Product availability, pricing and purchasing will need to be confirmed when the live catalogue and ordering system are introduced.",
      },
      {
        question: "Can I shop from different sellers?",
        answer:
          "That is one of the main goals of KAVORA. The platform is being designed to bring multiple independent sellers together so customers can discover products from different businesses.",
      },
      {
        question: "Can I return or exchange a product?",
        answer:
          "A formal returns and exchanges policy will be published before the marketplace begins processing customer orders. Customers should review the applicable policy before making a purchase.",
      },
    ],
  },
  {
    title: "Vendor and Business Questions",
    icon: Store,
    questions: [
      {
        question: "Who can become a KAVORA vendor?",
        answer:
          "Businesses and independent sellers offering legitimate products may be able to apply to join KAVORA, subject to the platform's onboarding requirements and review process.",
      },
      {
        question: "How can I register my business?",
        answer:
          "Vendor registration is planned as part of the account and vendor dashboard development phase. For now, interested businesses can contact the KAVORA team through the Contact page.",
      },
      {
        question: "Will vendors have their own online shops?",
        answer:
          "Yes. The planned marketplace structure includes individual digital storefronts where each participating vendor can showcase products and business information.",
      },
      {
        question: "Will vendors manage their own products?",
        answer:
          "The planned vendor dashboard will include product management and inventory tools. These features are still under development.",
      },
    ],
  },
  {
    title: "Payments and Delivery",
    icon: CreditCard,
    questions: [
      {
        question: "Which payment methods will KAVORA support?",
        answer:
          "Payment integration is planned for a later development phase. Supported payment methods will be announced after the payment system has been implemented and tested.",
      },
      {
        question: "Can I pay vendors directly?",
        answer:
          "The final payment and settlement arrangements are still being designed. KAVORA will publish clear payment instructions before accepting live orders.",
      },
      {
        question: "Will KAVORA offer nationwide delivery?",
        answer:
          "The platform is being designed with delivery management in mind. Delivery coverage, available logistics partners, charges and estimated delivery times will be announced as the service develops.",
      },
      {
        question: "Can I track my order?",
        answer:
          "Order tracking is a planned feature. It will become available when the order and delivery management systems are implemented.",
      },
    ],
  },
  {
    title: "Accounts and Support",
    icon: Users,
    questions: [
      {
        question: "Will I need an account to shop?",
        answer:
          "Customer accounts are planned as part of the marketplace development. The final account requirements will be explained when registration becomes available.",
      },
      {
        question: "How can I contact KAVORA?",
        answer:
          "You can visit the Contact page to find the available email and WhatsApp contact details for enquiries.",
      },
      {
        question: "How can my business partner with KAVORA?",
        answer:
          "Businesses, service providers and potential partners can contact the team through the Contact page to discuss collaboration opportunities.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fc] text-[#172033]">
      <style>{`
        * { box-sizing: border-box; }

        .faq-container {
          width: min(1000px, 92%);
          margin: auto;
        }

        .faq-header {
          min-height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          border-bottom: 1px solid #e8ebf1;
        }

        .faq-logo {
          color: #172033;
          font-size: 27px;
          font-weight: 950;
          letter-spacing: -1.5px;
          text-decoration: none;
        }

        .faq-logo span { color: #7655e8; }

        .faq-nav {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .faq-nav a {
          color: #657086;
          font-size: 13px;
          font-weight: 800;
          text-decoration: none;
        }

        .faq-nav a:hover { color: #7655e8; }

        .faq-hero {
          padding: 75px 0 65px;
          background:
            radial-gradient(circle at 15% 20%, #e9e4ff 0, transparent 32%),
            radial-gradient(circle at 85% 80%, #e3f2ff 0, transparent 30%);
          text-align: center;
        }

        .faq-badge {
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

        .faq-hero h1 {
          margin: 22px auto 15px;
          font-size: clamp(37px, 6vw, 58px);
          font-weight: 950;
          letter-spacing: -2.5px;
        }

        .faq-hero h1 span { color: #7655e8; }

        .faq-hero p {
          max-width: 600px;
          margin: auto;
          color: #778196;
          font-size: 14px;
          line-height: 1.9;
        }

        .faq-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin: 25px 0;
          color: #7655e8;
          font-size: 12px;
          font-weight: 900;
          text-decoration: none;
        }

        .faq-content {
          padding: 15px 0 80px;
        }

        .faq-intro {
          margin-bottom: 35px;
          padding: 25px;
          border: 1px solid #e7e1ff;
          border-radius: 15px;
          background: #f2efff;
        }

        .faq-intro strong {
          display: block;
          margin-bottom: 8px;
          color: #6043cb;
          font-size: 14px;
          font-weight: 950;
        }

        .faq-intro p {
          margin: 0;
          color: #77718f;
          font-size: 12px;
          line-height: 1.9;
        }

        .faq-group {
          margin-bottom: 30px;
        }

        .faq-group-heading {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 15px;
        }

        .faq-group-icon {
          width: 43px;
          height: 43px;
          display: grid;
          place-items: center;
          border-radius: 13px;
          background: #f0edff;
          color: #7655e8;
        }

        .faq-group-heading h2 {
          margin: 0;
          font-size: 19px;
          font-weight: 950;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 11px;
        }

        .faq-item {
          overflow: hidden;
          border: 1px solid #e8eaf1;
          border-radius: 13px;
          background: white;
        }

        .faq-item summary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          padding: 19px 21px;
          color: #263149;
          font-size: 13px;
          font-weight: 900;
          cursor: pointer;
          list-style: none;
        }

        .faq-item summary::-webkit-details-marker {
          display: none;
        }

        .faq-item summary::after {
          content: "+";
          flex-shrink: 0;
          color: #7655e8;
          font-size: 22px;
          font-weight: 500;
        }

        .faq-item[open] summary::after {
          content: "−";
        }

        .faq-answer {
          padding: 0 21px 20px;
          color: #7b8498;
          font-size: 12px;
          line-height: 1.9;
        }

        .faq-contact {
          padding: 45px 25px;
          border-radius: 19px;
          background: linear-gradient(120deg, #211b43, #55418f);
          color: white;
          text-align: center;
        }

        .faq-contact > svg {
          color: #c4b5fd;
        }

        .faq-contact h2 {
          margin: 15px 0 10px;
          font-size: 26px;
          font-weight: 950;
        }

        .faq-contact p {
          max-width: 540px;
          margin: auto;
          color: #d6d0ed;
          font-size: 12px;
          line-height: 1.9;
        }

        .faq-contact a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 22px;
          padding: 13px 21px;
          border-radius: 9px;
          background: white;
          color: #6546d4;
          font-size: 11px;
          font-weight: 950;
          text-decoration: none;
        }

        .faq-footer {
          margin-top: 70px;
          padding: 28px 0;
          border-top: 1px solid #e8ebf1;
          color: #8790a2;
          font-size: 11px;
          text-align: center;
        }

        @media (max-width: 560px) {
          .faq-header { min-height: 68px; }
          .faq-logo { font-size: 23px; }
          .faq-nav { gap: 12px; }
          .faq-nav a { font-size: 11px; }
          .faq-hero { padding: 55px 0; }
          .faq-intro { padding: 20px; }
          .faq-item summary { padding: 17px; }
          .faq-answer { padding: 0 17px 18px; }
          .faq-contact { padding: 35px 20px; }
        }
      `}</style>

      <header className="faq-container faq-header">
        <Link href="/" className="faq-logo">
          KAV<span>O</span>RA.
        </Link>

        <nav className="faq-nav">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/sellers">Shops</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <section className="faq-hero">
        <div className="faq-container">
          <div className="faq-badge">
            <HelpCircle size={14} />
            HELP CENTRE
          </div>

          <h1>
            Frequently Asked <span>Questions.</span>
          </h1>

          <p>
            Find helpful answers about shopping, vendors, payments, delivery
            and how KAVORA is being developed.
          </p>
        </div>
      </section>

      <div className="faq-container">
        <Link href="/" className="faq-back">
          <ArrowLeft size={15} />
          Back to home
        </Link>

        <section className="faq-content">
          <div className="faq-intro">
            <strong>A quick note about KAVORA</strong>

            <p>
              KAVORA is still being developed. Some features described here
              are planned for future releases and are not yet available for
              live transactions. We will update this page as new services
              become operational.
            </p>
          </div>

          {faqGroups.map((group) => {
            const Icon = group.icon;

            return (
              <section className="faq-group" key={group.title}>
                <div className="faq-group-heading">
                  <div className="faq-group-icon">
                    <Icon size={21} />
                  </div>

                  <h2>{group.title}</h2>
                </div>

                <div className="faq-list">
                  {group.questions.map((item) => (
                    <details className="faq-item" key={item.question}>
                      <summary>{item.question}</summary>

                      <div className="faq-answer">
                        {item.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            );
          })}
        </section>

        <section className="faq-contact">
          <MessageCircle size={35} />

          <h2>Still have questions?</h2>

          <p>
  Can&apos;t find the answer you&apos;re looking for? Contact the KAVORA
  team and we&apos;ll be happy to hear from you.
</p>

          <Link href="/contact">
            Contact Our Team
            <ArrowRight size={15} />
          </Link>
        </section>
      </div>

      <footer className="faq-footer">
        <div className="faq-container">
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
