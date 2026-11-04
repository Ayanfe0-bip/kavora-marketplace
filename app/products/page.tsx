import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Search,
  SlidersHorizontal,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

const categories = [
  "All Products",
  "Fashion",
  "Beauty",
  "Electronics",
  "Home & Living",
  "Health",
  "Accessories",
];

export default function ProductsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#faf9f6",
        color: "#10182c",
      }}
    >
      <header
        style={{
          background: "#fff",
          borderBottom: "1px solid #e9e7e1",
        }}
      >
        <div
          className="container flex-between"
          style={{ minHeight: "76px" }}
        >
          <Link
            href="/"
            className="brand-text"
            style={{ fontSize: "26px" }}
          >
            KAVORA<span style={{ color: "#c69b55" }}>.</span>
          </Link>

          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "13px",
              fontWeight: 600,
            }}
          >
            <ArrowLeft size={17} />
            Back Home
          </Link>
        </div>
      </header>

      <section
        style={{
          background:
            "linear-gradient(115deg, #10182c, #263652)",
          color: "#fff",
          padding: "65px 0",
        }}
      >
        <div className="container">
          <p
            style={{
              color: "#e8c98f",
              fontSize: "11px",
              fontWeight: 800,
              letterSpacing: "3px",
              marginBottom: "15px",
            }}
          >
            <Sparkles
              size={15}
              style={{
                display: "inline",
                verticalAlign: "middle",
                marginRight: "8px",
              }}
            />
            DISCOVER KAVORA
          </p>

          <h1
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(36px, 6vw, 55px)",
              lineHeight: 1.2,
              marginBottom: "15px",
            }}
          >
            Explore the Marketplace.
          </h1>

          <p
            style={{
              color: "#cbd0dc",
              maxWidth: "560px",
              fontSize: "14px",
              lineHeight: 1.9,
            }}
          >
            Discover products, explore categories and find
            independent businesses on one growing marketplace.
          </p>
        </div>
      </section>

      <section
        className="container"
        style={{ paddingTop: "35px", paddingBottom: "80px" }}
      >
        <form
          action="/products"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "9px 10px 9px 17px",
            background: "#fff",
            border: "1px solid #e9e7e1",
            borderRadius: "10px",
            marginBottom: "32px",
          }}
        >
          <Search size={19} color="#777d89" />

          <input
            name="q"
            type="search"
            placeholder="Search products and categories..."
            style={{
              flex: 1,
              minWidth: 0,
              border: "none",
              outline: "none",
              background: "transparent",
              fontSize: "13px",
            }}
          />

          <button
            type="submit"
            className="button button-primary"
            style={{ padding: "12px 20px" }}
          >
            Search
          </button>
        </form>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <SlidersHorizontal size={18} color="#c69b55" />

          <h2 style={{ fontSize: "16px" }}>
            Browse Categories
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "45px",
          }}
        >
          {categories.map((category, index) => (
            <span
              key={category}
              style={{
                padding: "11px 17px",
                borderRadius: "30px",
                background: index === 0 ? "#10182c" : "#fff",
                color: index === 0 ? "#fff" : "#555d6d",
                border:
                  index === 0
                    ? "1px solid #10182c"
                    : "1px solid #e9e7e1",
                fontSize: "12px",
                fontWeight: 600,
              }}
            >
              {category}
            </span>
          ))}
        </div>

        <div
          style={{
            background: "#fff",
            border: "1px solid #e9e7e1",
            borderRadius: "16px",
            padding: "45px 22px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "78px",
              height: "78px",
              borderRadius: "22px",
              background: "#f5f0e8",
              color: "#c69b55",
              display: "grid",
              placeItems: "center",
              margin: "0 auto 22px",
            }}
          >
            <ShoppingBag size={35} />
          </div>

          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "27px",
              marginBottom: "12px",
            }}
          >
            Something exciting is coming.
          </h2>

          <p
            style={{
              maxWidth: "470px",
              margin: "0 auto",
              color: "#777d89",
              fontSize: "13px",
              lineHeight: 1.9,
            }}
          >
            We&apos;re preparing the KAVORA product catalogue.
Soon, you&apos;ll be able to explore real products,
          </p>

          <Link
            href="/"
            className="button button-primary"
            style={{ marginTop: "25px" }}
          >
            Return to Homepage
            <ArrowRight size={17} />
          </Link>
        </div>

        <p
          style={{
            textAlign: "center",
            color: "#a0a3aa",
            fontSize: "11px",
            marginTop: "35px",
          }}
        >
          KAVORA — Shop Everything. Discover More.
        </p>
      </section>
    </main>
  );
        }
