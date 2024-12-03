"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full bg-white shadow-lg z-[100]">
      <div className="flex items-center justify-between w-full h-16 px-4 2xl:px-16">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-xl font-bold">My Logo</h1>
        </Link>

        {/* Desktop Menu */}
        <div>
          <ul className="hidden md:flex">
            <li className="ml-10 text-md uppercase hover:border-b">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-10 text-md uppercase hover:border-b">
              <Link href="/#about">About</Link>
            </li>
            <li className="ml-10 text-md uppercase hover:border-b">
              <Link href="/#skills">Skills</Link>
            </li>
            <li className="ml-10 text-md uppercase hover:border-b">
              <Link href="/#projects">Projects</Link>
            </li>
            <li className="ml-10 text-md uppercase hover:border-b">
              <Link href="/resume">Resume</Link>
            </li>
            <li className="ml-10 text-md uppercase hover:border-b">
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>

          {/* Hamburger Icon for Mobile */}
          <div
            onClick={handleNav}
            className="md:hidden cursor-pointer"
          >
            <div className="space-y-2">
              <div className="w-8 h-1 bg-black"></div>
              <div className="w-8 h-1 bg-black"></div>
              <div className="w-8 h-1 bg-black"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-full h-screen bg-black/70 md:hidden ease-in duration-300"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-300"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-300"
          }
        >
          {/* Close Icon */}
          <div className="flex w-full items-center justify-between">
            <h1 className="text-xl font-bold">My Logo</h1>
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              X
            </div>
          </div>

          {/* Mobile Links */}
          <div className="py-4">
            <ul>
              <li className="py-4 text-md uppercase hover:border-b">
                <Link href="/">Home</Link>
              </li>
              <li className="py-4 text-md uppercase hover:border-b">
                <Link href="/#about">About</Link>
              </li>
              <li className="py-4 text-md uppercase hover:border-b">
                <Link href="/#skills">Skills</Link>
              </li>
              <li className="py-4 text-md uppercase hover:border-b">
                <Link href="/#projects">Projects</Link>
              </li>
              <li className="py-4 text-md uppercase hover:border-b">
                <Link href="/resume">Resume</Link>
              </li>
              <li className="py-4 text-md uppercase hover:border-b">
                <Link href="/#contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
