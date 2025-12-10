"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { motion } from "framer-motion";


export default function OurCollections() {
  return (
    <MaxWidthWrapper className="my-10 space-y-10">
      <motion.section
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Our Collections</h1>
        <p className="text-lg text-gray-600">
          Explore our curated collections of travel stories, guides, and tips! Dive into unique destinations, travel hacks, and unforgettable experiences to inspire your next adventure.
        </p>
      </motion.section>

      <motion.section
        className="bg-gradient-to-r from-yellow-100 to-pink-100 p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Featured Collections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <div
            className="relative h-64 bg-cover bg-center rounded-lg shadow-md"
            style={{ backgroundImage: "url('/images/blog5.jpg')" }}>

            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center">
              <h3 className="text-xl font-bold text-white">Beach Escapes</h3>
            </div>
          </div>

          <div
            className="relative h-64 bg-cover bg-center rounded-lg shadow-md"
            style={{ backgroundImage: "url('/images/blog4.jpg')" }} >
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center">
              <h3 className="text-xl font-bold text-white">Mountain Adventures</h3>
            </div>
          </div>

          <div
            className="relative h-64 bg-cover bg-center rounded-lg shadow-md"
            style={{ backgroundImage: "url('/images/blog3.jpg')" }} >
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center">
              <h3 className="text-xl font-bold text-white">City Breaks</h3>
            </div>
          </div>

        </div>
      </motion.section>

      <motion.section
        className="p-6 rounded-lg shadow-lg bg-gray-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Recent Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/blog2.jpg')" }}></div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Exploring Hidden Waterfalls</h3>
              <p className="text-sm text-gray-600 mt-2">
                Discover some of the most breathtaking, hidden waterfalls perfect for a secluded adventure.
              </p>
              <a href="#" className="text-blue-500 hover:text-blue-700 mt-4 block">Read more &rarr;</a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/blog1.jpg')" }}></div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">The Ultimate Foodie's Guide</h3>
              <p className="text-sm text-gray-600 mt-2">
                Indulge in culinary experiences and hidden gems from around the world.
              </p>
              <a href="#" className="text-blue-500 hover:text-blue-700 mt-4 block">Read more &rarr;</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/blog5.jpg')" }}></div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Top 10 Winter Destinations</h3>
              <p className="text-sm text-gray-600 mt-2">
                Cozy up this winter with our top picks for magical winter getaways.
              </p>
              <a href="#" className="text-blue-500 hover:text-blue-700 mt-4 block">Read more &rarr;</a>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Popular Tags</h2>
        <div className="flex flex-wrap gap-4">
          <span className="bg-gray-200 px-4 py-2 rounded-lg text-gray-700 cursor-pointer hover:bg-gray-300">#TravelTips</span>
          <span className="bg-gray-200 px-4 py-2 rounded-lg text-gray-700 cursor-pointer hover:bg-gray-300">#Adventure</span>
          <span className="bg-gray-200 px-4 py-2 rounded-lg text-gray-700 cursor-pointer hover:bg-gray-300">#CityBreaks</span>
          <span className="bg-gray-200 px-4 py-2 rounded-lg text-gray-700 cursor-pointer hover:bg-gray-300">#Beaches</span>
          <span className="bg-gray-200 px-4 py-2 rounded-lg text-gray-700 cursor-pointer hover:bg-gray-300">#Food</span>
          <span className="bg-gray-200 px-4 py-2 rounded-lg text-gray-700 cursor-pointer hover:bg-gray-300">#LuxuryTravel</span>
        </div>
      </motion.section>

      <motion.section
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <p className="text-lg text-gray-600">
          Dive into our collections and let us guide you to your next unforgettable journey. Discover, explore, and make memories with KC Blog!
        </p>
      </motion.section>


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
