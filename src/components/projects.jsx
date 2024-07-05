import React from "react";
import Portfolio from '../assets/Portfolio2.png';
import Quote from '../assets/Quote.png';
import Altwave from '../assets/Altwave.png';
import VueAssignment from '../assets/VueAssignment.png';
import Mindlift from '../assets/mindlift.png'

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Adams Ruth Portfolio Website is a showcase of my skills, experience, and passion for frontend development and computer science. Designed to provide visitors with a seamless and engaging user experience, this website serves as a comprehensive platform to explore my professional journey, projects, and capabilities.",
    technologies: ["React.Js", "Tailwind"],
    image: Portfolio,
    demoLink: "https://github.com/AdamsRuth1/My-Portfolio-Website-with-React",
    githubLink: "https://github.com/AdamsRuth1/My-Portfolio-Website-with-React"
  },
  {
    id: 2,
    title: "MindLift-Wellness Website",
    description: "MindLift Wellness is an innovative online platform designed to connect individuals with a comprehensive network of healthcare professionals, including doctors and therapists. With a user-centric approach, the app aims to streamline the process of scheduling and conducting virtual appointments, ensuring convenient access to healthcare services from anywhere..",
    technologies: ["React.Js", "Boostrap"],
    image: Mindlift,
    demoLink: "https://www.mindliftwellness.com/",
    githubLink: "https://github.com/MindLift-Wellness/frontend"
  },
  {
    id: 3,
    title: "GitHub Repo Explorer",
    description: "The Vue.js GitHub Repositories and Websites Display is a dynamic web application meticulously crafted to showcase my GitHub repositories and deployed websites. Built exclusively with Vue.js, this project harnesses Vue components and seamlessly integrates with the GitHub API to fetch and present my repositories and websites in a streamlined and visually engaging format..",
    technologies: ["Vue.Js", "Tailwind"],
    image: VueAssignment,
    demoLink: "https://altschool-vue-assignment-nu.vercel.app/",
    githubLink: "https://github.com/AdamsRuth1/altschool-Vue-Assignment"
  },
  {
    id: 4,
    title: "Tuition by flutterwave Clone",
    description: "The Enhancing Cloned Version of the Tuition by Flutterwave website project involves a dedicated team's effort to enhance and improve upon an existing platform originally developed by Flutterwave. This project focuses on cloning the core functionalities while integrating new features to better meet evolving customer needs. By leveraging the existing foundation laid out by Flutterwave, the team aims to elevate user experience and expand the website's functionality..",
    technologies: ["React.js", "Tailwind"],
    image: Altwave,
    demoLink: "https://altwave-b-project-d9mc.vercel.app/",
    githubLink: "https://github.com/AdamsRuth1/altschool-Vue-Assignment"
  },
  
  {
    id: 5,
    title: "Quote Generator",
    description: "The Motivational Quote Generator for Newbies in Tech is a webSite designed to inspire and uplift individuals who are new to the technology industry. Developed with a deep understanding of the challenges faced by beginners, this  aims to provide  doses of motivation, encouragement, and wisdom from experienced professionals and leaders..",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: Quote,
    demoLink: "https://quote-generator-kohl-pi.vercel.app/",
    githubLink: "https://github.com/AdamsRuth1/quoteGenerator"
  }
];

function ProjectCard({ project }) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg text-customBlue p-4">
      <img src={project.image} alt={project.title} className="w-full h-64 object-cover object-center" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        <p className="text-white mb-4">{project.description}</p>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-customBlue ">Technologies used:</h3>
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
