import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
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
    <nav className="bg-white shadow dark:bg-gradient-to-r dark:from-gray-900 dark:to-pink-800 overflow-x-hidden">
      <div className="container px-6 py-4 mx-auto lg:flex lg:justify-between lg:items-center">
        <div className="w-full lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <div>
              <AnimatePresence>
                <Link href={"/"}>
                  <motion.a
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                      visible: { x: [-1000, 0], opacity: 1 },
                      hidden: { x: [0, -1000], opacity: 0 },
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    Sakurai Kei
                  </motion.a>
                </Link>
              </AnimatePresence>
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
            <AnimatePresence>
              <Link key={1} href={"/"}>
                <motion.a
                  initial="hidden"
                  whileInView="visible"
                  variants={{
                    visible: { x: [1000, 0], opacity: 1 },
                    hidden: { x: [0, 1000], opacity: 0 },
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="mt-2 transition-colors duration-200 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
                >
                  Home
                </motion.a>
              </Link>
              <Link key={2} href={"/projects"}>
                <motion.a
                  initial="hidden"
                  whileInView="visible"
                  variants={{
                    visible: { x: [1000, 0], opacity: 1 },
                    hidden: { x: [0, 1000], opacity: 0 },
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="mt-2 transition-colors duration-200 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
                >
                  My Projects
                </motion.a>
              </Link>
              <Link key={3} href={"/about"}>
                <motion.a
                  initial="hidden"
                  whileInView="visible"
                  variants={{
                    visible: { x: [1000, 0], opacity: 1 },
                    hidden: { x: [0, 1000], opacity: 0 },
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.45 }}
                  className="mt-2 transition-colors duration-200 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
                >
                  About
                </motion.a>
              </Link>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
}
