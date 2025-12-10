import MaxWidthWrapper from "../MaxWidthWrapper";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-bg absolute inset-0 animate-zoom">
        <Image src="/images/background.jpg" alt="Hero Background" layout="fill" objectFit="cover"/>
      </div>
      <MaxWidthWrapper className="py-24 bg-opacity-60 relative z-10">
        <div className="h-[500px] w-full flex items-center justify-center text-white font-bold text-4xl">
          Welcome to KC Bloggers Sri Lanka.
        </div>
      </MaxWidthWrapper>
      <div className="absolute inset-0 bg-black opacity-30 z-5" />
    </section>
  );
};

export default Hero;
