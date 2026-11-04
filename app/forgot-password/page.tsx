"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShoppingBag,
  Mail,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  KeyRound,
} from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [notice, setNotice] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitted(true);
    setNotice(
      "Password recovery is not connected yet. Email recovery will be enabled in Phase 3."
    );
  }

  return (
    <main className="recovery-page">
      <div className="recovery-wrapper">
        <Link href="/" className="brand">
          <span className="brand-icon">
            <ShoppingBag size={24} />
          </span>

          <span>
            KAVORA<span className="brand-dot">.</span>
            <small>SHOP EVERYTHING. DISCOVER MORE.</small>
          </span>
        </Link>

        <section className="recovery-card">
          <div className="recovery-icon">
            {submitted ? (
              <CheckCircle2 size={27} />
            ) : (
              <KeyRound size={27} />
            )}
          </div>

          <span className="eyebrow">ACCOUNT RECOVERY</span>

          <h1>
            {submitted ? "Request Received" : "Forgot Your Password?"}
          </h1>

          <p className="description">
            {submitted
              ? "Your password recovery request has been demonstrated successfully."
              : "Don't worry. Enter the email address associated with your KAVORA account to begin the password recovery process."}
          </p>

          {notice && (
            <div className="notice">
              <CheckCircle2 size={19} />
              <span>{notice}</span>
            </div>
          )}

          {!submitted && (
            <form onSubmit={handleSubmit}>
              <label>
                Email Address
                <div className="input-wrap">
                  <Mail size={18} />

                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>
              </label>

              <button type="submit" className="submit-button">
                Request Password Reset
                <ArrowRight size={18} />
              </button>
            </form>
          )}

          {submitted && (
            <div className="submitted-box">
              <Mail size={22} />
              <div>
                <strong>Recovery email preview</strong>
                <p>{email}</p>
                <span>
                  Actual recovery emails will be available after authentication
                  is connected.
                </span>
              </div>
            </div>
          )}

          <Link href="/login" className="back-link">
            <ArrowLeft size={17} />
            Back to Sign In
          </Link>

          <div className="security-note">
            <ShieldCheck size={18} />
            <span>Your account security matters to KAVORA.</span>
          </div>
        </section>

        <div className="footer">
          <Link href="/">Home</Link>
          <Link href="/support">Help Centre</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} KAVORA. All rights reserved.
        </p>
      </div>

      <style jsx>{`
        .recovery-page {
          min-height: 100vh;
          padding: 35px 18px;
          background:
            radial-gradient(circle at 10% 10%, #eee9ff 0, transparent 35%),
            radial-gradient(circle at 90% 90%, #e8edff 0, transparent 35%),
            #f8f9fc;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #172033;
        }

        .recovery-wrapper {
          width: 100%;
          max-width: 460px;
        }

        .brand {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 11px;
          margin-bottom: 28px;
          text-decoration: none;
          color: #172033;
          font-size: 23px;
          font-weight: 900;
          letter-spacing: -1px;
        }

        .brand-icon {
          width: 45px;
          height: 45px;
          border-radius: 13px;
          background: #7655e8;
          color: white;
          display: grid;
          place-items: center;
        }

        .brand-dot {
          color: #7655e8;
        }

        .brand small {
          display: block;
          font-size: 8px;
          letter-spacing: 1.4px;
          color: #858da0;
          margin-top: 3px;
        }

        .recovery-card {
          background: white;
          padding: 38px;
          border: 1px solid #ececf3;
          border-radius: 20px;
          box-shadow: 0 18px 60px rgba(31, 35, 60, 0.07);
        }

        .recovery-icon {
          width: 55px;
          height: 55px;
          border-radius: 16px;
          background: #f0edff;
          color: #7655e8;
          display: grid;
          place-items: center;
          margin-bottom: 22px;
        }

        .eyebrow {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: #7655e8;
        }

        h1 {
          font-size: 28px;
          letter-spacing: -1px;
          margin: 9px 0;
        }

        .description {
          font-size: 13px;
          line-height: 1.8;
          color: #858d9d;
          margin: 0 0 26px;
        }

        form label {
          display: block;
          font-size: 13px;
          font-weight: 700;
          color: #354054;
          margin-bottom: 20px;
        }

        .input-wrap {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 0 13px;
          margin-top: 8px;
          border: 1px solid #e1e4ec;
          border-radius: 10px;
          color: #9299a8;
        }

        .input-wrap:focus-within {
          border-color: #7655e8;
        }

        .input-wrap input {
          width: 100%;
          min-width: 0;
          padding: 14px 0;
          border: 0;
          outline: none;
          background: transparent;
          color: #172033;
          font-size: 14px;
        }

        .submit-button {
          width: 100%;
          border: 0;
          border-radius: 10px;
          background: #7655e8;
          color: white;
          padding: 15px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          font-weight: 800;
          cursor: pointer;
        }

        .submit-button:hover {
          background: #6241d2;
        }

        .notice {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 13px;
          margin-bottom: 20px;
          border-radius: 9px;
          background: #fff5df;
          color: #8b6722;
          font-size: 12px;
          line-height: 1.6;
        }

        .notice svg {
          flex-shrink: 0;
        }

        .submitted-box {
          display: flex;
          align-items: flex-start;
          gap: 13px;
          background: #f0edff;
          color: #7655e8;
          border-radius: 12px;
          padding: 17px;
          margin-bottom: 22px;
        }

        .submitted-box svg {
          flex-shrink: 0;
        }

        .submitted-box strong {
          font-size: 13px;
        }

        .submitted-box p {
          color: #172033;
          font-size: 13px;
          font-weight: 700;
          margin: 6px 0;
          word-break: break-word;
        }

        .submitted-box span {
          display: block;
          color: #71668e;
          font-size: 11px;
          line-height: 1.6;
        }

        .back-link {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-top: 25px;
          color: #7655e8;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
        }

        .security-note {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          color: #9299a8;
          font-size: 11px;
          margin-top: 27px;
        }

        .security-note svg {
          color: #7655e8;
        }

        .footer {
          display: flex;
          justify-content: center;
          gap: 18px;
          flex-wrap: wrap;
          margin-top: 25px;
        }

        .footer a {
          text-decoration: none;
          color: #777f90;
          font-size: 11px;
        }

        .copyright {
          text-align: center;
          color: #a0a6b2;
          font-size: 10px;
          margin-top: 15px;
        }

        @media (max-width: 480px) {
          .recovery-card {
            padding: 27px 21px;
          }

          h1 {
            font-size: 24px;
          }
        }
      `}</style>
    </main>
  );
      }
