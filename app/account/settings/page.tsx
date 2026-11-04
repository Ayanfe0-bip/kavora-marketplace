"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  Bell,
  ShieldCheck,
  Lock,
  Eye,
  EyeOff,
  Save,
  CheckCircle2,
  ChevronRight,
  Settings,
  Trash2,
} from "lucide-react";

export default function AccountSettingsPage() {
  const [name, setName] = useState("Customer Name");
  const [email, setEmail] = useState("customer@example.com");
  const [phone, setPhone] = useState("08000000000");

  const [emailNotifications, setEmailNotifications] = useState(true);
  const [orderNotifications, setOrderNotifications] = useState(true);
  const [promotionNotifications, setPromotionNotifications] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [notice, setNotice] = useState("");

  function saveProfile(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice("Profile changes saved in this preview.");
  }

  return (
    <main className="settings-page">
      <div className="container">
        <Link href="/account" className="back-link">
          <ArrowLeft size={17} />
          Back to My Account
        </Link>

        <div className="heading">
          <div className="heading-icon">
            <Settings size={25} />
          </div>

          <div>
            <span className="eyebrow">YOUR ACCOUNT</span>
            <h1>Account Settings</h1>
            <p>Manage your personal information and preferences.</p>
          </div>
        </div>

        {notice && (
          <div className="notice">
            <CheckCircle2 size={18} />
            <span>{notice}</span>
            <button onClick={() => setNotice("")}>×</button>
          </div>
        )}

        <div className="settings-layout">
          <aside className="settings-sidebar">
            <a href="#profile" className="active">
              <User size={17} /> Personal Information
            </a>

            <a href="#notifications">
              <Bell size={17} /> Notifications
            </a>

            <a href="#security">
              <ShieldCheck size={17} /> Security
            </a>

            <a href="#account">
              <Settings size={17} /> Account Management
            </a>
          </aside>

          <div className="settings-content">
            <section className="settings-card" id="profile">
              <div className="section-heading">
                <div className="section-icon">
                  <User size={19} />
                </div>
                <div>
                  <h2>Personal Information</h2>
                  <p>Update the information associated with your account.</p>
                </div>
              </div>

              <form onSubmit={saveProfile}>
                <label>
                  Full Name
                  <div className="input-wrap">
                    <User size={17} />
                    <input
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      required
                    />
                  </div>
                </label>

                <label>
                  Email Address
                  <div className="input-wrap">
                    <Mail size={17} />
                    <input
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </div>
                </label>

                <label>
                  Phone Number
                  <div className="input-wrap">
                    <Phone size={17} />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      required
                    />
                  </div>
                </label>

                <button className="primary-button" type="submit">
                  <Save size={17} />
                  Save Changes
                </button>
              </form>
            </section>

            <section className="settings-card" id="notifications">
              <div className="section-heading">
                <div className="section-icon">
                  <Bell size={19} />
                </div>
                <div>
                  <h2>Notification Preferences</h2>
                  <p>Choose the updates you would like to receive.</p>
                </div>
              </div>

              <div className="preference">
                <div>
                  <strong>Email Notifications</strong>
                  <p>Receive important account updates by email.</p>
                </div>

                <button
                  className={`toggle ${emailNotifications ? "on" : ""}`}
                  onClick={() =>
                    setEmailNotifications(!emailNotifications)
                  }
                  aria-label="Toggle email notifications"
                >
                  <span />
                </button>
              </div>

              <div className="preference">
                <div>
                  <strong>Order Updates</strong>
                  <p>Receive updates about purchases and deliveries.</p>
                </div>

                <button
                  className={`toggle ${orderNotifications ? "on" : ""}`}
                  onClick={() =>
                    setOrderNotifications(!orderNotifications)
                  }
                  aria-label="Toggle order notifications"
                >
                  <span />
                </button>
              </div>

              <div className="preference">
                <div>
                  <strong>Promotions and Offers</strong>
                  <p>Hear about discounts, deals and special offers.</p>
                </div>

                <button
                  className={`toggle ${promotionNotifications ? "on" : ""}`}
                  onClick={() =>
                    setPromotionNotifications(!promotionNotifications)
                  }
                  aria-label="Toggle promotional notifications"
                >
                  <span />
                </button>
              </div>

              <p className="small-note">
                Notification preferences are temporary until account
                settings are connected to the database.
              </p>
            </section>

            <section className="settings-card" id="security">
              <div className="section-heading">
                <div className="section-icon">
                  <ShieldCheck size={19} />
                </div>
                <div>
                  <h2>Password and Security</h2>
                  <p>Keep your KAVORA account protected.</p>
                </div>
              </div>

              <div className="security-row">
                <div className="security-icon">
                  <Lock size={19} />
                </div>

                <div className="security-text">
                  <strong>Password</strong>
                  <p>Change your account password securely.</p>
                </div>

                <button
                  className="secondary-button"
                  onClick={() =>
                    setNotice(
                      "Password management will be available after authentication is connected."
                    )
                  }
                >
                  Change
                  <ChevronRight size={16} />
                </button>
              </div>

              <div className="security-row">
                <div className="security-icon">
                  <ShieldCheck size={19} />
                </div>

                <div className="security-text">
                  <strong>Account Protection</strong>
                  <p>Security features will be configured in Phase 3.</p>
                </div>

                <span className="coming-badge">Coming Soon</span>
              </div>
            </section>

            <section className="settings-card" id="account">
              <div className="section-heading">
                <div className="section-icon">
                  <Settings size={19} />
                </div>
                <div>
                  <h2>Account Management</h2>
                  <p>Other account-related options.</p>
                </div>
              </div>

              <Link href="/account/addresses" className="management-link">
                <span>
                  <User size={18} />
                  Manage Delivery Addresses
                </span>
                <ChevronRight size={18} />
              </Link>

              <Link href="/support" className="management-link">
                <span>
                  <Mail size={18} />
                  Contact Customer Support
                </span>
                <ChevronRight size={18} />
              </Link>

              <button
                className="management-link danger-link"
                onClick={() =>
                  setNotice(
                    "Account deletion is not available in this preview."
                  )
                }
              >
                <span>
                  <Trash2 size={18} />
                  Delete Account
                </span>
                <ChevronRight size={18} />
              </button>
            </section>

            <div className="preview-note">
              <ShieldCheck size={20} />
              <div>
                <strong>KAVORA Account Preview</strong>
                <p>
                  This settings page currently demonstrates the interface.
                  Profile changes and preferences are not yet stored
                  permanently. Secure account management will be connected
                  during Phase 3.
                </p>
              </div>
            </div>

            <div className="bottom-links">
              <Link href="/account">My Account</Link>
              <Link href="/orders">My Orders</Link>
              <Link href="/support">Help Centre</Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .settings-page {
          min-height: 100vh;
          background: #f8f9fc;
          padding: 40px 18px 70px;
          color: #172033;
        }

        .container {
          max-width: 1100px;
          margin: auto;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #737b8d;
          text-decoration: none;
          font-size: 14px;
          margin-bottom: 28px;
        }

        .heading {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 30px;
        }

        .heading-icon,
        .section-icon {
          display: grid;
          place-items: center;
          background: #f0edff;
          color: #7655e8;
          border-radius: 13px;
          flex-shrink: 0;
        }

        .heading-icon {
          width: 55px;
          height: 55px;
        }

        .eyebrow {
          color: #7655e8;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        h1 {
          font-size: clamp(26px, 5vw, 36px);
          margin: 5px 0;
          letter-spacing: -1px;
        }

        .heading p,
        .section-heading p {
          color: #81899a;
          font-size: 13px;
          margin: 0;
          line-height: 1.6;
        }

        .notice {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #eaf8ef;
          color: #187344;
          padding: 14px;
          border-radius: 10px;
          margin-bottom: 20px;
          font-size: 13px;
        }

        .notice button {
          margin-left: auto;
          background: transparent;
          border: 0;
          color: inherit;
          font-size: 21px;
          cursor: pointer;
        }

        .settings-layout {
          display: grid;
          grid-template-columns: 230px minmax(0, 1fr);
          gap: 22px;
          align-items: start;
        }

        .settings-sidebar {
          background: white;
          border: 1px solid #e9ebf2;
          border-radius: 14px;
          padding: 10px;
          position: sticky;
          top: 20px;
        }

        .settings-sidebar a {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 13px 11px;
          color: #687286;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          border-radius: 9px;
          margin-bottom: 3px;
        }

        .settings-sidebar a.active,
        .settings-sidebar a:hover {
          background: #f0edff;
          color: #7655e8;
        }

        .settings-content {
          min-width: 0;
        }

        .settings-card {
          background: white;
          border: 1px solid #e9ebf2;
          border-radius: 15px;
          padding: 24px;
          margin-bottom: 18px;
          scroll-margin-top: 20px;
        }

        .section-heading {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-bottom: 23px;
        }

        .section-icon {
          width: 42px;
          height: 42px;
        }

        .section-heading h2 {
          font-size: 17px;
          margin: 0 0 5px;
        }

        .settings-card form label {
          display: block;
          color: #394357;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 17px;
        }

        .input-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 8px;
          padding: 0 13px;
          border: 1px solid #e2e5ed;
          border-radius: 9px;
          color: #9299a7;
        }

        .input-wrap:focus-within {
          border-color: #7655e8;
        }

        .input-wrap input {
          width: 100%;
          min-width: 0;
          border: 0;
          outline: none;
          padding: 13px 0;
          font-size: 14px;
          color: #172033;
          background: transparent;
        }

        .primary-button {
          border: 0;
          border-radius: 9px;
          background: #7655e8;
          color: white;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 13px 18px;
          font-weight: 700;
          cursor: pointer;
        }

        .preference {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          padding: 17px 0;
          border-bottom: 1px solid #eff0f5;
        }

        .preference:last-of-type {
          border-bottom: 0;
        }

        .preference strong,
        .security-text strong {
          font-size: 14px;
        }

        .preference p,
        .security-text p {
          font-size: 12px;
          color: #858d9d;
          margin: 5px 0 0;
          line-height: 1.5;
        }

        .toggle {
          width: 43px;
          height: 24px;
          border: 0;
          border-radius: 30px;
          background: #d9dce5;
          padding: 3px;
          cursor: pointer;
          flex-shrink: 0;
          transition: background 0.2s;
        }

        .toggle span {
          display: block;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: white;
          transition: transform 0.2s;
        }

        .toggle.on {
          background: #7655e8;
        }

        .toggle.on span {
          transform: translateX(19px);
        }

        .small-note {
          color: #9299a7;
          font-size: 11px;
          line-height: 1.5;
          margin-top: 15px;
        }

        .security-row {
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 16px 0;
          border-bottom: 1px solid #eff0f5;
        }

        .security-row:last-child {
          border-bottom: 0;
        }

        .security-icon {
          width: 39px;
          height: 39px;
          border-radius: 10px;
          background: #f4f5f9;
          color: #7655e8;
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }

        .security-text {
          flex: 1;
          min-width: 0;
        }

        .secondary-button {
          display: flex;
          align-items: center;
          gap: 4px;
          border: 1px solid #e5e1fb;
          background: #f8f6ff;
          color: #7655e8;
          padding: 9px 12px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
        }

        .coming-badge {
          color: #8b6a27;
          background: #fff5df;
          padding: 7px 9px;
          border-radius: 7px;
          font-size: 10px;
          font-weight: 700;
          white-space: nowrap;
        }

        .management-link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 15px 0;
          border: 0;
          border-bottom: 1px solid #eff0f5;
          background: transparent;
          text-decoration: none;
          color: #4d586d;
          font-size: 13px;
          cursor: pointer;
          text-align: left;
        }

        .management-link:last-child {
          border-bottom: 0;
        }

        .management-link span {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .danger-link {
          color: #d64c4c;
        }

        .preview-note {
          display: flex;
          gap: 13px;
          padding: 18px;
          background: #f0edff;
          border-radius: 12px;
          color: #7655e8;
        }

        .preview-note strong {
          font-size: 13px;
        }

        .preview-note p {
          color: #71668e;
          font-size: 12px;
          line-height: 1.7;
          margin: 5px 0 0;
        }

        .bottom-links {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          margin-top: 25px;
        }

        .bottom-links a {
          color: #7655e8;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
        }

        @media (max-width: 760px) {
          .settings-layout {
            grid-template-columns: 1fr;
          }

          .settings-sidebar {
            position: static;
            display: flex;
            overflow-x: auto;
            gap: 5px;
          }

          .settings-sidebar a {
            white-space: nowrap;
            margin: 0;
          }
        }

        @media (max-width: 480px) {
          .settings-card {
            padding: 18px;
          }

          .heading {
            align-items: flex-start;
          }

          .security-row {
            flex-wrap: wrap;
          }

          .secondary-button,
          .coming-badge {
            margin-left: 51px;
          }
        }
      `}</style>
    </main>
  );
                }
