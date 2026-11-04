"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  Clock,
  Tag,
  Flame,
  ShoppingBag,
  Sparkles,
  Heart,
  Percent,
  ShieldCheck,
} from "lucide-react";

const deals = [
  {
    id: 1,
    name: "Premium Human Hair Wig",
    category: "Wigs & Hair",
    vendor: "Ekundayo Beauty & Lifestyle",
    price: 85000,
    oldPrice: 100000,
    discount: "15% OFF",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=700",
    label: "Best Seller",
  },
  {
    id: 2,
    name: "Luxury Hair Treatment Set",
    category: "Hair Care",
    vendor: "Ekundayo Beauty & Lifestyle",
    price: 18500,
    oldPrice: 25000,
    discount: "26% OFF",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=700",
    label: "Hot Deal",
  },
  {
    id: 3,
    name: "Elegant Beauty Accessories",
    category: "Accessories",
    vendor: "Ekundayo Beauty & Lifestyle",
    price: 12000,
    oldPrice: 15000,
    discount: "20% OFF",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=700",
    label: "Popular",
  },
  {
    id: 4,
    name: "Luxury Fragrance Collection",
    category: "Fragrances",
    vendor: "Ekundayo Beauty & Lifestyle",
    price: 22000,
    oldPrice: 28000,
    discount: "21% OFF",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=700",
    label: "Special Offer",
  },
];

const formatPrice = (price: number) =>
  `₦${price.toLocaleString("en-NG")}`;

export default function DealsPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fc] text-[#172033]">
      <style>{`
        * { box-sizing: border-box; }

        .deal-container {
          width: min(1120px, 92%);
          margin: auto;
        }

        .deal-header {
          min-height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          border-bottom: 1px solid #e8ebf1;
        }

        .deal-logo {
          color: #172033;
          font-size: 27px;
          font-weight: 950;
          letter-spacing: -1.5px;
          text-decoration: none;
        }

        .deal-logo span { color: #7655e8; }

        .deal-nav {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .deal-nav a {
          color: #657086;
          font-size: 12px;
          font-weight: 800;
          text-decoration: none;
        }

        .deal-nav a:hover { color: #7655e8; }

        .deal-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin: 30px 0 20px;
          color: #7655e8;
          font-size: 12px;
          font-weight: 900;
          text-decoration: none;
        }

        .deal-hero {
          position: relative;
          overflow: hidden;
          display: flex;
          min-height: 290px;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          padding: 45px;
          border-radius: 20px;
          background: linear-gradient(120deg, #21183e, #6044bd);
          color: white;
        }

        .deal-hero::after {
          position: absolute;
          right: -80px;
          bottom: -170px;
          width: 380px;
          height: 380px;
          border: 1px solid #ffffff20;
          border-radius: 50%;
          content: "";
        }

        .deal-hero-content {
          position: relative;
          z-index: 1;
          max-width: 570px;
        }

        .deal-kicker {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 8px 12px;
          border: 1px solid #ffffff30;
          border-radius: 30px;
          background: #ffffff12;
          color: #e0d8ff;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .deal-hero h1 {
          margin: 20px 0 12px;
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 950;
          line-height: 1.12;
          letter-spacing: -1.7px;
        }

        .deal-hero h1 span { color: #d3c6ff; }

        .deal-hero p {
          max-width: 440px;
          color: #e2dcf5;
          font-size: 12px;
          line-height: 1.9;
        }

        .deal-hero-button {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          margin-top: 17px;
          padding: 14px 19px;
          border-radius: 9px;
          background: white;
          color: #6043cb;
          font-size: 11px;
          font-weight: 950;
          text-decoration: none;
        }

        .deal-hero-symbol {
          position: relative;
          z-index: 1;
          display: grid;
          width: 150px;
          height: 150px;
          flex-shrink: 0;
          place-items: center;
          border: 1px solid #ffffff30;
          border-radius: 35px;
          background: #ffffff12;
          transform: rotate(8deg);
        }

        .deal-hero-symbol svg {
          width: 75px;
          height: 75px;
          color: #e3d9ff;
        }

        .deal-section {
          padding: 50px 0 20px;
        }

        .deal-section-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 23px;
        }

        .deal-section-heading h2 {
          margin: 0;
          font-size: 25px;
          font-weight: 950;
          letter-spacing: -.7px;
        }

        .deal-section-heading p {
          margin: 7px 0 0;
          color: #8992a4;
          font-size: 11px;
        }

        .deal-section-heading a {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #7655e8;
          font-size: 11px;
          font-weight: 900;
          text-decoration: none;
        }

        .deal-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .deal-card {
          overflow: hidden;
          border: 1px solid #e8eaf1;
          border-radius: 15px;
          background: white;
          transition: transform .2s, box-shadow .2s;
        }

        .deal-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px #2520440c;
        }

        .deal-image-wrap {
          position: relative;
          height: 205px;
          overflow: hidden;
          background: #f0eef7;
        }

        .deal-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .3s;
        }

        .deal-card:hover .deal-image {
          transform: scale(1.05);
        }

        .deal-discount {
          position: absolute;
          top: 12px;
          left: 12px;
          padding: 7px 10px;
          border-radius: 6px;
          background: #7655e8;
          color: white;
          font-size: 9px;
          font-weight: 950;
        }

        .deal-label {
          position: absolute;
          right: 10px;
          bottom: 10px;
          padding: 6px 9px;
          border-radius: 5px;
          background: white;
          color: #6043cb;
          font-size: 9px;
          font-weight: 900;
        }

        .deal-card-content {
          padding: 16px;
        }

        .deal-category {
          color: #7655e8;
          font-size: 9px;
          font-weight: 950;
          letter-spacing: .6px;
          text-transform: uppercase;
        }

        .deal-card-content h3 {
          min-height: 38px;
          margin: 8px 0;
          font-size: 13px;
          font-weight: 950;
          line-height: 1.5;
        }

        .deal-vendor {
          margin-bottom: 13px;
          color: #929bad;
          font-size: 9px;
        }

        .deal-price-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 14px;
        }

        .deal-price {
          font-size: 16px;
          font-weight: 950;
        }

        .deal-old-price {
          color: #a5adbc;
          font-size: 10px;
          text-decoration: line-through;
        }

        .deal-view {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px;
          border-radius: 8px;
          background: #f0edff;
          color: #694bd6;
          font-size: 10px;
          font-weight: 950;
          text-decoration: none;
        }

        .deal-view:hover {
          background: #7655e8;
          color: white;
        }

        .deal-benefits {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
          padding: 30px;
          margin: 45px 0;
          border: 1px solid #e8eaf1;
          border-radius: 16px;
          background: white;
        }

        .deal-benefit {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .deal-benefit-icon {
          display: grid;
          width: 42px;
          height: 42px;
          flex-shrink: 0;
          place-items: center;
          border-radius: 12px;
          background: #f0edff;
          color: #7655e8;
        }

        .deal-benefit h3 {
          margin: 0 0 5px;
          font-size: 11px;
          font-weight: 950;
        }

        .deal-benefit p {
          margin: 0;
          color: #8992a4;
          font-size: 9px;
          line-height: 1.6;
        }

        .deal-notice {
          padding: 17px;
          margin-bottom: 35px;
          border: 1px solid #e5ddff;
          border-radius: 12px;
          background: #f2efff;
          color: #77718f;
          font-size: 10px;
          line-height: 1.9;
        }

        .deal-notice strong { color: #6043cb; }

        .deal-footer {
          padding: 27px 0;
          border-top: 1px solid #e8ebf1;
          color: #8790a2;
          font-size: 11px;
          text-align: center;
        }

        @media (max-width: 850px) {
          .deal-grid { grid-template-columns: repeat(2, 1fr); }
          .deal-benefits { grid-template-columns: 1fr; }
        }

        @media (max-width: 560px) {
          .deal-header { min-height: 68px; }
          .deal-logo { font-size: 23px; }
          .deal-nav { gap: 12px; }
          .deal-nav a { font-size: 10px; }
          .deal-hero {
            min-height: 260px;
            padding: 25px;
          }
          .deal-hero-symbol {
            width: 75px;
            height: 75px;
            border-radius: 20px;
          }
          .deal-hero-symbol svg {
            width: 38px;
            height: 38px;
          }
          .deal-hero h1 { font-size: 32px; }
          .deal-grid { gap: 11px; }
          .deal-image-wrap { height: 155px; }
          .deal-card-content { padding: 12px; }
          .deal-card-content h3 { font-size: 11px; }
          .deal-price { font-size: 13px; }
          .deal-benefits { padding: 20px; }
        }
      `}</style>

      <header className="deal-container deal-header">
        <Link href="/" className="deal-logo">
          KAV<span>O</span>RA.
        </Link>

        <nav className="deal-nav">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/cart">Cart</Link>
        </nav>
      </header>

      <div className="deal-container">
        <Link href="/" className="deal-back">
          <ArrowLeft size={15} />
          Back to home
        </Link>

        <section className="deal-hero">
          <div className="deal-hero-content">
            <div className="deal-kicker">
              <Flame size={14} />
              KAVORA SPECIAL OFFERS
            </div>

            <h1>
              Discover more.
              <br />
              <span>Spend smarter.</span>
            </h1>

            <p>
              Explore selected products and special offers from
              sellers on KAVORA. Find something you love at a
              price worth discovering.
            </p>

            <Link href="#featured-deals" className="deal-hero-button">
              Explore Deals
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="deal-hero-symbol">
            <Percent />
          </div>
        </section>

        <section className="deal-section" id="featured-deals">
          <div className="deal-section-heading">
            <div>
              <h2>Featured Deals</h2>
              <p>Explore selected marketplace offers.</p>
            </div>

            <Link href="/products">
              All products
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="deal-grid">
            {deals.map((deal) => (
              <article className="deal-card" key={deal.id}>
                <div className="deal-image-wrap">
                  <img
                    src={deal.image}
                    alt={deal.name}
                    className="deal-image"
                  />

                  <span className="deal-discount">
                    {deal.discount}
                  </span>

                  <span className="deal-label">
                    {deal.label}
                  </span>
                </div>

                <div className="deal-card-content">
                  <div className="deal-category">
                    {deal.category}
                  </div>

                  <h3>{deal.name}</h3>

                  <div className="deal-vendor">
                    Sold by {deal.vendor}
                  </div>

                  <div className="deal-price-row">
                    <span className="deal-price">
                      {formatPrice(deal.price)}
                    </span>

                    <span className="deal-old-price">
                      {formatPrice(deal.oldPrice)}
                    </span>
                  </div>

                  <Link
                    href="/products"
                    className="deal-view"
                  >
                    Explore Product
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="deal-benefits">
          <div className="deal-benefit">
            <div className="deal-benefit-icon">
              <Tag size={19} />
            </div>

            <div>
              <h3>Special Offers</h3>
              <p>Discover selected product promotions.</p>
            </div>
          </div>

          <div className="deal-benefit">
            <div className="deal-benefit-icon">
              <ShoppingBag size={19} />
            </div>

            <div>
              <h3>More to Discover</h3>
              <p>Explore products across different categories.</p>
            </div>
          </div>

          <div className="deal-benefit">
            <div className="deal-benefit-icon">
              <ShieldCheck size={19} />
            </div>

            <div>
              <h3>Clear Pricing</h3>
              <p>Review displayed prices before ordering.</p>
            </div>
          </div>
        </section>

        <div className="deal-notice">
          <strong>Development preview:</strong> The products,
          discount percentages and prices on this page are
          demonstration data. They are not verified live
          promotions. Real vendor discounts and offer expiry
          dates will be connected to the product database later.
        </div>

        <footer className="deal-footer">
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
