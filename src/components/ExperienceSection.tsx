import React from 'react';
import {
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  FlaskConical,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import { currentExperience, masterProject } from '../data/cvData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 lg:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-stone-200/70 text-stone-800 text-xs font-mono uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5 text-teal-800" />
            <span>Research Appointments & Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 tracking-tight">
            Research Experience
          </h2>
          <p className="text-stone-600 mt-3 text-base sm:text-lg leading-relaxed">
            Laboratory research, spectroscopic characterization, and nanomaterial development across premier academic institutions in Egypt.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          
          {/* 1. Research Assistant @ AUC Energy Materials Lab (EML) */}
          {currentExperience.map((exp) => (
            <div
              key={exp.id}
              className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-stone-100">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-50 text-teal-900 border border-teal-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-600 animate-pulse" />
                      Current Appointment
                    </span>
                    <span className="text-xs font-mono text-stone-500">
                      AUC Lab
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif text-stone-900 font-bold">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-stone-700 text-sm mt-1">
                    <Building2 className="w-4 h-4 text-stone-400" />
                    <span className="font-medium">{exp.lab}</span>
                    <span className="text-stone-300">&bull;</span>
                    <span className="text-stone-600">{exp.institution}</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 text-stone-700 text-xs font-mono self-start sm:self-center border border-stone-200">
                  <Calendar className="w-3.5 h-3.5 text-stone-500" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Focus tags */}
              <div className="flex flex-wrap gap-2 my-5">
                {exp.focus.map((f) => (
                  <span
                    key={f}
                    className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-stone-100 text-stone-700 border border-stone-200"
                  >
                    {f}
                  </span>
                ))}
              </div>

              {/* Responsibilities */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-stone-400">
                  Core Laboratory Activities & Duties
                </div>
                <div className="space-y-2.5">
                  {exp.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* 2. Master's Research Project @ NILES, Cairo University */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-stone-100">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-stone-100 text-stone-800 border border-stone-200">
                    <GraduationCap className="w-3.5 h-3.5 text-teal-800" />
                    Master’s Thesis Research
                  </span>
                  <span className="text-xs font-mono text-stone-500">
                    NILES Cairo University
                  </span>
                </div>
                <h3 className="text-2xl font-serif text-stone-900 font-bold">
                  Master's Research Project
                </h3>
                <div className="text-stone-700 text-sm font-medium mt-1">
                  National Institute of Laser Sciences (NILES), Cairo University
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 text-stone-700 text-xs font-mono self-start sm:self-center border border-stone-200">
                <Calendar className="w-3.5 h-3.5 text-stone-500" />
                <span>Ongoing</span>
              </div>
            </div>

            {/* Thesis Title Box */}
            <div className="my-5 p-4 rounded-xl bg-stone-50 border border-stone-200">
              <div className="text-xs font-mono text-stone-400 uppercase tracking-wide mb-1">
                Project Title
              </div>
              <p className="text-base sm:text-lg font-serif italic text-stone-900 font-medium">
                "{masterProject.title}"
              </p>
            </div>

            {/* Tasks & Scope */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-stone-400">
                Experimental Methods & Scope
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {masterProject.keyContributions.map((contrib, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl border border-stone-100 bg-stone-50/70 flex items-start gap-3 text-xs sm:text-sm text-stone-700"
                  >
                    <FlaskConical className="w-4 h-4 text-teal-800 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{contrib}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
