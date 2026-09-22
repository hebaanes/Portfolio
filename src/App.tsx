/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ResearchProjectSection } from './components/ResearchProjectSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { ConferencesSection } from './components/ConferencesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';

export default function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-teal-900 selection:text-teal-100">
      {/* Top Academic Navigation */}
      <Navbar onOpenCvModal={() => setCvModalOpen(true)} />

      {/* Main Academic Content */}
      <main className="flex-1">
        {/* 1. Hero */}
        <HeroSection onOpenCvModal={() => setCvModalOpen(true)} />

        {/* 2. About & Scientific Profile */}
        <AboutSection />

        {/* 3. Master's Research Project (Ongoing) */}
        <ResearchProjectSection />

        {/* 4. Research Experience (AUC Energy Materials Lab & Master's) */}
        <ExperienceSection />

        {/* 5. Technical Skills & Characterization */}
        <SkillsSection />

        {/* 6. Education & Languages */}
        <EducationSection />

        {/* 7. Conferences & Academic Activities */}
        <ConferencesSection />

        {/* 8. Contact & Academic Correspondence */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenCvModal={() => setCvModalOpen(true)} />

      {/* Comprehensive Academic Curriculum Vitae Overlay */}
      <CvModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />
    </div>
  );
}
