import React from "react";
import { motion } from 'framer-motion';
import About from "../components/about";
import SkillsList from "../components/skills";
import ProjectsList from "../components/projects"; // Ensure this path is correct

export default function LandingPage() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-customLight">
          <About />
          <div className="bg-gray-900">
            <h1 className="font-millik text-4xl py-8 animate-bounce text-white text-center">Skills</h1>
            <SkillsList />
          </div>
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">My Portfolio</h1>
            <ProjectsList />
          </div>
        </div>
      </motion.div>
    </>
  );
}
