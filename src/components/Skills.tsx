
import { Code2, Database, Layout, Smartphone } from 'lucide-react';

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="h-6 w-6" />,
    items: ["HTML", "CSS", "React", "JavaScript"]
  },
  {
    category: "Backend",
    icon: <Database className="h-6 w-6" />,
    items: ["Node.js", "MySQL", "MongoDB"]
  },
  {
    category: "Mobile",
    icon: <Smartphone className="h-6 w-6" />,
    items: ["React Native", "Android", "Maui C#"]
  },
  {
    category: "Other",
    icon: <Code2 className="h-6 w-6" />,
    items: ["GitHub","Git", "Docker", "WPF" ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 card-hover"
            >
              <div className="text-purple-300 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4">{skill.category}</h3>
              <div className="space-y-2">
                {skill.items.map((item, i) => (
                  <div
                    key={i}
                    className="bg-purple-900/30 text-purple-200 px-3 py-2 rounded-lg text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}