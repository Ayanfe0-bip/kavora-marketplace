"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("KAVORA application error:", error);
  }, [error]);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#faf9f6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "480px" }}>
        <div
          style={{
            width: "76px",
            height: "76px",
            borderRadius: "22px",
            background: "#10182c",
            color: "#e8c98f",
            display: "grid",
            placeItems: "center",
            margin: "0 auto 28px",
          }}
        >
          <AlertTriangle size={34} />
        </div>

        <p
          style={{
            color: "#c69b55",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "4px",
            marginBottom: "16px",
          }}
        >
          KAVORA
        </p>

        <h1
          style={{
            color: "#10182c",
            fontSize: "30px",
            marginBottom: "14px",
          }}
        >
          Something went wrong
        </h1>

        <p
          style={{
            color: "#737987",
            fontSize: "15px",
            lineHeight: 1.8,
            marginBottom: "28px",
          }}
        >
          We couldn't complete your request right now.
          Please try again. Your shopping experience
          matters to us.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <button
            onClick={() => reset()}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "9px",
              padding: "14px 22px",
              border: "none",
              borderRadius: "8px",
              background: "#10182c",
              color: "white",
              fontWeight: 600,
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            <RefreshCw size={17} />
            Try Again
          </button>

          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "9px",
              padding: "14px 22px",
              border: "1px solid #dedbd3",
              borderRadius: "8px",
              color: "#10182c",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "14px",
            }}
          >
            <Home size={17} />
            Go Home
          </Link>
        </div>

        <p
          style={{
            marginTop: "45px",
            color: "#a0a3aa",
            fontSize: "12px",
          }}
        >
          KAVORA — Shop Everything. Discover More.
        </p>
      </div>
    </main>
  );
            }
