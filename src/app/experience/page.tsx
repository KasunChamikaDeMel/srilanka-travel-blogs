"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <MaxWidthWrapper className="my-10 space-y-10">
      <section className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Experience the World</h1>
        <p className="text-lg text-gray-600">
          Discover unforgettable journeys through our carefully crafted experiences. From thrilling adventures to relaxing retreats, find the perfect experience for your next getaway.
        </p>
      </section>

      <section className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Adventure Awaits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative h-64 bg-cover bg-center rounded-lg shadow-md" style={{ backgroundImage: "url('/images/safari.jpg')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
              <h3 className="text-xl font-bold text-white">Safari Adventures</h3>
            </div>
          </div>
          <div className="relative h-64 bg-cover bg-center rounded-lg shadow-md" style={{ backgroundImage: "url('/images/hiking.jpg')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
              <h3 className="text-xl font-bold text-white">Mountain Hiking</h3>
            </div>
          </div>
          <div className="relative h-64 bg-cover bg-center rounded-lg shadow-md" style={{ backgroundImage: "url('/images/snorkeling.jpg')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
              <h3 className="text-xl font-bold text-white">Snorkeling Excursions</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="p-6 rounded-lg shadow-lg bg-gray-100">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Luxury Escapes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/resort.jpg')" }}></div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Island Resorts</h3>
              <p className="text-sm text-gray-600 mt-2">
                Immerse yourself in luxury with our curated island resort experiences, perfect for relaxation.
              </p>
              <a href="#" className="text-blue-500 hover:text-blue-700 mt-4 block">Discover More &rarr;</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/spa.jpg')" }}></div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Spa Retreats</h3>
              <p className="text-sm text-gray-600 mt-2">
                Unwind and recharge with exclusive spa treatments in serene destinations.
              </p>
              <a href="#" className="text-blue-500 hover:text-blue-700 mt-4 block">Discover More &rarr;</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/city-luxury.jpg')" }}></div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">City Luxury</h3>
              <p className="text-sm text-gray-600 mt-2">
                Experience the finest urban luxury in vibrant cities around the world.
              </p>
              <a href="#" className="text-blue-500 hover:text-blue-700 mt-4 block">Discover More &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-green-100 to-yellow-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Cultural Experiences</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative h-64 bg-cover bg-center rounded-lg shadow-md" style={{ backgroundImage: "url('/images/festival.jpg')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
              <h3 className="text-xl font-bold text-white">Local Festivals</h3>
            </div>
          </div>
          <div className="relative h-64 bg-cover bg-center rounded-lg shadow-md" style={{ backgroundImage: "url('/images/art.jpg')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
              <h3 className="text-xl font-bold text-white">Art & Heritage Tours</h3>
            </div>
          </div>
          <div className="relative h-64 bg-cover bg-center rounded-lg shadow-md" style={{ backgroundImage: "url('/images/food.jpg')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
              <h3 className="text-xl font-bold text-white">Gastronomy Journeys</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center">
        <p className="text-lg text-gray-600">
          Ready to create memories that last a lifetime? Explore these experiences and embark on a journey of discovery, relaxation, and adventure.
        </p>
      </section>

      <motion.footer
  className="relative text-black py-12 px-6"
  whileInView={{ opacity: 1, y: 0 }}
  initial={{ opacity: 0, y: 10 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  viewport={{ once: false, amount: 0.5 }}
>
  <div className="absolute inset-0 opacity-90"></div>

  <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
    <div>
      <h3 className="text-xl font-bold mb-6 uppercase tracking-wide text-yellow-500">
        Our Company
      </h3>
      <p className="text-sm leading-relaxed mb-6">
        Discover Sri Lanka with KC Blogs. Offering personalized travel experiences, we turn your dream destinations into unforgettable journeys. Explore, adventure, and escape with us.
      </p>
      <select className="bg-gray-700 border border-gray-600 text-sm p-3 rounded-md w-full text-white focus:ring-2 focus:ring-yellow-500">
        <option>English</option>
        <option>සිංහල</option>
      </select>
    </div>

    <div>
      <h3 className="text-xl font-bold mb-6 uppercase tracking-wide text-yellow-500">
        Explore
      </h3>
      <ul className="space-y-4 text-sm">
        {[
          { href: "/culture", label: "Cultural Exploration" },
          { href: "/nature", label: "Nature & Wildlife" },
          { href: "/beach", label: "Relaxation & Beach Vacation" },
          { href: "/wellness", label: "Wellness & Ayurveda" },
          { href: "/destinations", label: "Destinations" },
        ].map(({ href, label }) => (
          <li key={href}>
            <a href={href} className="hover:text-yellow-500 transition duration-300 hover:translate-x-1 flex items-center" >
              <span className="mr-2">➤</span> {label}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-bold mb-6 uppercase tracking-wide text-yellow-500">
        Contact Info
      </h3>
      <div className="space-y-4 text-sm">
        <p>Feel free to contact & reach us!</p>
        <p>📍 Address: Meepe, Sri Lanka</p>
        <p>📧 Email: info@kcblogs.com</p>
        <p>📞 Phone: +94 70 111 111</p>
        <p>📱 WhatsApp: +94 70 111 111</p>
      </div>
    </div>
  </div>

  <div className="relative z-10 border-t border-gray-400 mt-12 pt-8 flex flex-wrap justify-center gap-6">
    {[
      { href: "https://www.facebook.com", label: "Facebook", color: "text-blue-500", icon: "facebook.png" },
      { href: "https://www.instagram.com", label: "Instagram", color: "text-pink-500", icon: "instagram.png" },
      { href: "https://www.twitter.com", label: "X", color: "text-blue-400", icon: "twitter.png" },
      { href: "https://www.linkedin.com", label: "LinkedIn", color: "text-blue-700", icon: "linkedin.png" },
      { href: "https://www.youtube.com", label: "YouTube", color: "text-red-600", icon: "youtube.png" },
    ].map(({ href, label, color, icon }) => (
      <a key={label} href={href} className={`flex items-center gap-2 hover:${color} transition duration-300`}>
        <img src={`images/${icon}`} alt={label} className="h-6 w-6" /> <span>{label}</span>
      </a>
    ))}
  </div>

  <div className="relative z-10 border-t border-gray-400 mt-8 pt-4 text-center text-sm text-gray-400">
    <p> &copy; 2024 KC Blogs. Design by Kasun Chamika @ Stacmac (Pvt) Ltd. </p>
  </div>
</motion.footer>
  
    </MaxWidthWrapper>
  );
}
