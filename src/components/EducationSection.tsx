import React from 'react';
import {
  GraduationCap,
  Calendar,
  Building2,
  CheckCircle,
  Award,
  Globe,
} from 'lucide-react';
import { educationList, languagesList } from '../data/cvData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 lg:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Education Timeline */}
          <div className="lg:col-span-8">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-stone-200/70 text-stone-800 text-xs font-mono uppercase tracking-wider mb-3">
                <GraduationCap className="w-3.5 h-3.5 text-teal-800" />
                <span>Academic Degrees & Qualifications</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 tracking-tight">
                Education & Academic Background
              </h2>
              <p className="text-stone-600 mt-2 text-base leading-relaxed">
                Foundational physics training followed by advanced specialized graduate studies at the National Institute of Laser Sciences (NILES), Cairo University.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-2 sm:before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-stone-300">
              {educationList.map((edu) => (
                <div
                  key={edu.id}
                  className="relative bg-white border border-stone-200 rounded-xl p-5 sm:p-6 shadow-3xs hover:border-teal-800 transition-colors"
                >
                  {/* Timeline dot */}
                  <span
                    className={`absolute -left-7 sm:-left-9 top-6 w-3 h-3 rounded-full border-2 border-stone-50 ${
                      edu.isOngoing ? 'bg-teal-700 ring-4 ring-teal-100' : 'bg-stone-400'
                    }`}
                  />

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2">
                    <h3 className="text-lg font-serif font-bold text-stone-900">
                      {edu.degree}
                    </h3>
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono self-start sm:self-center ${
                        edu.isOngoing
                          ? 'bg-teal-50 text-teal-900 border border-teal-200 font-semibold'
                          : 'bg-stone-100 text-stone-700 border border-stone-200'
                      }`}
                    >
                      <Calendar className="w-3 h-3" />
                      {edu.statusOrYear}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-stone-600 text-xs sm:text-sm mt-1">
                    <Building2 className="w-4 h-4 text-stone-400 shrink-0" />
                    <span>{edu.institution}</span>
                  </div>

                  {edu.isOngoing && (
                    <div className="mt-3 pt-3 border-t border-stone-100 text-xs text-teal-950 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-teal-600" />
                      <span>Currently conducting experimental thesis research in Laser Ablation in Liquid</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Languages & Academic Communication */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-teal-800 font-semibold mb-4">
                <Globe className="w-4 h-4" />
                <span>Languages</span>
              </div>
              
              <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">
                Language Proficiency
              </h3>
              <p className="text-xs text-stone-600 mb-6 leading-relaxed">
                Proficiencies verified as stated in the academic curriculum vitae:
              </p>

              <div className="space-y-4">
                {languagesList.map((lang) => (
                  <div
                    key={lang.language}
                    className="p-3.5 rounded-xl bg-stone-50 border border-stone-200"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-bold text-stone-900">
                        {lang.language}
                      </span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-teal-50 text-teal-900 border border-teal-200">
                        {lang.level}
                      </span>
                    </div>
                    <div className="text-xs text-stone-600">
                      {lang.proficiency}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scientific Identity Box */}
            <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 shadow-xs border border-stone-800">
              <div className="text-xs font-mono text-teal-300 uppercase tracking-wide mb-2">
                Scientific Focus
              </div>
              <h4 className="text-base font-serif font-semibold text-white mb-2">
                National Institute of Laser Sciences
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                NILES at Cairo University is Egypt's foremost center of excellence in photonics, laser engineering, and laser–matter interaction, providing rigorous graduate research environments.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
