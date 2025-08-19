import React from 'react';  
import { ArrowRight, Code } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-custom"></div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-float">
          <Code className="h-20 w-20 mx-auto text-purple-300 mb-8" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
          Xavier Nursiwat      
        </h1>
        <p className="text-xl sm:text-2xl text-purple-200 mb-12 max-w-2xl mx-auto">
          IMS-Schüler im 4.Lehrjahr (Zwischenjahr), Kantonsschule Baden und Berufsfachschule Baden
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group bg-white text-purple-900 px-8 py-3 rounded-full font-semibold btn-hover inline-flex items-center justify-center"
          >
            Projekte anschauen
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
          <button 
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group bg-purple-700/30 text-white border-2 border-purple-500 px-8 py-3 rounded-full font-semibold btn-hover inline-flex items-center justify-center"
          >
            Kontakt
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
    </section>
  );
}