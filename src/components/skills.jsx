import React from "react";
import TailwindLogo from '../assets/tailwind.png';
import VueLogo from '../assets/Vue.js_Logo_2.svg.png';
import JavaLogo from '../assets/JavaScript-logo.png';
import Htmlogo from '../assets/html logo.png';
import Csslogo from '../assets/css logo.png';
import Boostraplogo from '../assets/boostrap.jpeg';

// Define your skills data with logo paths and descriptions
const skillsData = [
  { id: 1, logo: TailwindLogo, description: "Tailwind" },
  { id: 2, logo: VueLogo, description: "Vue" },
  { id: 3, logo: JavaLogo, description: "JavaScript" },
  { id: 4, logo: Htmlogo, description: "HTML" },
  { id: 5, logo: Csslogo, description: "CSS" },
  { id: 6, logo: Boostraplogo, description: "Bootstrap" }
];

// SkillsList component
function SkillsList() {
  return (
    <div className="grid grid-cols-3 gap-4 mt-12">
      {skillsData.map((skill) => (
        <div key={skill.id} className="flex flex-col items-center justify-center mt-6 text-white">
          <img src={skill.logo} alt={`Logo ${skill.id}`} className="w-20 h-20 object-contain mb-2" />
          <p>{skill.description}</p>
        </div>
      ))}
    </div>
  );
}

export default SkillsList;
