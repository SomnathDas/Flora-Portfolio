import { AnimatePresence, motion, useViewportScroll } from "framer-motion";
import { useState, useEffect } from "react";
import LayoutProps from "../typings/LayoutProps";
import Navbar from "./Navbar";

const Layout = ({ children }: LayoutProps) => {
  const { scrollYProgress } = useViewportScroll();
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    scrollYProgress.onChange(() => {
      setScrollPercentage(scrollYProgress.get());
    });
    return scrollYProgress.stop();
  }, []);

  return (
    <>
      <Navbar />
      <AnimatePresence>
        {scrollPercentage > 0.5 ? (
          <motion.div
            className="fixed top-3/4 md:p-2 p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            exit={{ opacity: 0 }}
          >
            <a className="" href="#top">
              <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
                className=" border-2 border-black rounded-full rotate-90 md:w-10 md:h-10"
              >
                <path d="M 13 5.9296875 L 6.9296875 12 L 13 18.070312 L 14.5 16.570312 L 9.9296875 12 L 14.5 7.4296875 L 13 5.9296875 z" />
              </svg>
            </a>
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
      {children}
      <footer className="pb-28 pt-28 pl-16 bg-white">
        <h1 className="text-gray-800 text-4xl">Somnath Das</h1>
        <div className="flex gap-6 pt-12">
          <a
            className="underline decoration-2 decoration-red-300"
            href="https://instagram.com/samurai3247"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            Instagram
          </a>
          <a
            className="underline decoration-2 decoration-red-300"
            target="_blank"
            referrerPolicy="no-referrer"
            href="https://github.com/SomnathDas"
          >
            Github
          </a>
        </div>
      </footer>
    </>
  );
};

export default Layout;
