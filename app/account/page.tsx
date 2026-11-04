"use client";

import Link from "next/link";
import {
  UserRound,
  ShoppingBag,
  Heart,
  MapPin,
  Settings,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  Package,
  Clock,
  LogIn,
  UserPlus,
  Headphones,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const accountLinks = [
  {
    title: "My Orders",
    description: "Track and review your purchases.",
    icon: Package,
    href: "/orders",
    color: "purple",
  },
  {
    title: "My Wishlist",
    description: "Find products you have saved.",
    icon: Heart,
    href: "/wishlist",
    color: "pink",
  },
  {
    title: "Shopping Cart",
    description: "Review items before checkout.",
    icon: ShoppingBag,
    href: "/cart",
    color: "blue",
  },
  {
    title: "Delivery Addresses",
    description: "Manage your delivery information.",
    icon: MapPin,
    href: "/account/addresses",
    color: "green",
  },
  {
    title: "Account Settings",
    description: "Manage your personal preferences.",
    icon: Settings,
    href: "/account/settings",
    color: "orange",
  },
  {
    title: "Customer Support",
    description: "Get help with your shopping experience.",
    icon: Headphones,
    href: "/support",
    color: "purple",
  },
];

export default function AccountPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fc] text-[#172033]">
      <style>{`
        * { box-sizing: border-box; }

        .account-container {
          width: min(1080px, 92%);
          margin: auto;
        }

        .account-header {
          min-height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #e8ebf1;
        }

        .account-logo {
          color: #172033;
          font-size: 27px;
          font-weight: 950;
          letter-spacing: -1.5px;
          text-decoration: none;
        }

        .account-logo span { color: #7655e8; }

        .account-nav {
          display: flex;
          gap: 22px;
        }

        .account-nav a {
          color: #657086;
          font-size: 12px;
          font-weight: 800;
          text-decoration: none;
        }

        .account-nav a:hover { color: #7655e8; }

        .account-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin: 30px 0 23px;
          color: #7655e8;
          font-size: 12px;
          font-weight: 900;
          text-decoration: none;
        }

        .account-hero {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 30px;
          border: 1px solid #e8eaf1;
          border-radius: 17px;
          background: white;
        }

        .account-profile {
          display: flex;
          align-items: center;
          gap: 17px;
        }

        .account-avatar {
          display: grid;
          width: 75px;
          height: 75px;
          flex-shrink: 0;
          place-items: center;
          border-radius: 22px;
          background: #f0edff;
          color: #7655e8;
        }

        .account-profile h1 {
          margin: 0;
          font-size: 25px;
          font-weight: 950;
          letter-spacing: -.8px;
        }

        .account-profile p {
          margin: 7px 0 0;
          color: #8992a4;
          font-size: 11px;
          line-height: 1.7;
        }

        .account-status {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 10px;
          padding: 6px 10px;
          border-radius: 30px;
          background: #f0edff;
          color: #7655e8;
          font-size: 9px;
          font-weight: 950;
        }

        .account-auth-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .account-auth-actions a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 15px;
          border: 1px solid #7655e8;
          border-radius: 8px;
          color: #7655e8;
          font-size: 10px;
          font-weight: 950;
          text-decoration: none;
        }

        .account-auth-actions a.primary {
          background: #7655e8;
          color: white;
        }

        .account-section {
          padding: 40px 0 20px;
        }

        .account-section-heading {
          margin-bottom: 20px;
        }

        .account-section-heading h2 {
          margin: 0;
          font-size: 21px;
          font-weight: 950;
        }

        .account-section-heading p {
          margin: 7px 0 0;
          color: #8992a4;
          font-size: 11px;
        }

        .account-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
        }

        .account-card {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 20px;
          border: 1px solid #e8eaf1;
          border-radius: 13px;
          background: white;
          text-decoration: none;
          transition: transform .2s, box-shadow .2s;
        }

        .account-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px #2520440c;
        }

        .account-card-icon {
          display: grid;
          width: 43px;
          height: 43px;
          flex-shrink: 0;
          place-items: center;
          border-radius: 12px;
        }

        .purple {
          background: #f0edff;
          color: #7655e8;
        }

        .pink {
          background: #fff0f5;
          color: #d75c88;
        }

        .blue {
          background: #edf4ff;
          color: #4480d8;
        }

        .green {
          background: #eaf9f1;
          color: #259a69;
        }

        .orange {
          background: #fff4e9;
          color: #d78a37;
        }

        .account-card-content {
          flex: 1;
          min-width: 0;
        }

        .account-card h3 {
          margin: 2px 0 7px;
          color: #172033;
          font-size: 12px;
          font-weight: 950;
        }

        .account-card p {
          margin: 0;
          color: #929bad;
          font-size: 10px;
          line-height: 1.7;
        }

        .account-card-arrow {
          flex-shrink: 0;
          margin-top: 5px;
          color: #a5adbc;
        }

        .account-promo {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 25px;
          margin: 25px 0 40px;
          border-radius: 15px;
          background: linear-gradient(120deg, #241a43, #6548c7);
          color: white;
        }

        .account-promo-content {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .account-promo-icon {
          display: grid;
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          place-items: center;
          border-radius: 13px;
          background: #ffffff18;
          color: #e2d8ff;
        }

        .account-promo h3 {
          margin: 0 0 6px;
          font-size: 15px;
          font-weight: 950;
        }

        .account-promo p {
          margin: 0;
          color: #e0d9f5;
          font-size: 10px;
          line-height: 1.7;
        }

        .account-promo a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
          padding: 12px 16px;
          border-radius: 8px;
          background: white;
          color: #6043cb;
          font-size: 10px;
          font-weight: 950;
          text-decoration: none;
        }

        .account-notice {
          padding: 16px;
          margin-bottom: 35px;
          border: 1px solid #e5ddff;
          border-radius: 12px;
          background: #f2efff;
          color: #77718f;
          font-size: 10px;
          line-height: 1.9;
        }

        .account-notice strong { color: #6043cb; }

        .account-footer {
          padding: 27px 0;
          border-top: 1px solid #e8ebf1;
          color: #8790a2;
          font-size: 11px;
          text-align: center;
        }

        @media (max-width: 850px) {
          .account-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 600px) {
          .account-header { min-height: 68px; }
          .account-logo { font-size: 23px; }
          .account-nav { gap: 12px; }
          .account-nav a { font-size: 10px; }

          .account-hero {
            align-items: flex-start;
            flex-direction: column;
            padding: 20px;
          }

          .account-profile h1 { font-size: 21px; }
          .account-avatar {
            width: 60px;
            height: 60px;
          }

          .account-grid { gap: 10px; }
          .account-card {
            gap: 9px;
            padding: 13px;
          }

          .account-card-icon {
            width: 35px;
            height: 35px;
          }

          .account-card h3 { font-size: 10px; }
          .account-card p { font-size: 9px; }

          .account-promo {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}</style>

      <header className="account-container account-header">
        <Link href="/" className="account-logo">
          KAV<span>O</span>RA.
        </Link>

        <nav className="account-nav">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/wishlist">Wishlist</Link>
          <Link href="/cart">Cart</Link>
        </nav>
      </header>

      <div className="account-container">
        <Link href="/" className="account-back">
          <ArrowLeft size={15} />
          Back to shopping
        </Link>

        <section className="account-hero">
          <div className="account-profile">
            <div className="account-avatar">
              <UserRound size={38} />
            </div>

            <div>
              <h1>Welcome to KAVORA</h1>
              <p>
                Your shopping experience starts here.
                <br />
                Sign in or create an account to get started.
              </p>

              <div className="account-status">
                <ShieldCheck size={13} />
                CUSTOMER ACCOUNT PREVIEW
              </div>
            </div>
          </div>

          <div className="account-auth-actions">
            <Link href="/login" className="primary">
              <LogIn size={15} />
              Sign In
            </Link>

            <Link href="/register">
              <UserPlus size={15} />
              Create Account
            </Link>
          </div>
        </section>

        <section className="account-section">
          <div className="account-section-heading">
            <h2>My Account</h2>
            <p>Everything you need to manage your shopping.</p>
          </div>

          <div className="account-grid">
            {accountLinks.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  href={item.href}
                  className="account-card"
                  key={item.title}
                >
                  <div
                    className={`account-card-icon ${item.color}`}
                  >
                    <Icon size={20} />
                  </div>

                  <div className="account-card-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>

                  <ChevronRight
                    size={16}
                    className="account-card-arrow"
                  />
                </Link>
              );
            })}
          </div>
        </section>

        <section className="account-promo">
          <div className="account-promo-content">
            <div className="account-promo-icon">
              <Sparkles size={23} />
            </div>

            <div>
              <h3>Discover more on KAVORA</h3>
              <p>
                Explore products, discover sellers and find
                something special.
              </p>
            </div>
          </div>

          <Link href="/products">
            Start Shopping
            <ArrowRight size={15} />
          </Link>
        </section>

        <div className="account-notice">
          <strong>Account development preview:</strong> This
          page is currently a frontend interface. Customer
          registration, sign-in, order history, delivery
          addresses and account settings will be connected
          during the authentication and customer-account phase.
        </div>

        <footer className="account-footer">
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
