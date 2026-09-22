import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Copy,
  Check,
  Send,
  Building2,
  FileCheck,
  Globe,
  Sparkles,
} from 'lucide-react';
import { contactData } from '../data/cvData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    purpose: 'Research Collaboration',
    message: '',
  });

  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-stone-200/70 text-stone-800 text-xs font-mono uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-teal-800" />
            <span>Academic Correspondence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 tracking-tight">
            Contact & Academic Profiles
          </h2>
          <p className="text-stone-600 mt-3 text-base sm:text-lg leading-relaxed">
            Open to scholarly discussions, collaborative laser-matter research, materials characterization inquiries, and academic opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Institutional Contacts */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Email Cards */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
              <h3 className="text-base font-semibold text-stone-900 mb-4 flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-800" />
                <span>Institutional Academic Emails</span>
              </h3>

              <div className="space-y-3">
                {contactData.emails.map((item) => (
                  <div
                    key={item.address}
                    className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="text-xs font-mono text-teal-800 font-semibold mb-0.5">
                        {item.label}
                      </div>
                      <a
                        href={`mailto:${item.address}`}
                        className="text-sm font-medium text-stone-900 hover:text-teal-900 hover:underline font-mono"
                      >
                        {item.address}
                      </a>
                    </div>

                    <button
                      onClick={() => handleCopy(item.address)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-white hover:bg-stone-100 border border-stone-200 rounded-lg transition-colors cursor-pointer shadow-3xs self-start sm:self-center"
                      title="Copy to clipboard"
                    >
                      {copiedEmail === item.address ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-stone-500" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Coordinates & Scientific Identifiers */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-4">
              <h3 className="text-base font-semibold text-stone-900 flex items-center gap-2">
                <Globe className="w-4 h-4 text-teal-800" />
                <span>Verified Scientific Profiles & Coordinates</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* ORCID */}
                <a
                  href={contactData.orcid.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 hover:border-emerald-700 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-[#A6CE39] text-white font-bold flex items-center justify-center text-xs">
                      iD
                    </span>
                    <div>
                      <div className="text-xs font-bold text-stone-900">ORCID</div>
                      <div className="text-[11px] font-mono text-stone-500">
                        {contactData.orcid.id}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-emerald-700 transition-colors" />
                </a>

                {/* ResearchGate */}
                <a
                  href={contactData.researchGate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 hover:border-teal-700 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-md bg-teal-900 text-teal-100 font-bold flex items-center justify-center text-xs">
                      RG
                    </span>
                    <div>
                      <div className="text-xs font-bold text-stone-900">ResearchGate</div>
                      <div className="text-[11px] font-mono text-stone-500">
                        {contactData.researchGate.name}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-teal-700 transition-colors" />
                </a>

                {/* Phone */}
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-teal-800 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-stone-900">Telephone</div>
                    <div className="text-xs font-mono text-stone-600">
                      {contactData.phone}
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-teal-800 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-stone-900">Location</div>
                    <div className="text-xs text-stone-600">
                      {contactData.location}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-[11px] font-mono text-stone-400">
                Primary/Display Name: <strong className="text-stone-700">{contactData.name}</strong> &bull; Formal: {contactData.legalName}
              </div>
            </div>

          </div>

          {/* Right Column: Academic Inquiry / Message Form */}
          <div className="lg:col-span-6">
            <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-1">
                Academic Inquiry & Collaboration
              </h3>
              <p className="text-xs text-stone-500 mb-6">
                Send a direct academic or research message. Responses will be sent to your specified email.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-teal-50 border border-teal-200 text-center space-y-3 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-teal-900 text-white flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-teal-950 font-serif">
                    Message Prepared
                  </h4>
                  <p className="text-xs text-teal-900 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="font-semibold">{formData.name || 'colleague'}</strong>. Your academic inquiry regarding <span className="font-mono font-medium">{formData.purpose}</span> has been logged. You may also reach out directly to <code className="font-mono text-[11px] font-bold">Heba.anis@aucegypt.edu</code>.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        institution: '',
                        purpose: 'Research Collaboration',
                        message: '',
                      });
                    }}
                    className="mt-2 text-xs font-semibold text-teal-900 hover:underline cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Prof. / Dr. / Researcher"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-teal-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@university.edu"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-teal-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Academic Institution / Lab
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. University / Research Center"
                        value={formData.institution}
                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-teal-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Inquiry Topic
                      </label>
                      <select
                        value={formData.purpose}
                        onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-teal-800"
                      >
                        <option value="Research Collaboration">Research Collaboration</option>
                        <option value="Laser Ablation (LAL) Inquiry">Laser Ablation (LAL) Inquiry</option>
                        <option value="Materials Characterization (XRD/SEM/UV-Vis/PL)">Characterization (XRD/SEM/UV-Vis/PL)</option>
                        <option value="Academic Opportunity / Visit">Academic Opportunity / Visit</option>
                        <option value="Conference & Scientific Exchange">Conference & Scientific Exchange</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Detail your scientific inquiry, project interest, or question..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-teal-800"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-teal-900 hover:bg-teal-950 transition-colors shadow-xs cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Academic Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
