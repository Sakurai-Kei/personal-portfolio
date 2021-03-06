import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full items-center dark:bg-gradient-to-r dark:from-pink-900  dark:to-slate-900">
      <div className="container px-6 py-8 mx-auto">
        <div className="items-center lg:flex">
          <div className="lg:w-1/2">
            <motion.h2
              initial={{ x: -1000 }}
              animate={{ x: [-1000, 0] }}
              transition={{ duration: 1 }}
              className="text-3xl font-bold text-gray-800 dark:text-gray-100"
            >
              Who I am
            </motion.h2>

            <motion.p
              initial={{ x: -1000 }}
              animate={{ x: [-1000, 0] }}
              transition={{ duration: 1.5 }}
              className="mt-4 text-gray-500 dark:text-gray-300 lg:max-w-md"
            >
              Hi, I am Sakurai Kei , full-stack developer{" "}
              <a
                className="font-bold text-blue-600 dark:text-blue-400"
                href="https://github.com/Sakurai-Kei"
              >
                @Github/Sakurai-Kei
              </a>
              , self-taught developer. In my past projects, I have the
              opportunity to implement my solutions using vanilla javascript and
              using libraries/frameworks such as React, MERN stack and NextJs.
              Furthermore, I have used services such as Google Firebase and
              MongoDB in my projects.
            </motion.p>

            <div className="flex items-center mt-6 -mx-2">
              <a
                className="mx-2"
                href="https://github.com/Sakurai-Kei"
                aria-label="Github"
              >
                <svg
                  className="w-5 h-5 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
