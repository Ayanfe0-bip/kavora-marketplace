import Link from "next/link";
import {
  ArrowLeft,
  ShoppingBag,
  Store,
  ShieldCheck,
  Truck,
  Heart,
} from "lucide-react";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const productName = decodeURIComponent(slug)
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

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
            href="/products"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "13px",
              fontWeight: 600,
            }}
          >
            <ArrowLeft size={17} />
            All Products
          </Link>
        </div>
      </header>

      <section
        className="container"
        style={{
          paddingTop: "35px",
          paddingBottom: "80px",
        }}
      >
        <p
          style={{
            color: "#888e99",
            fontSize: "12px",
            marginBottom: "30px",
          }}
        >
          <Link href="/">Home</Link>
          {" / "}
          <Link href="/products">Products</Link>
          {" / "}
          {productName}
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "45px",
            alignItems: "start",
          }}
        >
          <div
            style={{
              minHeight: "390px",
              background: "#eee9df",
              borderRadius: "16px",
              display: "grid",
              placeItems: "center",
              color: "#b39b78",
            }}
          >
            <ShoppingBag size={100} strokeWidth={1} />
          </div>

          <div>
            <p
              style={{
                color: "#c69b55",
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "2px",
                marginBottom: "14px",
              }}
            >
              KAVORA PRODUCT DISCOVERY
            </p>

            <h1
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "clamp(28px, 5vw, 42px)",
                lineHeight: 1.25,
                marginBottom: "18px",
              }}
            >
              {productName}
            </h1>

            <p
              style={{
                color: "#777d89",
                fontSize: "14px",
                lineHeight: 1.9,
                marginBottom: "25px",
              }}
            >
              Product information, genuine photos, pricing
              and seller details will appear here when the
              product catalogue is connected.
            </p>

            <div
              style={{
                padding: "20px",
                background: "#fff",
                border: "1px solid #e9e7e1",
                borderRadius: "12px",
                marginBottom: "22px",
              }}
            >
              <p
                style={{
                  color: "#777d89",
                  fontSize: "12px",
                  marginBottom: "8px",
                }}
              >
                Product price
              </p>

              <h2 style={{ fontSize: "25px" }}>
                Awaiting listing
              </h2>

              <p
                style={{
                  color: "#999",
                  fontSize: "11px",
                  marginTop: "9px",
                }}
              >
                No purchase or payment is available yet.
              </p>
            </div>

            <button
              disabled
              style={{
                width: "100%",
                padding: "16px",
                border: "none",
                borderRadius: "8px",
                background: "#d7d5cf",
                color: "#777",
                fontWeight: 700,
                cursor: "not-allowed",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <ShoppingBag size={18} />
              Purchase Coming Soon
            </button>

            <div
              style={{
                display: "grid",
                gap: "17px",
                marginTop: "30px",
                color: "#697080",
                fontSize: "12px",
              }}
            >
              <div style={{ display: "flex", gap: "12px" }}>
                <Store size={19} color="#c69b55" />
                Seller information will be displayed here.
              </div>

              <div style={{ display: "flex", gap: "12px" }}>
                <Truck size={19} color="#c69b55" />
                Delivery information coming soon.
              </div>

              <div style={{ display: "flex", gap: "12px" }}>
                <ShieldCheck size={19} color="#c69b55" />
                Marketplace policies will be published here.
              </div>

              <div style={{ display: "flex", gap: "12px" }}>
                <Heart size={19} color="#c69b55" />
                Product wishlist coming soon.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
      }
