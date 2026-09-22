import React from 'react';
import { ExternalLink, ArrowUp, Atom, Mail } from 'lucide-react';
import { contactData } from '../data/cvData';

interface FooterProps {
  onOpenCvModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCvModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 py-12 lg:py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-stone-800">
          
          {/* Identity & Legal name */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-teal-950 border border-teal-700 text-stone-100 flex items-center justify-center font-serif text-lg font-bold">
                HA
              </div>
              <span className="font-serif text-2xl font-bold text-white tracking-tight">
                {contactData.name}
              </span>
            </div>
            <p className="text-xs text-stone-400 max-w-md leading-relaxed">
              {contactData.title}
            </p>
            <p className="text-xs text-stone-500 font-mono">
              Academic Legal Record: <span className="text-stone-300">{contactData.legalName}</span>
            </p>
            <p className="text-xs text-stone-400">
              Affiliated with Energy Materials Lab (AUC) & National Institute of Laser Sciences (NILES), Cairo University.
            </p>
          </div>

          {/* Academic Links */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <div className="font-mono uppercase text-teal-400 tracking-wider font-semibold mb-3">
              Profiles & Documents
            </div>
            <ul className="space-y-2 font-mono">
              <li>
                <button
                  onClick={onOpenCvModal}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  &rarr; Curriculum Vitae (Print/PDF)
                </button>
              </li>
              <li>
                <a
                  href={contactData.orcid.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>&rarr; ORCID ({contactData.orcid.id})</span>
                  <ExternalLink className="w-3 h-3 text-stone-500" />
                </a>
              </li>
              <li>
                <a
                  href={contactData.researchGate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>&rarr; ResearchGate Profile</span>
                  <ExternalLink className="w-3 h-3 text-stone-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Direct Inquiries */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <div className="font-mono uppercase text-teal-400 tracking-wider font-semibold mb-3">
              Correspondence
            </div>
            <div className="space-y-1 font-mono text-stone-400">
              <div>AUC: {contactData.emails[0].address}</div>
              <div>NILES: {contactData.emails[1].address}</div>
              <div className="pt-2 text-stone-500">Alexandria, Egypt</div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            &copy; {new Date().getFullYear()} {contactData.name}. Academic and Research Portfolio.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors cursor-pointer text-xs font-mono"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
