import React from 'react';
import { Award, ChevronRight, Download } from 'lucide-react';

const certificates = [
  {
    title: "Computer Science Degree",
    institution: "Technical University",
    date: "2023",
    grade: "3.8 GPA",
    image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&q=80&w=800",
    downloadUrl: "#"
  },
  {
    title: "Web Development Bootcamp",
    institution: "Code Academy",
    date: "2022",
    grade: "A+",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800",
    downloadUrl: "#"
  },
  {
    title: "Advanced Mathematics",
    institution: "High School",
    date: "2021",
    grade: "95%",
    image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80&w=800",
    downloadUrl: "#"
  }
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-black/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Award className="h-12 w-12 text-purple-500 mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Certificates & Achievements
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my academic journey and professional certifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl overflow-hidden card-hover"
            >
              <div className="absolute inset-0 bg-black/50 z-10"></div>
              <img
                src={cert.image}
                alt={cert.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              <div className="relative z-20 p-6 h-full flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-purple-300 mb-1">{cert.institution}</p>
                  <div className="flex items-center justify-between text-sm text-gray-300 mb-4">
                    <span>{cert.date}</span>
                    <span className="bg-purple-500/20 px-2 py-1 rounded">
                      {cert.grade}
                    </span>
                  </div>
                </div>
                
                <a
                  href={cert.downloadUrl}
                  className="inline-flex items-center justify-between w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg transition-colors duration-300"
                >
                  <span className="flex items-center">
                    <Download className="h-4 w-4 mr-2" />
                    View Certificate
                  </span>
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}