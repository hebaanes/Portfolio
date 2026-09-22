import React, { useState } from 'react';
import {
  Wrench,
  Zap,
  Atom,
  Microscope,
  Binary,
  ShieldCheck,
  CheckCircle2,
  Tag,
  Filter,
} from 'lucide-react';
import { skillCategories } from '../data/cvData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="py-16 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-stone-100 text-stone-800 text-xs font-mono uppercase tracking-wider mb-3 border border-stone-200">
            <Wrench className="w-3.5 h-3.5 text-teal-800" />
            <span>Methodologies & Instrumentation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 tracking-tight">
            Technical Skills & Laboratory Expertise
          </h2>
          <p className="text-stone-600 mt-3 text-base sm:text-lg leading-relaxed">
            Hands-on expertise across high-energy pulsed laser systems, physical nanomaterial synthesis, advanced characterization spectroscopy, and analytical data software.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs font-mono text-stone-400 mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3" />
            Filter:
          </span>
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-teal-900 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            All Categories ({skillCategories.length})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-teal-900 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="bg-stone-50 border border-stone-200 rounded-2xl p-6 hover:border-teal-800 transition-colors shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-stone-200 mb-4">
                  <span className="text-xs font-mono text-teal-800 font-semibold">
                    {category.badge}
                  </span>
                  <span className="text-[11px] font-mono text-stone-400">
                    {category.skills.length} competencies
                  </span>
                </div>

                <h3 className="text-lg font-serif font-bold text-stone-900 mb-4">
                  {category.category}
                </h3>

                <div className="space-y-3.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 bg-white rounded-xl border border-stone-200/80 shadow-3xs hover:shadow-2xs transition-shadow"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-sm font-semibold text-stone-900">
                          {skill.name}
                        </span>
                        {skill.tag && (
                          <span className="shrink-0 text-[10px] font-mono px-1.5 py-0.5 rounded bg-stone-100 text-stone-600 border border-stone-200">
                            {skill.tag}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                        {skill.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sub-badge footnote */}
              <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center justify-between text-[11px] text-stone-500 font-mono">
                <span>Verified in CV</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-700" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
