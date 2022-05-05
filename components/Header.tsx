import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState("hidden");

  function showMobileMenu() {
    if (mobileMenu === "hidden") {
      setMobileMenu("");
    } else {
      setMobileMenu("hidden");
    }
  }

  return (
    <nav className="bg-white shadow dark:bg-gradient-to-r dark:from-gray-900 dark:to-pink-800">
      <div className="container px-6 py-4 mx-auto lg:flex lg:justify-between lg:items-center">
        <div className="w-full lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <div>
              <Link href={"/"}>
                <a className="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">
                  Sakurai Kei
                </a>
              </Link>
            </div>

            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={showMobileMenu}
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div
            className={`${mobileMenu} flex flex-col text-gray-600 capitalize dark:text-gray-300 lg:flex lg:px-4 lg:-mx-4 lg:flex-row lg:items-center`}
          >
            <Link href={"/"}>
              <a className="mt-2 transition-colors duration-200 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">
                Home
              </a>
            </Link>
            <Link href={"/projects"}>
              <a className="mt-2 transition-colors duration-200 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">
                My Projects
              </a>
            </Link>
            <Link href={"/about"}>
              <a className="mt-2 transition-colors duration-200 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">
                About
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
