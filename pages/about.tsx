import { motion, useViewportScroll } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Showcase from "../components/Showcase";
import styles from "../styles/About.module.css";
import Image from "next/image";

const About: NextPage = () => {
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
      <Head>
        <title>About</title>
        <meta name="description" content="Invasion of my nightmare" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main>
          <motion.section
            className={`text-justify flex relative -z-50 `}
            style={{
              backgroundColor: `rgba(0,0,0,${scrollPercentage * 1.34})`,
            }}
          >
            <div
              className={`md:mt-60 md:mb-14 mt-40 w-full flex flex-col md:justify-end md:pb-16 md:pl-16 gap-4 justify-center md:items-start items-center p-5  top-1/3 z-1 transition-transform`}
            >
              <h1 className="text-7xl">About.</h1>
            </div>
          </motion.section>
          <section className={`${styles.firstSection} flex h-screen`}>
            <div
              className={`w-full md:w-1/2 bg-black md:bg-opacity-60 bg-opacity-60 hover:bg-opacity-80 transition-colors delay-85 ease-linear flex flex-col gap-8 justify-center items-center text-white`}
            >
              <div className="md:pl-36 pl-12 pt-16 pb-16 pr-32 flex flex-col gap-4 md:justify-around">
                <h1 className="text-xl">This is me.</h1>
                <h2 className="md:text-4xl text-3xl md:leading-relaxed">
                  I'm currently learning about UX/UI Designing while trying to
                  keep myself sane.
                </h2>
              </div>
            </div>
          </section>
          <div
            className={`text-justify md:pt-16 md:pl-48 md:pr-48 md:pb-16 pt-12 flex justify-center`}
          >
            <div className=" md:w-2/3 pl-10 pr-10">
              <h1 className="md:text-4xl text-2xl pb-4">Who am I?</h1>
              <h4 className="md:text-xl text-md">
                I'm a cyber punk. Just tryna be edgy there but yeah. Obssessed
                with Ling Tosite Sigure and the world of cyberpunk. Here I am
                trying to solve design problems and sometimes mathematical too.
                I loved this site design by Nicolas and so I tried clonning it,
                I am not sure how I did on this one, you can check his original
                portfolio out <br></br>
                <a
                  href="https://www.nicolaspellegrino.com"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className=" decoration-amber-300 underline"
                >
                  Click here
                </a>
              </h4>
            </div>
          </div>

          <div
            className={`text-justify md:pt-16 md:pl-48 md:pr-48 md:pb-16 pt-12 flex justify-center`}
          >
            <div className=" md:w-2/3 pl-10 pr-10 flex flex-col items-center">
              <h1 className="md:text-4xl text-2xl pb-4 self-baseline">
                Resume
              </h1>
              <div className={`${styles.resumeImage}`}>
                <Image
                  src="https://ssr.resume.tools/to-image/ssid-jEiOv9LFp-1.webp?cache=c19cc2e02c&size=1980"
                  height={2800}
                  width={1980}
                />
              </div>
              <a
                href="https://resume.io/r/jEiOv9LFp"
                target="_blank"
                className={` md:w-2/4 w-3/4 pt-6  pb-6 pl-8 pr-8 mt-8 mb-8 bg-black flex justify-center text-white text-center hover:bg-white hover:text-black border-black border-2`}
                referrerPolicy="no-referrer"
              >
                Check out Resume
              </a>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default About;
