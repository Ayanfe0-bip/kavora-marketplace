import Link from "next/link";
import {
  ArrowRight,
  Search,
  Store,
  MapPin,
  ShoppingBag,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const sellers = [
  {
    name: "Ekundayo Beauty & Lifestyle",
    slug: "ekundayo-beauty-lifestyle",
    category: "Beauty & Personal Care",
    location: "Ede, Osun State",
    description:
      "Discover wigs, weavons, human hair, hair treatments, accessories and selected lifestyle products.",
    initials: "EB",
    featured: true,
    status: "First KAVORA seller",
  },
];

const categories = [
  "All Sellers",
  "Fashion",
  "Beauty",
  "Electronics",
  "Home & Living",
  "Food & Groceries",
  "Lifestyle",
];

export default function SellersPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fc] text-[#172033]">
      <style>{`
        * { box-sizing: border-box; }

        .seller-container {
          width: min(1120px, 92%);
          margin: auto;
        }

        .seller-header {
          min-height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          border-bottom: 1px solid #e8ebf1;
        }

        .seller-logo {
          color: #172033;
          font-size: 27px;
          font-weight: 950;
          letter-spacing: -1.5px;
          text-decoration: none;
        }

        .seller-logo span { color: #7655e8; }

        .seller-nav {
          display: flex;
          align-items: center;
          gap: 25px;
        }

        .seller-nav a {
          color: #596174;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
        }

        .seller-nav a:hover { color: #7655e8; }

        .seller-hero {
          padding: 75px 0 55px;
          text-align: center;
          background:
            radial-gradient(circle at 15% 20%, #e9e4ff 0, transparent 32%),
            radial-gradient(circle at 85% 80%, #e3f2ff 0, transparent 30%);
        }

        .seller-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 15px;
          border: 1px solid #e3dcff;
          border-radius: 30px;
          background: white;
          color: #7655e8;
          font-size: 12px;
          font-weight: 800;
        }

        .seller-hero h1 {
          max-width: 760px;
          margin: 22px auto 15px;
          font-size: clamp(36px, 6vw, 61px);
          line-height: 1.08;
          letter-spacing: -2.8px;
          font-weight: 950;
        }

        .seller-hero h1 span { color: #7655e8; }

        .seller-hero p {
          max-width: 580px;
          margin: auto;
          color: #687187;
          font-size: 16px;
          line-height: 1.8;
        }

        .seller-search {
          display: flex;
          align-items: center;
          gap: 12px;
          max-width: 570px;
          margin: 30px auto 0;
          padding: 8px 10px 8px 17px;
          border: 1px solid #e5e8f0;
          border-radius: 14px;
          background: white;
          box-shadow: 0 12px 35px rgba(25, 35, 65, .06);
        }

        .seller-search input {
          width: 100%;
          min-width: 0;
          border: 0;
          outline: none;
          color: #172033;
          font-size: 14px;
        }

        .seller-search button {
          padding: 12px 19px;
          border: 0;
          border-radius: 9px;
          background: #7655e8;
          color: white;
          font-weight: 800;
          cursor: pointer;
        }

        .seller-section { padding: 55px 0 85px; }

        .seller-section-heading {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 15px;
          margin-bottom: 25px;
        }

        .seller-section-heading h2 {
          margin: 0 0 8px;
          font-size: 28px;
          font-weight: 900;
          letter-spacing: -1px;
        }

        .seller-section-heading p {
          margin: 0;
          color: #788195;
          font-size: 14px;
        }

        .seller-count {
          color: #7655e8;
          font-size: 13px;
          font-weight: 800;
        }

        .seller-categories {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding-bottom: 18px;
          scrollbar-width: none;
        }

        .seller-categories::-webkit-scrollbar { display: none; }

        .seller-category {
          flex-shrink: 0;
          padding: 11px 17px;
          border: 1px solid #e7e9f0;
          border-radius: 30px;
          background: white;
          color: #657086;
          font-size: 12px;
          font-weight: 800;
          cursor: pointer;
        }

        .seller-category.active {
          border-color: #7655e8;
          background: #7655e8;
          color: white;
        }

        .seller-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }

        .seller-card {
          overflow: hidden;
          border: 1px solid #e9ebf2;
          border-radius: 19px;
          background: white;
          box-shadow: 0 8px 30px rgba(30, 40, 70, .035);
        }

        .seller-card-top {
          min-height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background: linear-gradient(135deg, #eeeaff, #e5f1ff);
        }

        .seller-avatar {
          width: 88px;
          height: 88px;
          display: grid;
          place-items: center;
          border: 5px solid rgba(255,255,255,.8);
          border-radius: 25px;
          background: #7655e8;
          color: white;
          font-size: 27px;
          font-weight: 950;
          box-shadow: 0 12px 25px rgba(90, 65, 190, .2);
        }

        .seller-featured {
          position: absolute;
          top: 15px;
          left: 15px;
          padding: 8px 11px;
          border-radius: 20px;
          background: white;
          color: #7655e8;
          font-size: 10px;
          font-weight: 900;
        }

        .seller-card-body { padding: 23px; }

        .seller-status {
          color: #7655e8;
          font-size: 11px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: .5px;
        }

        .seller-card h3 {
          margin: 9px 0;
          font-size: 20px;
          font-weight: 900;
          letter-spacing: -.5px;
        }

        .seller-description {
          min-height: 68px;
          color: #778095;
          font-size: 13px;
          line-height: 1.8;
        }

        .seller-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin: 17px 0;
          color: #697389;
          font-size: 12px;
          font-weight: 700;
        }

        .seller-meta span {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .seller-view {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 14px;
          border-radius: 10px;
          background: #7655e8;
          color: white;
          font-size: 13px;
          font-weight: 900;
          text-decoration: none;
        }

        .seller-view:hover { background: #6242d1; }

        .seller-empty {
          padding: 50px 20px;
          border: 1px dashed #d9dce7;
          border-radius: 16px;
          text-align: center;
          color: #778095;
        }

        .seller-cta {
          margin-top: 60px;
          padding: 38px;
          border-radius: 20px;
          background: #17152c;
          color: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
        }

        .seller-cta h2 {
          margin: 0 0 10px;
          font-size: 25px;
          font-weight: 900;
        }

        .seller-cta p {
          margin: 0;
          color: #c2bfd5;
          font-size: 13px;
          line-height: 1.7;
        }

        .seller-cta a {
          flex-shrink: 0;
          padding: 14px 20px;
          border-radius: 10px;
          background: #9a7cff;
          color: white;
          font-size: 12px;
          font-weight: 900;
          text-decoration: none;
        }

        .seller-footer {
          padding: 28px 0;
          border-top: 1px solid #e8ebf1;
          color: #8790a2;
          font-size: 12px;
          text-align: center;
        }

        @media (max-width: 650px) {
          .seller-nav { gap: 13px; }
          .seller-nav a { font-size: 12px; }
          .seller-logo { font-size: 23px; }
          .seller-hero { padding: 55px 0 40px; }
          .seller-grid { grid-template-columns: 1fr; }
          .seller-section-heading { align-items: start; flex-direction: column; }
          .seller-cta { align-items: start; flex-direction: column; padding: 27px; }
          .seller-cta a { width: 100%; text-align: center; }
        }

        @media (max-width: 380px) {
          .seller-nav { gap: 9px; }
          .seller-nav a { font-size: 11px; }
          .seller-search button { padding: 11px 13px; }
        }
      `}</style>

      <header className="seller-container seller-header">
        <Link href="/" className="seller-logo">
          KAV<span>O</span>RA.
        </Link>

        <nav className="seller-nav">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/sellers">Shops</Link>
        </nav>
      </header>

      <section className="seller-hero">
        <div className="seller-container">
          <div className="seller-badge">
            <Sparkles size={14} />
            DISCOVER INDEPENDENT BUSINESSES
          </div>

          <h1>
            Meet the shops behind <span>your next find.</span>
          </h1>

          <p>
            Discover businesses, explore their collections and find products
            from sellers on the KAVORA marketplace.
          </p>

          <form className="seller-search" action="/sellers" method="GET">
            <Search size={19} color="#8991a3" />
            <input
              type="search"
              name="q"
              placeholder="Search shops and businesses..."
              aria-label="Search shops and businesses"
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </section>

      <section className="seller-container seller-section">
        <div className="seller-section-heading">
          <div>
            <h2>Explore our shops</h2>
            <p>Find businesses and discover what they have to offer.</p>
          </div>

          <span className="seller-count">1 shop listed</span>
        </div>

        <div className="seller-categories">
          {categories.map((category, index) => (
            <button
              className={`seller-category ${index === 0 ? "active" : ""}`}
              key={category}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="seller-grid">
          {sellers.map((seller) => (
            <article className="seller-card" key={seller.slug}>
              <div className="seller-card-top">
                <span className="seller-featured">FEATURED SHOP</span>
                <div className="seller-avatar">{seller.initials}</div>
              </div>

              <div className="seller-card-body">
                <span className="seller-status">{seller.status}</span>

                <h3>{seller.name}</h3>

                <p className="seller-description">
                  {seller.description}
                </p>

                <div className="seller-meta">
                  <span>
                    <Store size={15} />
                    {seller.category}
                  </span>

                  <span>
                    <MapPin size={15} />
                    {seller.location}
                  </span>
                </div>

                <Link
                  href={`/sellers/${seller.slug}`}
                  className="seller-view"
                >
                  Visit Shop
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="seller-cta">
          <div>
            <h2>Own a business? Grow with KAVORA.</h2>
            <p>
              Bring your products online, reach new customers and grow your
              business with our marketplace.
            </p>
          </div>

          <Link href="/register">Become a Seller</Link>
        </div>
      </section>

      <footer className="seller-footer">
        <div className="seller-container">
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
