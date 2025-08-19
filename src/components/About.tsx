
import { Briefcase, Heart, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-black/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Über mich
          </h2>
          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            Ich bin ein IMS Schüler der Kantonsschule Baden und der Berfusfachschule Baden. 
            Ich bin zurzeit im 4.Jahr bzw. in einem Zwischenjahr der IMS und habe mittlerweile an vielen Projekten gearbeitet. 
            Neben dem Programmieren bin ich ein leidenschaftlicher Simracer, der seit ca. einem Jahr 
            die Spiele F1 und Assetto Corsa am meisten spielt. Dazu mache ich Sport; Gehe joggen und spiele Badminton. 
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-gray-300">
              <MapPin className="h-5 w-5 text-purple-400" />
              <span>Baden, Aargau</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-300">
              <Briefcase className="h-5 w-5 text-purple-400" />
              <span>IMS Schüler Kantonsschule Baden / BBB</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-300">
              <Heart className="h-5 w-5 text-purple-400" />
              <span> UI/UX, Webapp und Simracing</span>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2"></div>
              <div className="text-sm text-gray-400"></div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2"></div>
              <div className="text-sm text-gray-400"></div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2"></div>
              <div className="text-sm text-gray-400"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}