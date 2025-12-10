"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <MaxWidthWrapper className="my-10 space-y-10">
      <section className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">
          We would love to hear from you! Whether you have questions, suggestions, or just want to chat about your next adventure, feel free to reach out to us.
        </p>
      </section>

      <section className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-semibold text-gray-800 mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-semibold text-gray-800 mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-semibold text-gray-800 mb-2">Your Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Write your message here"
              rows={5}
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Send Message
            </button>
          </div>
        </form>
      </section>

      <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Contact Information</h2>
        <p className="text-lg text-gray-600 mb-4">
          Feel free to reach out to us via the following channels:
        </p>

        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <span className="h-6 w-6 text-blue-500">&#9993;</span>
            <p className="text-lg text-gray-800">info@kcblogs.com</p>
          </div>

          <div className="flex items-center space-x-3">
            <span className="h-6 w-6 text-blue-500">&#9742;</span>
            <p className="text-lg text-gray-800">+94 70 111 111</p>
          </div>

          <div className="flex items-center space-x-3">
            <span className="h-6 w-6 text-blue-500">&#127968;</span>
            <p className="text-lg text-gray-800">Meepe, Sri Lanka</p>
          </div>
       </div>
      </section>


      <section className="p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Find Us Here</h2>
        <div className="w-full h-64 bg-gray-200 rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.0784191747956!2d-77.0365161853397!3d38.89767637750701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b0d5b8e5c7c5%3A0x1a56a4a5df92803d!2sWhite%20House!5e0!3m2!1sen!2sus!4v1631826241149!5m2!1sen!2sus"
            width="100%" height="100%" style={{ border: "0" }} allowFullScreen={true} loading="lazy">
            </iframe>
        </div>
      </section>

      <section className="text-center">
        <p className="text-lg text-gray-600">
          Have questions? We are here to help! Get in touch with us today, and let us make your next adventure unforgettable.
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
