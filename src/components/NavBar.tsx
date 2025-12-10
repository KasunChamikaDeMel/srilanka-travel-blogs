"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { NavigationMenuBace } from "./NavMenu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { AlignRight } from "lucide-react";

const Navbar = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      // Scrolling down, hide navbar
      setIsScrollingUp(false);
    } else {
      // Scrolling up, show navbar
      setIsScrollingUp(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`sticky lg:sticky md:sticky xl:sticky z-[100] h-20 inset-x-0 top-0 w-full border-b border-[#C4137A] bg-white/75 backdrop-blur-lg transition-all text-gray-900 ${
        isScrollingUp ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <MaxWidthWrapper>
        <div className="flex h-20 items-center justify-between border-b border-[#C4137A]">
          <Link href="/" className="flex z-40 font-semibold">
          </Link>
          <div className="h-full items-center space-x-4 hidden md:flex lg:flex xl:flex ">
            <NavigationMenuBace />
          </div>
          <div className="h-full items-center space-x-4 flex md:hidden lg:hidden xl:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <AlignRight className="text-[#C4137A] cursor-pointer" />
              </SheetTrigger>
              <SheetContent className="bg-white z-[101]">
                <SheetHeader>
                  <SheetTitle className="text-slate-900 ">
                    KC Bloggers
                  </SheetTitle>
                  <SheetDescription className=""></SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <Link href="/">
                    <h3 className="font-medium text-slate-900 ">Home</h3>
                  </Link>
                  <hr />
                  <Link href="/about">
                    <h3 className="font-medium text-slate-900 ">About Us</h3>
                  </Link>
                  <hr />
                  <Link href="/collections">
                    <h3 className="font-medium text-slate-900 ">Our Collections</h3>
                  </Link>
                  <hr />
                  <Link href="/experience">
                    <h3 className="font-medium text-slate-900 ">Experience</h3>
                  </Link>
                  <hr />
                  <Link href="/gallery">
                    <h3 className="font-medium text-slate-900 ">Gallery</h3>
                  </Link>
                  <hr />
                  <Link href="/contact">
                    <h3 className="font-medium text-slate-900  bg-orange-400 hover:bg-orange-600 py-2 px-4 rounded">Contact Us</h3>
                  </Link>
                  <hr />
                </div>
                <SheetFooter></SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );  
};

export default Navbar;
