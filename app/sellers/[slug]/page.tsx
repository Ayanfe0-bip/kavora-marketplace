import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Search,
  MapPin,
  Store,
  ShieldCheck,
  Truck,
  Heart,
  ShoppingBag,
  Sparkles,
  Instagram,
} from "lucide-react";

const shops: Record<
  string,
  {
    name: string;
    category: string;
    location: string;
    description: string;
    initials: string;
    products: {
      name: string;
      category: string;
      price: string;
      description: string;
      initials: string;
    }[];
  }
> = {
  "ekundayo-beauty-lifestyle": {
    name: "Ekundayo Beauty & Lifestyle",
    category: "Beauty, Hair & Lifestyle",
    location: "Ede, Osun State, Nigeria",
    description:
      "Welcome to Ekundayo Beauty & Lifestyle. Discover wigs, weavons, human hair, hair treatments, beauty accessories, spiritual perfumes, oils, sea salt and other selected lifestyle products.",
    initials: "EB",
    products: [
      {
        name: "Premium Human Hair",
        category: "Human Hair",
        price: "Price coming soon",
        description: "Quality human hair collection.",
        initials: "HH",
      },
      {
        name: "Luxury Wig Collection",
        category: "Wigs",
        price: "Price coming soon",
        description: "Explore beautiful wig styles.",
        initials: "WG",
      },
      {
        name: "Hair Treatment Collection",
        category: "Hair Care",
        price: "Price coming soon",
        description: "Hair care and treatment products.",
        initials: "HC",
      },
      {
        name: "Beauty Accessories",
        category: "Accessories",
        price: "Price coming soon",
        description: "Selected beauty accessories.",
        initials: "BA",
      },
      {
        name: "Spiritual Perfumes & Oils",
        category: "Lifestyle",
        price: "Price coming soon",
        description: "Selected perfumes and lifestyle oils.",
        initials: "PO",
      },
      {
        name: "Natural Sea Salt",
        category: "Lifestyle",
        price: "Price coming soon",
        description: "Sea salt products available in store.",
        initials: "SS",
      },
    ],
  },
};

const categories = [
  "All Products",
  "Wigs",
  "Human Hair",
  "Hair Care",
  "Accessories",
  "Lifestyle",
];

export default async function SellerStorePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const shop = shops[decodeURIComponent(slug)];

  if (!shop) {
    return (
      <main className="min-h-screen bg-[#f8f9fc] px-5 py-24 text-center">
        <div className="mx-auto max-w-md">
          <Store size={48} className="mx-auto mb-5 text-[#7655e8]" />
          <h1 className="text-3xl font-black text-[#172033]">
            Shop not found
          </h1>
          <p className="mt-3 text-sm leading-7 text-gray-500">
            This shop may have moved or is not currently available on KAVORA.
          </p>
          <Link
            href="/sellers"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#7655e8] px-6 py-3 text-sm font-bold text-white"
          >
            <ArrowLeft size={16} />
            Explore other shops
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f9fc] text-[#172033]">
      <style>{`
        .shop-container {
          width: min(1120px, 92%);
          margin: auto;
        }

        .shop-header {
          min-height: 75px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          border-bottom: 1px solid #e8ebf1;
        }

        .shop-logo {
          color: #172033;
          font-size: 26px;
          font-weight: 950;
          letter-spacing: -1.5px;
          text-decoration: none;
        }

        .shop-logo span { color: #7655e8; }

        .shop-nav {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .shop-nav a {
          color: #657086;
          font-size: 13px;
          font-weight: 800;
          text-decoration: none;
        }

        .shop-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 27px;
          color: #7655e8;
          font-size: 13px;
          font-weight: 800;
          text-decoration: none;
        }

        .shop-banner {
          position: relative;
          overflow: hidden;
          margin-top: 22px;
          padding: 45px;
          border-radius: 22px;
          background:
            radial-gradient(circle at 90% 20%, #a48cff 0, transparent 30%),
            linear-gradient(120deg, #241b48, #51408c);
          color: white;
        }

        .shop-banner-content {
          position: relative;
          z-index: 1;
          max-width: 690px;
        }

        .shop-label {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 8px 13px;
          border: 1px solid rgba(255,255,255,.25);
          border-radius: 30px;
          background: rgba(255,255,255,.1);
          color: #e5ddff;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: .7px;
        }

        .shop-banner h1 {
          margin: 19px 0 12px;
          font-size: clamp(30px, 5vw, 47px);
          line-height: 1.1;
          font-weight: 950;
          letter-spacing: -1.8px;
        }

        .shop-banner p {
          max-width: 630px;
          color: #ded8f4;
          font-size: 13px;
          line-height: 1.9;
        }

        .shop-location {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-top: 20px;
          color: #e9e4ff;
          font-size: 12px;
          font-weight: 800;
        }

        .shop-avatar {
          position: absolute;
          right: 55px;
          top: 50%;
          width: 125px;
          height: 125px;
          display: grid;
          place-items: center;
          transform: translateY(-50%);
          border: 7px solid rgba(255,255,255,.17);
          border-radius: 35px;
          background: rgba(255,255,255,.15);
          color: white;
          font-size: 37px;
          font-weight: 950;
        }

        .shop-benefits {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
          margin: 25px 0 45px;
        }

        .shop-benefit {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 17px;
          border: 1px solid #e9ebf2;
          border-radius: 14px;
          background: white;
        }

        .shop-benefit-icon {
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          flex-shrink: 0;
          border-radius: 12px;
          background: #f0edff;
          color: #7655e8;
        }

        .shop-benefit strong {
          display: block;
          font-size: 12px;
          font-weight: 900;
        }

        .shop-benefit small {
          display: block;
          margin-top: 5px;
          color: #8790a2;
          font-size: 10px;
        }

        .shop-section-title {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 22px;
        }

        .shop-section-title h2 {
          margin: 0 0 7px;
          font-size: 27px;
          font-weight: 950;
          letter-spacing: -1px;
        }

        .shop-section-title p {
          margin: 0;
          color: #7c8599;
          font-size: 13px;
        }

        .shop-search {
          display: flex;
          align-items: center;
          gap: 10px;
          width: min(350px, 100%);
          padding: 12px 15px;
          border: 1px solid #e5e8f0;
          border-radius: 11px;
          background: white;
          color: #8991a3;
        }

        .shop-search input {
          width: 100%;
          min-width: 0;
          border: 0;
          outline: none;
          color: #172033;
          font-size: 12px;
        }

        .shop-categories {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding-bottom: 20px;
          scrollbar-width: none;
        }

        .shop-categories::-webkit-scrollbar { display: none; }

        .shop-category {
          flex-shrink: 0;
          padding: 11px 17px;
          border: 1px solid #e6e8ef;
          border-radius: 30px;
          background: white;
          color: #687187;
          font-size: 11px;
          font-weight: 900;
          cursor: pointer;
        }

        .shop-category.active {
          border-color: #7655e8;
          background: #7655e8;
          color: white;
        }

        .shop-products {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          padding-bottom: 65px;
        }

        .shop-product {
          overflow: hidden;
          border: 1px solid #e9ebf2;
          border-radius: 17px;
          background: white;
        }

        .shop-product-image {
          height: 185px;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, #f0edff, #e9f2ff);
        }

        .shop-product-image span {
          width: 70px;
          height: 70px;
          display: grid;
          place-items: center;
          border-radius: 22px;
          background: white;
          color: #7655e8;
          font-size: 22px;
          font-weight: 950;
          box-shadow: 0 8px 25px rgba(50,40,100,.08);
        }

        .shop-product-body { padding: 18px; }

        .shop-product-category {
          color: #7655e8;
          font-size: 10px;
          font-weight: 900;
          text-transform: uppercase;
        }

        .shop-product h3 {
          margin: 9px 0;
          font-size: 15px;
          font-weight: 900;
        }

        .shop-product p {
          min-height: 38px;
          color: #8790a2;
          font-size: 11px;
          line-height: 1.7;
        }

        .shop-product-price {
          margin: 13px 0;
          color: #172033;
          font-size: 13px;
          font-weight: 900;
        }

        .shop-add {
          width: 100%;
          padding: 12px;
          border: 0;
          border-radius: 9px;
          background: #7655e8;
          color: white;
          font-size: 11px;
          font-weight: 900;
          cursor: not-allowed;
          opacity: .8;
        }

        .shop-about {
          margin-bottom: 65px;
          padding: 30px;
          border: 1px solid #e9ebf2;
          border-radius: 18px;
          background: white;
        }

        .shop-about h2 {
          margin: 0 0 12px;
          font-size: 21px;
          font-weight: 950;
        }

        .shop-about p {
          max-width: 800px;
          color: #778095;
          font-size: 13px;
          line-height: 1.9;
        }

        .shop-footer {
          padding: 28px 0;
          border-top: 1px solid #e8ebf1;
          color: #8790a2;
          font-size: 11px;
          text-align: center;
        }

        @media (max-width: 750px) {
          .shop-avatar {
            right: 25px;
            width: 90px;
            height: 90px;
            font-size: 27px;
          }

          .shop-banner { padding: 35px 27px; }
          .shop-banner-content { max-width: 75%; }
          .shop-benefits { grid-template-columns: 1fr; }
          .shop-products { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .shop-section-title { align-items: start; flex-direction: column; }
        }

        @media (max-width: 480px) {
          .shop-nav { gap: 12px; }
          .shop-nav a { font-size: 11px; }
          .shop-logo { font-size: 23px; }
          .shop-banner { padding: 30px 21px; }
          .shop-banner-content { max-width: 100%; }
          .shop-avatar { display: none; }
          .shop-products { grid-template-columns: 1fr; }
          .shop-product-image { height: 210px; }
          .shop-about { padding: 22px; }
        }
      `}</style>

      <header className="shop-container shop-header">
        <Link href="/" className="shop-logo">
          KAV<span>O</span>RA.
        </Link>

        <nav className="shop-nav">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/sellers">Shops</Link>
        </nav>
      </header>

      <div className="shop-container">
        <Link href="/sellers" className="shop-back">
          <ArrowLeft size={16} />
          Back to all shops
        </Link>

        <section className="shop-banner">
          <div className="shop-banner-content">
            <span className="shop-label">
              <Sparkles size={13} />
              KAVORA SELLER STOREFRONT
            </span>

            <h1>{shop.name}</h1>

            <p>{shop.description}</p>

            <div className="shop-location">
              <MapPin size={16} />
              {shop.location}
            </div>
          </div>

          <div className="shop-avatar">{shop.initials}</div>
        </section>

        <section className="shop-benefits">
          <div className="shop-benefit">
            <div className="shop-benefit-icon">
              <Store size={19} />
            </div>
            <div>
              <strong>Independent Shop</strong>
              <small>{shop.category}</small>
            </div>
          </div>

          <div className="shop-benefit">
            <div className="shop-benefit-icon">
              <ShoppingBag size={19} />
            </div>
            <div>
              <strong>Shop Collections</strong>
              <small>Explore available products</small>
            </div>
          </div>

          <div className="shop-benefit">
            <div className="shop-benefit-icon">
              <MapPin size={19} />
            </div>
            <div>
              <strong>Shop Location</strong>
              <small>{shop.location}</small>
            </div>
          </div>
        </section>

        <section>
          <div className="shop-section-title">
            <div>
              <h2>Shop Products</h2>
              <p>Explore products listed by this seller.</p>
            </div>

            <div className="shop-search">
              <Search size={17} />
              <input
                type="search"
                placeholder="Search this shop..."
                aria-label="Search this shop"
              />
            </div>
          </div>

          <div className="shop-categories">
            {categories.map((category, index) => (
              <button
                type="button"
                key={category}
                className={`shop-category ${index === 0 ? "active" : ""}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="shop-products">
            {shop.products.map((product) => (
              <article className="shop-product" key={product.name}>
                <div className="shop-product-image">
                  <span>{product.initials}</span>
                </div>

                <div className="shop-product-body">
                  <span className="shop-product-category">
                    {product.category}
                  </span>

                  <h3>{product.name}</h3>

                  <p>{product.description}</p>

                  <div className="shop-product-price">
                    {product.price}
                  </div>

                  <button
                    className="shop-add"
                    type="button"
                    disabled
                    title="Purchasing will be enabled when checkout is implemented."
                  >
                    Coming Soon
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="shop-about">
          <h2>About this shop</h2>
          <p>{shop.description}</p>
          <p>
            Browse this seller's collections on KAVORA. Product ordering,
            seller messaging and checkout will become available as the
            marketplace features are implemented.
          </p>
        </section>
      </div>

      <footer className="shop-footer">
        <div className="shop-container">
          <p>
            © {new Date().getFullYear()} KAVORA Marketplace. All rights
            reserved.
          </p>
          <p>Created by Ayanfe Innovation Labs Limited.</p>
        </div>
      </footer>
    </main>
  );
  }
