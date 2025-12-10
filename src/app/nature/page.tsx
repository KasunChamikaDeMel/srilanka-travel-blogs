import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function NatureWildlife() {
  return (
    <MaxWidthWrapper className="my-10 space-y-10">
      <section className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Nature & Wildlife</h1>
        <p className="text-lg text-gray-600">
          Discover the beauty of nature and experience wildlife in their natural habitats.
        </p>
      </section>

      <section className="p-6 rounded-lg shadow-lg bg-gray-100">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Top Wildlife Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/safari.jpg')" }}></div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Safari</h3>
              <p className="text-sm text-gray-600 mt-2">
                Witness majestic wildlife on an unforgettable safari adventure.
              </p>
              <a href="#" className="text-blue-500 hover:text-blue-700 mt-4 block">Discover More &rarr;</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/rainforest.jpg')" }}></div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Rainforest Expeditions</h3>
              <p className="text-sm text-gray-600 mt-2">
                Explore the lush rainforests teeming with unique wildlife and plants.
              </p>
              <a href="#" className="text-blue-500 hover:text-blue-700 mt-4 block">Discover More &rarr;</a>
            </div>
          </div>
        </div>
      </section>

<footer className="relative text-black py-10 px-4 rounded-lg overflow-hidden">
  <div
  className="absolute inset-0 bg-cover bg-center opacity-80"
  style={{ backgroundImage: "url('images/footer.jpg')", filter: "brightness(0.4)" }}></div>
    <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12 px-4 text-white">
    
    <div>
      <h3 className="text-lg font-semibold mb-4">Our Company</h3>
      <p className="text-sm mb-4">
        Discover Sri Lanka with KC Blogs. Offering personalized travel experiences, we turn your dream destinations into unforgettable journeys. Explore, adventure, and escape with us.
      </p>
      <select className="bg-gray-900 border border-gray-600 text-sm p-2 rounded-md w-full text-gray-400 focus:ring-2 focus:ring-yellow-500">
        <option>English</option>
        <option>සිංහල</option>
      </select>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-4">Explore</h3>
      <ul className="space-y-4 text-sm">
        <li><a href="/culture" className="hover:underline">Cultural Exploration</a></li>
        <li><a href="/nature" className="hover:underline">Nature & Wildlife</a></li>
        <li><a href="/beach" className="hover:underline">Relaxation & Beach Vacation</a></li>
        <li><a href="/wellness" className="hover:underline">Wellness & Ayurveda</a></li>
        <li><a href="/destinations" className="hover:underline">Destinations</a></li>
        <li><a href="/blog" className="hover:underline">Blog</a></li>
      </ul>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
      <div className="space-y-4 text-sm">
        <p>Feel free to contact & reach us!</p>
        <p>Address: Meepe, Sri Lanka</p>
        <p>Email: info@kcblogs.com</p>
        <p>Phone: +94 70 111 111</p>
        <p>WhatsApp: +94 70 111 111</p>
      </div>
    </div>
  </div>

  <div className="relative z-10 border-t border-gray-400 mt-8 pt-4 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white">
    <a href="https://www.facebook.com" className="flex items-center space-x-2 hover:text-blue-500 transition duration-300">
      <img src="images/facebook.png" alt="Facebook" className="h-6 w-6" />
      <span className="text-sm">Facebook</span>
    </a>
    <a href="https://www.instagram.com" className="flex items-center space-x-2 hover:text-pink-500 transition duration-300">
      <img src="images/instagram.png" alt="Instagram" className="h-6 w-6" />
      <span className="text-sm">Instagram</span>
    </a>
    <a href="https://www.twitter.com" className="flex items-center space-x-2 hover:text-blue-400 transition duration-300">
      <img src="images/twitter.png" alt="X" className="h-6 w-6" />
      <span className="text-sm">X</span>
    </a>
    <a href="https://www.linkedin.com" className="flex items-center space-x-2 hover:text-blue-700 transition duration-300">
      <img src="images/linkedin.png" alt="LinkedIn" className="h-6 w-6" />
      <span className="text-sm">LinkedIn</span>
    </a>
    <a href="https://www.youtube.com" className="flex items-center space-x-2 hover:text-red-600 transition duration-300">
      <img src="images/youtube.png" alt="YouTube" className="h-6 w-6" />
      <span className="text-sm">YouTube</span>
    </a>
  </div>

  <div className="relative z-10 border-t border-gray-400 mt-8 pt-4 text-center text-white">
    <p className="text-sm">&copy; 2024 KC Blogs. Design by Kasun Chamika @ Stacmac (Pvt) Ltd.</p>
  </div>
</footer>
  
    </MaxWidthWrapper>
  );
}
