import React from "react";
import TailwindLogo from '../assets/tailwind.png';
import VueLogo from '../assets/Vue.js_Logo_2.svg.png';
import JavaLogo from '../assets/JavaScript-logo.png';
import Htmlogo from '../assets/html logo.png';
import Csslogo from '../assets/css logo.png';
import Boostraplogo from '../assets/boostrap.jpeg';

const skills = [
  { logo: TailwindLogo },
  { logo: VueLogo },
  { logo: JavaLogo },
  { logo: Htmlogo },
  { logo: Csslogo },
  { logo: Boostraplogo }
];

function SkillsList({ skills }) {
  return (
    <div className="flex justify-between">
      {skills.map((skill, index) => (
        <div key={index}>
          <img src={skill.logo} alt={`Logo ${index}`} className="w-20 h-20 object-contain" />
        </div>
      ))}
    </div>
  );
}

export default SkillsList;
