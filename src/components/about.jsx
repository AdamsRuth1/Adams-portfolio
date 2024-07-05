import React from "react";
import { motion } from 'framer-motion';
import Image from "../assets/Looper-1.png"
import Photo from "../assets/image0 (1).jpeg"
import Header from "../views/header"
import SkillsList from "./skills";
export default function About() {
   
    return(
        <motion.div initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
            <Header/>
<div className= "bg-customLight  text-white text-center  " style={{ backgroundImage: `url(${Image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
<div className="py-10"><h1 className="animate-bounce text-3xl   md:text-5xl font-millik">
        Hello <span className="animate-waving-hand inline-block">👋</span>

    </h1>
    
    <div className="text-center mt-4 flex justify-center">
  <img src={Photo} style={{ borderRadius: '50%', maxWidth: '300px', maxHeight: '300px' }} />
</div>
</div>



    <main className="relative min-h-screen flex flex-col justify-center  overflow-hidden">
        <div class="w-full max-w-6xl mx-auto  ">
            <div className="text-center mt-[-160px]">

                
                <div className="font-extrabold font-Modarat text-white text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200"> I am a software engineer Trusted by the most innovative minds in <span className="text-indigo-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
                    <ul className="block animate-text-slide-5 text-left leading-tight font-millik [&_li]:block">
                        <li>Finance</li>
                        <li>Tech</li>
                        <li>AI</li>
                        <li>HealthCare</li>
                        <li>eCommerce</li>
                        <li aria-hidden="true">Finance</li>
                    </ul>
                </span></div>
               
                
            </div>
            <div className=" h-2 bg-white mt-6"></div>
            <div>
            <h1 className="font-millik text-5xl md:text-4xl mt-12 ">About Me</h1>
    <p className="font-Modarat text-xl mt-8">I'm Adams Ruth, a frontend developer and computer scientist with a strong foundation in building intuitive web experiences. With a B.Sc. and M.Sc. in Computer Science, along with a Diploma in Software Engineering, I bring a deep understanding of both theory and practical application to my work.

Passionate about computing and driven by the challenge of crafting websites that meet users' needs, I thrive on creating seamless, responsive interfaces that elevate user interaction. My journey in web development is fueled by a commitment to continuous learning and innovation, ensuring each project reflects both my expertise and dedication.</p>
            </div>
            
        </div>
    </main>
    
   
    
    
   
    <div className="fixed bottom-0 right-0 w-full md:bottom-6 md:right-12 md:w-auto z-50"  >
        <div className="bg-slate-800 text-sm p-3 md:rounded shadow flex justify-between">
            <div className="text-slate-500 inline-flex">
                <a className="font-medium hover:underline text-slate-300" href="https://x.com/messages">
                    Chat Me 
                </a>
                <span className="italic px-1.5">or</span>
                <a className="font-medium hover:underline text-indigo-500 flex items-center" href="https://github.com/cruip/cruip-tutorials/blob/main/rotating-words/index.html" target="_blank" rel="noreferrer">
                    <span>Download</span>
                    <svg className="fill-indigo-400 ml-1" xmlns="http://www.w3.org/2000/svg" width="9" height="9">
                        <path d="m1.649 8.514-.91-.915 5.514-5.523H2.027l.01-1.258h6.388v6.394H7.158l.01-4.226z" />
                    </svg>
                </a>
            </div>
            <button className="text-slate-500 hover:text-slate-400 pl-2 ml-3 border-l border-slate-700">
                <span className="sr-only">Close</span>
                <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 16 16">
                    <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
                </svg>
            </button>
        </div>
    </div>
  
   
</div>

        </motion.div>
    )
}