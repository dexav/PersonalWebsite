import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Sense Arcade",
    description: "Webseite mit zwei Spielen, wo man seine Sinne testen kann",
    image: "https://i0.wp.com/northforker.com/files/2023/09/DSC_8083.jpg?fit=1200%2C798&ssl=1",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/dexav/Sense_Arcade",
    live: "https://dexav.github.io/Sense_Arcade/"
  },
  {
    title: "Jump Up",
    description: "Ein endless Spiel, wo man so weit wie möglich nach oben kommen muss",
    image: "https://i.pinimg.com/1200x/04/df/4f/04df4ffeb725a217cc3ffc30999bc9a3.jpg",
    tech: ["C#", "Unity"],
    github: "https://github.com/dexav/JumpUp_1305",
    live: "https://portfolio.bbbaden.ch/user/x-nursiwat-inf22/jumpup-unity-game"
  },
  {
    title: "Morsecode Translator",
    description: "Ein Morsecode Translator mit Python",
    image: "https://www.schule.at/fileadmin/_processed_/e/8/csm_MorseCodeGenerator_Vorschaubild_926e0686f7.png",
    tech: ["Python"],
    github: "https://github.com/dexav/ILA_1303/blob/main/Projektdokumentation.md",
    live: "https://portfolio.bbbaden.ch/user/x-nursiwat-inf22/morsecode-ubersetzer-mit-python"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
          Meine Projekte  
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900/50 rounded-xl overflow-hidden card-hover"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-purple-900/30 text-purple-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    className="text-gray-400 hover:text-white btn-hover inline-flex items-center"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="text-gray-400 hover:text-white btn-hover inline-flex items-center"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}