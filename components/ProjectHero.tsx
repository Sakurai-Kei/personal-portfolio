import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ProjectHeroComponent } from "../interfaces/ProjectHeroComponent";

export default function ProjectHero(props: ProjectHeroComponent) {
  const { imgsrc, alt, title, detailedDescription, liveDemo } = props;
  return (
    <section className="bg-gray-100 dark:bg-gradient-to-r dark:from-slate-800 dark:via-slate-900 dark:to-pink-900 lg:py-12 lg:flex lg:justify-center">
      <AnimatePresence>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { scale: [0, 1], opacity: 1 },
            hidden: { scale: [1, 0], opacity: 0 },
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="bg-white px-4 dark:bg-gradient-to-r dark:from-slate-900 dark:via-slate-900 dark:to-pink-900 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg"
        >
          <div className="flex items-center lg:w-1/2">
            <Image
              src={imgsrc}
              alt={alt}
              layout="intrinsic"
              className="rounded-lg"
            />
          </div>

          <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
              {title}
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              {detailedDescription}
            </p>

            <div className="mt-8">
              <Link href={liveDemo}>
                <a className="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-600 rounded-md hover:bg-gray-700">
                  Check out Live!
                </a>
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
