import Link from "next/link";
import {
  Search,
  SlidersHorizontal,
  ArrowLeft,
  ArrowRight,
  ShoppingBag,
  Store,
  MapPin,
  X,
} from "lucide-react";

const products = [
  {
    name: "Premium Human Hair",
    slug: "premium-human-hair",
    category: "Human Hair",
    price: 85000,
    seller: "Ekundayo Beauty & Lifestyle",
    location: "Ede, Osun State",
    initials: "HH",
    description: "Quality human hair collection.",
  },
  {
    name: "Luxury Wig Collection",
    slug: "luxury-wig-collection",
    category: "Wigs",
    price: 65000,
    seller: "Ekundayo Beauty & Lifestyle",
    location: "Ede, Osun State",
    initials: "WG",
    description: "Explore beautiful wig styles.",
  },
  {
    name: "Hair Treatment Collection",
    slug: "hair-treatment-collection",
    category: "Hair Care",
    price: 12000,
    seller: "Ekundayo Beauty & Lifestyle",
    location: "Ede, Osun State",
    initials: "HC",
    description: "Hair care and treatment products.",
  },
  {
    name: "Beauty Accessories",
    slug: "beauty-accessories",
    category: "Accessories",
    price: 8500,
    seller: "Ekundayo Beauty & Lifestyle",
    location: "Ede, Osun State",
    initials: "BA",
    description: "Selected beauty accessories.",
  },
  {
    name: "Spiritual Perfumes & Oils",
    slug: "spiritual-perfumes-oils",
    category: "Lifestyle",
    price: 7000,
    seller: "Ekundayo Beauty & Lifestyle",
    location: "Ede, Osun State",
    initials: "PO",
    description: "Selected perfumes and lifestyle oils.",
  },
  {
    name: "Natural Sea Salt",
    slug: "natural-sea-salt",
    category: "Lifestyle",
    price: 3000,
    seller: "Ekundayo Beauty & Lifestyle",
    location: "Ede, Osun State",
    initials: "SS",
    description: "Sea salt products available in store.",
  },
];

const categories = [
  "All Categories",
  "Wigs",
  "Human Hair",
  "Hair Care",
  "Accessories",
  "Lifestyle",
];

type SearchParams = {
  q?: string;
  category?: string;
  sort?: string;
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;

  const query = (params.q || "").trim();
  const selectedCategory = params.category || "All Categories";
  const sort = params.sort || "relevance";

  let results = products.filter((product) => {
    const searchText = [
      product.name,
      product.category,
      product.seller,
      product.description,
      product.location,
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch =
      !query || searchText.includes(query.toLowerCase());

    const matchesCategory =
      selectedCategory === "All Categories" ||
      product.category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  if (sort === "low") {
    results = [...results].sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    results = [...results].sort((a, b) => b.price - a.price);
  }

  const formatPrice = (price: number) =>
    `₦${price.toLocaleString("en-NG")}`;

  return (
    <main className="min-h-screen bg-[#f8f9fc] text-[#172033]">
      <style>{`
        * { box-sizing: border-box; }

        .search-container {
          width: min(1120px, 92%);
          margin: auto;
        }

        .search-header {
          min-height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          border-bottom: 1px solid #e8ebf1;
        }

        .search-logo {
          color: #172033;
          font-size: 27px;
          font-weight: 950;
          letter-spacing: -1.5px;
          text-decoration: none;
        }

        .search-logo span { color: #7655e8; }

        .search-nav {
          display: flex;
          gap: 23px;
        }

        .search-nav a {
          color: #647087;
          font-size: 13px;
          font-weight: 800;
          text-decoration: none;
        }

        .search-nav a:hover { color: #7655e8; }

        .search-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin: 27px 0;
          color: #7655e8;
          font-size: 13px;
          font-weight: 800;
          text-decoration: none;
        }

        .search-hero {
          padding: 35px;
          border-radius: 20px;
          background: linear-gradient(120deg, #211b43, #55418f);
          color: white;
        }

        .search-hero h1 {
          margin: 0 0 10px;
          font-size: clamp(27px, 4vw, 40px);
          font-weight: 950;
          letter-spacing: -1.5px;
        }

        .search-hero p {
          margin: 0;
          color: #d6d0ed;
          font-size: 13px;
          line-height: 1.8;
        }

        .search-form {
          display: flex;
          align-items: center;
          gap: 12px;
          max-width: 720px;
          margin-top: 25px;
          padding: 8px 9px 8px 15px;
          border-radius: 12px;
          background: white;
        }

        .search-form input {
          width: 100%;
          min-width: 0;
          border: 0;
          outline: none;
          color: #172033;
          font-size: 13px;
        }

        .search-form button {
          padding: 13px 20px;
          border: 0;
          border-radius: 9px;
          background: #7655e8;
          color: white;
          font-size: 12px;
          font-weight: 900;
          cursor: pointer;
        }

        .search-content {
          display: grid;
          grid-template-columns: 235px minmax(0, 1fr);
          gap: 27px;
          padding: 45px 0 80px;
        }

        .search-filter {
          align-self: start;
          padding: 22px;
          border: 1px solid #e8eaf1;
          border-radius: 15px;
          background: white;
        }

        .search-filter h2 {
          display: flex;
          align-items: center;
          gap: 9px;
          margin: 0 0 22px;
          font-size: 16px;
          font-weight: 900;
        }

        .filter-label {
          display: block;
          margin: 20px 0 11px;
          color: #59647b;
          font-size: 11px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: .5px;
        }

        .filter-options {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .filter-options a {
          color: #778095;
          font-size: 12px;
          text-decoration: none;
        }

        .filter-options a:hover,
        .filter-options a.selected {
          color: #7655e8;
          font-weight: 900;
        }

        .filter-divider {
          height: 1px;
          margin-top: 20px;
          background: #eef0f4;
        }

        .filter-clear {
          display: inline-block;
          margin-top: 22px;
          color: #7655e8;
          font-size: 12px;
          font-weight: 900;
          text-decoration: none;
        }

        .results-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 22px;
        }

        .results-heading h2 {
          margin: 0 0 7px;
          font-size: 23px;
          font-weight: 950;
          letter-spacing: -.7px;
        }

        .results-heading p {
          margin: 0;
          color: #8790a2;
          font-size: 12px;
        }

        .sort-form {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .sort-select {
          max-width: 160px;
          padding: 11px;
          border: 1px solid #e5e8f0;
          border-radius: 9px;
          background: white;
          color: #59647b;
          font-size: 11px;
          outline: none;
        }

        .sort-button {
          padding: 11px 14px;
          border: 0;
          border-radius: 9px;
          background: #7655e8;
          color: white;
          font-size: 11px;
          font-weight: 900;
          cursor: pointer;
        }

        .results-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .result-card {
          overflow: hidden;
          border: 1px solid #e9ebf2;
          border-radius: 15px;
          background: white;
          transition: transform .2s, box-shadow .2s;
        }

        .result-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(30,40,70,.07);
        }

        .result-image {
          height: 160px;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, #f0edff, #e9f2ff);
        }

        .result-image span {
          width: 65px;
          height: 65px;
          display: grid;
          place-items: center;
          border-radius: 20px;
          background: white;
          color: #7655e8;
          font-size: 21px;
          font-weight: 950;
          box-shadow: 0 8px 25px rgba(50,40,100,.08);
        }

        .result-body { padding: 17px; }

        .result-category {
          color: #7655e8;
          font-size: 10px;
          font-weight: 900;
          text-transform: uppercase;
        }

        .result-body h3 {
          margin: 9px 0;
          font-size: 15px;
          font-weight: 900;
        }

        .result-description {
          min-height: 36px;
          color: #8790a2;
          font-size: 11px;
          line-height: 1.7;
        }

        .result-price {
          margin: 13px 0;
          font-size: 16px;
          font-weight: 950;
        }

        .result-seller {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 14px;
          color: #788195;
          font-size: 10px;
          flex-wrap: wrap;
        }

        .result-view {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px;
          border-radius: 9px;
          background: #7655e8;
          color: white;
          font-size: 11px;
          font-weight: 900;
          text-decoration: none;
        }

        .no-results {
          padding: 55px 20px;
          border: 1px dashed #d8dce8;
          border-radius: 15px;
          background: white;
          text-align: center;
        }

        .no-results svg {
          margin: 0 auto 15px;
          color: #7655e8;
        }

        .no-results h3 {
          margin: 0 0 10px;
          font-size: 20px;
          font-weight: 900;
        }

        .no-results p {
          color: #8790a2;
          font-size: 12px;
          line-height: 1.8;
        }

        .no-results a {
          display: inline-block;
          margin-top: 12px;
          padding: 12px 20px;
          border-radius: 9px;
          background: #7655e8;
          color: white;
          font-size: 12px;
          font-weight: 900;
          text-decoration: none;
        }

        .search-footer {
          padding: 27px 0;
          border-top: 1px solid #e8ebf1;
          color: #8790a2;
          font-size: 11px;
          text-align: center;
        }

        @media (max-width: 760px) {
          .search-content {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .search-filter { padding: 18px; }

          .filter-options {
            flex-direction: row;
            flex-wrap: wrap;
          }

          .results-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 480px) {
          .search-logo { font-size: 23px; }
          .search-nav { gap: 12px; }
          .search-nav a { font-size: 11px; }
          .search-hero { padding: 25px 20px; }
          .search-content { padding-top: 30px; }
          .results-heading {
            align-items: start;
            flex-direction: column;
          }
          .sort-form { width: 100%; }
          .results-grid { grid-template-columns: 1fr; }
          .result-image { height: 190px; }
        }
      `}</style>

      <header className="search-container search-header">
        <Link href="/" className="search-logo">
          KAV<span>O</span>RA.
        </Link>

        <nav className="search-nav">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/sellers">Shops</Link>
        </nav>
      </header>

      <div className="search-container">
        <Link href="/products" className="search-back">
          <ArrowLeft size={15} />
          Back to marketplace
        </Link>

        <section className="search-hero">
          <h1>Find what you're looking for.</h1>

          <p>
            Search products, explore categories and discover sellers on KAVORA.
          </p>

          <form action="/search" method="GET" className="search-form">
            <Search size={19} color="#8991a3" />

            <input
              type="search"
              name="q"
              defaultValue={query}
              placeholder="What are you looking for?"
              aria-label="Search products"
            />

            <button type="submit">Search</button>
          </form>
        </section>

        <section className="search-content">
          <aside className="search-filter">
            <h2>
              <SlidersHorizontal size={18} />
              Filters
            </h2>

            <span className="filter-label">Categories</span>

            <div className="filter-options">
              {categories.map((category) => {
                const href =
                  `/search?q=${encodeURIComponent(query)}` +
                  `&category=${encodeURIComponent(category)}` +
                  `&sort=${encodeURIComponent(sort)}`;

                return (
                  <Link
                    key={category}
                    href={href}
                    className={
                      selectedCategory === category ? "selected" : ""
                    }
                  >
                    {category}
                  </Link>
                );
              })}
            </div>

            <div className="filter-divider" />

            <Link href="/search" className="filter-clear">
              <X
                size={13}
                style={{ display: "inline", marginRight: 5 }}
              />
              Clear all filters
            </Link>
          </aside>

          <div>
            <div className="results-heading">
              <div>
                <h2>Search Results</h2>

                <p>
                  {results.length} product
                  {results.length === 1 ? "" : "s"} found
                  {query ? ` for "${query}"` : ""}
                </p>
              </div>

              <form action="/search" method="GET" className="sort-form">
                <input type="hidden" name="q" value={query} />

                <input
                  type="hidden"
                  name="category"
                  value={selectedCategory}
                />

                <select
                  className="sort-select"
                  name="sort"
                  defaultValue={sort}
                  aria-label="Sort products"
                >
                  <option value="relevance">Most relevant</option>
                  <option value="low">Price: Low to high</option>
                  <option value="high">Price: High to low</option>
                </select>

                <button type="submit" className="sort-button">
                  Apply
                </button>
              </form>
            </div>

            {results.length > 0 ? (
              <div className="results-grid">
                {results.map((product) => (
                  <article className="result-card" key={product.slug}>
                    <div className="result-image">
                      <span>{product.initials}</span>
                    </div>

                    <div className="result-body">
                      <span className="result-category">
                        {product.category}
                      </span>

                      <h3>{product.name}</h3>

                      <p className="result-description">
                        {product.description}
                      </p>

                      <div className="result-price">
                        {formatPrice(product.price)}
                      </div>

                      <div className="result-seller">
                        <Store size={13} />
                        {product.seller}
                        <MapPin size={13} />
                        {product.location}
                      </div>

                      <Link
                        href={`/products/${product.slug}`}
                        className="result-view"
                      >
                        View Product
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="no-results">
                <ShoppingBag size={38} />

                <h3>No products found</h3>

                <p>
                  We couldn't find products matching your search. Try another
                  keyword or remove some filters.
                </p>

                <Link href="/search">View all products</Link>
              </div>
            )}
          </div>
        </section>
      </div>

      <footer className="search-footer">
        <div className="search-container">
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
