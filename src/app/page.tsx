"use client";

import Heading from "@/components/Heading";
import Hero from "@/components/section/hero";
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


export default function Home() {
  return (
    <>
    <Heading title={"KC Blogs"} description={""} keywords={""} />
    <Hero />

    <MaxWidthWrapper className="my-5">
    <motion.div className="text-center max-w-6xl mx-auto mt-20 mb-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

        <h2 className="text-3xl font-bold text-gray-800">Nature</h2>
        <p className="text-lg font-medium text-gray-600">
          Experience the beauty of nature with breathtaking landscapes.
        </p>
      </motion.div>

      <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
      <Carousel opts={{ align: "center" }} className="max-w-6xl mx-auto mt-10 rounded-lg p-4 border shadow-md hover:shadow-lg bg-gradient-to-r from-pink-300 to-yellow-200"> 
       <CarouselContent className="flex w-full h-96">

              <CarouselItem className="relative flex-shrink-0 w-full h-full rounded-lg">
                <Image src="/images/guide1.jpg" alt="Image 1" objectFit="contain" className="rounded-lg" layout="fill"/>
              </CarouselItem>

              <CarouselItem className="relative flex-shrink-0 w-full h-full rounded-lg">
                <Image src="/images/guide2.jpg" alt="Image 2" objectFit="contain" className="rounded-lg" layout="fill"/>
              </CarouselItem>

              <CarouselItem className="relative flex-shrink-0 w-full h-full rounded-lg">
                <Image src="/images/guide3.jpg" alt="Image 3" objectFit="contain" className="rounded-lg" layout="fill"/>
              </CarouselItem>

              <CarouselItem className="relative flex-shrink-0 w-full h-full rounded-lg">
                <Image src="/images/guide4.jpg" alt="Image 4" objectFit="contain" className="rounded-lg" layout="fill"/>
              </CarouselItem>

              <CarouselItem className="relative flex-shrink-0 w-full h-full rounded-lg">
                <Image src="/images/guide5.jpg" alt="Image 4" objectFit="contain" className="rounded-lg" layout="fill"/>
              </CarouselItem>

            </CarouselContent>
         <CarouselPrevious />
         <CarouselNext />
      </Carousel>
      </motion.div>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="mt-20 px-4 md:px-8 lg:px-16">
      <motion.section 
          className="my-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
<section className="p-6 rounded-lg shadow-lg bg-gray-100 animate-fadeInUp animate-slideUp delay-100">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Recent Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/top10.jpg')" }}></div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Top 10 Adventure Destinations</h3>
              <p className="text-sm text-gray-600 mt-2">
                Discover the top 10 adventure destinations you must visit for a thrill of a lifetime.
              </p>
              <a href="#" className="text-blue-500 hover:text-blue-700 mt-4 block">Read More &rarr;</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/guide.jpg')" }}></div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Essential Travel Tips for 2024</h3>
              <p className="text-sm text-gray-600 mt-2">
                Make your 2024 travels smoother with these essential tips and hacks.
              </p>
              <a href="#" className="text-blue-500 hover:text-blue-700 mt-4 block">Read More &rarr;</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/travel-food.jpg')" }}></div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">A Culinary Journey Around the World</h3>
              <p className="text-sm text-gray-600 mt-2">
                Explore the world through its food and discover the best culinary experiences.
              </p>
              <a href="#" className="text-blue-500 hover:text-blue-700 mt-4 block">Read More &rarr;</a>
            </div>
          </div>
        </div>
      </section>

        </motion.section>

        <motion.section 
          className="my-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
        <section className="p-6 rounded-lg shadow-lg bg-gray-100 animate-fadeInUp animate-slideUp delay-100">
          <h2 className="text-3xl font-bold mb-6">Old Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="p-4 border rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
              <Image src="/images/blog4.jpg" alt="Blog 4" width={400} height={250} className="rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">Adventure in C4</h3>
              <p className="mt-2 text-gray-600">Top places for adventure seekers in C4.</p>
              <a href="#" className="text-blue-500 hover:text-blue-700 mt-4 block">Read More &rarr;</a>
            </div>

            <div className="p-4 border rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
              <Image src="/images/blog5.jpg" alt="Blog 5" width={400} height={250} className="rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">Deserts of C5</h3>
              <p className="mt-2 text-gray-600">A journey through the vast deserts of C5.</p>
              <a href="#" className="text-blue-500 hover:text-blue-700 mt-4 block">Read More &rarr;</a>
            </div>

          </div>
          </section>
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
    </>
  );

}

