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
        <title>Home</title>
        <meta name="description" content="Flora HomePage" />
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
                  I'm a UX Designer focused on creating a more connected, easier
                  to use world
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
                I'm a new grad studying User experience design who never out
                grew his healthy obsession with Mario Kart. I find myself
                constantly listening to music (87,330 minutes in 2018 to be
                exact) and like anyone else my age I'm a self proclaimed foodie.
                My current home is Austin, Texas but I mostly grew up in the
                small town of Acworth, Georgia north of Atlanta. While being
                fascinated with all aspects of User Experience design, I
                specialize in ideation, storytelling and visual design. I love
                diving into why and how people use things, and furthering those
                experiences to make them memorable.
              </h4>
            </div>
          </div>

          <div
            className={`text-justify md:pt-16 md:pl-48 md:pr-48 md:pb-16 pt-12 flex justify-center`}
          >
            <div className=" md:w-2/3 pl-10 pr-10">
              <h1 className="md:text-4xl text-2xl pb-4">Resume</h1>
              <Image
                src="https://ssr.resume.tools/to-image/ssid-jEiOv9LFp-1.webp"
                height={1280}
                width={720}
              />
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default About;
