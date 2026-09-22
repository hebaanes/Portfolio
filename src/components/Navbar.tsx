import React, { useState } from 'react';
import { Atom, Menu, X, FileText, Mail, ExternalLink } from 'lucide-react';
import { contactData } from '../data/cvData';

interface NavbarProps {
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Master’s Project', href: '#research-project' },
    { name: 'Technical Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Conferences & Training', href: '#conferences' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-stone-50/90 backdrop-blur-md border-b border-stone-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand / Name */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Heba Anis - Home"
          >
            <div className="w-10 h-10 rounded-lg bg-stone-900 text-stone-100 flex items-center justify-center font-serif text-xl font-bold tracking-tight shadow-xs group-hover:bg-teal-900 transition-colors">
              HA
            </div>
            <div className="flex flex-col">
              <span className="text-base font-semibold tracking-tight text-stone-900 group-hover:text-teal-900 transition-colors">
                {contactData.name}
              </span>
              <span className="text-xs text-stone-500 font-mono tracking-tight">
                AUC &bull; NILES (Cairo Univ)
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions: CV Modal & Contact */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={onOpenCvModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 border border-stone-200 rounded-lg transition-colors shadow-2xs cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-teal-800" />
              <span>Academic CV</span>
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-teal-900 hover:bg-teal-950 rounded-lg transition-colors shadow-xs"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenCvModal}
              className="p-2 text-stone-600 hover:text-stone-900 rounded-md bg-stone-100 border border-stone-200"
              aria-label="View CV"
            >
              <FileText className="w-4 h-4 text-teal-900" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-md transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-50 border-b border-stone-200 px-4 pt-2 pb-5 space-y-1 shadow-lg animate-in fade-in duration-150">
          <div className="text-xs font-mono uppercase tracking-wider text-stone-400 px-3 py-1">
            Navigation
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-md transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-stone-200 mt-2 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="flex-1 inline-flex justify-center items-center gap-1.5 px-3 py-2 text-xs font-semibold text-stone-800 bg-stone-100 border border-stone-200 rounded-lg"
            >
              <FileText className="w-3.5 h-3.5 text-teal-800" />
              <span>Curriculum Vitae</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 inline-flex justify-center items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-teal-900 rounded-lg"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
