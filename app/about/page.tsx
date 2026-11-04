import Link from "next/link";
import {
  ArrowRight,
  ShoppingBag,
  Store,
  Users,
  Target,
  Eye,
  Heart,
  Sparkles,
  ShieldCheck,
  Globe,
  TrendingUp,
  MapPin,
} from "lucide-react";

const values = [
  {
    title: "Customer First",
    description:
      "We want shopping to feel simple, convenient and accessible for everyone.",
    icon: Heart,
  },
  {
    title: "Business Growth",
    description:
      "We aim to give businesses new opportunities to showcase their products and reach customers.",
    icon: TrendingUp,
  },
  {
    title: "Innovation",
    description:
      "We believe technology can make commerce more accessible and efficient.",
    icon: Sparkles,
  },
  {
    title: "Community",
    description:
      "We want to build a marketplace where customers and independent businesses can connect.",
    icon: Users,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fc] text-[#172033]">
      <style>{`
        * { box-sizing: border-box; }

        .about-container {
          width: min(1120px, 92%);
          margin: auto;
        }

        .about-header {
          min-height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          border-bottom: 1px solid #e8ebf1;
        }

        .about-logo {
          color: #172033;
          font-size: 27px;
          font-weight: 950;
          letter-spacing: -1.5px;
          text-decoration: none;
        }

        .about-logo span { color: #7655e8; }

        .about-nav {
          display: flex;
          align-items: center;
          gap: 23px;
        }

        .about-nav a {
          color: #657086;
          font-size: 13px;
          font-weight: 800;
          text-decoration: none;
        }

        .about-nav a:hover { color: #7655e8; }

        .about-hero {
          padding: 85px 0 80px;
          background:
            radial-gradient(circle at 15% 20%, #e9e4ff 0, transparent 32%),
            radial-gradient(circle at 85% 80%, #e3f2ff 0, transparent 30%);
          text-align: center;
        }

        .about-badge {
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

        .about-hero h1 {
          max-width: 850px;
          margin: 23px auto 17px;
          font-size: clamp(37px, 6vw, 65px);
          line-height: 1.08;
          font-weight: 950;
          letter-spacing: -3px;
        }

        .about-hero h1 span { color: #7655e8; }

        .about-hero p {
          max-width: 660px;
          margin: auto;
          color: #737d91;
          font-size: 15px;
          line-height: 1.9;
        }

        .about-buttons {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 28px;
        }

        .about-primary,
        .about-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 14px 21px;
          border-radius: 10px;
          font-size: 12px;
          font-weight: 900;
          text-decoration: none;
        }

        .about-primary {
          background: #7655e8;
          color: white;
        }

        .about-secondary {
          border: 1px solid #e0e3ed;
          background: white;
          color: #34405a;
        }

        .about-section { padding: 75px 0; }

        .about-section-heading {
          max-width: 680px;
          margin: 0 auto 40px;
          text-align: center;
        }

        .about-section-heading span {
          color: #7655e8;
          font-size: 11px;
          font-weight: 950;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .about-section-heading h2 {
          margin: 12px 0;
          font-size: clamp(27px, 4vw, 38px);
          font-weight: 950;
          letter-spacing: -1.5px;
        }

        .about-section-heading p {
          color: #7b8498;
          font-size: 13px;
          line-height: 1.9;
        }

        .about-story {
          display: grid;
          grid-template-columns: 1.1fr .9fr;
          gap: 45px;
          align-items: center;
        }

        .about-story h2 {
          margin: 0 0 18px;
          font-size: 32px;
          font-weight: 950;
          letter-spacing: -1.3px;
        }

        .about-story h2 span { color: #7655e8; }

        .about-story p {
          color: #727c91;
          font-size: 13px;
          line-height: 2;
        }

        .about-story-visual {
          min-height: 320px;
          display: grid;
          place-items: center;
          overflow: hidden;
          border-radius: 22px;
          background:
            radial-gradient(circle at 80% 20%, #b6a4ff, transparent 35%),
            linear-gradient(135deg, #251d4a, #604ba5);
        }

        .about-story-icon {
          width: 135px;
          height: 135px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255,255,255,.3);
          border-radius: 38px;
          background: rgba(255,255,255,.13);
          color: white;
          box-shadow: 0 20px 55px rgba(0,0,0,.15);
        }

        .about-story-icon svg {
          width: 65px;
          height: 65px;
        }

        .about-purpose {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-top: 45px;
        }

        .about-purpose-card {
          padding: 30px;
          border: 1px solid #e9ebf2;
          border-radius: 18px;
          background: white;
        }

        .about-purpose-icon {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          margin-bottom: 18px;
          border-radius: 14px;
          background: #f0edff;
          color: #7655e8;
        }

        .about-purpose-card h3 {
          margin: 0 0 12px;
          font-size: 19px;
          font-weight: 950;
        }

        .about-purpose-card p {
          margin: 0;
          color: #7b8498;
          font-size: 12px;
          line-height: 1.9;
        }

        .about-values {
          background: white;
        }

        .about-value-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 17px;
        }

        .about-value-card {
          padding: 24px;
          border: 1px solid #e9ebf2;
          border-radius: 16px;
          background: #fff;
        }

        .about-value-card h3 {
          margin: 16px 0 10px;
          font-size: 15px;
          font-weight: 950;
        }

        .about-value-card p {
          margin: 0;
          color: #80899c;
          font-size: 11px;
          line-height: 1.9;
        }

        .about-value-icon {
          width: 45px;
          height: 45px;
          display: grid;
          place-items: center;
          border-radius: 13px;
          background: #f0edff;
          color: #7655e8;
        }

        .about-vision {
          padding: 65px 0;
          background: #1b1734;
          color: white;
        }

        .about-vision-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
        }

        .about-vision-card {
          padding: 30px;
          border: 1px solid rgba(255,255,255,.13);
          border-radius: 18px;
          background: rgba(255,255,255,.055);
        }

        .about-vision-card svg {
          color: #a891ff;
        }

        .about-vision-card h3 {
          margin: 18px 0 12px;
          font-size: 22px;
          font-weight: 950;
        }

        .about-vision-card p {
          color: #c5bfdc;
          font-size: 13px;
          line-height: 1.9;
        }

        .about-parent {
          padding: 65px 0;
          text-align: center;
        }

        .about-parent-box {
          max-width: 800px;
          margin: auto;
          padding: 40px;
          border: 1px solid #e7e3fa;
          border-radius: 20px;
          background: white;
        }

        .about-parent-box > svg {
          color: #7655e8;
        }

        .about-parent-box h2 {
          margin: 17px 0 10px;
          font-size: 25px;
          font-weight: 950;
        }

        .about-parent-box p {
          color: #7b8498;
          font-size: 13px;
          line-height: 1.9;
        }

        .about-location {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-top: 12px;
          color: #7655e8;
          font-size: 12px;
          font-weight: 900;
        }

        .about-cta {
          padding: 55px 25px;
          border-radius: 21px;
          background: linear-gradient(120deg, #7655e8, #4d399f);
          color: white;
          text-align: center;
        }

        .about-cta h2 {
          margin: 0 0 12px;
          font-size: clamp(25px, 4vw, 36px);
          font-weight: 950;
        }

        .about-cta p {
          max-width: 590px;
          margin: auto;
          color: #e4dcff;
          font-size: 13px;
          line-height: 1.9;
        }

        .about-cta a {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          margin-top: 23px;
          padding: 14px 22px;
          border-radius: 10px;
          background: white;
          color: #6546d4;
          font-size: 12px;
          font-weight: 950;
          text-decoration: none;
        }

        .about-footer {
          margin-top: 70px;
          padding: 28px 0;
          border-top: 1px solid #e8ebf1;
          color: #8790a2;
          font-size: 11px;
          text-align: center;
        }

        @media (max-width: 850px) {
          .about-value-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .about-story { gap: 25px; }
        }

        @media (max-width: 600px) {
          .about-nav { gap: 12px; }
          .about-nav a { font-size: 11px; }
          .about-logo { font-size: 23px; }
          .about-hero { padding: 60px 0; }
          .about-story,
          .about-purpose,
          .about-vision-grid {
            grid-template-columns: 1fr;
          }

          .about-story-visual { min-height: 240px; }
          .about-value-grid { grid-template-columns: 1fr 1fr; }
          .about-purpose-card { padding: 24px; }
          .about-parent-box { padding: 27px 20px; }
        }

        @media (max-width: 380px) {
          .about-value-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <header className="about-container about-header">
        <Link href="/" className="about-logo">
          KAV<span>O</span>RA.
        </Link>

        <nav className="about-nav">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/sellers">Shops</Link>
          <Link href="/about">About</Link>
        </nav>
      </header>

      <section className="about-hero">
        <div className="about-container">
          <div className="about-badge">
            <Sparkles size={14} />
            GET TO KNOW KAVORA
          </div>

          <h1>
            More than a marketplace. <span>A place for possibilities.</span>
          </h1>

          <p>
            KAVORA is being built to bring customers and businesses closer
            together through a convenient digital shopping experience.
            Discover products, explore independent shops and find new
            opportunities to grow.
          </p>

          <div className="about-buttons">
            <Link href="/products" className="about-primary">
              Explore Marketplace
              <ArrowRight size={15} />
            </Link>

            <Link href="/sellers" className="about-secondary">
              Discover Shops
            </Link>
          </div>
        </div>
      </section>

      <section className="about-container about-section">
        <div className="about-story">
          <div>
            <span className="about-badge">OUR STORY</span>

            <h2>
              Making commerce more <span>accessible.</span>
            </h2>

            <p>
              KAVORA was conceived as a digital marketplace where independent
              businesses can present their products to a wider audience and
              customers can discover different shops in one place.
            </p>

            <p>
              We recognise that many small businesses have valuable products
              but limited access to digital tools and broader markets. At the
              same time, customers want easier ways to discover products and
              sellers.
            </p>

            <p>
              Our goal is to build a platform that helps bridge that gap,
              starting with businesses in our local community and growing
              towards a wider Nigerian marketplace.
            </p>
          </div>

          <div className="about-story-visual">
            <div className="about-story-icon">
              <ShoppingBag />
            </div>
          </div>
        </div>

        <div className="about-purpose">
          <article className="about-purpose-card">
            <div className="about-purpose-icon">
              <Target size={23} />
            </div>

            <h3>Our Mission</h3>

            <p>
              To make digital commerce more accessible by creating a platform
              where customers can discover products and businesses can
              showcase their offerings.
            </p>
          </article>

          <article className="about-purpose-card">
            <div className="about-purpose-icon">
              <Eye size={23} />
            </div>

            <h3>Our Vision</h3>

            <p>
              To grow into a trusted marketplace connecting independent
              businesses and customers across Nigeria and, eventually, beyond.
            </p>
          </article>
        </div>
      </section>

      <section className="about-values">
        <div className="about-container about-section">
          <div className="about-section-heading">
            <span>WHAT GUIDES US</span>
            <h2>Our Core Values</h2>
            <p>
              The principles shaping the marketplace we are working to build.
            </p>
          </div>

          <div className="about-value-grid">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article className="about-value-card" key={value.title}>
                  <div className="about-value-icon">
                    <Icon size={22} />
                  </div>

                  <h3>{value.title}</h3>

                  <p>{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="about-vision">
        <div className="about-container about-vision-grid">
          <article className="about-vision-card">
            <Store size={31} />
            <h3>For Businesses</h3>
            <p>
              KAVORA aims to provide businesses with digital storefronts,
              product discovery opportunities and tools to manage their
              marketplace activities.
            </p>
          </article>

          <article className="about-vision-card">
            <ShoppingBag size={31} />
            <h3>For Customers</h3>
            <p>
              Customers will be able to explore different shops, discover
              products and access a more organised online shopping experience.
            </p>
          </article>
        </div>
      </section>

      <section className="about-container about-parent">
        <div className="about-parent-box">
          <Globe size={38} />

          <h2>Built by Ayanfe Innovation Labs Limited</h2>

          <p>
            KAVORA is a product initiative of Ayanfe Innovation Labs Limited,
            a technology-focused company committed to developing digital
            products and solutions that address everyday needs.
          </p>

          <div className="about-location">
            <MapPin size={15} />
            Building from Osun State, Nigeria
          </div>
        </div>
      </section>

      <section className="about-container">
        <div className="about-cta">
          <h2>Discover a better way to connect.</h2>

          <p>
            Explore KAVORA, discover independent businesses and become part
            of a growing marketplace.
          </p>

          <Link href="/products">
            Start Exploring
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <footer className="about-footer">
        <div className="about-container">
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
