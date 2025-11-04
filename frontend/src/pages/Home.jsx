import { useState } from 'react';
import { 
  StarIcon, 
  ShoppingBagIcon, 
  TruckIcon, 
  ShieldCheckIcon,
  ArrowRightIcon 
} from '@heroicons/react/24/outline';
import HomeCatalogPage from '../components/HomeCatalogPage';


// Featured products data
const featuredProducts = [
  {
    id: 1,
    name: "Men's Oversized Hoodie",
    price: 49.99,
    originalPrice: 69.99,
    image: "https://source.unsplash.com/featured/?mens,hoodie,fashion",
    rating: 4.6,
    reviewCount: 320,
    discount: 28,
    isNew: true
  },
  {
    id: 2,
    name: "Women's Summer Floral Dress",
    price: 39.99,
    originalPrice: 59.99,
    image: "https://source.unsplash.com/featured/?womens,floral,dress,fashion",
    rating: 4.8,
    reviewCount: 210,
    discount: 33
  },
  {
    id: 3,
    name: "Unisex White Sneakers",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://source.unsplash.com/featured/?white,sneakers,shoes",
    rating: 4.7,
    reviewCount: 540,
    discount: 20,
    isNew: true
  },
  {
    id: 4,
    name: "Men's Slim Fit Jeans",
    price: 54.99,
    originalPrice: 79.99,
    image: "https://source.unsplash.com/featured/?mens,jeans,denim",
    rating: 4.4,
    reviewCount: 410,
    discount: 31
  },
  {
    id: 5,
    name: "Women's Handbag",
    price: 89.99,
    image: "https://source.unsplash.com/featured/?womens,handbag,bags",
    rating: 4.9,
    reviewCount: 178,
    isNew: true
  },
  {
    id: 6,
    name: "Kids Casual Shoes",
    price: 29.99,
    originalPrice: 49.99,
    image: "https://source.unsplash.com/featured/?kids,shoes",
    rating: 4.5,
    reviewCount: 120,
    discount: 40
  },
  {
    id: 7,
    name: "Stylish Sunglasses",
    price: 24.99,
    originalPrice: 39.99,
    image: "https://source.unsplash.com/featured/?sunglasses,fashion",
    rating: 4.2,
    reviewCount: 190,
    discount: 38
  },
  {
    id: 8,
    name: "Women's Sandals",
    price: 34.99,
    image: "https://source.unsplash.com/featured/?womens,sandals,footwear",
    rating: 4.6,
    reviewCount: 230
  }
];



// Categories data
const categories = [
  {
    name: "Men's Fashion",
    count: "320 items",
    images: [
      "https://images.unsplash.com/photo-1521334884684-d80222895322",
     
    ]
  },

  {
    name: "Women's Fashion",
    count: "410 items",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      
   
    ]
  },

  {
    name: "Footwear",
    count: "180 items",
    images: [
      "https://images.unsplash.com/photo-1535043934128-f16d2b1c2bf0",
      
    ]
  },

  {
    name: "Accessories",
    count: "150 items",
    images: [
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713",
     
    ]
  },

  {
    name: "Bags & Backpacks",
    count: "120 items",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
     
     
     
    ]
  },

  {
    name: "Jewelry",
    count: "95 items",
    images: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    ]
  }
];


// Features data
const features = [
  {
    icon: TruckIcon,
    title: 'Free Shipping',
    description: 'Free shipping on orders over $100'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Secure Payment',
    description: '100% secure payment processing'
  },
  {
    icon: ShoppingBagIcon,
    title: 'Easy Returns',
    description: '30-day money back guarantee'
  }
];

export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic
    console.log('Subscribed:', email);
    setEmail('');
    alert('Thank you for subscribing!');
  };

  return (
    <div className="min-h-screen">
        
      
      {/* Hero Section */}
      <section className="relative bg-[#faf5ef] dark:bg-[#0f0e0d] overflow-hidden">
  {/* Soft Spotlight */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,228,199,0.7),transparent_60%)] dark:bg-[radial-gradient(circle_at_top,rgba(90,70,50,0.4),transparent_60%)]"></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* Hero Text */}
      <div className="text-center lg:text-left">
        
        <span className="text-xs tracking-widest uppercase text-gray-700 dark:text-gray-300 bg-[#efe6db] dark:bg-[#1c1b1a] px-4 py-1 rounded-full">
          New Season . Fashion Edit
        </span>

        <h1 className="mt-6 text-5xl md:text-6xl font-bold text-[#1b1a17] dark:text-white leading-tight">
          Elevate Your
          <span className="block font-serif italic text-[#b08968] dark:text-[#e3c8a8]">
            Style & Confidence
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed">
          Explore premium collections crafted for modern elegance. Curated outfits that define sophistication and timeless beauty.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="px-10 py-3 bg-[#1b1a17] text-white rounded-full hover:bg-[#4b453a] dark:bg-white dark:text-black dark:hover:bg-[#e4dbd1] font-medium transition">
            Shop Collection
          </button>

          <button className="px-10 py-3 border border-[#b08968] text-[#b08968] rounded-full hover:bg-[#b08968] hover:text-white dark:text-[#e3c8a8] dark:border-[#e3c8a8] transition">
            Lookbook
          </button>
        </div>

        {/* Stats */}
        <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-10">
          {[
            { num: "8K+", text: "Styled Customers" },
            { num: "350+", text: "Premium Products" },
            { num: "24/7", text: "Fashion Concierge" }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-bold text-[#1b1a17] dark:text-white">{item.num}</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm tracking-wide">{item.text}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#e7d7c7] dark:border-[#2b2a28]">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600"
            alt="Luxury Fashion Model"
            className="w-full h-[480px] object-cover"
          />

          {/* Tag Card Overlay */}
          <div className="absolute bottom-4 left-4 bg-white/80 dark:bg-black/70 backdrop-blur-lg px-4 py-2 rounded-xl border border-[#e4d9c8] dark:border-[#3b3a37]">
            <div className="font-medium text-gray-900 dark:text-white text-sm">
              Exclusive Edition
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              Premium Fabric Collection
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


    

      {/* Categories Section */}
     {/* Categories Section */}
<section className="py-20 bg-[#faf5ef] dark:bg-[#0f0e0d] transition-colors duration-300">
    
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Featured Collection
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Exclusive styles curated for modern fashion lovers
        </p>
      </div>
    {/* Bento Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[200px]">
  {categories.map((category, i) => {
    // pattern: Tall, Normal, Normal, Tall repeat
    const span =
      i % 4 === 0 || i % 4 === 3
        ? "lg:row-span-2" // first and fourth tile tall
        : "";             // others normal

    return (
      <div
        key={i}
        className={`relative overflow-hidden rounded-2xl border border-[#e6e1d8] dark:border-[#1a1918]
        bg-white dark:bg-[#121110] group cursor-pointer shadow-sm hover:shadow-lg
        transition-all duration-300 ${span}`}
      >
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover transition-all duration-[600ms] group-hover:scale-[1.08]"
        />

        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all backdrop-blur-[2px]" />

        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-lg md:text-xl font-semibold">
            {category.name}
          </h3>
          <p className="text-xs text-gray-200">{category.count}</p>

          <div className="opacity-0 group-hover:opacity-100 transition-opacity mt-2">
            <button className="text-sm font-medium flex items-center gap-1 hover:text-[#d4b98c]">
              Explore <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  })}
</div>



  </div>
</section>





      {/* Featured Products */}
   <section className="py-20 bg-[#faf5ef] dark:bg-[#0f0e0d]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Header */}
    <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Featured Collection
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Exclusive styles curated for modern fashion lovers
        </p>
      </div>

      <a
        href="/products"
        className="mt-6 md:mt-0 text-sm uppercase tracking-wide px-6 py-2 border border-gray-400 dark:border-gray-700 rounded-full
        text-gray-900 dark:text-gray-200 hover:text-[#d4b98c] hover:border-[#d4b98c] dark:hover:text-[#d4b98c]
        transition-all"
      >
        View All
      </a>
    </div>

    {/* Normal Grid (No Bento) */}
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredProducts.map((product) => (
        <div
          key={product.id}
          className="relative overflow-hidden rounded-2xl border border-[#e5dfd6] dark:border-[#1d1c1b]
          bg-white dark:bg-[#121110] hover:shadow-md transition-all duration-300"
        >
          <div className="h-72 w-full">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          {/* Info */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/35 backdrop-blur-sm p-4 text-white">
            <h3 className="text-lg font-medium">{product.name}</h3>
            <p className="text-sm opacity-90">₹{product.price}</p>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>





      {/* Newsletter Section */}
     {/* <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest updates on new products and exclusive offers.
          </p>
          
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-lg border border-transparent focus:ring-2 focus:ring-white focus:border-transparent bg-white/10 text-white placeholder-blue-200"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>*/}

      {/* Testimonials */}
     {/*<section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((testimonial) => (
              <div key={testimonial} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  "Amazing quality and fast shipping! I've been shopping here for years and never been disappointed."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50"
                    alt="Customer"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">John Doe</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Verified Customer</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */} 


        {/* Features Section */}
      <section className="py-16 bg-[#faf5ef] dark:bg-[#0f0e0d] border-t border-[#e6e1d8] dark:border-[#1a1918]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {features.map((feature, index) => (
        <div key={index} className="text-center p-6 hover:scale-[1.03] transition-all duration-300">
          
          {/* Icon Wrapper */}
          <div className="w-16 h-16 bg-[#eaddc6] dark:bg-[#1a1918] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
            <feature.icon className="w-8 h-8 text-[#8a6f4e] dark:text-[#d4b98c]" />
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-semibold text-[#1a1a1a] dark:text-white mb-2 tracking-tight">
            {feature.title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-700 dark:text-gray-400 text-sm max-w-xs mx-auto">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
}