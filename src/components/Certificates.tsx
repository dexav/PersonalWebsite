import { Award, Download } from 'lucide-react';

const certificates = [
  {
    title: "Sprachaufenhalt in Manchester",
    institution: "The Essential English Centre",
    date: "Oktober 2024",
    image: "https://uncle.co.uk/app/uploads/2023/02/pexels-piotr-wojnowski-12335384.jpg",
    downloadUrl: "/PersonalWebsite/certificates/manchester-certificate.pdf"
  },
  {
    title: "Wirtschaftswoche",
    institution: "Kantonsschule Baden",
    date: "2023",
    image: "https://www.ecogreen-gruppe.de/wp-content/uploads/2019/09/news-foerdermittel-energieeffiziente-wirtschaft.jpg",
    downloadUrl: "/PersonalWebsite/certificates/wirtschaftswoche.pdf"
  },
  {
    title: "Zeugnisse",
    institution: "Kantonsschule Baden & Berufsfachschule Baden",
    date: "2022-2024",
    image: "https://img.chmedia.ch/2024/07/26/6a15aaea-e515-4bf5-8150-96c7d1b71eaa.jpeg?width=1360&height=907&fit=bounds&quality=75&auto=webp&crop=5000,3333,x0,y0",
    downloadUrl: "/PersonalWebsite/certificates/zeugnisse.pdf"
  }
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-black/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Award className="h-12 w-12 text-purple-500 mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Zertifikate & Zeugnisse
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Meine akademischen Leistungen und Zertifikate
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-purple-900/20 rounded-lg overflow-hidden border border-purple-500/20">
              <div className="relative h-48">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
                <p className="text-purple-200 mb-4">{cert.institution}</p>
                <div className="flex items-center justify-between text-sm text-gray-300 mb-4">
                  <span>{cert.date}</span>
                </div>
                {cert.downloadUrl && (
                  <a
                    href={cert.downloadUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    type="application/pdf"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    PDF herunterladen
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}