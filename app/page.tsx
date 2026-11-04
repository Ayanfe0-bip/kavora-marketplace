import {
  ArrowRight,
  ArrowUpRight,
  Search,
  ShoppingBag,
  Store,
  ShieldCheck,
  Truck,
  Headphones,
  Menu,
  Sparkles,
} from "lucide-react";

const categories = [
  { name: "Fashion", icon: "👗", count: "Explore styles" },
  { name: "Beauty", icon: "💄", count: "Beauty essentials" },
  { name: "Electronics", icon: "📱", count: "Smart technology" },
  { name: "Home & Living", icon: "🏡", count: "Make it yours" },
  { name: "Health", icon: "🌿", count: "Everyday wellness" },
  { name: "Accessories", icon: "👜", count: "Complete your look" },
];

const products = [
  {
    name: "Premium Human Hair Wig",
    category: "Beauty & Hair",
    price: "₦85,000",
    badge: "Featured",
    image: "💇🏽‍♀️",
    background: "#f4e8df",
  },
  {
    name: "Luxury Hair Care Collection",
    category: "Hair Treatment",
    price: "₦18,500",
    badge: "Popular",
    image: "🧴",
    background: "#e9e8dd",
  },
  {
    name: "Elegant Fashion Handbag",
    category: "Fashion & Accessories",
    price: "₦32,000",
    badge: "New arrival",
    image: "👜",
    background: "#eee5dc",
  },
  {
    name: "Everyday Beauty Essentials",
    category: "Beauty",
    price: "₦12,000",
    badge: "Featured",
    image: "✨",
    background: "#eee5ed",
  },
];

export default function Home() {
  return (
    <main>
      {/* Announcement bar */}
      <div
        style={{
          background: "#10182c",
          color: "#fff",
          textAlign: "center",
          padding: "10px 14px",
          fontSize: "12px",
          letterSpacing: "0.3px",
        }}
      >
        Discover great finds from independent sellers on KAVORA.
      </div>

      {/* Navigation */}
      <header
        style={{
          background: "#fff",
          borderBottom: "1px solid #e9e7e1",
          position: "sticky",
          top: 0,
          zIndex: 20,
        }}
      >
        <div
          className="container flex-between"
          style={{ minHeight: "82px", gap: "24px" }}
        >
          <a href="/" className="brand-text" style={{ fontSize: "27px" }}>
            KAVORA<span style={{ color: "#c69b55" }}>.</span>
          </a>

          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "30px",
              fontSize: "13px",
              fontWeight: 600,
            }}
          >
            <a href="#categories">Categories</a>
            <a href="#featured">Discover</a>
            <a href="#vendors">Vendors</a>
          </nav>

          <div style={{ display: "flex", gap: "10px" }}>
            <a
              href="#featured"
              className="button button-outline"
              style={{ padding: "10px 14px" }}
            >
              <ShoppingBag size={17} />
              <span>Shop</span>
            </a>

            <a
              href="#vendors"
              className="button button-primary"
              style={{ padding: "10px 14px" }}
            >
              <Store size={17} />
              <span>Sell on KAVORA</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section
        style={{
          background:
            "linear-gradient(115deg, #10182c 0%, #1b2945 58%, #34405a 100%)",
          color: "#fff",
          overflow: "hidden",
        }}
      >
        <div
          className="container"
          style={{
            minHeight: "490px",
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            alignItems: "center",
            gap: "35px",
            paddingTop: "65px",
            paddingBottom: "65px",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#e8c98f",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "2px",
                marginBottom: "24px",
              }}
            >
              <Sparkles size={16} />
              A NEW WAY TO DISCOVER
            </div>

            <h1
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "clamp(42px, 6vw, 68px)",
                lineHeight: 1.12,
                fontWeight: 600,
                maxWidth: "650px",
              }}
            >
              Shop Everything.
              <br />
              <span style={{ color: "#e8c98f" }}>
                Discover More.
              </span>
            </h1>

            <p
              style={{
                color: "#d0d4df",
                lineHeight: 1.9,
                fontSize: "15px",
                maxWidth: "480px",
                marginTop: "23px",
              }}
            >
              Explore products, discover independent sellers and find
              something special for every part of your life.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "13px",
                marginTop: "32px",
              }}
            >
              <a href="#featured" className="button button-gold">
                Explore Marketplace <ArrowRight size={17} />
              </a>

              <a
                href="#vendors"
                className="button"
                style={{
                  border: "1px solid #69748b",
                  color: "#fff",
                }}
              >
                Become a Seller
              </a>
            </div>

            <div
              style={{
                display: "flex",
                gap: "30px",
                flexWrap: "wrap",
                marginTop: "42px",
                color: "#d0d4df",
                fontSize: "12px",
              }}
            >
              <span>✦ Discover unique products</span>
              <span>✦ Explore local businesses</span>
            </div>
          </div>

          <div
            style={{
              minHeight: "350px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "min(100%, 390px)",
                height: "340px",
                borderRadius: "190px 190px 24px 24px",
                background:
                  "linear-gradient(145deg, #e8c98f, #a77b43)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 25px 70px rgba(0,0,0,0.25)",
                position: "relative",
              }}
            >
              <div
                style={{
                  fontSize: "130px",
                  filter: "drop-shadow(0 15px 12px rgba(0,0,0,0.18))",
                }}
              >
                🛍️
              </div>

              <div
                style={{
                  position: "absolute",
                  bottom: "22px",
                  background: "#fff",
                  color: "#10182c",
                  padding: "13px 22px",
                  borderRadius: "10px",
                  fontSize: "12px",
                  fontWeight: 700,
                  boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
                }}
              >
                Your marketplace, reimagined.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search */}
      <section style={{ background: "#fff", padding: "28px 0" }}>
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <form
            action="#featured"
            style={{
              width: "min(100%, 680px)",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              border: "1px solid #e9e7e1",
              padding: "7px 8px 7px 18px",
              borderRadius: "9px",
              background: "#faf9f6",
            }}
          >
            <Search size={19} color="#777d89" />

            <input
              type="search"
              name="q"
              placeholder="Search products, categories and sellers..."
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
              style={{ padding: "12px 19px" }}
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="section">
        <div className="container">
          <div className="flex-between" style={{ marginBottom: "30px" }}>
            <div>
              <p
                className="gold-text"
                style={{
                  fontSize: "11px",
                  fontWeight: 800,
                  letterSpacing: "2px",
                  marginBottom: "9px",
                }}
              >
                EXPLORE MORE
              </p>
              <h2 className="section-title">Shop by Category</h2>
              <p className="section-description">
                Find products that match your interests.
              </p>
            </div>

            <a
              href="#featured"
              style={{
                fontSize: "13px",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              Explore all <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="grid grid-3">
            {categories.map((category) => (
              <a
                href="#featured"
                key={category.name}
                className="card"
                style={{
                  padding: "23px",
                  display: "flex",
                  alignItems: "center",
                  gap: "18px",
                }}
              >
                <div
                  style={{
                    width: "58px",
                    height: "58px",
                    borderRadius: "12px",
                    background: "#f5f0e8",
                    display: "grid",
                    placeItems: "center",
                    fontSize: "29px",
                    flexShrink: 0,
                  }}
                >
                  {category.icon}
                </div>

                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: "15px", marginBottom: "5px" }}>
                    {category.name}
                  </h3>
                  <p className="muted" style={{ fontSize: "12px" }}>
                    {category.count}
                  </p>
                </div>

                <ArrowUpRight size={17} color="#c69b55" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section
        id="featured"
        className="section"
        style={{ background: "#fff" }}
      >
        <div className="container">
          <div style={{ marginBottom: "32px" }}>
            <p
              className="gold-text"
              style={{
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "2px",
                marginBottom: "9px",
              }}
            >
              HANDPICKED DISCOVERIES
            </p>

            <h2 className="section-title">Explore Featured Finds</h2>

            <p className="section-description">
              Get a glimpse of the products you can discover on KAVORA.
            </p>
          </div>

          <div className="grid grid-4">
            {products.map((product) => (
              <article
                key={product.name}
                className="card"
                style={{ overflow: "hidden" }}
              >
                <div
                  style={{
                    height: "205px",
                    background: product.background,
                    display: "grid",
                    placeItems: "center",
                    position: "relative",
                  }}
                >
                  <span style={{ fontSize: "82px" }}>
                    {product.image}
                  </span>

                  <span
                    style={{
                      position: "absolute",
                      top: "13px",
                      left: "13px",
                      background: "#fff",
                      color: "#10182c",
                      padding: "6px 10px",
                      borderRadius: "5px",
                      fontSize: "10px",
                      fontWeight: 800,
                    }}
                  >
                    {product.badge}
                  </span>
                </div>

                <div style={{ padding: "17px" }}>
                  <p
                    className="muted"
                    style={{ fontSize: "11px", marginBottom: "8px" }}
                  >
                    {product.category}
                  </p>

                  <h3
                    style={{
                      fontSize: "14px",
                      minHeight: "40px",
                      lineHeight: 1.5,
                    }}
                  >
                    {product.name}
                  </h3>

                  <div
                    className="flex-between"
                    style={{ marginTop: "13px" }}
                  >
                    <strong style={{ fontSize: "16px" }}>
                      {product.price}
                    </strong>

                    <span style={{ color: "#c69b55" }}>
                      <ArrowUpRight size={19} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p
            className="muted"
            style={{
              textAlign: "center",
              fontSize: "11px",
              marginTop: "22px",
            }}
          >
            Illustrative marketplace previews. Actual product listings will
            be added as vendors join.
          </p>
        </div>
      </section>

      {/* Vendor section */}
      <section id="vendors" className="section">
        <div className="container">
          <div
            style={{
              background: "#10182c",
              color: "#fff",
              borderRadius: "18px",
              padding: "clamp(28px, 6vw, 60px)",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              alignItems: "center",
              gap: "30px",
            }}
          >
            <div>
              <p
                style={{
                  color: "#e8c98f",
                  fontSize: "11px",
                  fontWeight: 800,
                  letterSpacing: "2px",
                  marginBottom: "13px",
                }}
              >
                FOR BUSINESS OWNERS
              </p>

              <h2
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "clamp(28px, 4vw, 42px)",
                  lineHeight: 1.2,
                }}
              >
                Your business deserves
                <br />
                a bigger marketplace.
              </h2>

              <p
                style={{
                  color: "#cbd0dc",
                  fontSize: "14px",
                  lineHeight: 1.8,
                  maxWidth: "550px",
                  marginTop: "15px",
                }}
              >
                Bring your products online, introduce your brand to new
                customers and grow with the KAVORA seller community.
              </p>

              <a
                href="#footer"
                className="button button-gold"
                style={{ marginTop: "25px" }}
              >
                Discover Seller Opportunities <ArrowRight size={17} />
              </a>
            </div>

            <div
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                background: "#263652",
                display: "grid",
                placeItems: "center",
                color: "#e8c98f",
              }}
            >
              <Store size={55} strokeWidth={1.3} />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section
        className="section"
        style={{ background: "#fff", paddingBlock: "55px" }}
      >
        <div className="container grid grid-3">
          <div style={{ textAlign: "center", padding: "15px" }}>
            <ShieldCheck
              size={32}
              color="#c69b55"
              style={{ margin: "0 auto 15px" }}
            />
            <h3 style={{ fontSize: "15px" }}>Discover New Sellers</h3>
            <p className="section-description" style={{ fontSize: "12px" }}>
              Explore different businesses and their products.
            </p>
          </div>

          <div style={{ textAlign: "center", padding: "15px" }}>
            <Truck
              size={32}
              color="#c69b55"
              style={{ margin: "0 auto 15px" }}
            />
            <h3 style={{ fontSize: "15px" }}>Explore Your Options</h3>
            <p className="section-description" style={{ fontSize: "12px" }}>
              Compare products and discover what suits you.
            </p>
          </div>

          <div style={{ textAlign: "center", padding: "15px" }}>
            <Headphones
              size={32}
              color="#c69b55"
              style={{ margin: "0 auto 15px" }}
            />
            <h3 style={{ fontSize: "15px" }}>A Growing Marketplace</h3>
            <p className="section-description" style={{ fontSize: "12px" }}>
              A marketplace designed to bring buyers and sellers together.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="footer"
        style={{
          background: "#10182c",
          color: "#fff",
          padding: "55px 0 25px",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr",
              gap: "35px",
              paddingBottom: "40px",
            }}
          >
            <div>
              <h2
                className="brand-text"
                style={{ fontSize: "28px", marginBottom: "15px" }}
              >
                KAVORA<span style={{ color: "#c69b55" }}>.</span>
              </h2>

              <p
                style={{
                  color: "#aeb5c5",
                  fontSize: "13px",
                  lineHeight: 1.9,
                  maxWidth: "340px",
                }}
              >
                Shop Everything. Discover More. A marketplace bringing
                products, businesses and customers together.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: "14px", marginBottom: "17px" }}>
                Explore
              </h3>

              <div
                style={{
                  display: "grid",
                  gap: "13px",
                  color: "#aeb5c5",
                  fontSize: "12px",
                }}
              >
                                <a href="#categories">Categories</a>
                <a href="#featured">Featured products</a>
                <a href="#vendors">Become a seller</a>
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: "14px", marginBottom: "17px" }}>
                Company
              </h3>

              <p
                style={{
                  color: "#aeb5c5",
                  fontSize: "12px",
                  lineHeight: 1.9,
                }}
              >
                A product of
                <br />
                Ayanfe Innovation Labs Limited.
              </p>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid #34405a",
              paddingTop: "22px",
              color: "#929bad",
              fontSize: "11px",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <span>
              © {new Date().getFullYear()} KAVORA. All rights reserved.
            </span>

            <span>
              Created by Ayanfe Innovation Labs Limited.
            </span>
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 760px) {
          header nav {
            display: none !important;
          }

          header .container {
            min-height: 70px !important;
          }

          header .container > div:last-child a:first-child {
            display: none;
          }

          header .container > div:last-child a:last-child {
            font-size: 11px;
          }

          footer .container > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }

          footer .container > div:first-child > div:first-child {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 420px) {
          .brand-text {
            font-size: 23px !important;
          }

          header .button {
            padding: 10px 11px !important;
          }
        }
      `}</style>
    </main>
  );
}
