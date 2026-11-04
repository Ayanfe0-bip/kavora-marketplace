"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShoppingBag,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [notice, setNotice] = useState("");

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setNotice(
      "Login is not connected yet. Customer authentication will be enabled in Phase 3."
    );
  }

  return (
    <main className="login-page">
      <div className="login-wrapper">
        <Link href="/" className="brand">
          <span className="brand-icon">
            <ShoppingBag size={24} />
          </span>
          <span>
            KAVORA<span className="brand-dot">.</span>
            <small>SHOP EVERYTHING. DISCOVER MORE.</small>
          </span>
        </Link>

        <div className="login-card">
          <div className="welcome-icon">
            <Lock size={25} />
          </div>

          <span className="eyebrow">WELCOME BACK</span>
          <h1>Sign in to KAVORA</h1>
          <p className="subtitle">
            Access your account, discover products and manage your orders.
          </p>

          {notice && (
            <div className="notice">
              <CheckCircle2 size={19} />
              <span>{notice}</span>
            </div>
          )}

          <form onSubmit={handleLogin}>
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
              Password
              <div className="input-wrap">
                <Lock size={18} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
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
            </label>

            <div className="form-options">
              <label className="remember">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(event) => setRemember(event.target.checked)}
                />
                Remember me
              </label>

              <Link href="/forgot-password">Forgot password?</Link>
            </div>

            <button type="submit" className="login-button">
              Sign In <ArrowRight size={18} />
            </button>
          </form>

          <div className="divider">
            <span>NEW TO KAVORA?</span>
          </div>

          <Link href="/register" className="register-button">
            Create an Account
          </Link>

          <div className="security-note">
            <ShieldCheck size={17} />
            <span>Your shopping experience matters to us.</span>
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
        .login-page {
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

        .login-wrapper {
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

        .login-card {
          background: white;
          padding: 38px;
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
          margin-bottom: 22px;
        }

        .eyebrow {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
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
          margin: 0 0 27px;
        }

        form label {
          display: block;
          font-size: 13px;
          font-weight: 700;
          color: #354054;
          margin-bottom: 18px;
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
          padding: 14px 0;
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

        .form-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          margin: 3px 0 23px;
        }

        .remember {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #737c8e;
          font-size: 12px;
          font-weight: 500;
          margin: 0;
        }

        .remember input {
          accent-color: #7655e8;
        }

        .form-options a {
          font-size: 12px;
          color: #7655e8;
          font-weight: 700;
          text-decoration: none;
        }

        .login-button {
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
          transition: background 0.2s;
        }

        .login-button:hover {
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
          margin: 26px 0 18px;
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

        .register-button {
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

        .register-button:hover {
          background: #f7f5ff;
        }

        .security-note {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          color: #9299a8;
          font-size: 11px;
          margin-top: 25px;
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
          .login-card {
            padding: 26px 21px;
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
