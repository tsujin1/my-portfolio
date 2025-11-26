import { Award, Calendar, CheckCircle2 } from 'lucide-react';
import { CERTIFICATIONS } from '../data/certifications';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 mb-4">
            <Award size={14} />
            <span>Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
            Professional Certifications
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-slate-400">
            Validated technical expertise and industry-recognized qualifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert) => (
            <article
              key={cert.id}
              className="group flex flex-col bg-gray-50 dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300"
            >
              <div className="relative aspect-video w-full bg-white dark:bg-slate-800 border-b border-gray-100 dark:border-slate-800 p-8 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <img
                    src={cert.logoPath}
                    alt={`${cert.issuer} Logo`}
                    className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="flex flex-col flex-1 p-6">
                
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {cert.issuer}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-slate-500 mb-6">
                  <Calendar size={14} />
                  <span>Issued {cert.issued}</span>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-200 dark:border-slate-800">
                  <ul className="space-y-2">
                    {cert.skills.map((skill, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;