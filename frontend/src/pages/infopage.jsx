import { useState } from 'react';
import { 
  ChevronDownIcon, 
  ChevronUpIcon,
  TruckIcon,
  ArrowPathIcon,
  ShieldCheckIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';

export default function InfoPage() {
  const [activeSection, setActiveSection] = useState('faq');
  const [openFaqItems, setOpenFaqItems] = useState([]);

  const toggleFaqItem = (index) => {
    setOpenFaqItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const navigation = [
    { id: 'faq', name: 'FAQ', icon: QuestionMarkCircleIcon },
    { id: 'shipping', name: 'Shipping', icon: TruckIcon },
    { id: 'returns', name: 'Returns', icon: ArrowPathIcon },
    { id: 'privacy', name: 'Privacy Policy', icon: ShieldCheckIcon },
  ];

  const faqItems = [
    {
      question: "How do I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account and visiting the 'Order History' section."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and ShopEasy Pay. All payments are securely processed."
    },
    {
      question: "How can I create an account?",
      answer: "Click on the 'Sign Up' button in the top navigation, enter your email address, create a password, and fill in your personal details. You can also create an account during checkout."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to over 100 countries worldwide. International shipping costs and delivery times vary by destination. Customs duties and taxes may apply depending on your country's regulations."
    },
    {
      question: "How do I apply a discount code?",
      answer: "Enter your discount code in the 'Promo Code' field during checkout. The discount will be automatically applied to your order total before payment."
    },
    {
      question: "What if an item is out of stock?",
      answer: "Out-of-stock items will be marked as unavailable. You can sign up for restock notifications by clicking the 'Notify Me' button on the product page."
    }
  ];

  const shippingInfo = {
    domestic: {
      standard: "5-7 business days - $4.99",
      express: "2-3 business days - $9.99",
      overnight: "1 business day - $19.99"
    },
    international: {
      standard: "10-15 business days - $14.99",
      express: "5-7 business days - $24.99"
    },
    freeShipping: "Free standard shipping on all orders over $50"
  };

  const returnPolicy = {
    period: "30 days from delivery date",
    conditions: [
      "Items must be in original condition with tags attached",
      "Items must be unworn, unwashed, and undamaged",
      "Original packaging and receipt included",
      "Final sale items cannot be returned"
    ],
    process: [
      "Initiate return through your account or contact customer service",
      "Print provided shipping label",
      "Package items securely and drop at any authorized shipping location",
      "Refund processed within 5-7 business days after receipt"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Help & Information
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions and learn about our policies, shipping, and returns.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-64 flex-shrink-0">
            <nav className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-4 sticky top-8">
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full flex items-center px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                        activeSection === item.id
                          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      <span className="font-medium">{item.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* FAQ Section */}
            {activeSection === 'faq' && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {faqItems.map((item, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFaqItem(index)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 dark:text-white pr-4">
                          {item.question}
                        </span>
                        {openFaqItems.includes(index) ? (
                          <ChevronUpIcon className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDownIcon className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        )}
                      </button>
                      {openFaqItems.includes(index) && (
                        <div className="px-6 pb-6">
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Contact Support */}
                <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Still have questions?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Our customer support team is here to help you.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="mailto:support@shopeasy.com"
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      Email Support
                    </a>
                    <a
                      href="tel:+1-800-SHOPEASY"
                      className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      Call Us
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Shipping Section */}
            {activeSection === 'shipping' && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                  Shipping Information
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Domestic Shipping (USA)
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                        <span className="text-gray-600 dark:text-gray-400">Standard</span>
                        <span className="font-medium text-gray-900 dark:text-white">{shippingInfo.domestic.standard}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                        <span className="text-gray-600 dark:text-gray-400">Express</span>
                        <span className="font-medium text-gray-900 dark:text-white">{shippingInfo.domestic.express}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                        <span className="text-gray-600 dark:text-gray-400">Overnight</span>
                        <span className="font-medium text-gray-900 dark:text-white">{shippingInfo.domestic.overnight}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      International Shipping
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                        <span className="text-gray-600 dark:text-gray-400">Standard</span>
                        <span className="font-medium text-gray-900 dark:text-white">{shippingInfo.international.standard}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                        <span className="text-gray-600 dark:text-gray-400">Express</span>
                        <span className="font-medium text-gray-900 dark:text-white">{shippingInfo.international.express}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-8">
                  <p className="text-green-800 dark:text-green-400 font-medium">
                    {shippingInfo.freeShipping}
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Order Processing</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Orders are processed within 1-2 business days. You will receive a confirmation email once your order ships.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Tracking Your Order</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Track your order in real-time using the tracking number provided in your shipping confirmation email.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Returns Section */}
            {activeSection === 'returns' && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                  Return & Exchange Policy
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Return Period
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We accept returns within <strong>{returnPolicy.period}</strong> of delivery.
                    </p>
                  </div>

                  <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Refund Method
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Refunds are issued to the original payment method. Store credit options available.
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Return Conditions
                    </h3>
                    <ul className="space-y-2">
                      {returnPolicy.conditions.map((condition, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400">{condition}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Return Process
                    </h3>
                    <ol className="space-y-3">
                      {returnPolicy.process.map((step, index) => (
                        <li key={index} className="flex items-start">
                          <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0 mt-0.5">
                            {index + 1}
                          </span>
                          <span className="text-gray-600 dark:text-gray-400">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            )}

            {/* Privacy Policy Section */}
            {activeSection === 'privacy' && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                  Privacy Policy
                </h2>

                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <div className="space-y-8">
                    <section>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Information We Collect
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        We collect information to provide better services to our users. This includes:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                        <li>Personal information (name, email, shipping address)</li>
                        <li>Payment information (processed securely through our payment partners)</li>
                        <li>Browsing behavior and preferences</li>
                        <li>Device and connection information</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        How We Use Your Information
                      </h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                        <li>Process and fulfill your orders</li>
                        <li>Provide customer support</li>
                        <li>Send order updates and promotional communications (with your consent)</li>
                        <li>Improve our website and services</li>
                        <li>Prevent fraud and ensure security</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Data Security
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        We implement appropriate security measures to protect your personal information. 
                        All sensitive data is encrypted during transmission and storage. We regularly 
                        monitor our systems for possible vulnerabilities and attacks.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Your Rights
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        You have the right to:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                        <li>Access your personal information</li>
                        <li>Correct inaccurate data</li>
                        <li>Request deletion of your data</li>
                        <li>Opt-out of marketing communications</li>
                        <li>Data portability</li>
                      </ul>
                    </section>

                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Contact Our Privacy Team
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        For privacy-related questions or to exercise your rights, contact us at:{' '}
                        <a href="mailto:privacy@shopeasy.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                          privacy@shopeasy.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}