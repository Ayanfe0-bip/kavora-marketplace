"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Package,
  ShoppingBag,
  Clock,
  CheckCircle2,
  Truck,
  Search,
  FileText,
  Headphones,
  ChevronRight,
  RefreshCw,
} from "lucide-react";

const orders = [
  {
    id: "KAV-2026-001",
    date: "November 2, 2026",
    status: "Delivered",
    statusColor: "delivered",
    total: 85000,
    quantity: 1,
    product: "Premium Human Hair Wig",
    vendor: "Ekundayo Beauty & Lifestyle",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500",
  },
  {
    id: "KAV-2026-002",
    date: "November 3, 2026",
    status: "Processing",
    statusColor: "processing",
    total: 37000,
    quantity: 2,
    product: "Luxury Hair Treatment Set",
    vendor: "Ekundayo Beauty & Lifestyle",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500",
  },
  {
    id: "KAV-2026-003",
    date: "November 4, 2026",
    status: "Pending Payment",
    statusColor: "pending",
    total: 12000,
    quantity: 1,
    product: "Elegant Beauty Accessories",
    vendor: "Ekundayo Beauty & Lifestyle",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500",
  },
];

const formatPrice = (price: number) =>
  `₦${price.toLocaleString("en-NG")}`;

export default function OrdersPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fc] text-[#172033]">
      <style>{`
        * { box-sizing: border-box; }

        .orders-container {
          width: min(1100px, 92%);
          margin: auto;
        }

        .orders-header {
          min-height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #e8ebf1;
        }

        .orders-logo {
          color: #172033;
          font-size: 27px;
          font-weight: 950;
          letter-spacing: -1.5px;
          text-decoration: none;
        }

        .orders-logo span { color: #7655e8; }

        .orders-nav {
          display: flex;
          gap: 22px;
        }

        .orders-nav a {
          color: #657086;
          font-size: 12px;
          font-weight: 800;
          text-decoration: none;
        }

        .orders-nav a:hover { color: #7655e8; }

        .orders-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin: 30px 0 23px;
          color: #7655e8;
          font-size: 12px;
          font-weight: 900;
          text-decoration: none;
        }

        .orders-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 30px;
        }

        .orders-heading {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .orders-icon {
          display: grid;
          width: 50px;
          height: 50px;
          place-items: center;
          border-radius: 15px;
          background: #f0edff;
          color: #7655e8;
        }

        .orders-heading h1 {
          margin: 0;
          font-size: clamp(27px, 4vw, 35px);
          font-weight: 950;
          letter-spacing: -1px;
        }

        .orders-heading p {
          margin: 6px 0 0;
          color: #8992a4;
          font-size: 11px;
        }

        .orders-shop {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          border-radius: 8px;
          background: #7655e8;
          color: white;
          font-size: 10px;
          font-weight: 950;
          text-decoration: none;
        }

        .orders-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
          margin-bottom: 30px;
        }

        .orders-stat {
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 19px;
          border: 1px solid #e8eaf1;
          border-radius: 13px;
          background: white;
        }

        .orders-stat-icon {
          display: grid;
          width: 43px;
          height: 43px;
          flex-shrink: 0;
          place-items: center;
          border-radius: 12px;
          background: #f0edff;
          color: #7655e8;
        }

        .orders-stat h3 {
          margin: 0;
          font-size: 20px;
          font-weight: 950;
        }

        .orders-stat p {
          margin: 5px 0 0;
          color: #8992a4;
          font-size: 10px;
        }

        .orders-section-title {
          margin-bottom: 17px;
          font-size: 18px;
          font-weight: 950;
        }

        .orders-list {
          display: grid;
          gap: 15px;
        }

        .order-card {
          overflow: hidden;
          border: 1px solid #e8eaf1;
          border-radius: 14px;
          background: white;
        }

        .order-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          padding: 17px 20px;
          border-bottom: 1px solid #eef0f5;
        }

        .order-reference {
          color: #172033;
          font-size: 12px;
          font-weight: 950;
        }

        .order-date {
          margin-top: 5px;
          color: #929bad;
          font-size: 10px;
        }

        .order-status {
          padding: 7px 11px;
          border-radius: 30px;
          font-size: 9px;
          font-weight: 950;
        }

        .delivered {
          background: #e9f8f0;
          color: #258b5d;
        }

        .processing {
          background: #fff4e5;
          color: #bd7b26;
        }

        .pending {
          background: #f0edff;
          color: #7655e8;
        }

        .order-body {
          display: grid;
          grid-template-columns: 85px 1fr auto;
          align-items: center;
          gap: 17px;
          padding: 19px 20px;
        }

        .order-body img {
          width: 85px;
          height: 85px;
          border-radius: 10px;
          object-fit: cover;
        }

        .order-product h3 {
          margin: 0 0 7px;
          font-size: 13px;
          font-weight: 950;
        }

        .order-product p {
          margin: 0 0 7px;
          color: #929bad;
          font-size: 10px;
        }

        .order-quantity {
          color: #7655e8;
          font-size: 10px;
          font-weight: 900;
        }

        .order-total {
          text-align: right;
        }

        .order-total span {
          display: block;
          margin-bottom: 6px;
          color: #929bad;
          font-size: 9px;
        }

        .order-total strong {
          font-size: 15px;
          font-weight: 950;
        }

        .order-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          padding: 13px 20px;
          border-top: 1px solid #eef0f5;
          background: #fcfcfe;
        }

        .order-bottom a {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #7655e8;
          font-size: 10px;
          font-weight: 900;
          text-decoration: none;
        }

        .order-bottom a:hover { color: #6040ce; }

        .orders-support {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          padding: 22px;
          margin: 30px 0 45px;
          border: 1px solid #e8eaf1;
          border-radius: 14px;
          background: white;
        }

        .orders-support-content {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .orders-support-icon {
          display: grid;
          width: 43px;
          height: 43px;
          flex-shrink: 0;
          place-items: center;
          border-radius: 12px;
          background: #f0edff;
          color: #7655e8;
        }

        .orders-support h3 {
          margin: 0 0 5px;
          font-size: 12px;
          font-weight: 950;
        }

        .orders-support p {
          margin: 0;
          color: #929bad;
          font-size: 10px;
        }

        .orders-support a {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #7655e8;
          font-size: 10px;
          font-weight: 950;
          text-decoration: none;
        }

        .orders-notice {
          padding: 16px;
          margin-bottom: 35px;
          border: 1px solid #e5ddff;
          border-radius: 12px;
          background: #f2efff;
          color: #77718f;
          font-size: 10px;
          line-height: 1.9;
        }

        .orders-notice strong { color: #6043cb; }

        .orders-footer {
          padding: 27px 0;
          border-top: 1px solid #e8ebf1;
          color: #8790a2;
          font-size: 11px;
          text-align: center;
        }

        @media (max-width: 650px) {
          .orders-header { min-height: 68px; }
          .orders-logo { font-size: 23px; }
          .orders-nav { gap: 12px; }
          .orders-nav a { font-size: 10px; }

          .orders-title-row {
            align-items: flex-start;
            flex-direction: column;
          }

          .orders-stats { gap: 8px; }
          .orders-stat {
            align-items: flex-start;
            flex-direction: column;
            gap: 8px;
            padding: 12px;
          }

          .orders-stat h3 { font-size: 17px; }
          .orders-stat p { font-size: 9px; }

          .order-top { padding: 13px; }
          .order-body {
            grid-template-columns: 65px 1fr;
            gap: 12px;
            padding: 13px;
          }

          .order-body img {
            width: 65px;
            height: 75px;
          }

          .order-product h3 { font-size: 11px; }
          .order-total {
            grid-column: 2;
            text-align: left;
          }

          .order-bottom { padding: 12px; }
          .order-bottom a { font-size: 9px; }

          .orders-support {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}</style>

      <header className="orders-container orders-header">
        <Link href="/" className="orders-logo">
          KAV<span>O</span>RA.
        </Link>

        <nav className="orders-nav">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/account">Account</Link>
          <Link href="/support">Support</Link>
        </nav>
      </header>

      <div className="orders-container">
        <Link href="/account" className="orders-back">
          <ArrowLeft size={15} />
          Back to my account
        </Link>

        <section className="orders-title-row">
          <div className="orders-heading">
            <div className="orders-icon">
              <Package size={24} />
            </div>

            <div>
              <h1>My Orders</h1>
              <p>Review your purchases and order progress.</p>
            </div>
          </div>

          <Link href="/products" className="orders-shop">
            <ShoppingBag size={15} />
            Shop Now
          </Link>
        </section>

        <section className="orders-stats">
          <div className="orders-stat">
            <div className="orders-stat-icon">
              <Package size={20} />
            </div>
            <div>
              <h3>03</h3>
              <p>Total Orders</p>
            </div>
          </div>

          <div className="orders-stat">
            <div className="orders-stat-icon">
              <CheckCircle2 size={20} />
            </div>
            <div>
              <h3>01</h3>
              <p>Delivered</p>
            </div>
          </div>

          <div className="orders-stat">
            <div className="orders-stat-icon">
              <Clock size={20} />
            </div>
            <div>
              <h3>02</h3>
              <p>In Progress</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="orders-section-title">
            Recent Orders
          </h2>

          <div className="orders-list">
            {orders.map((order) => (
              <article className="order-card" key={order.id}>
                <div className="order-top">
                  <div>
                    <div className="order-reference">
                      {order.id}
                    </div>
                    <div className="order-date">
                      Placed on {order.date}
                    </div>
                  </div>

                  <span
                    className={`order-status ${order.statusColor}`}
                  >
                    {order.status}
                  </span>
                </div>

                <div className="order-body">
                  <img src={order.image} alt={order.product} />

                  <div className="order-product">
                    <h3>{order.product}</h3>
                    <p>{order.vendor}</p>
                    <div className="order-quantity">
                      Quantity: {order.quantity}
                    </div>
                  </div>

                  <div className="order-total">
                    <span>Order Total</span>
                    <strong>{formatPrice(order.total)}</strong>
                  </div>
                </div>

                <div className="order-bottom">
                  <a href="/support">
                    <Headphones size={14} />
                    Get Help
                  </a>

                  <a href="/orders">
                    View Order Details
                    <ChevronRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="orders-support">
          <div className="orders-support-content">
            <div className="orders-support-icon">
              <Headphones size={21} />
            </div>

            <div>
              <h3>Need help with an order?</h3>
              <p>Our support centre is here to help.</p>
            </div>
          </div>

          <Link href="/support">
            Contact Support
            <ArrowRight size={15} />
          </Link>
        </section>

        <div className="orders-notice">
          <strong>Development preview:</strong> These orders,
          dates and statuses are sample data. No real purchases
          have been made. Live order records, tracking, payment
          confirmation and delivery updates will be connected
          during the order management phase.
        </div>

        <footer className="orders-footer">
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
