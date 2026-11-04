"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  ShieldCheck,
  Truck,
  Tag,
  ShoppingBag,
  CheckCircle2,
} from "lucide-react";

type CartProduct = {
  id: number;
  name: string;
  category: string;
  vendor: string;
  price: number;
  quantity: number;
  image: string;
};

const initialCart: CartProduct[] = [
  {
    id: 1,
    name: "Premium Human Hair Wig",
    category: "Wigs & Hair",
    vendor: "Ekundayo Beauty & Lifestyle",
    price: 85000,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=700",
  },
  {
    id: 2,
    name: "Luxury Hair Treatment Set",
    category: "Hair Care",
    vendor: "Ekundayo Beauty & Lifestyle",
    price: 18500,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=700",
  },
];

const formatPrice = (price: number) =>
  `₦${price.toLocaleString("en-NG")}`;

export default function CartPage() {
  const [items, setItems] = useState<CartProduct[]>(initialCart);
  const [notice, setNotice] = useState("");

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function updateQuantity(id: number, change: number) {
    setItems((current) =>
      current
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: Math.max(1, item.quantity + change),
              }
            : item
        )
    );
  }

  function removeItem(id: number) {
    setItems((current) =>
      current.filter((item) => item.id !== id)
    );

    setNotice("Product removed from your cart.");

    setTimeout(() => setNotice(""), 3000);
  }

  function checkoutNotice() {
    setNotice(
      "Checkout is not available yet. Payment and order services will be connected in a later development phase."
    );

    setTimeout(() => setNotice(""), 5000);
  }

  return (
    <main className="min-h-screen bg-[#f8f9fc] text-[#172033]">
      <style>{`
        * { box-sizing: border-box; }

        .cart-container {
          width: min(1120px, 92%);
          margin: auto;
        }

        .cart-header {
          min-height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #e8ebf1;
        }

        .cart-logo {
          color: #172033;
          font-size: 27px;
          font-weight: 950;
          letter-spacing: -1.5px;
          text-decoration: none;
        }

        .cart-logo span { color: #7655e8; }

        .cart-nav {
          display: flex;
          gap: 22px;
        }

        .cart-nav a {
          color: #657086;
          font-size: 12px;
          font-weight: 800;
          text-decoration: none;
        }

        .cart-nav a:hover { color: #7655e8; }

        .cart-heading {
          padding: 45px 0 30px;
        }

        .cart-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 25px;
          color: #7655e8;
          font-size: 12px;
          font-weight: 900;
          text-decoration: none;
        }

        .cart-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
        }

        .cart-title {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .cart-icon {
          display: grid;
          width: 50px;
          height: 50px;
          place-items: center;
          border-radius: 15px;
          background: #f0edff;
          color: #7655e8;
        }

        .cart-title h1 {
          margin: 0;
          font-size: clamp(27px, 4vw, 36px);
          font-weight: 950;
          letter-spacing: -1px;
        }

        .cart-title p {
          margin: 6px 0 0;
          color: #8992a4;
          font-size: 11px;
        }

        .cart-count {
          padding: 10px 15px;
          border: 1px solid #e8eaf1;
          border-radius: 30px;
          background: white;
          color: #7655e8;
          font-size: 10px;
          font-weight: 950;
        }

        .cart-notice {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 14px;
          margin-bottom: 20px;
          border: 1px solid #ded6ff;
          border-radius: 10px;
          background: #f2efff;
          color: #6546d4;
          font-size: 11px;
          line-height: 1.7;
          font-weight: 800;
        }

        .cart-layout {
          display: grid;
          grid-template-columns: 1fr 340px;
          align-items: start;
          gap: 25px;
          padding-bottom: 55px;
        }

        .cart-items {
          display: grid;
          gap: 15px;
        }

        .cart-item {
          display: grid;
          grid-template-columns: 125px 1fr;
          gap: 18px;
          padding: 17px;
          border: 1px solid #e8eaf1;
          border-radius: 14px;
          background: white;
        }

        .cart-item img {
          width: 125px;
          height: 135px;
          border-radius: 10px;
          object-fit: cover;
          background: #f0eef7;
        }

        .cart-item-info {
          min-width: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .cart-category {
          color: #7655e8;
          font-size: 9px;
          font-weight: 950;
          letter-spacing: .6px;
          text-transform: uppercase;
        }

        .cart-item-info h3 {
          margin: 7px 0;
          font-size: 14px;
          font-weight: 950;
        }

        .cart-vendor {
          color: #929bad;
          font-size: 10px;
        }

        .cart-item-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-top: 15px;
        }

        .cart-price {
          font-size: 17px;
          font-weight: 950;
        }

        .quantity-control {
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 7px 10px;
          border: 1px solid #e8eaf1;
          border-radius: 8px;
        }

        .quantity-control button {
          display: grid;
          width: 20px;
          height: 20px;
          place-items: center;
          border: none;
          background: transparent;
          color: #7655e8;
          cursor: pointer;
        }

        .quantity-control span {
          min-width: 14px;
          font-size: 11px;
          font-weight: 950;
          text-align: center;
        }

        .cart-remove {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          margin-top: 10px;
          padding: 0;
          border: none;
          background: transparent;
          color: #d75c77;
          font-size: 10px;
          font-weight: 800;
          cursor: pointer;
        }

        .cart-summary {
          padding: 23px;
          border: 1px solid #e8eaf1;
          border-radius: 15px;
          background: white;
        }

        .cart-summary h2 {
          margin: 0 0 20px;
          font-size: 17px;
          font-weight: 950;
        }

        .summary-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin: 15px 0;
          color: #7c879a;
          font-size: 11px;
        }

        .summary-row strong {
          color: #172033;
          font-size: 12px;
        }

        .summary-divider {
          height: 1px;
          margin: 19px 0;
          background: #e8eaf1;
        }

        .summary-total {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .summary-total span {
          font-size: 12px;
          font-weight: 900;
        }

        .summary-total strong {
          color: #7655e8;
          font-size: 21px;
          font-weight: 950;
        }

        .checkout-button {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
          gap: 9px;
          margin-top: 23px;
          padding: 15px;
          border: none;
          border-radius: 9px;
          background: #7655e8;
          color: white;
          font-size: 11px;
          font-weight: 950;
          cursor: pointer;
        }

        .checkout-button:hover { background: #6040ce; }

        .continue-link {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 17px;
          color: #7655e8;
          font-size: 10px;
          font-weight: 900;
          text-decoration: none;
        }

        .cart-benefits {
          display: grid;
          gap: 13px;
          margin-top: 22px;
          padding-top: 19px;
          border-top: 1px solid #e8eaf1;
        }

        .cart-benefit {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #8992a4;
          font-size: 10px;
        }

        .cart-benefit svg { color: #7655e8; }

        .cart-empty {
          padding: 70px 20px;
          border: 1px dashed #dcd9e9;
          border-radius: 17px;
          background: white;
          text-align: center;
        }

        .cart-empty-icon {
          display: grid;
          width: 75px;
          height: 75px;
          place-items: center;
          margin: auto;
          border-radius: 22px;
          background: #f0edff;
          color: #7655e8;
        }

        .cart-empty h2 {
          margin: 20px 0 8px;
          font-size: 23px;
          font-weight: 950;
        }

        .cart-empty p {
          max-width: 390px;
          margin: auto;
          color: #8992a4;
          font-size: 12px;
          line-height: 1.8;
        }

        .cart-empty a {
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

        .cart-disclaimer {
          padding: 16px;
          margin-bottom: 45px;
          border: 1px solid #e5ddff;
          border-radius: 12px;
          background: #f2efff;
          color: #77718f;
          font-size: 10px;
          line-height: 1.9;
        }

        .cart-disclaimer strong { color: #6043cb; }

        .cart-footer {
          padding: 27px 0;
          border-top: 1px solid #e8ebf1;
          color: #8790a2;
          font-size: 11px;
          text-align: center;
        }

        @media (max-width: 850px) {
          .cart-layout {
            grid-template-columns: 1fr;
          }

          .cart-summary { max-width: 100%; }
        }

        @media (max-width: 560px) {
          .cart-header { min-height: 68px; }
          .cart-logo { font-size: 23px; }
          .cart-nav { gap: 12px; }
          .cart-nav a { font-size: 10px; }
          .cart-heading { padding-top: 30px; }
          .cart-item {
            grid-template-columns: 95px 1fr;
            gap: 12px;
            padding: 11px;
          }
          .cart-item img {
            width: 95px;
            height: 120px;
          }
          .cart-item-info h3 { font-size: 11px; }
          .cart-price { font-size: 13px; }
          .cart-item-bottom {
            align-items: flex-start;
            flex-direction: column;
          }
          .quantity-control { gap: 10px; }
        }
      `}</style>

      <header className="cart-container cart-header">
        <Link href="/" className="cart-logo">
          KAV<span>O</span>RA.
        </Link>

        <nav className="cart-nav">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/wishlist">Wishlist</Link>
          <Link href="/support">Support</Link>
        </nav>
      </header>

      <div className="cart-container">
        <section className="cart-heading">
          <Link href="/products" className="cart-back">
            <ArrowLeft size={15} />
            Continue shopping
          </Link>

          <div className="cart-title-row">
            <div className="cart-title">
              <div className="cart-icon">
                <ShoppingCart size={24} />
              </div>

              <div>
                <h1>Shopping Cart</h1>
                <p>Review your items before checkout.</p>
              </div>
            </div>

            <div className="cart-count">
              {items.reduce(
                (total, item) => total + item.quantity,
                0
              )}{" "}
              ITEMS
            </div>
          </div>
        </section>

        {notice && (
          <div className="cart-notice" role="status">
            <CheckCircle2 size={17} />
            {notice}
          </div>
        )}

        {items.length > 0 ? (
          <div className="cart-layout">
            <section className="cart-items">
              {items.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />

                  <div className="cart-item-info">
                    <div>
                      <div className="cart-category">
                        {item.category}
                      </div>

                      <h3>{item.name}</h3>

                      <div className="cart-vendor">
                        Sold by {item.vendor}
                      </div>
                    </div>

                    <div>
                      <div className="cart-item-bottom">
                        <div className="cart-price">
                          {formatPrice(item.price)}
                        </div>

                        <div className="quantity-control">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            onClick={() =>
                              updateQuantity(item.id, -1)
                            }
                          >
                            <Minus size={14} />
                          </button>

                          <span>{item.quantity}</span>

                          <button
                            type="button"
                            aria-label="Increase quantity"
                            onClick={() =>
                              updateQuantity(item.id, 1)
                            }
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="cart-remove"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 size={13} />
                        Remove item
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </section>

            <aside className="cart-summary">
              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Subtotal</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>

              <div className="summary-row">
                <span>Delivery fee</span>
                <strong>Calculated later</strong>
              </div>

              <div className="summary-row">
                <span>Discount</span>
                <strong>₦0</strong>
              </div>

              <div className="summary-divider" />

              <div className="summary-total">
                <span>Estimated total</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>

              <button
                type="button"
                className="checkout-button"
                onClick={checkoutNotice}
              >
                Proceed to Checkout
                <ArrowRight size={16} />
              </button>

              <Link href="/products" className="continue-link">
                <ShoppingBag size={15} />
                Continue shopping
              </Link>

              <div className="cart-benefits">
                <div className="cart-benefit">
                  <ShieldCheck size={17} />
                  Secure checkout planned
                </div>

                <div className="cart-benefit">
                  <Truck size={17} />
                  Delivery options coming soon
                </div>

                <div className="cart-benefit">
                  <Tag size={17} />
                  Promotions coming soon
                </div>
              </div>
            </aside>
          </div>
        ) : (
          <section className="cart-empty">
            <div className="cart-empty-icon">
              <ShoppingCart size={34} />
            </div>

            <h2>Your cart is empty</h2>

            <p>
              You haven&apos;t added any products yet. Discover
              something you love and add it to your shopping cart.
            </p>

            <Link href="/products">
              <ShoppingBag size={16} />
              Explore Products
              <ArrowRight size={15} />
            </Link>
          </section>
        )}

        <div className="cart-disclaimer">
          <strong>Development preview:</strong> The products and
          prices displayed here are demonstration data. Cart
          contents currently reset when the page is refreshed.
          Checkout, delivery charges, discounts and payment
          processing have not yet been connected.
        </div>

        <footer className="cart-footer">
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
