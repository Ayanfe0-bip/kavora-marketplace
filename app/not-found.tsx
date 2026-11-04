import Link from "next/link";
import { ArrowLeft, Search, ShoppingBag } from "lucide-react";

export default function NotFound() {
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
      <div style={{ maxWidth: "520px" }}>
        <div
          style={{
            width: "76px",
            height: "76px",
            margin: "0 auto 28px",
            borderRadius: "22px",
            background: "#10182c",
            color: "#e8c98f",
            display: "grid",
            placeItems: "center",
          }}
        >
          <ShoppingBag size={34} />
        </div>

        <p
          style={{
            color: "#c69b55",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "4px",
            marginBottom: "14px",
          }}
        >
          KAVORA
        </p>

        <h1
          style={{
            fontSize: "clamp(64px, 15vw, 110px)",
            lineHeight: 1,
            color: "#10182c",
            fontWeight: 800,
            margin: "0 0 18px",
          }}
        >
          404
        </h1>

        <h2
          style={{
            fontSize: "25px",
            color: "#10182c",
            marginBottom: "12px",
          }}
        >
          Looks like this page is missing.
        </h2>

        <p
          style={{
            color: "#737987",
            fontSize: "15px",
            lineHeight: 1.8,
            marginBottom: "30px",
          }}
        >
          The page you&apos;re looking for may have moved,
          been removed, or may not exist yet.
          Let&apos;s get you back to discovering something great.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "9px",
              padding: "14px 22px",
              borderRadius: "8px",
              background: "#10182c",
              color: "white",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "14px",
            }}
          >
            <ArrowLeft size={17} />
            Back to Home
          </Link>

          <Link
            href="/#categories"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "9px",
              padding: "14px 22px",
              borderRadius: "8px",
              border: "1px solid #dedbd3",
              color: "#10182c",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "14px",
            }}
          >
            <Search size={17} />
            Explore Categories
          </Link>
        </div>

        <p
          style={{
            marginTop: "55px",
            color: "#a0a3aa",
            fontSize: "12px",
          }}
        >
          © {new Date().getFullYear()} KAVORA. Shop Everything. Discover More.
        </p>
      </div>
    </main>
  );
}
