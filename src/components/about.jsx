import React from "react";
import { motion } from "framer-motion";
import Image from "../assets/Looper-1.png";
import Photo from "../assets/image0 (1).jpeg";
import Header from "../views/header";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Header />
      <div
        className="bg-customLight text-white text-center"
        style={{
          backgroundImage: `url(${Image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="py-10">
          <h1 className="animate-bounce text-3xl md:text-5xl font-millik">
            Hello <span className="animate-waving-hand inline-block">👋</span>
          </h1>

          <div className="text-center mt-4 flex justify-center">
            <img
              src={Photo}
              style={{
                borderRadius: "50%",
                maxWidth: "300px",
                maxHeight: "300px",
              }}
              alt="Adams Ruth"
            />
          </div>
        </div>
      </div>

      <main className="bg-gray-900 p-8 mb-10 ">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="font-millik text-5xl md:text-4xl mt-12 animate-bounce text-white text-center">
            About Me
          </h1>
          <p className="font-Modarat text-xl mt-8 text-white text-center">
            I'm Adams Ruth, a frontend developer and computer scientist with a
            strong foundation in building intuitive web experiences. With a B.Sc.
            and M.Sc. in Computer Science, along with a Diploma in Software
            Engineering, I bring a deep understanding of both theory and
            practical application to my work. Passionate about computing and
            driven by the challenge of crafting websites that meet users' needs,
            I thrive on creating seamless, responsive interfaces that elevate
            user interaction. My journey in web development is fueled by a
            commitment to continuous learning and innovation, ensuring each
            project reflects both my expertise and dedication.
          </p>
        </div>
      </main>

      <div className="fixed bottom-0 right-0 w-auto md:bottom-6 md:right-12 md:w-auto z-50">
        <div className="bg-slate-800 text-sm p-3 md:rounded shadow flex justify-between">
          <div className="text-slate-500 inline-flex">
            <a
              className="font-medium hover:underline text-slate-300"
              href="https://x.com/messages"
            >
              Contact Me
            </a>
            <span className="italic px-1.5">/</span>
            <a
              className="font-medium hover:underline text-indigo-500 flex items-center"
              href="https://www.canva.com/design/DAGKHcgrMs8/cw2bdB7WDu2BWeN44ZPQ8A/view?utm_content=DAGKHcgrMs8&utm_campaign=designshare&utm_medium=link&utm_source=editor"
              target="_blank"
              rel="noreferrer"
            >
              <span>Download Resume</span>
              <svg
                className="fill-indigo-400 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="9"
              >
                <path d="m1.649 8.514-.91-.915 5.514-5.523H2.027l.01-1.258h6.388v6.394H7.158l.01-4.226z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
