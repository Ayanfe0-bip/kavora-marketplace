"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShoppingBag,
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [notice, setNotice] = useState("");

  function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (password.length < 8) {
      setNotice("Your password must contain at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setNotice("Your passwords do not match. Please check and try again.");
      return;
    }

    if (!acceptedTerms) {
      setNotice("Please accept the Terms and Conditions to continue.");
      return;
    }

    setNotice(
      "Registration is not connected yet. Account creation will be enabled in Phase 3."
    );
  }

  return (
    <main className="register-page">
      <div className="register-wrapper">
        <Link href="/" className="brand">
          <span className="brand-icon">
            <ShoppingBag size={24} />
          </span>

          <span>
            KAVORA<span className="brand-dot">.</span>
            <small>SHOP EVERYTHING. DISCOVER MORE.</small>
          </span>
        </Link>

        <div className="register-card">
          <div className="welcome-icon">
            <User size={25} />
          </div>

          <span className="eyebrow">JOIN THE KAVORA COMMUNITY</span>
          <h1>Create Your Account</h1>

          <p className="subtitle">
            Discover products, shop from trusted stores and manage your
            shopping experience in one place.
          </p>

          {notice && (
            <div className="notice">
              <CheckCircle2 size={19} />
              <span>{notice}</span>
            </div>
          )}

          <form onSubmit={handleRegister}>
            <label>
              Full Name
              <div className="input-wrap">
                <User size={18} />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />
              </div>
            </label>

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

            <label>
              Phone Number
              <div className="input-wrap">
                <Phone size={18} />
                <input
                  type="tel"
                  placeholder="e.g. 08012345678"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  required
                />
              </div>
            </label>

            <label>
              Password
              <div className="input-wrap">
                <Lock size={18} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  minLength={8}
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
              <span className="field-hint">
                Use at least 8 characters.
              </span>
            </label>

            <label>
              Confirm Password
              <div className="input-wrap">
                <Lock size={18} />
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Enter your password again"
                  value={confirmPassword}
                  onChange={(event) =>
                    setConfirmPassword(event.target.value)
                  }
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirm(!showConfirm)}
                  aria-label={
                    showConfirm ? "Hide password" : "Show password"
                  }
                >
                  {showConfirm ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </label>

            <label className="terms">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(event) =>
                  setAcceptedTerms(event.target.checked)
                }
              />

              <span>
                I agree to KAVORA's{" "}
                <Link href="/terms">Terms and Conditions</Link> and{" "}
                <Link href="/privacy">Privacy Policy</Link>.
              </span>
            </label>

            <button type="submit" className="register-button">
              Create Account <ArrowRight size={18} />
            </button>
          </form>

          <div className="divider">
            <span>ALREADY HAVE AN ACCOUNT?</span>
          </div>

          <Link href="/login" className="login-button">
            Sign In Instead
          </Link>

          <div className="security-note">
            <ShieldCheck size={17} />
            <span>Your information deserves protection.</span>
          </div>
        </div>

        <div className="footer">
          <Link href="/">Home</Link>
          <Link href="/about">About KAVORA</Link>
          <Link href="/support">Help Centre</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} KAVORA. All rights reserved.
        </p>
      </div>

      <style jsx>{`
        .register-page {
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

        .register-wrapper {
          width: 100%;
          max-width: 480px;
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

        .register-card {
          background: white;
          padding: 35px;
          border: 1px solid #ececf3;
          border-radius: 20px;
          box-shadow: 0 18px 60px rgba(31, 35, 60, 0.07);
        }

        .welcome-icon {
          width: 52px;
          height: 52px;
          border-radius: 15px;
          background: #f0edff;
          color: #7655e8;
          display: grid;
          place-items: center;
          margin-bottom: 20px;
        }

        .eyebrow {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.3px;
          color: #7655e8;
        }

        h1 {
          font-size: 29px;
          letter-spacing: -1px;
          margin: 8px 0;
        }

        .subtitle {
          font-size: 13px;
          line-height: 1.7;
          color: #858d9d;
          margin: 0 0 25px;
        }

        form > label:not(.terms) {
          display: block;
          font-size: 13px;
          font-weight: 700;
          color: #354054;
          margin-bottom: 16px;
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
          transition: border 0.2s;
        }

        .input-wrap:focus-within {
          border-color: #7655e8;
        }

        .input-wrap input {
          width: 100%;
          min-width: 0;
          padding: 13px 0;
          border: 0;
          outline: none;
          background: transparent;
          color: #172033;
          font-size: 14px;
        }

        .password-toggle {
          border: 0;
          background: transparent;
          color: #858d9d;
          display: grid;
          place-items: center;
          cursor: pointer;
          padding: 4px;
        }

        .field-hint {
          display: block;
          margin-top: 6px;
          font-size: 10px;
          color: #9299a8;
          font-weight: 400;
        }

        .terms {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          margin: 20px 0;
          color: #737c8e;
          font-size: 11px;
          line-height: 1.7;
          font-weight: 500;
        }

        .terms input {
          margin-top: 3px;
          accent-color: #7655e8;
          flex-shrink: 0;
        }

        .terms a {
          color: #7655e8;
          text-decoration: none;
          font-weight: 700;
        }

        .register-button {
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
          font-size: 14px;
          font-weight: 800;
          cursor: pointer;
        }

        .register-button:hover {
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

        .divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 25px 0 17px;
          color: #a0a6b2;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .divider::before,
        .divider::after {
          content: "";
          height: 1px;
          background: #eceef3;
          flex: 1;
        }

        .login-button {
          display: flex;
          justify-content: center;
          padding: 14px;
          border: 1px solid #ddd7fa;
          border-radius: 10px;
          color: #7655e8;
          font-size: 13px;
          font-weight: 800;
          text-decoration: none;
        }

        .login-button:hover {
          background: #f7f5ff;
        }

        .security-note {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          color: #9299a8;
          font-size: 11px;
          margin-top: 24px;
        }

        .security-note svg {
          color: #7655e8;
        }

        .footer {
          display: flex;
          justify-content: center;
          gap: 17px;
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
          .register-card {
            padding: 25px 20px;
          }

          h1 {
            font-size: 25px;
          }

          .footer {
            gap: 12px;
          }
        }
      `}</style>
    </main>
  );
              }
