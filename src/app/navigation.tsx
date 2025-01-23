"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="nav bg-white sm:bg-black overflow-x-auto">
      <nav className="font-Cabin font-semibold text-xl leading-10 tracking-[2.3px] justify-center pt-6 pb-6 hidden sm:flex">
        <ul className=" px-2 text-white flex gap-10">
          <li>
            <Link className="hover:text-gray-900 hover:bg-teal-300 hover:underline underline-offset-4 px-5 py-2 rounded-full focus:border-sky-500 focus:outline focus:outline-sky-500" href="/">
              HOME
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-900 hover:bg-teal-300 hover:underline underline-offset-4 px-5 py-2 rounded-full focus:border-sky-500 focus:outline focus:outline-sky-500" href="/collection">
              COLLECTION
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-900 hover:bg-teal-300 hover:underline underline-offset-4 px-5 py-2 rounded-full focus:border-sky-500 focus:outline focus:outline-sky-500" href="/about">
              ABOUT
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-900 hover:bg-teal-300 hover:underline underline-offset-4 px-5 py-2 rounded-full focus:border-sky-500 focus:outline focus:outline-sky-500" href="/contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
      <div className="sm:hidden bg-blue-300">
        <button className="" onClick={toggleNavbar}>
          {isOpen ? <X /> : <Menu />}
        </button>

        {isOpen && (
          <div className="sm:hidden pl-2 gap-y-52 pb-4 ">
            <ul className="">
              <li>
                <Link className="hover:text-gray-500 hover:text-xl" href="/">
                  HOME
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-500 hover:text-xl" href="/collection">
                  COLLECTION
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-500 hover:text-xl" href="/about">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-500 hover:text-xl" href="/contact">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
