import React from 'react';
import {
  Calendar,
  MapPin,
  Users,
  Award,
  Sparkles,
  Presentation,
  ShieldCheck,
  Cpu,
  GraduationCap,
} from 'lucide-react';
import { conferencesList } from '../data/cvData';

export const ConferencesSection: React.FC = () => {
  const getCategoryBadge = (category?: string) => {
    switch (category) {
      case 'training':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
            <ShieldCheck className="w-3 h-3 text-emerald-700" />
            Professional Training
          </span>
        );
      case 'workshop':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200">
            <Cpu className="w-3 h-3 text-amber-700" />
            Technical Workshop
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-teal-50 text-teal-900 border border-teal-200">
            <Presentation className="w-3 h-3 text-teal-700" />
            Scientific Conference
          </span>
        );
    }
  };

  return (
    <section id="conferences" className="py-16 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-stone-100 text-stone-800 text-xs font-mono uppercase tracking-wider mb-3 border border-stone-200">
            <Users className="w-3.5 h-3.5 text-teal-800" />
            <span>Academic Exchange & Professional Development</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 tracking-tight">
            Conferences, Workshops & Professional Training
          </h2>
          <p className="text-stone-600 mt-3 text-base sm:text-lg leading-relaxed">
            Active participation in scientific conferences, advanced technical workshops, and accredited professional laboratory safety training programs across premier institutions.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conferencesList.map((conf) => (
            <div
              key={conf.id}
              className="bg-stone-50 border border-stone-200 rounded-2xl p-6 hover:border-teal-800 transition-colors shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 border border-stone-200">
                      <Calendar className="w-3 h-3 text-stone-600" />
                      {conf.year}
                    </span>
                    {getCategoryBadge(conf.category)}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-serif font-bold text-stone-900 leading-snug mb-2">
                  {conf.title}
                </h3>

                {conf.location && (
                  <div className="inline-flex items-center gap-1 text-xs font-mono text-stone-600 mb-2">
                    <MapPin className="w-3 h-3 text-stone-400 shrink-0" />
                    <span>{conf.location}</span>
                  </div>
                )}

                <div className="text-xs font-semibold text-teal-900 font-mono mb-3">
                  Role: {conf.role}
                </div>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {conf.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-stone-200/80 flex items-center justify-between text-[11px] font-mono text-stone-400">
                <span>Official CV Record</span>
                <span className="text-teal-900 font-medium">{conf.year}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
