"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <MaxWidthWrapper className="my-10 space-y-10">
      <motion.section 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: 10 }} 
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          Welcome to KC Bloggers. We’re dedicated to inspiring your next adventure through captivating travel stories, insider tips, and immersive guides. From exploring hidden natural wonders to luxury retreats, we bring you a world of experiences.
        </p>
      </motion.section>

      <motion.section 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: 10 }} 
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false }}
        className="bg-gray-100 p-8 sm:px-12 md:px-16 py-10 sm:py-12 md:py-16 max-w-3xl mx-auto rounded-lg shadow-lg mt-10"
      >
        <h2 className="text-4xl font-semibold text-gray-800 mb-4 text-center">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At KC Bloggers, our mission is to provide high-quality content that enhances your travel experiences, fostering a community of curious explorers. We aim to be your go-to resource for all things travel, offering guidance whether you’re an adventurous backpacker or a luxury traveler.
        </p>
      </motion.section>

      <motion.section 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: 10 }} 
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: false }}
        className="p-6 sm:px-12 md:px-16 py-10 sm:py-12 md:py-16 max-w-6xl mx-auto rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-3">Our Values</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
          <li>Inspiration: To spark your wanderlust through unique, memorable travel stories.</li>
          <li>Community: Building a supportive space for travel lovers to connect and share.</li>
          <li>Integrity: Providing honest, reliable travel advice and recommendations.</li>
          <li>Adventure: Encouraging exploration and discovery, beyond the usual routes.</li>
        </ul>
      </motion.section>

      <motion.section 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: 10 }} 
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: false }}
        className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-purple-100 to-blue-100"
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-3">Meet the Team</h2>
        <p className="text-lg text-gray-700 mb-4">
          Our dedicated team is made up of seasoned travelers, writers, and photographers who bring their passion and expertise to every story. We’re committed to sharing authentic travel experiences and insider knowledge to make your trips unforgettable.
        </p>

        <div className="flex flex-wrap gap-6 justify-center">
          <div className="w-48 h-48 bg-white shadow-md flex items-center justify-center overflow-hidden animate-slideUp delay-500">
            <Image src="/images/person1.jpeg" alt="Team Member 1" width={250} height={300}/>
          </div>

          <div className="w-48 h-48 bg-white shadow-md flex items-center justify-center overflow-hidden animate-slideUp delay-500">
            <Image src="/images/person2.jpg" alt="Team Member 2" width={210} height={210}/>
          </div>

          <div className="w-48 h-48 bg-white shadow-md flex items-center justify-center overflow-hidden animate-slideUp delay-500">
            <Image src="/images/person3.jpg" alt="Team Member 3" width={110} height={150}/>
          </div>
        </div>
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
