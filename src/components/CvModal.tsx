import React from 'react';
import { X, Printer, Download, ExternalLink, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import {
  contactData,
  professionalSummary,
  currentExperience,
  masterProject,
  educationList,
  skillCategories,
  conferencesList,
  languagesList,
} from '../data/cvData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-stone-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-stone-300 max-h-[92vh] flex flex-col overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-150">
        
        {/* Modal Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-stone-50 no-print">
          <div className="flex items-center gap-2">
            <span className="font-serif text-lg font-bold text-stone-900">
              Academic Curriculum Vitae
            </span>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-teal-100 text-teal-900 border border-teal-200">
              Authoritative CV
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              title="Click to print or save as a clean PDF document"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-teal-900 hover:bg-teal-950 border border-teal-950 rounded-lg transition-colors cursor-pointer shadow-3xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download / Save as PDF</span>
            </button>
            <button
              onClick={handlePrint}
              title="Print document directly"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-700 bg-white hover:bg-stone-100 border border-stone-300 rounded-lg transition-colors cursor-pointer shadow-3xs"
            >
              <Printer className="w-3.5 h-3.5 text-stone-700" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Document View */}
        <div className="overflow-y-auto p-6 sm:p-10 text-stone-800 space-y-8 font-sans print-page">
          
          {/* Header */}
          <div className="border-b-2 border-stone-900 pb-6">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              {contactData.name.toUpperCase()}{' '}
              <span className="text-xl font-normal text-stone-600 block sm:inline">
                ({contactData.legalName})
              </span>
            </h1>
            <p className="text-sm font-semibold text-teal-950 mt-1 font-mono">
              {contactData.title}
            </p>

            <div className="flex flex-wrap gap-y-1 gap-x-4 text-xs font-mono text-stone-600 mt-3 pt-2 border-t border-stone-200">
              <span>{contactData.phone}</span>
              <span>&bull;</span>
              <span>{contactData.emails[1].address}</span>
              <span>&bull;</span>
              <span>{contactData.emails[0].address}</span>
              <span>&bull;</span>
              <span>{contactData.location}</span>
            </div>

            <div className="flex flex-wrap gap-y-1 gap-x-4 text-xs font-mono text-teal-900 mt-1.5">
              <span>ORCID: {contactData.orcid.id}</span>
              <span>&bull;</span>
              <span>ResearchGate: {contactData.researchGate.name}</span>
            </div>
          </div>

          {/* Section: Professional Summary */}
          <div>
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-1 mb-3">
              Professional Summary
            </h2>
            <p className="text-sm leading-relaxed text-stone-700">
              {professionalSummary.fullProfile}
            </p>
          </div>

          {/* Section: Research Experience */}
          <div>
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-1 mb-3">
              Research Experience
            </h2>
            
            {/* Role 1: AUC */}
            <div className="mb-5">
              <div className="flex justify-between items-baseline">
                <h3 className="text-base font-bold text-stone-900 font-serif">
                  Research Assistant | Energy Materials Lab (EML)
                </h3>
                <span className="text-xs font-mono text-stone-600">Current</span>
              </div>
              <div className="text-xs text-teal-950 font-medium mb-2">
                The American University in Cairo (AUC)
              </div>
              <ul className="list-disc list-outside ml-5 text-xs text-stone-700 space-y-1">
                {currentExperience[0].responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>

            {/* Role 2: Master's Project */}
            <div>
              <div className="flex justify-between items-baseline">
                <h3 className="text-base font-bold text-stone-900 font-serif">
                  Master's Research Project
                </h3>
                <span className="text-xs font-mono text-stone-600">Ongoing</span>
              </div>
              <div className="text-xs italic text-stone-800 font-serif mb-2">
                {masterProject.title}
              </div>
              <ul className="list-disc list-outside ml-5 text-xs text-stone-700 space-y-1">
                {masterProject.keyContributions.map((contrib, i) => (
                  <li key={i}>{contrib}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section: Education */}
          <div>
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-1 mb-3">
              Education
            </h2>
            <div className="space-y-2.5">
              {educationList.map((edu) => (
                <div key={edu.id} className="flex justify-between items-baseline text-xs">
                  <div>
                    <span className="font-bold text-stone-900">{edu.degree}</span>
                    <span className="text-stone-600 block sm:inline sm:ml-2">
                      {edu.institution}
                    </span>
                  </div>
                  <span className="font-mono text-stone-600 shrink-0 ml-4">
                    {edu.statusOrYear}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Technical Skills */}
          <div>
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-1 mb-3">
              Technical Skills
            </h2>
            <div className="space-y-2 text-xs text-stone-700">
              <div>
                <strong className="text-stone-900 font-semibold">Laser Systems: </strong>
                Nd:YAG Laser (1064 nm); Laser Ablation in Liquid (LAL); laser safety protocols
              </div>
              <div>
                <strong className="text-stone-900 font-semibold">Nanomaterials & Synthesis: </strong>
                Metal oxide nanoparticles; Sr-doped ZnO; nanoparticle fabrication and dopant incorporation
              </div>
              <div>
                <strong className="text-stone-900 font-semibold">Materials Characterization: </strong>
                X-ray Diffraction (XRD); Scanning Electron Microscopy (SEM); UV-Vis Spectroscopy; Photoluminescence (PL) Spectroscopy
              </div>
              <div>
                <strong className="text-stone-900 font-semibold">Data Analysis & Software: </strong>
                Origin; Microsoft Office; Basic LabVIEW
              </div>
              <div>
                <strong className="text-stone-900 font-semibold">Research Skills: </strong>
                Experimental data interpretation; scientific writing; laboratory safety; scientific communication
              </div>
            </div>
          </div>

          {/* Section: Conferences, Workshops & Professional Training */}
          <div>
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-1 mb-3">
              Conferences, Workshops & Professional Training
            </h2>
            <div className="space-y-2.5">
              {conferencesList.map((c) => (
                <div key={c.id} className="text-xs text-stone-700">
                  <span className="font-bold text-stone-900">
                    {c.title}
                  </span>
                  {c.location && (
                    <span className="text-stone-600 font-medium"> — {c.location}</span>
                  )}
                  <span className="font-mono text-stone-700 font-semibold">, {c.year}</span>
                  <span className="text-stone-600 italic"> ({c.role}):</span>{' '}
                  <span className="text-stone-700">{c.description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Languages */}
          <div>
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-1 mb-3">
              Languages
            </h2>
            <div className="flex gap-6 text-xs text-stone-700">
              {languagesList.map((l) => (
                <div key={l.language}>
                  <strong className="text-stone-900">{l.language}:</strong> {l.proficiency}
                </div>
              ))}
            </div>
          </div>

          {/* Section: Research Profiles */}
          <div className="pt-2">
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-1 mb-3">
              Research Profiles
            </h2>
            <div className="text-xs font-mono space-y-1 text-teal-900">
              <div>ORCID: {contactData.orcid.id} ({contactData.orcid.url})</div>
              <div>ResearchGate: {contactData.researchGate.name} ({contactData.researchGate.url})</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
