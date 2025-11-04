import React, { useMemo, useState } from "react";

// FashionProductPage.jsx
// Single-file React component using Tailwind CSS. Drop into a CRA/Vite React project
// that already includes Tailwind. This is a self-contained example with dummy data.

export default function FashionProductPage() {
  const PRODUCTS = useMemo(
    () => [
      {
        id: 1,
        title: "Linen Summer Shirt",
        brand: "CasaModa",
        price: 1299,
        oldPrice: 1699,
        rating: 4.5,
        colors: ["Beige", "White", "Sky"],
        sizes: ["S", "M", "L", "XL"],
        image:
          "https://images.unsplash.com/photo-1520975918313-6f9a36b0a8a0?w=1200&q=80&auto=format&fit=crop",
        category: "Shirts",
        tags: ["new", "bestseller"],
      },
      {
        id: 2,
        title: "Tailored Chino Pants",
        brand: "UrbanStaple",
        price: 1899,
        oldPrice: null,
        rating: 4.2,
        colors: ["Khaki", "Navy"],
        sizes: ["30", "32", "34", "36"],
        image:
          "https://images.unsplash.com/photo-1503342452485-86f7f1c0f2f6?w=1200&q=80&auto=format&fit=crop",
        category: "Trousers",
        tags: ["classic"],
      },
      {
        id: 3,
        title: "Ribbed Knit Dress",
        brand: "Femina",
        price: 2199,
        oldPrice: 2599,
        rating: 4.7,
        colors: ["Black", "Olive"],
        sizes: ["S", "M", "L"],
        image:
          "https://images.unsplash.com/photo-1520975918313-6f9a36b0a8a0?w=1200&q=80&auto=format&fit=crop",
        category: "Dresses",
        tags: ["sale"],
      },
      {
        id: 4,
        title: "Classic Leather Jacket",
        brand: "RiderCo",
        price: 6999,
        oldPrice: 8999,
        rating: 4.8,
        colors: ["Black", "Brown"],
        sizes: ["M", "L", "XL"],
        image:
          "https://images.unsplash.com/photo-1519741493716-7e7f1e04d6b1?w=1200&q=80&auto=format&fit=crop",
        category: "Outerwear",
        tags: ["premium", "bestseller"],
      },
      {
        id: 5,
        title: "Casual Sneakers",
        brand: "Stride",
        price: 3499,
        oldPrice: null,
        rating: 4.4,
        colors: ["White", "Grey"],
        sizes: ["7", "8", "9", "10"],
        image:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80&auto=format&fit=crop",
        category: "Shoes",
        tags: ["trending"],
      },
      {
        id: 6,
        title: "Silk Scarf",
        brand: "Arte",
        price: 799,
        oldPrice: 999,
        rating: 4.1,
        colors: ["Maroon", "Blue"],
        sizes: ["One Size"],
        image:
          "https://images.unsplash.com/photo-150324war-8d6b3d4a7b8b?w=1200&q=80&auto=format&fit=crop",
        category: "Accessories",
        tags: [],
      },
      {
        id: 7,
        title: "Denim Jacket",
        brand: "BlueWorks",
        price: 2899,
        oldPrice: 3299,
        rating: 4.6,
        colors: ["Blue"],
        sizes: ["S", "M", "L", "XL"],
        image:
          "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=1200&q=80&auto=format&fit=crop",
        category: "Outerwear",
        tags: ["classic"],
      },
      {
        id: 8,
        title: "Oversized Hoodie",
        brand: "CozyDay",
        price: 1499,
        oldPrice: null,
        rating: 4.3,
        colors: ["Charcoal", "Beige"],
        sizes: ["M", "L", "XL"],
        image:
          "https://images.unsplash.com/photo-1602810316021-2b0f9b6d3c6e?w=1200&q=80&auto=format&fit=crop",
        category: "Sweatshirts",
        tags: ["new"],
      },
      {
        id: 9,
        title: "Pleated Skirt",
        brand: "Lumi",
        price: 1199,
        oldPrice: 1499,
        rating: 4.0,
        colors: ["Cream", "Navy"],
        sizes: ["S", "M", "L"],
        image:
          "https://images.unsplash.com/photo-1495121605193-b116b5b09f9a?w=1200&q=80&auto=format&fit=crop",
        category: "Skirts",
        tags: [],
      },
      {
        id: 10,
        title: "Statement Sunglasses",
        brand: "Solaris",
        price: 999,
        oldPrice: null,
        rating: 4.2,
        colors: ["Black"],
        sizes: ["One Size"],
        image:
          "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&q=80&auto=format&fit=crop",
        category: "Accessories",
        tags: ["popular"],
      },
      {
        id: 11,
        title: "Boho Maxi Dress",
        brand: "Nomad",
        price: 2599,
        oldPrice: 2999,
        rating: 4.5,
        colors: ["Rust", "Green"],
        sizes: ["S", "M", "L"],
        image:
          "https://images.unsplash.com/photo-1520975918313-6f9a36b0a8a0?w=1200&q=80&auto=format&fit=crop",
        category: "Dresses",
        tags: ["boho", "summer"],
      },
      {
        id: 12,
        title: "Minimalist Tote Bag",
        brand: "CarryAll",
        price: 1299,
        oldPrice: null,
        rating: 4.3,
        colors: ["Tan", "Black"],
        sizes: ["One Size"],
        image:
          "https://images.unsplash.com/photo-1542293787938-c9e299b8808a?w=1200&q=80&auto=format&fit=crop",
        category: "Bags",
        tags: ["bestseller"],
      },
    ],
    []
  );

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const [activeFilters, setActiveFilters] = useState({ priceRange: [0, 10000], rating: 0 });
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 8;

  const categories = useMemo(() => ["All", ...new Set(PRODUCTS.map((p) => p.category))], [PRODUCTS]);

  function applyFilters(items) {
    let filtered = items;
    if (query.trim()) {
      const q = query.toLowerCase();
      filtered = filtered.filter(
        (p) => p.title.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q)
      );
    }
    if (category !== "All") filtered = filtered.filter((p) => p.category === category);
    if (activeFilters.rating) filtered = filtered.filter((p) => Math.floor(p.rating) >= activeFilters.rating);
    // priceRange filter (simple)
    const [minP, maxP] = activeFilters.priceRange;
    filtered = filtered.filter((p) => p.price >= minP && p.price <= maxP);

    switch (sort) {
      case "price-asc":
        filtered = filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered = filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered = filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // featured or default: keep original order
        break;
    }

    return filtered;
  }

  const filteredProducts = useMemo(() => applyFilters([...PRODUCTS]), [PRODUCTS, query, category, sort, activeFilters]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PAGE_SIZE));
  const paginated = filteredProducts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6">
      <header className="max-w-7xl mx-auto mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Fashion — Shop</h1>
          <div className="flex items-center gap-4">
            <input
              value={query}
              onChange={(e) => { setQuery(e.target.value); setPage(1); }}
              placeholder="Search products or brands"
              className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm shadow-sm focus:outline-none"
            />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="px-3 py-2 rounded-lg border bg-white text-sm"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sidebar */}
        <aside className="lg:col-span-3 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg p-4">
          <h2 className="font-semibold mb-3">Filters</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium">Category</label>
            <select
              value={category}
              onChange={(e) => { setCategory(e.target.value); setPage(1); }}
              className="mt-2 w-full rounded-md border px-3 py-2 text-sm bg-white dark:bg-gray-700"
            >
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Minimum Rating</label>
            <select
              value={activeFilters.rating}
              onChange={(e) => setActiveFilters((s) => ({ ...s, rating: Number(e.target.value) }))}
              className="mt-2 w-full rounded-md border px-3 py-2 text-sm bg-white dark:bg-gray-700"
            >
              <option value={0}>Any</option>
              <option value={4}>4★ & up</option>
              <option value={3}>3★ & up</option>
              <option value={5}>5★</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Price (max)</label>
            <input
              type="range"
              min={0}
              max={10000}
              value={activeFilters.priceRange[1]}
              onChange={(e) => setActiveFilters((s) => [s.priceRange ? s.priceRange[0] : 0, Number(e.target.value)])}
              className="mt-3 w-full"
            />
            <div className="text-xs mt-1">Up to ₹{activeFilters.priceRange[1]}</div>
          </div>

          <div className="mt-6">
            <button
              onClick={() => { setActiveFilters({ priceRange: [0, 10000], rating: 0 }); setCategory("All"); setQuery(""); setSort("featured"); }}
              className="w-full rounded-md px-3 py-2 border bg-white dark:bg-gray-700 text-sm"
            >
              Reset Filters
            </button>
          </div>
        </aside>

        {/* Product grid */}
        <section className="lg:col-span-9">
          <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-gray-600 dark:text-gray-300">{filteredProducts.length} products</div>
              <div className="text-sm">Page {page} of {totalPages}</div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {paginated.map((p) => (
                <article key={p.id} className="bg-white dark:bg-gray-900 border rounded-lg shadow-sm overflow-hidden">
                  <div className="relative">
                    <img src={p.image} alt={p.title} className="w-full h-56 object-cover" />
                    {p.tags.length > 0 && (
                      <div className="absolute top-3 left-3 flex gap-2">
                        {p.tags.map((t) => (
                          <span key={t} className="bg-black text-white text-xs px-2 py-1 rounded">{t}</span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <h3 className="font-medium text-sm">{p.title}</h3>
                    <div className="text-xs text-gray-500">{p.brand}</div>

                    <div className="mt-3 flex items-center justify-between">
                      <div>
                        <div className="text-lg font-semibold">₹{p.price}</div>
                        {p.oldPrice && <div className="text-sm line-through text-gray-400">₹{p.oldPrice}</div>}
                      </div>

                      <div className="text-sm text-gray-600">
                        {p.rating} ★
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between gap-3">
                      <button className="flex-1 text-sm rounded-md px-3 py-2 border bg-white hover:bg-gray-50">Add to cart</button>
                      <button className="text-sm rounded-md px-3 py-2 border bg-white">Quick view</button>
                    </div>

                    <div className="mt-3 text-xs text-gray-500">Available: {p.colors.slice(0,2).join(", ")}</div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination controls */}
            <div className="mt-6 flex items-center justify-between">
              <div>
                <button
                  onClick={() => setPage((s) => Math.max(1, s - 1))}
                  disabled={page === 1}
                  className="px-3 py-2 rounded-md border mr-2 disabled:opacity-50"
                >
                  Prev
                </button>
                <button
                  onClick={() => setPage((s) => Math.min(totalPages, s + 1))}
                  disabled={page === totalPages}
                  className="px-3 py-2 rounded-md border disabled:opacity-50"
                >
                  Next
                </button>
              </div>

              <div className="text-sm">Showing {(page - 1) * PAGE_SIZE + 1} - {Math.min(page * PAGE_SIZE, filteredProducts.length)} of {filteredProducts.length}</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="max-w-7xl mx-auto mt-8 text-center text-sm text-gray-500">
        Dummy fashion product page • Tailwind CSS example
      </footer>
    </div>
  );
}
