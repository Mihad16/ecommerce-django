import { ArrowRight, Star } from "lucide-react";

export default function About() {
  return (
    <section className="bg-[#faf5ef] dark:bg-[#0f0e0d] text-[#1a1a1a] dark:text-white">
      
      {/* Hero Section */}
      <div className="relative py-24 text-center">
        <div className="absolute inset-0 bg-black/5 dark:bg-white/5"></div>
        <div className="relative max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            About Our Brand
          </h1>
          <p className="mt-4 text-lg text-[#6b6b6b] dark:text-gray-400">
            A modern lifestyle fashion & essentials brand crafted for elegant living.
          </p>

          <button className="mt-6 px-8 py-4 bg-[#1a1a1a] dark:bg-white text-white dark:text-black rounded-lg hover:opacity-90 transition flex items-center gap-2 mx-auto">
            Explore Collection <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto py-16 px-6">
        {[
          { label: "Happy Customers", value: "50K+" },
          { label: "Premium Products", value: "2K+" },
          { label: "Stores Worldwide", value: "85+" },
          { label: "Satisfaction Rating", value: "98%" }
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <h3 className="text-3xl font-bold">{stat.value}</h3>
            <p className="text-[#6b6b6b] dark:text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Brand Values */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Timeless Design",
              desc: "Our pieces reflect sophistication, modern elegance, and refined craftsmanship."
            },
            {
              title: "Premium Quality",
              desc: "We select durable and rich materials that promise lasting value."
            },
            {
              title: "Ethical Production",
              desc: "Responsibly sourced fabrics & fair labor standards are core to our mission."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#181715] border border-[#e6dfd3] dark:border-[#2a2927] p-8 rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              <div className="w-12 h-12 rounded-full bg-[#f3eadb] dark:bg-[#1e1d1b] flex items-center justify-center mb-4">
                <Star className="text-[#c6a667] dark:text-[#d8c08f]" />
              </div>
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-[#6b6b6b] dark:text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Creative Team</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Ariana V.", role: "Creative Director" },
            { name: "Daniel M.", role: "Brand Strategist" },
            { name: "Sophia R.", role: "Lead Designer" }
          ].map((member, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#181715] border border-[#e6dfd3] dark:border-[#2a2927] p-8 rounded-xl text-center shadow-sm hover:shadow-lg transition"
            >
              <div className="w-24 h-24 rounded-full bg-[#f3eadb] dark:bg-[#1e1d1b] mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-[#6b6b6b] dark:text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 pb-20 text-center">
        <div className="p-10 bg-white dark:bg-[#181715] border border-[#e6dfd3] dark:border-[#2a2927] rounded-2xl max-w-4xl mx-auto shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Start Your Fashion Journey With Us</h2>
          <p className="text-[#6b6b6b] dark:text-gray-400 mb-6">
            Explore premium collections that elevate your everyday lifestyle.
          </p>

          <button className="px-10 py-4 bg-[#c6a667] dark:bg-[#b89a63] text-black font-medium rounded-lg hover:opacity-90 transition inline-flex items-center gap-2">
            Shop Now <ArrowRight size={18} />
          </button>
        </div>
      </div>

    </section>
  );
}
