import { motion, useViewportScroll } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";

const Contact: NextPage = () => {
  const { scrollYProgress } = useViewportScroll();
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    scrollYProgress.onChange(() => {
      setScrollPercentage(scrollYProgress.get());
    });
    return scrollYProgress.stop();
  }, []);

  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Tame the wild wild forest" />
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
              <h1 className="md:text-7xl text-5xl text-center">Let's Chat.</h1>
            </div>
          </motion.section>
          <div
            className={`text-justify md:pt-16 md:pl-48 md:pr-48 md:pb-16 pt-12 flex justify-center w-full`}
          >
            <div className="flex flex-col gap-4 w-full items-center">
              <h2 className="md:text-5xl text-3xl items-baseline">
                Get in touch.
              </h2>
              <form
                action="action_page.php"
                className="flex flex-col items-center gap-4 text-2xl"
              >
                <input
                  type="text"
                  id="fname"
                  name="name"
                  placeholder="Your Name"
                  className="border-b-2 border-gray-400 p-4"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />

                <input
                  type="subject"
                  name="subject"
                  placeholder="Subject"
                  className="border-b-2 border-gray-400 p-4"
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                />
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  className="border-b-2 border-gray-400 p-4"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                ></textarea>

                <a
                  className={` md:w-1/2 w-3/4 pt-6  pb-6 pl-8 pr-8 mt-8 mb-8 bg-black flex justify-center text-white text-center hover:bg-white hover:text-black border-black border-2`}
                  href={`mailto:ak89545@gmail.com?subject=${subject}&body=Hello from ${name} ${message}`}
                >
                  Submit
                </a>
              </form>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Contact;
