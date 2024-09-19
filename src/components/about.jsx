import React from "react";
import { motion } from "framer-motion";
import Image from "../assets/Looper-1.webp";
import Photo from "../assets/image0.webp";
import Header from "../views/header";
import SkillsList from "./skills";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Header />
      <div
        className="bg-customLight text-white text-center relative"
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
              alt="Profile"
            />
          </div>
        </div>

        <main className="relative min-h-screen flex flex-col justify-center overflow-hidden ">
          <div className="w-full mx-auto lg:px-0">
            <div className="text-center md:mt-[-380px] mt-[-160px]">
              <div className="font-extrabold text-white text-3xl md:text-4xl py-14 md:py-0 bg-clip-text">
                <br />
                <br />
                <br />
                I am a software engineer Trusted by the most innovative minds in{" "}
                <span className="text-indigo-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
                  <ul className="block animate-text-slide-5 text-left leading-tight font-millik [&_li]:block">
                    <li>Finance</li>
                    <li>Tech</li>
                    <li>AI</li>
                    <li>HealthCare</li>
                    <li>eCommerce</li>
                    <li aria-hidden="true">Finance</li>
                  </ul>
                </span>
              </div>
            </div>
            <div className="h-2 bg-white mt-6"></div>
            <div className="bg-gray-900 p-1">
              <div className="max-w-screen-xl mx-auto text-center">
                <h1 className="font-millik text-5xl md:text-4xl mt-12 animate-bounce">
                  About Me
                </h1>
                <p className="font-Modarat text-xl mt-8 py-8 px-8 text-center">
                  I'm Adams Ruth, a frontend developer and computer scientist
                  with a strong foundation in building intuitive web experiences.
                  With a B.Sc. and M.Sc. in Computer Science, along with a
                  Diploma in Software Engineering, I bring a deep understanding
                  of both theory and practical application to my work. Passionate
                  about computing and driven by the challenge of crafting websites
                  that meet users' needs, I thrive on creating seamless, responsive
                  interfaces that elevate user interaction. My journey in web
                  development is fueled by a commitment to continuous learning
                  and innovation, ensuring each project reflects both my expertise
                  and dedication.
                </p>
              </div>
            </div>
          </div>

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
                  href="https://www.canva.com/design/DAGRP03LXc8/fl8xbiOW7RBH8xvqRFFA_w/view?utm_content=DAGRP03LXc8&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Download Resume</span>
                  <svg
                    className="fill-indigo-400 ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="9"
                    viewBox="0 0 8 8"
                  >
                    <path d="M1.656 1.594l-1.281 1.281 3.25 3.25-3.25 3.25 1.281 1.281 4.719-4.719-4.719-4.719z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </motion.div>
  );
}
