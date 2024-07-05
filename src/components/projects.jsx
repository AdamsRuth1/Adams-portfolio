import React from "react";
import Portfolio from '../assets/Portfolio2.png';
import Quote from '../assets/Quote.png';
import Quote2 from '../assets/Quote2.png';
import Altwave from '../assets/Altwave.png';
import VueAssignment from '../assets/VueAssignment.png';

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Description of Project 1.",
    technologies: ["React.Js", "Tailwind"],
    image: Portfolio,
    demoLink: "https://github.com/AdamsRuth1/My-Portfolio-Website-with-React",
    githubLink: "https://github.com/AdamsRuth1/My-Portfolio-Website-with-React"
  },
  {
    id: 2,
    title: "MindLift-Wellness Website",
    description: "Description of Project 2.",
    technologies: ["React.Js", "Boostrap"],
    image: Portfolio,
    demoLink: "https://www.mindliftwellness.com/",
    githubLink: "https://github.com/MindLift-Wellness/frontend"
  },
  {
    id: 3,
    title: "GitHub Repo Explorer",
    description: "Description of Project 3.",
    technologies: ["Vue.Js", "Tailwind"],
    image: VueAssignment,
    demoLink: "https://altschool-vue-assignment-nu.vercel.app/",
    githubLink: "https://github.com/AdamsRuth1/altschool-Vue-Assignment"
  },
  {
    id: 4,
    title: "Tuition by flutterwave Clone",
    description: "Description of Project 4.",
    technologies: ["React.js", "Tailwind"],
    image: Altwave,
    demoLink: "https://altwave-b-project-d9mc.vercel.app/",
    githubLink: "https://github.com/AdamsRuth1/altschool-Vue-Assignment"
  },
  {
    id: 5,
    title: "Quote Generator",
    description: "Description of Project 5.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: Quote,
    demoLink: "https://quote-generator-rf7r.vercel.app/",
    githubLink: "https://github.com/AdamsRuth1/quote-generator"
  },
  {
    id: 6,
    title: "Quote Generator",
    description: "Description of Project 6.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: Quote2,
    demoLink: "https://quote-generator-kohl-pi.vercel.app/",
    githubLink: "https://github.com/AdamsRuth1/quoteGenerator"
  }
];

function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <img src={project.image} alt={project.title} className="w-full h-64 object-cover object-center" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Technologies used:</h3>
          <ul className="list-disc list-inside">
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between">
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-sm transition duration-300">View Demo</a>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-lg text-sm transition duration-300">View Code</a>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projectsData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
