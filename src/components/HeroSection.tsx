import React, { useState } from 'react';
import {
  ExternalLink,
  Mail,
  MapPin,
  FileText,
  Sparkles,
  Award,
  ChevronRight,
  ShieldCheck,
  Zap,
  Globe,
  Check,
  X,
  Image as ImageIcon,
} from 'lucide-react';
import { contactData, professionalSummary } from '../data/cvData';

interface HeroSectionProps {
  onOpenCvModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCvModal }) => {
  const [imageSrc, setImageSrc] = useState<string>('./IMG-20260912-WA0033.jpg');
  const [showGhModal, setShowGhModal] = useState(false);
  const [copiedCmd, setCopiedCmd] = useState(false);

  const handleImageError = () => {
    // If the JPG hasn't been placed in the public directory yet, fallback to the SVG portrait
    if (imageSrc !== './profile-fallback.svg') {
      setImageSrc('./profile-fallback.svg');
    }
  };

  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-stone-200 bg-white">
      {/* Subtle academic background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Academic Bio & Credentials */}
          <div className="lg:col-span-7 space-y-6">
            {/* Institution & Status Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-teal-50 text-teal-900 border border-teal-200">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600 animate-pulse" />
                Research Assistant at EML at American University in Cairo
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-stone-100 text-stone-700 border border-stone-200">
                <span className="font-mono text-stone-500">NILES</span> Cairo University
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono text-stone-500 bg-stone-50 border border-stone-200">
                <MapPin className="w-3 h-3 text-stone-400" />
                Alexandria, Egypt
              </span>
            </div>

            {/* Display Name and Academic Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-stone-900 tracking-tight leading-tight">
                {contactData.name}
              </h1>
              <p className="text-xs text-stone-500 mt-1 font-mono tracking-wide">
                Formal Academic Name: <span className="text-stone-700 font-medium">{contactData.legalName}</span>
              </p>
              <p className="text-lg sm:text-xl text-teal-950 font-medium mt-3 leading-snug">
                {contactData.title}
              </p>
            </div>

            {/* Concise Profile Translation */}
            <p className="text-stone-600 text-base sm:text-lg leading-relaxed max-w-2xl">
              {professionalSummary.shortIntro}
            </p>

            {/* Scientific Focus Pills from CV */}
            <div className="pt-1">
              <div className="text-xs font-mono uppercase tracking-wider text-stone-400 mb-2">
                Core Specializations
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'Laser–Matter Interaction',
                  'Nd:YAG (1064 nm) Pulsed Laser',
                  'Laser Ablation in Liquid (LAL)',
                  'Sr-doped ZnO Synthesis',
                  'Materials Characterization',
                  'ROS Generation & Antibacterial Studies',
                ].map((spec) => (
                  <span
                    key={spec}
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-stone-100 text-stone-800 border border-stone-200"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#research-project"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-teal-900 hover:bg-teal-950 transition-all shadow-xs"
              >
                <span>Master's Project</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-300 transition-all shadow-2xs cursor-pointer"
              >
                <FileText className="w-4 h-4 text-teal-900" />
                <span>Curriculum Vitae</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-stone-700 hover:text-stone-900 hover:bg-stone-100 border border-transparent transition-all"
              >
                <Mail className="w-4 h-4 text-stone-500" />
                <span>Contact Details</span>
              </a>
            </div>

            {/* Academic Indices / Fast Links */}
            <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center gap-4 text-xs">
              <a
                href={contactData.orcid.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-emerald-800 hover:text-emerald-950 hover:underline"
              >
                <span className="w-4 h-4 rounded-full bg-[#A6CE39] text-white font-bold flex items-center justify-center text-[10px]">iD</span>
                <span>ORCID: {contactData.orcid.id}</span>
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </a>

              <a
                href={contactData.researchGate.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-teal-800 hover:text-teal-950 hover:underline"
              >
                <span className="font-bold text-teal-700">RG</span>
                <span>ResearchGate: {contactData.researchGate.name}</span>
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Authentic Professional Portrait & Technical Specimen */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer Academic Card Frame */}
              <div className="relative bg-white border border-stone-300 rounded-2xl p-3 shadow-md">
                
                {/* Photo Container */}
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-stone-100 border border-stone-200">
                  <img
                    src={imageSrc}
                    alt="Heba Anis - Laser Science & Nanomaterials Researcher"
                    referrerPolicy="no-referrer"
                    onError={handleImageError}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-102"
                  />

                  {/* Corner Academic Calibration Marker */}
                  <div className="absolute top-2 left-2 bg-stone-900/85 backdrop-blur-xs text-stone-100 px-2.5 py-1 rounded-md text-[11px] font-mono border border-stone-700/60 shadow-xs">
                    λ = 1064 nm &bull; Nd:YAG
                  </div>

                  <div className="absolute bottom-2 right-2 bg-stone-900/85 backdrop-blur-xs text-teal-300 px-2.5 py-1 rounded-md text-[11px] font-mono border border-stone-700/60 shadow-xs">
                    AUC &bull; NILES
                  </div>
                </div>

                {/* Caption & Static File Placement Notice */}
                <div className="mt-3 px-1 pt-1 pb-0.5 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-stone-900">Heba Anis</h3>
                      <p className="text-xs text-stone-500 font-mono">Laser Ablation in Liquid &bull; ZnO:Sr</p>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-stone-100 text-stone-600 border border-stone-200">
                      Researcher ID verified
                    </span>
                  </div>

                  {/* Static File Specification Badge */}
                  <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-700">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-900 font-mono mb-1">
                      <ImageIcon className="w-3.5 h-3.5 text-teal-800" />
                      <span>Static Photo File:</span>
                    </div>
                    <div className="bg-white border border-stone-200 rounded-lg p-1.5 font-mono text-[11px] text-teal-900 font-semibold break-all">
                      public/IMG-20260912-WA0033.jpg
                    </div>
                    <p className="text-[11px] text-stone-500 mt-1.5 leading-relaxed">
                      To display your actual photo, simply replace or place this file in the <code className="font-mono text-stone-800">public/</code> directory before running <code className="font-mono text-stone-800">npm run build</code>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Research Metrics Float */}
              <div className="grid grid-cols-2 gap-2 mt-4">
                <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl">
                  <div className="text-xs text-stone-500 font-mono">Current Appointment</div>
                  <div className="text-sm font-semibold text-stone-900 mt-0.5">Research Assistant</div>
                  <div className="text-[11px] text-teal-800 font-medium">EML &bull; AUC Cairo</div>
                </div>
                <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl">
                  <div className="text-xs text-stone-500 font-mono">Degree Focus</div>
                  <div className="text-sm font-semibold text-stone-900 mt-0.5">MSc Laser Science</div>
                  <div className="text-[11px] text-teal-800 font-medium">NILES Cairo Univ</div>
                </div>
              </div>

              {/* GitHub Pages Ready Status Card */}
              <div className="mt-3 p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-stone-700 font-medium">Static Build &bull; GitHub Pages Ready</span>
                </div>
                <button
                  onClick={() => setShowGhModal(true)}
                  className="font-mono text-teal-800 hover:text-teal-950 font-semibold underline cursor-pointer text-[11px]"
                >
                  Deploy Guide &rarr;
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* GitHub Pages Deployment Guide Modal */}
      {showGhModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-stone-200 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-teal-800" />
                <h3 className="font-serif font-bold text-lg text-stone-900">
                  Deploying to GitHub Pages
                </h3>
              </div>
              <button
                onClick={() => setShowGhModal(false)}
                className="p-1 text-stone-400 hover:text-stone-700 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 space-y-4 text-xs text-stone-600 leading-relaxed">
              <p>
                This portfolio is configured as a <strong>100% static single-page web app</strong> with relative path routing (<code className="bg-stone-100 px-1.5 py-0.5 rounded font-mono text-teal-900">base: './'</code>), so it works right out of the box on GitHub Pages!
              </p>

              <div className="space-y-2">
                <div className="font-semibold text-stone-800 font-mono uppercase tracking-wider text-[11px]">
                  Step 1: Photo Placement
                </div>
                <p>
                  Ensure your photo <code className="bg-stone-100 px-1 py-0.5 rounded font-mono font-bold text-stone-900">IMG-20260912-WA0033.jpg</code> is placed in the <code className="font-mono bg-stone-100 px-1 py-0.5 rounded">public/</code> directory. When building, Vite will automatically bundle it into the root static files.
                </p>
              </div>

              <div className="space-y-2">
                <div className="font-semibold text-stone-800 font-mono uppercase tracking-wider text-[11px]">
                  Step 2: Automated Deployment via GitHub Actions
                </div>
                <p>
                  We have included a pre-configured <code className="font-mono bg-stone-100 px-1 py-0.5 rounded">.github/workflows/deploy.yml</code>. In your GitHub repository:
                </p>
                <ol className="list-decimal list-inside ml-2 space-y-1 text-stone-700 font-mono text-[11px]">
                  <li>Go to <strong>Settings</strong> &rarr; <strong>Pages</strong></li>
                  <li>Under <em>Build and deployment &gt; Source</em>, select <strong>GitHub Actions</strong></li>
                  <li>Push your code to <strong>main</strong> branch &mdash; GitHub will automatically build and publish!</li>
                </ol>
              </div>

              <div className="space-y-2">
                <div className="font-semibold text-stone-800 font-mono uppercase tracking-wider text-[11px]">
                  Step 3: Local Test Command
                </div>
                <div className="p-2.5 rounded-lg bg-stone-900 text-stone-100 font-mono text-[11px] flex items-center justify-between">
                  <code>npm run build && npx serve dist</code>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText('npm run build && npx serve dist');
                      setCopiedCmd(true);
                      setTimeout(() => setCopiedCmd(false), 2000);
                    }}
                    className="text-xs text-teal-300 hover:text-white cursor-pointer ml-2"
                  >
                    {copiedCmd ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-stone-200 flex justify-end">
              <button
                onClick={() => setShowGhModal(false)}
                className="px-4 py-2 bg-teal-900 text-white rounded-lg text-xs font-semibold hover:bg-teal-950 cursor-pointer transition-colors"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
