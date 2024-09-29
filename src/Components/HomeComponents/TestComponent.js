import React from 'react';
import Greenpade from '../../assets/images/GREEN.png'
import Velo from '../../assets/images/Velopng.png'
import ST from '../../assets/images/SS1.png'

const projects = [
  {
    title: "Stratagem Holdings",
    link: "https://stratagemholdings.com/",
    image: Greenpade, // Random image placeholder
  },
  {
    title: "Velomaerkte Bikes",
    link: "https://velomaerkte.ch/bikes.php",
    image: Velo, // Random image placeholder
  },
  {
    title: "Project Dashboard",
    link: "http://92.205.58.16:3001/",
    image: ST, // Random image placeholder
  },
];

function TestComponent() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 lg:py-0 py-32">
      {/* Heading */}
      <h2 className="text-5xl font-bold mb-12 text-gray-800">My Projects</h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:px-0 px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl duration-300 mx-auto"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover transition duration-300 hover:opacity-90"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                Visit Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestComponent;
