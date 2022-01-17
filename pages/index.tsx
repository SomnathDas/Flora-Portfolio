import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Showcase from "../components/Showcase";

const Home: NextPage = () => {
  const [scrollPercent, setScrollPercent] = useState({
    zeroth: 0,
  });
  const zerothSectionRef = useRef() as React.MutableRefObject<HTMLElement>;
  useEffect(() => {
    const topPos = (element: any) => element.getBoundingClientRect().top;
    const getHeight = (element: any) => element.offsetHeight;
    const zerothPos = topPos(zerothSectionRef.current);
    const zerothHeight = getHeight(zerothSectionRef.current);

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      if (zerothPos < scrollPos) {
        let zerothPercent = ((scrollPos - zerothPos) * 100) / zerothHeight;
        if (zerothPercent == 100) zerothPercent = 0;
        if (zerothPercent > 100 && zerothPercent <= 140) zerothPercent = 0.1;
        if (zerothPercent > 140 && zerothPercent <= 164) zerothPercent = 0.25;
        if (zerothPercent > 164) zerothPercent = 0.4;
        setScrollPercent((prevState) => ({
          ...prevState,
          zeroth: zerothPercent,
        }));
      } else if (zerothPos > scrollPos) {
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    console.log(scrollPercent.zeroth);
  }, [scrollPercent.zeroth]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Flora HomePage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={`${styles.main}`}>
        <section
          className={`${styles.zerothSection} h-screen text-justify flex relative -z-50`}
          style={{
            backgroundColor: `rgba(0,0,0,${scrollPercent.zeroth})`,
          }}
          ref={zerothSectionRef}
        >
          <div
            className={`w-full flex flex-col md:justify-end md:pb-20 md:pl-16 gap-4 justify-center md:items-start items-center p-5 ${styles.welp} fixed top-1/2 z-1 transition-transform`}
            style={{
              transform: `scale3d(${1 - scrollPercent.zeroth}, ${
                1 - scrollPercent.zeroth
              }, ${1 - scrollPercent.zeroth})`,
            }}
          >
            <h1 className="md:text-7xl text-3xl">Nice to see you.</h1>
            <p className="max-w-sm">
              👋 Hi! My name is John Doe and I'm a User Experience Designer
              studying at LIFE
            </p>
            <svg
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="40px"
              height="60px"
              className={` self-center`}
            >
              <path d="M 24.984375 0.984375 C 24.433594 0.996094 23.992188 1.449219 24 2 L 24 45.253906 L 15.691406 37.28125 C 15.5 37.089844 15.238281 36.984375 14.96875 36.988281 C 14.5625 37 14.199219 37.253906 14.054688 37.632813 C 13.910156 38.011719 14.007813 38.441406 14.308594 38.71875 L 25 48.984375 L 35.691406 38.71875 C 35.953125 38.472656 36.0625 38.105469 35.976563 37.757813 C 35.890625 37.410156 35.625 37.132813 35.28125 37.035156 C 34.933594 36.933594 34.5625 37.027344 34.308594 37.28125 L 26 45.253906 L 26 2 C 26.003906 1.730469 25.898438 1.46875 25.707031 1.277344 C 25.515625 1.085938 25.253906 0.980469 24.984375 0.984375 Z" />
            </svg>
          </div>
        </section>
        <div className="z-20">
          <Showcase
            showcaseClass={`${styles.firstSection}`}
            number="01"
            title="Google"
            description="UX Design Internship"
            backgroundColor="bg-blue-400"
            onHoverColor="bg-blue-500"
          />
          <Showcase
            showcaseClass={`${styles.secondSection}`}
            number="02"
            title="Ponder"
            description="A space for guided introspection"
            backgroundColor="bg-purple-300"
            onHoverColor="bg-purple-400"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
