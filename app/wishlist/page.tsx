"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  ShoppingBag,
  Trash2,
  ShoppingCart,
  Sparkles,
  Search,
  Package,
  CheckCircle2,
} from "lucide-react";

type WishlistProduct = {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  vendor: string;
  badge?: string;
};

const initialProducts: WishlistProduct[] = [
  {
    id: 1,
    name: "Premium Human Hair Wig",
    category: "Wigs & Hair",
    price: 85000,
    oldPrice: 100000,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=700",
    vendor: "Ekundayo Beauty & Lifestyle",
    badge: "Popular",
  },
  {
    id: 2,
    name: "Luxury Hair Treatment Set",
    category: "Hair Care",
    price: 18500,
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=700",
    vendor: "Ekundayo Beauty & Lifestyle",
  },
  {
    id: 3,
    name: "Elegant Beauty Accessories",
    category: "Accessories",
    price: 12000,
    oldPrice: 15000,
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=700",
    vendor: "Ekundayo Beauty & Lifestyle",
    badge: "Special",
  },
  {
    id: 4,
    name: "Luxury Fragrance Collection",
    category: "Fragrances",
    price: 22000,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=700",
    vendor: "Ekundayo Beauty & Lifestyle",
  },
];

const formatPrice = (price: number) =>
  `₦${price.toLocaleString("en-NG")}`;

export default function WishlistPage() {
  const [products, setProducts] =
    useState<WishlistProduct[]>(initialProducts);

  const [notice, setNotice] = useState("");

  function removeProduct(id: number) {
    setProducts((current) =>
      current.filter((product) => product.id !== id)
    );

    setNotice("Product removed from your wishlist.");

    setTimeout(() => setNotice(""), 3000);
  }

  function addToCart(name: string) {
    setNotice(
      `${name} is not available for cart checkout yet.`
    );

    setTimeout(() => setNotice(""), 3500);
  }

  return (
    <main className="min-h-screen bg-[#f8f9fc] text-[#172033]">
      <style>{`
        * { box-sizing: border-box; }

        .wish-container {
          width: min(1120px, 92%);
          margin: auto;
        }

        .wish-header {
          min-height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          border-bottom: 1px solid #e8ebf1;
        }

        .wish-logo {
          color: #172033;
          font-size: 27px;
          font-weight: 950;
          letter-spacing: -1.5px;
          text-decoration: none;
        }

        .wish-logo span { color: #7655e8; }

        .wish-nav {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .wish-nav a {
          color: #657086;
          font-size: 12px;
          font-weight: 800;
          text-decoration: none;
        }

        .wish-nav a:hover { color: #7655e8; }

        .wish-hero {
          padding: 48px 0 35px;
        }

        .wish-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 27px;
          color: #7655e8;
          font-size: 12px;
          font-weight: 900;
          text-decoration: none;
        }

        .wish-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
        }

        .wish-title {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .wish-heart {
          display: grid;
          width: 51px;
          height: 51px;
          place-items: center;
          border-radius: 15px;
          background: #f0edff;
          color: #7655e8;
        }

        .wish-title h1 {
          margin: 0;
          font-size: clamp(27px, 4vw, 36px);
          font-weight: 950;
          letter-spacing: -1.2px;
        }

        .wish-title p {
          margin: 6px 0 0;
          color: #8992a4;
          font-size: 11px;
        }

        .wish-count {
          padding: 10px 15px;
          border: 1px solid #e8eaf1;
          border-radius: 30px;
          background: white;
          color: #7655e8;
          font-size: 11px;
          font-weight: 950;
        }

        .wish-notice {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 13px 16px;
          margin-bottom: 20px;
          border: 1px solid #ded6ff;
          border-radius: 10px;
          background: #f2efff;
          color: #6546d4;
          font-size: 11px;
          font-weight: 800;
        }

        .wish-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          padding-bottom: 45px;
        }

        .wish-card {
          overflow: hidden;
          border: 1px solid #e8eaf1;
          border-radius: 15px;
          background: white;
          transition: transform .2s, box-shadow .2s;
        }

        .wish-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px #2520440c;
        }

        .wish-image-wrap {
          position: relative;
          height: 210px;
          overflow: hidden;
          background: #f0eef7;
        }

        .wish-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .3s;
        }

        .wish-card:hover .wish-image {
          transform: scale(1.04);
        }

        .wish-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          padding: 6px 10px;
          border-radius: 30px;
          background: white;
          color: #7655e8;
          font-size: 9px;
          font-weight: 950;
        }

        .wish-remove {
          position: absolute;
          top: 10px;
          right: 10px;
          display: grid;
          width: 35px;
          height: 35px;
          place-items: center;
          border: none;
          border-radius: 50%;
          background: white;
          color: #d75c77;
          cursor: pointer;
        }

        .wish-remove:hover {
          background: #fff0f3;
        }

        .wish-details {
          padding: 17px;
        }

        .wish-category {
          color: #7655e8;
          font-size: 9px;
          font-weight: 950;
          letter-spacing: .7px;
          text-transform: uppercase;
        }

        .wish-details h3 {
          min-height: 38px;
          margin: 9px 0 7px;
          font-size: 13px;
          font-weight: 950;
          line-height: 1.5;
        }

        .wish-vendor {
          margin-bottom: 13px;
          color: #939bad;
          font-size: 9px;
        }

        .wish-price-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 15px;
        }

        .wish-price {
          color: #172033;
          font-size: 16px;
          font-weight: 950;
        }

        .wish-old-price {
          color: #a5adbc;
          font-size: 10px;
          text-decoration: line-through;
        }

        .wish-cart {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px;
          border: none;
          border-radius: 9px;
          background: #7655e8;
          color: white;
          font-size: 10px;
          font-weight: 950;
          cursor: pointer;
        }

        .wish-cart:hover {
          background: #6040ce;
        }

        .wish-empty {
          padding: 75px 20px;
          border: 1px dashed #dcd9e9;
          border-radius: 18px;
          background: white;
          text-align: center;
        }

        .wish-empty-icon {
          display: grid;
          width: 75px;
          height: 75px;
          place-items: center;
          margin: auto;
          border-radius: 22px;
          background: #f0edff;
          color: #7655e8;
        }

        .wish-empty h2 {
          margin: 20px 0 9px;
          font-size: 23px;
          font-weight: 950;
        }

        .wish-empty p {
          max-width: 400px;
          margin: auto;
          color: #8992a4;
          font-size: 12px;
          line-height: 1.9;
        }

        .wish-empty a {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          margin-top: 22px;
          padding: 13px 20px;
          border-radius: 9px;
          background: #7655e8;
          color: white;
          font-size: 11px;
          font-weight: 950;
          text-decoration: none;
        }

        .wish-info {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 18px;
          margin: 20px 0 50px;
          border: 1px solid #e5ddff;
          border-radius: 13px;
          background: #f2efff;
        }

        .wish-info svg {
          flex-shrink: 0;
          color: #7655e8;
        }

        .wish-info p {
          margin: 0;
          color: #77718f;
          font-size: 11px;
          line-height: 1.9;
        }

        .wish-info strong { color: #6043cb; }

        .wish-footer {
          padding: 27px 0;
          border-top: 1px solid #e8ebf1;
          color: #8790a2;
          font-size: 11px;
          text-align: center;
        }

        @media (max-width: 900px) {
          .wish-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 560px) {
          .wish-header { min-height: 68px; }
          .wish-logo { font-size: 23px; }
          .wish-nav { gap: 12px; }
          .wish-nav a { font-size: 10px; }
          .wish-hero { padding-top: 30px; }
          .wish-title-row { align-items: flex-start; }
          .wish-heart {
            width: 43px;
            height: 43px;
          }
          .wish-count { font-size: 9px; }
          .wish-grid { gap: 11px; }
          .wish-image-wrap { height: 155px; }
          .wish-details { padding: 12px; }
          .wish-details h3 { font-size: 11px; }
          .wish-price { font-size: 13px; }
          .wish-cart { font-size: 9px; padding: 10px 5px; }
        }
      `}</style>

      <header className="wish-container wish-header">
        <Link href="/" className="wish-logo">
          KAV<span>O</span>RA.
        </Link>

        <nav className="wish-nav">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/support">Support</Link>
        </nav>
      </header>

      <div className="wish-container">
        <section className="wish-hero">
          <Link href="/products" className="wish-back">
            <ArrowLeft size={15} />
            Continue shopping
          </Link>

          <div className="wish-title-row">
            <div className="wish-title">
              <div className="wish-heart">
                <Heart size={24} />
              </div>

              <div>
                <h1>My Wishlist</h1>
                <p>Your favourite finds, all in one place.</p>
              </div>
            </div>

            <div className="wish-count">
              {products.length} SAVED
            </div>
          </div>
        </section>

        {notice && (
          <div className="wish-notice" role="status">
            <CheckCircle2 size={17} />
            {notice}
          </div>
        )}

        {products.length > 0 ? (
          <section className="wish-grid">
            {products.map((product) => (
              <article className="wish-card" key={product.id}>
                <div className="wish-image-wrap">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="wish-image"
                  />

                  {product.badge && (
                    <span className="wish-badge">
                      {product.badge}
                    </span>
                  )}

                  <button
                    className="wish-remove"
                    type="button"
                    aria-label={`Remove ${product.name} from wishlist`}
                    onClick={() => removeProduct(product.id)}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                <div className="wish-details">
                  <div className="wish-category">
                    {product.category}
                  </div>

                  <h3>{product.name}</h3>

                  <div className="wish-vendor">
                    Sold by {product.vendor}
                  </div>

                  <div className="wish-price-row">
                    <span className="wish-price">
                      {formatPrice(product.price)}
                    </span>

                    {product.oldPrice && (
                      <span className="wish-old-price">
                        {formatPrice(product.oldPrice)}
                      </span>
                    )}
                  </div>

                  <button
                    className="wish-cart"
                    type="button"
                    onClick={() => addToCart(product.name)}
                  >
                    <ShoppingCart size={15} />
                    Add to Cart
                  </button>
                </div>
              </article>
            ))}
          </section>
        ) : (
          <section className="wish-empty">
            <div className="wish-empty-icon">
              <Heart size={34} />
            </div>

            <h2>Your wishlist is empty</h2>

            <p>
              You haven't saved any products yet. Explore KAVORA
              and discover products you would love to keep.
            </p>

            <Link href="/products">
              <ShoppingBag size={16} />
              Explore Products
              <ArrowRight size={15} />
            </Link>
          </section>
        )}

        <div className="wish-info">
          <Sparkles size={20} />

          <p>
            <strong>Wishlist preview:</strong> These are demonstration
            products. Wishlist changes currently last only while this
            page remains open. Saving products permanently across
            devices will be implemented when customer accounts and
            database storage are connected.
          </p>
        </div>

        <footer className="wish-footer">
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
