import { AnimatePresence, motion } from "framer-motion";
import { Fragment } from "react";

export default function UserDetail() {
  return (
    <Fragment>
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
          className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg"
        >
          <div className="px-4 py-5 sm:px-6 dark:bg-slate-800">
            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
              My Info
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-200">
              Details and informations about me
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 dark:bg-slate-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-100">
                  Full name
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-gray-200">
                  Luqmanul Hakim
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 dark:bg-slate-900">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-100">
                  Tech used
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-gray-200">
                  React, NextJs, Tailwind, MongoDB, MERN stack
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 dark:bg-slate-800">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-100">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-gray-200">
                  luqmanulraiserhakim@gmail.com
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 dark:bg-slate-800">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-100">
                  About
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-gray-200">
                  Self-taught full-stack developer looking for opportunities in
                  full-stack web/apps field.
                </dd>
              </div>
            </dl>
          </div>
        </motion.div>
      </AnimatePresence>
    </Fragment>
  );
}
