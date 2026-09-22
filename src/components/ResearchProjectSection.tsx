import React, { useState } from 'react';
import {
  Zap,
  Atom,
  Microscope,
  Layers,
  Activity,
  CheckCircle2,
  ChevronRight,
  ShieldAlert,
  Info,
  Beaker,
} from 'lucide-react';
import { masterProject } from '../data/cvData';

export const ResearchProjectSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'laser' | 'materials' | 'characterization' | 'mechanism'>('laser');

  return (
    <section id="research-project" className="py-16 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-teal-50 text-teal-900 border border-teal-200 text-xs font-mono uppercase tracking-wider mb-3">
            <Atom className="w-3.5 h-3.5 text-teal-800" />
            <span>Master’s Research Project &bull; Ongoing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 tracking-tight leading-tight">
            {masterProject.title}
          </h2>
          <p className="text-stone-600 mt-4 text-base sm:text-lg leading-relaxed">
            Investigating pulsed laser synthesis of strontium-doped zinc oxide nanostructures in liquid phase to understand defect physics, band structure modifications, and amplified Reactive Oxygen Species (ROS) generation for antibacterial action.
          </p>
        </div>

        {/* Project Technical Brief Banner */}
        <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 sm:p-8 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-stone-400">
                Pulsed Laser Source
              </div>
              <div className="text-base font-semibold text-stone-900 mt-1">
                Nd:YAG Laser
              </div>
              <div className="text-xs text-stone-600 font-mono mt-0.5">
                λ = 1064 nm (Fundamental)
              </div>
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-stone-400">
                Synthesis Route
              </div>
              <div className="text-base font-semibold text-stone-900 mt-1">
                Laser Ablation in Liquid
              </div>
              <div className="text-xs text-stone-600 font-mono mt-0.5">
                Liquid-confined (LAL)
              </div>
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-stone-400">
                Material System
              </div>
              <div className="text-base font-semibold text-stone-900 mt-1">
                Sr-doped ZnO Matrix
              </div>
              <div className="text-xs text-stone-600 font-mono mt-0.5">
                Metal Oxide Nanocrystals
              </div>
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-stone-400">
                Target Application
              </div>
              <div className="text-base font-semibold text-stone-900 mt-1">
                Enhanced ROS Generation
              </div>
              <div className="text-xs text-stone-600 font-mono mt-0.5">
                Antibacterial Mechanisms
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Methodology Explorer */}
        <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-xs">
          {/* Tabs bar */}
          <div className="border-b border-stone-200 bg-stone-50 flex flex-wrap gap-1 p-2">
            <button
              onClick={() => setActiveTab('laser')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'laser'
                  ? 'bg-white text-teal-950 shadow-xs border border-stone-200'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              <Zap className="w-4 h-4 text-teal-800" />
              <span>1. Laser System & LAL</span>
            </button>

            <button
              onClick={() => setActiveTab('materials')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'materials'
                  ? 'bg-white text-teal-950 shadow-xs border border-stone-200'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              <Atom className="w-4 h-4 text-teal-800" />
              <span>2. Sr-Doped ZnO Matrix</span>
            </button>

            <button
              onClick={() => setActiveTab('characterization')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'characterization'
                  ? 'bg-white text-teal-950 shadow-xs border border-stone-200'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              <Microscope className="w-4 h-4 text-teal-800" />
              <span>3. Characterization Suite</span>
            </button>

            <button
              onClick={() => setActiveTab('mechanism')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'mechanism'
                  ? 'bg-white text-teal-950 shadow-xs border border-stone-200'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              <Activity className="w-4 h-4 text-teal-800" />
              <span>4. ROS & Antibacterial Pathway</span>
            </button>
          </div>

          {/* Tab Content Pane */}
          <div className="p-6 sm:p-8">
            {activeTab === 'laser' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-serif text-stone-900">
                    Nd:YAG (1064 nm) Laser Ablation in Liquid (LAL)
                  </h3>
                  <span className="text-xs font-mono bg-stone-100 text-stone-700 px-2.5 py-1 rounded border border-stone-200">
                    Beam Delivery & Optics
                  </span>
                </div>
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                  Laser Ablation in Liquid (LAL) is a powerful, green, surfactant-free physical technique. High-energy pulsed laser photons interact directly with the solid target immersed in liquid, inducing plasma plume expansion, cavitation bubble dynamics, and subsequent nucleation and rapid quenching into pristine nanoparticles.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <div className="text-xs font-mono text-teal-800 font-semibold mb-1">
                      Laser Wavelength
                    </div>
                    <div className="text-lg font-bold text-stone-900 font-serif">
                      1064 nm
                    </div>
                    <p className="text-xs text-stone-600 mt-1">
                      Fundamental near-infrared emission of solid-state Nd:YAG laser for deep optical penetration and steady target ablation.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <div className="text-xs font-mono text-teal-800 font-semibold mb-1">
                      Liquid Confinement
                    </div>
                    <div className="text-lg font-bold text-stone-900 font-serif">
                      Clean Phase LAL
                    </div>
                    <p className="text-xs text-stone-600 mt-1">
                      Liquid layer restrains expanding plasma plume, facilitating thermodynamic mixing and rapid quenching into nanoclusters.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <div className="text-xs font-mono text-teal-800 font-semibold mb-1">
                      Safety & Protocols
                    </div>
                    <div className="text-lg font-bold text-stone-900 font-serif">
                      Full Compliance
                    </div>
                    <p className="text-xs text-stone-600 mt-1">
                      Enclosed beam guiding, protective optical density eyewear, and rigorous laboratory safety precautions.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'materials' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-serif text-stone-900">
                    Dopant Incorporation & Nanoparticle Fabrication
                  </h3>
                  <span className="text-xs font-mono bg-stone-100 text-stone-700 px-2.5 py-1 rounded border border-stone-200">
                    Sr-doped ZnO
                  </span>
                </div>
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                  Incorporating alkaline earth cations such as Strontium (Sr²⁺) into the Zinc Oxide (ZnO) wurtzite host structure induces local lattice strain and alters electronic band structure. Controlling Sr dopant incorporation in the liquid state allows for tailoring defect chemistry, reducing electron–hole recombination rates, and boosting photocatalytic efficiency.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                    <div className="text-xs font-mono text-stone-500 uppercase">ZnO Host Matrix</div>
                    <div className="text-base font-semibold text-stone-900">
                      Hexagonal Wurtzite Semiconductor
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Wide direct bandgap (~3.37 eV) with large exciton binding energy (60 meV), making it an ideal platform for optical and chemical tuning.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                    <div className="text-xs font-mono text-stone-500 uppercase">Strontium (Sr) Dopant</div>
                    <div className="text-base font-semibold text-stone-900">
                      Lattice Modification & Trap States
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Larger ionic radius of Sr²⁺ compared to Zn²⁺ induces deliberate lattice distortion, creates surface oxygen vacancies, and hinders rapid charge recombination.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'characterization' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-serif text-stone-900">
                    Structural, Morphological & Optical Characterization
                  </h3>
                  <span className="text-xs font-mono bg-stone-100 text-stone-700 px-2.5 py-1 rounded border border-stone-200">
                    Experimental Suite
                  </span>
                </div>
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                  The synthesized Sr-doped ZnO nanoparticles undergo systematic multi-instrument characterization to verify phase purity, crystallite dimensions, morphology, and optical absorption properties.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <div className="font-mono text-xs text-teal-800 font-bold mb-1">XRD</div>
                    <div className="font-semibold text-stone-900 text-sm">X-ray Diffraction</div>
                    <p className="text-xs text-stone-600 mt-2">
                      Determines crystal phases, wurtzite planes (100, 002, 101), and checks for phase purity and dopant-induced peak shifts.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <div className="font-mono text-xs text-teal-800 font-bold mb-1">SEM</div>
                    <div className="font-semibold text-stone-900 text-sm">Electron Microscopy</div>
                    <p className="text-xs text-stone-600 mt-2">
                      Observes nanoscale surface morphology, particle size distribution, and agglomeration characteristics of ablated colloids.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <div className="font-mono text-xs text-teal-800 font-bold mb-1">UV-Vis</div>
                    <div className="font-semibold text-stone-900 text-sm">UV-Vis Spectroscopy</div>
                    <p className="text-xs text-stone-600 mt-2">
                      Measures optical absorbance spectra, excitonic peak absorption, and calculates optical bandgap shifts using Tauc plot analysis.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <div className="font-mono text-xs text-teal-800 font-bold mb-1">PL</div>
                    <div className="font-semibold text-stone-900 text-sm">Photoluminescence</div>
                    <p className="text-xs text-stone-600 mt-2">
                      Probes near-band-edge UV emission alongside deep-level defect emissions (oxygen vacancies and zinc interstitials).
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'mechanism' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-serif text-stone-900">
                    Reactive Oxygen Species (ROS) & Antibacterial Investigation
                  </h3>
                  <span className="text-xs font-mono bg-stone-100 text-stone-700 px-2.5 py-1 rounded border border-stone-200">
                    Application & Mechanism
                  </span>
                </div>
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                  Upon photoexcitation or surface interaction, doped semiconductor nanoparticles generate electron–hole pairs. Trapped electrons reduce dissolved oxygen to superoxide radicals (•O₂⁻), while holes oxidize water or hydroxide ions to hydroxyl radicals (•OH). These Reactive Oxygen Species induce oxidative stress and bacterial cell wall disruption.
                </p>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-3">
                  <div className="text-xs font-mono uppercase text-teal-800 font-semibold">
                    Core Project Investigation Points (from CV)
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                    {masterProject.keyContributions.map((contrib, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                        <span>{contrib}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
