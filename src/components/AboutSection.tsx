import React from 'react';
import {
  Atom,
  Layers,
  Sparkles,
  Flame,
  ShieldCheck,
  Compass,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';
import { professionalSummary } from '../data/cvData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-stone-200/70 text-stone-800 text-xs font-mono uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-teal-800" />
            <span>Profile & Scientific Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 tracking-tight">
            Laser Science & Functional Nanomaterials
          </h2>
          <p className="text-stone-600 mt-3 text-base sm:text-lg leading-relaxed">
            Bridging fundamental photon–matter dynamics with precision nanomaterial engineering for next-generation optical, energy, and antibacterial technologies.
          </p>
        </div>

        {/* Narrative & Institutional Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Main Statement */}
          <div className="lg:col-span-8 bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            <h3 className="text-xl font-serif text-stone-900 mb-4 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-800" />
              <span>Academic & Experimental Profile</span>
            </h3>
            <p className="text-stone-700 text-base leading-relaxed mb-4">
              {professionalSummary.fullProfile}
            </p>
            <p className="text-stone-600 text-sm leading-relaxed">
              Her research methodology centers on the synthesis of surfactant-free colloidal nanoparticles via liquid-confined pulsed laser ablation. By systematically tuning laser ablation conditions and dopant stoichiometry, her work correlates crystal lattice modifications and defect states directly to physical parameters such as bandgap shifts, photoluminescent transitions, and reactive oxygen species generation kinetics.
            </p>

            {/* Scientific Competencies Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-stone-100">
              <div className="flex items-start gap-2.5 text-xs text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <span>Precision Nd:YAG 1064 nm pulsed beam delivery and safety compliance</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <span>Surfactant-free synthesis of Sr-doped ZnO nanostructures via LAL</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <span>Multi-modal characterization: XRD, SEM, UV-Vis, and Photoluminescence</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <span>Investigation of ROS antibacterial pathways & energy material properties</span>
              </div>
            </div>
          </div>

          {/* Institutional Highlights Side Card */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
              <div className="text-xs font-mono uppercase tracking-wider text-teal-800 font-semibold mb-2">
                Primary Affiliations
              </div>
              <div className="space-y-4">
                <div className="border-b border-stone-100 pb-3">
                  <div className="text-xs text-stone-500 font-mono">Current Appointment</div>
                  <div className="font-semibold text-stone-900 text-sm mt-0.5">
                    Research Assistant
                  </div>
                  <div className="text-xs text-stone-600">
                    Energy Materials Lab (EML) &bull; The American University in Cairo (AUC)
                  </div>
                </div>

                <div>
                  <div className="text-xs text-stone-500 font-mono">Graduate Studies</div>
                  <div className="font-semibold text-stone-900 text-sm mt-0.5">
                    MSc Candidate in Laser Science
                  </div>
                  <div className="text-xs text-stone-600">
                    National Institute of Laser Sciences (NILES) &bull; Cairo University
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-teal-900 text-stone-100 rounded-2xl p-5 shadow-xs">
              <div className="flex items-center gap-2 text-teal-300 text-xs font-mono mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Laboratory Standard</span>
              </div>
              <p className="text-xs text-stone-200 leading-relaxed">
                Adhering to rigorous laser containment, chemical hygiene, and high-precision spectroscopic measurement protocols in accredited research laboratory environments.
              </p>
            </div>
          </div>

        </div>

        {/* 4 Research Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {professionalSummary.keyPillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="bg-white border border-stone-200 rounded-xl p-5 hover:border-teal-800 transition-colors shadow-2xs"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-700">
                  {pillar.metric}
                </span>
                <span className="text-xs font-mono text-stone-400">0{idx + 1}</span>
              </div>
              <h4 className="text-base font-semibold text-stone-900 mb-2">
                {pillar.title}
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
