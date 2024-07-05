import React from "react";

// Import your skill logos
import ReactLogo from '../assets/tailwind.png';
import VueLogo from '../assets/Vue.js_Logo_2.svg.png';
import JavaLogo from '../assets/JavaScript-logo.png';
import Htmlogo from '../assets/html logo.png';
import Csslogo from '../assets/css logo.png';
import Boostraplogo from '../assets/boostrap.jpeg';
import TailwindLogo from '../assets/tailwindcss.webp'

// Define your skills data with logo paths and descriptions
const skillsData = [
    { id: 1, logo: Htmlogo, description: "HTML" },
    { id: 2, logo: Csslogo, description: "CSS" },
    { id: 3, logo: JavaLogo, description: "JavaScript" },
    { id: 4, logo: Boostraplogo, description: "Bootstrap" },
  { id: 5, logo:TailwindLogo , description: "Tailwind" },
  { id: 6, logo: VueLogo, description: "Vue" },
  { id: 7, logo: ReactLogo, description: "React" },
 
];

// SkillsList component
function SkillsList() {
  const scrollToSkill = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="grid grid-cols-3 gap-4 mt-12">
      {skillsData.map((skill) => (
        <a
          key={skill.id}
          href={`#${skill.description}`} // Use description or any other identifier
          onClick={() => scrollToSkill(skill.description)} // Scroll to skill section
          className="flex flex-col items-center justify-center mt-6 text-white"
        >
          <img src={skill.logo} alt={`Logo ${skill.id}`} className="w-20 h-20 object-contain mb-2" />
          <p>{skill.description}</p>
        </a>
      ))}
    </div>
  );
}

export default SkillsList;
