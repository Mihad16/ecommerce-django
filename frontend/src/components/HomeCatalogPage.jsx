import React, { useMemo, useState } from "react";

// HomeCatalogPage.jsx
// Single-file React component demonstrating a "chip"-style category filter UI
// with a simple product grid. Requires Tailwind CSS in the host project.

export default function HomeCatalogPage() {
  const PRODUCTS = useMemo(
    () => [
      { id: 1, title: "Linen Summer Shirt", price: 1299, category: "Shirts", image: "https://images.unsplash.com/photo-1520975918313-6f9a36b0a8a0?w=1200&q=80&auto=format&fit=crop" },
      { id: 2, title: "Denim Jacket", price: 2899, category: "Outerwear", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=1200&q=80&auto=format&fit=crop" },
      { id: 3, title: "Casual Sneakers", price: 3499, category: "Shoes", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80&auto=format&fit=crop" },
      { id: 4, title: "Ribbed Knit Dress", price: 2199, category: "Dresses", image: "https://images.unsplash.com/photo-1520975918313-6f9a36b0a8a0?w=1200&q=80&auto=format&fit=crop" },
      { id: 5, title: "Minimalist Tote Bag", price: 1299, category: "Bags", image: "https://images.unsplash.com/photo-1542293787938-c9e299b8808a?w=1200&q=80&auto=format&fit=crop" },
      { id: 6, title: "Oversized Hoodie", price: 1499, category: "Sweatshirts", image: "https://images.unsplash.com/photo-1602810316021-2b0f9b6d3c6e?w=1200&q=80&auto=format&fit=crop" },
      { id: 7, title: "Statement Sunglasses", price: 999, category: "Accessories", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&q=80&auto=format&fit=crop" },
      { id: 8, title: "Tailored Chino Pants", price: 1899, category: "Trousers", image: "https://images.unsplash.com/photo-1503342452485-86f7f1c0f2f6?w=1200&q=80&auto=format&fit=crop" }
    ],
    []
  );

  const categories = useMemo(() => ["All", ...Array.from(new Set(PRODUCTS.map((p) => p.category)))], [PRODUCTS]);

  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [view, setView] = useState("grid");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const matchesCat = activeCategory === "All" || p.category === activeCategory;
      const matchesQuery = !q || p.title.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [PRODUCTS, activeCategory, query]);

  return (
    <div className=" bg-transparent dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6">
      <header className="max-w-6xl mx-auto mb-6">
        <div className="flex items-center justify-between">
         
          
        </div>

        {/* Chip row */}
        <div className="mt-4 overflow-x-auto">
          <div className="flex gap-3 items-center py-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => { setActiveCategory(c); }}
                className={`flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-full border transition-shadow text-sm ${activeCategory === c ? 'bg-white shadow-md border-transparent' : 'bg-transparent border-gray-200'}`}
              >
                {/* optional icon placeholder */}
                <span className={`inline-flex w-3 h-3 rounded-full ${activeCategory === c ? 'bg-blue-500' : 'bg-gray-300'}`}></span>
                <span className="font-medium">{c}</span>
                <span className="text-xs text-gray-500">{c === "All" ? PRODUCTS.length : PRODUCTS.filter(p=>p.category===c).length}</span>
              </button>
            ))}

            {/* a cleared chip */}
            <button onClick={() => { setActiveCategory("All"); setQuery(""); }} className="px-4 py-2 rounded-full text-sm border bg-red-50">Clear</button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto">
        {/* Featured strip */}
        <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 p-6 rounded-lg text-white flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Spring Drop — Limited Edition</h2>
              <p className="mt-1 text-sm">New arrivals curated for the season. Free shipping on orders over ₹1999.</p>
            </div>
            <div>
              <button className="px-4 py-2 rounded-md bg-white text-sm text-black font-medium">Explore</button>
            </div>
          </div>

        {/* Product area */}
        
      </main>

      <footer className="max-w-6xl mx-auto mt-8 text-center text-sm text-gray-500">Home catalog • chip-style category UI • Tailwind</footer>
    </div>
  );
}
