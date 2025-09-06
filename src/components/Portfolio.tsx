import { useState } from 'react';
import { X } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

// Define an interface for the project object for type safety
interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
}

const Portfolio = () => {
  // Use the Project interface to type the state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Use the Project interface to type the projects array
  const projects: Project[] = [
    {
      id: 1,
      title: 'Somone Tourism App',
      description: 'A Mobile App Tourism Made with Flutter Framework and Firebase Database ',
      longDescription: 'Built a comprehensive a tourism application  featuring user authentication, traditional ceremonies, accomodation booking functionality, and secure payment processing.',
      image: '/somone.jpg',
      technologies: ['Firebase', 'Flutter'],

    },
    {
      id: 2,
      title: 'Shiteni Web App',
      description: 'A MultiService Website, It Includes E-Commerce, Hotel Bookings, Bus Ticket and more.',
      longDescription: 'Developed a comprehensive task management application with real-time collaboration features, booking functionality, user management, and advanced filtering options. Includes progress tracking and detailed analytics.',
      image: '/shiteni.png',
      technologies: ['TypeScript', 'Node.js', 'MongoDB', 'Socket.io', 'Docker'],

    },
    {
      id: 3,
      title: 'ChangZ Events ',
      description: 'A portfolio for a tent making company.',
      longDescription: 'Created an attractive and relative website for a tent making company, it features their unique services and the works they have done.',
      image: '/changz.png',
      technologies: ['React', 'TypeScript', 'TailwindCSS'],

    },
    {
      id: 4,
      title: 'AD_PROM_REGI_LTD',
      description: 'A portfolio for a company',
      longDescription: 'This portfolio is for a service offering company which helps with the registration of a business to PACRA and so on',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'WebSocket', 'TailwindCSS'],

    }
  ];

  return (
      <section id="portfolio" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Portfolio</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A showcase of projects that demonstrate my expertise in full-stack development,
              UI/UX design, and problem-solving capabilities.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
                <AnimateOnScroll key={project.id} style={{ transitionDelay: `${index * 100}ms` }}>
                  <div
                      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-full"
                      onClick={() => setSelectedProject(project)}
                  >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">{project.title}</h3>
                      <p className="text-slate-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                            <span key={tech} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                        ))}
                        {project.technologies.length > 3 && (
                            <span className="text-slate-500 text-sm">+{project.technologies.length - 3} more</span>
                        )}
                      </div>
                      <div className="flex gap-3">

                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
            ))}
          </div>

          {/* Project Modal */}
          {selectedProject && (
              <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in-up">
                <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                  <div className="p-6 md:p-8">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-800">{selectedProject.title}</h3>
                      <button
                          onClick={() => setSelectedProject(null)}
                          className="text-slate-500 hover:text-slate-800 transition-colors duration-200"
                      >
                        <X size={28} />
                      </button>
                    </div>

                    <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-64 object-cover rounded-lg mb-6"
                    />

                    <p className="text-slate-700 mb-6 leading-relaxed">{selectedProject.longDescription}</p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-slate-800 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                            <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4">


                    </div>
                  </div>
                </div>
              </div>
          )}
        </div>
      </section>
  );
};

export default Portfolio;