import { useState, useEffect, useRef } from 'react';
import { 
  ShoppingCartIcon, 
  UserIcon, 
  Bars3Icon, 
  XMarkIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,

} from '@heroicons/react/24/outline';
import HomeCatalogPage from './HomeCatalogPage.jsx';


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const navigation = [
    { name: 'Home', href: '/', type: 'link' },
    { 
      name: 'Categories', 
      type: 'dropdown',
      items: [
        { name: 'Men', href: '/category/mens', featured: true },
        { name: 'Women', href: '/category/womens', featured: true },
        { name: 'Kids', href: '/category/kids' },
        { name: 'Footwear', href: '/category/footwear' },
        { name: 'Accessories', href: '/category/accessories' },
        { name: 'New Arrivals', href: '/category/new', new: true }
      ]
    },
    
    { name: 'About', href: '/about', type: 'link' },
    { name: 'Contact', href: '/contact', type: 'link' },
  ];

  const userMenu = [
    { name: 'Profile', href: '/account', },
    { name: 'Orders', href: '/orders', },
    { name: 'Wishlist', href: '/wishlist', },
    { name: 'Addresses', href: '/addresses', },
    { name: 'Payment Methods', href: '/payment', },
    { name: 'Security', href: '/security', },
    { name: 'Notifications', href: '/notifications', },
    { name: 'Preferences', href: '/preferences', }
  ];

  const cartItemsCount = 3;
  const wishlistItemsCount = 2;

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log('Searching for:', searchQuery);
      setIsSearchOpen(false);
    }
  };

  return (
    <nav 
      className={`bg-white dark:bg-gray-900 border-b transition-all duration-300 sticky top-0 z-50 ${
        isScrolled 
          ? 'shadow-lg border-gray-200 dark:border-gray-700' 
          : 'shadow-sm border-gray-100 dark:border-gray-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="/" 
              className="flex-shrink-0 flex items-center space-x-2"
              aria-label="ShopEasy Home"
            >
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SE</span>
              </div>
              <h1 className="text-2xl font-bold bg-black bg-clip-text text-transparent">
                ShopEasy
              </h1>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1" ref={dropdownRef}>
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.type === 'link' ? (
                  <a
                    href={item.href}
                    className="relative px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 flex items-center space-x-1"
                  >
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="px-1.5 py-0.5 text-xs bg-red-500 text-white rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </a>
                ) : (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button 
                      className="flex items-center px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                      aria-expanded={activeDropdown === item.name}
                    >
                      <span>{item.name}</span>
                      <ChevronDownIcon className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div className="absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 py-3 z-50 animate-in fade-in-0 zoom-in-95">
                        {item.items.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                          >
                            <span className="flex items-center">
                              {subItem.name}
                              {subItem.new && (
                                <span className="ml-2 px-1.5 py-0.5 text-xs bg-green-500 text-white rounded-full">
                                  New
                                </span>
                              )}
                            </span>
                            {subItem.featured && (
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                            )}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:block flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Search products, brands, and more..."
                />
              </div>
            </form>
          </div>
            

          {/* Right Icons */}
          <div className="flex items-center space-x-3">
            {/* Search Button - Mobile */}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="lg:hidden p-2.5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Search"
            >
              <MagnifyingGlassIcon className="w-5 h-5" />
            </button>

         
            {/* Cart */}
            <a 
              href="/cart" 
              className="relative p-2.5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Shopping Cart"
            >
              <ShoppingCartIcon className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </a>
            
         
                        <div
                          className="relative hidden sm:block"
                          ref={dropdownRef}
                          onMouseEnter={() => {
                            clearTimeout(window.__shopEasyNavTimer);
                            setActiveDropdown('user');
                          }}
                          onMouseLeave={() => {
                            window.__shopEasyNavTimer = setTimeout(() => setActiveDropdown(null), 150);
                          }}
                        >
                          <button
                            className="p-2.5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                            onClick={() => setActiveDropdown((prev) => (prev === 'user' ? null : 'user'))}
                            aria-haspopup="true"
                            aria-expanded={activeDropdown === 'user'}
                          >
                            <UserIcon className="w-5 h-5" />
                          </button>

                          {activeDropdown === 'user' && (
                            <div
                              className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 py-2 z-50 animate-in fade-in-0 zoom-in-95"
                              onMouseEnter={() => {
                                clearTimeout(window.__shopEasyNavTimer);
                                setActiveDropdown('user');
                              }}
                              onMouseLeave={() => {
                                window.__shopEasyNavTimer = setTimeout(() => setActiveDropdown(null), 150);
                              }}
                            >
                              {userMenu.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                  {item.name}
                                </a>
                              ))}
                              <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
                              <a
                                href="/logout"
                                className="block px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                              >
                                Sign Out
                              </a>
                            </div>
                          )}
                        </div>

                        {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2.5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="lg:hidden pb-4 animate-in slide-in-from-top duration-200">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Search products..."
                  autoFocus
                />
              </div>
            </form>
          </div>
        )}

       {/* Mobile Navigation */}
{isMenuOpen && (
  <div 
    className="lg:hidden border-t border-gray-200 dark:border-gray-700 animate-in slide-in-from-top duration-200"
    ref={mobileMenuRef}
  >
    <div className="px-2 pt-2 pb-3 space-y-1">

      {/* Show only Categories */}
      {navigation
        .filter(item => item.name === "Categories")
        .map((item) => (
          <div key={item.name} className="space-y-1">
            <div className="px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-200 border-b border-gray-100 dark:border-gray-800">
              {item.name}
            </div>

            <div className="pl-4 space-y-1">
              {item.items.map((subItem) => (
                <a
                  key={subItem.name}
                  href={subItem.href}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{subItem.name}</span>
                  {subItem.new && (
                    <span className="px-1.5 py-0.5 text-xs bg-green-500 text-white rounded-full">
                      New
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>
        ))
      }

    </div>
  </div>
)}


        {/* Mobile Bottom Bar */}
<div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 lg:hidden z-50">
  <div className="flex justify-around py-2 text-gray-700 dark:text-gray-200 text-sm">

    <a href="/" className="flex flex-col items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6"/></svg>
      Home
    </a>
  

   <a href="/product" className="flex flex-col items-center">
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clip-rule="evenodd" />
</svg>

      product
    </a>





  
    <a href="/cart" className="flex flex-col items-center relative">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.293 2.293A1 1 0 007 17h10m0 0a1 1 0 100 2 1 1 0 000-2zm-8 0a1 1 0 100 2 1 1 0 000-2z"/></svg>
      Cart
      <span className="absolute top-0 right-2 bg-red-500 text-white text-xs px-1 rounded-full">
        3
      </span>
    </a>

    <a href="/account" className="flex flex-col items-center">
       <UserIcon className="h-6 w-6" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A9 9 0 1118.88 6.196M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></UserIcon>
      Account
    </a>


  </div>
</div>

      </div>
  
    </nav>
  );
}