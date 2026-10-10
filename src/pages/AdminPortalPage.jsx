import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Award, 
  Briefcase, 
  Building2, 
  Plus, 
  ShieldCheck, 
  Printer, 
  Trash2, 
  Copy, 
  Check, 
  Search, 
  QrCode, 
  CheckCircle2, 
  Lock, 
  Sparkles,
  ExternalLink,
  Users,
  Calendar,
  Layers,
  Phone,
  Mail
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { createDocument, getAllCertificates, deleteCertificate } from '../services/certificateService';
import { getEnquiries } from '../services/leadService';
import brandLogo from '../assets/yukti-logo.svg';

export default function AdminPortalPage() {
  const [activeTab, setActiveTab] = useState('create');
  const [docType, setDocType] = useState('training_certificate');
  const [certificates, setCertificates] = useState([]);
  const [leads, setLeads] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState(null);
  const [previewDoc, setPreviewDoc] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    studentName: '',
    college: '',
    title: 'Java Full Stack Development & Microservices',
    duration: '6 Months (Jan 2026 – Jun 2026)',
    issueDate: new Date().toISOString().split('T')[0],
    grade: 'Grade A+ (Distinction)',
    skills: 'Core Java, Spring Boot, React.js, Microservices, Docker, MySQL',
    projectTitle: 'Enterprise Cloud Architecture Project',
    stipend: 'Performance Based (INR 10,000/mo)',
    startDate: new Date().toISOString().split('T')[0],
    instructor: 'Sanjay Sharma (Lead Enterprise Architect)',
    authorizedSignatory: 'Director of Academic Affairs'
  });

  const loadData = async () => {
    setIsLoading(true);
    try {
      const [certList, leadsList] = await Promise.all([
        getAllCertificates(),
        getEnquiries()
      ]);
      setCertificates(certList);
      setLeads(leadsList);
    } catch (err) {
      console.error('Error loading admin data:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    document.title = "Admin Portal & Document Studio | Yukti Software";
    loadData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTypeChange = (type) => {
    setDocType(type);
    if (type === 'training_certificate') {
      setFormData(prev => ({
        ...prev,
        title: 'Java Full Stack Development & Microservices',
        grade: 'Grade A+ (Distinction)',
        skills: 'Core Java, Spring Boot, React.js, Microservices, Docker, MySQL'
      }));
    } else if (type === 'internship_certificate') {
      setFormData(prev => ({
        ...prev,
        title: 'Full Stack Web Engineering Internship',
        grade: 'Outstanding Performance (Grade A)',
        skills: 'React.js, Node.js, Express, MongoDB, REST APIs, Git'
      }));
    } else if (type === 'internship_offer') {
      setFormData(prev => ({
        ...prev,
        title: 'Software Development Intern',
        stipend: 'Performance-linked stipend + PPO Opportunity',
        duration: '3 Months (Full-Time / Hybrid)'
      }));
    } else if (type === 'mou') {
      setFormData(prev => ({
        ...prev,
        studentName: 'RKGIT / Sharda University / Galgotias',
        title: 'Academic & Industrial Training Collaboration MoU',
        duration: '3 Years (2026 – 2029)',
        projectTitle: 'Joint Hackathons, Faculty Workshops & Campus Placement Drives'
      }));
    }
  };

  const handleGenerate = async (e) => {
    e.preventDefault();
    if (!formData.studentName.trim() || !formData.title.trim()) {
      alert('Please enter Student / Institution Name and Title');
      return;
    }

    setIsLoading(true);
    try {
      const result = await createDocument({
        type: docType,
        ...formData
      });

      if (result.success) {
        confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
        setPreviewDoc(result.data);
        await loadCertificates();
        setActiveTab('preview');
      }
    } catch (err) {
      console.error('Error generating document:', err);
      alert('Failed to generate document. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (certId) => {
    if (window.confirm(`Are you sure you want to revoke / delete document "${certId}"?`)) {
      await deleteCertificate(certId);
      await loadCertificates();
      if (previewDoc?.id === certId) setPreviewDoc(null);
    }
  };

  const copyVerifyLink = (id) => {
    const url = `${window.location.origin}/verify?id=${encodeURIComponent(id)}`;
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredCerts = certificates.filter(c => {
    const q = searchQuery.toLowerCase();
    return (
      (c.studentName || '').toLowerCase().includes(q) ||
      (c.id || '').toLowerCase().includes(q) ||
      (c.title || '').toLowerCase().includes(q) ||
      (c.college || '').toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8 animate-fadeIn">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="space-y-1">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 text-xs font-bold border border-brand-200 dark:border-brand-800">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
            <span>Yukti Admin & Credential Studio</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Document & Certificate Generator
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Generate and store authenticated certificates, offer letters, and institutional MoUs with instant QR codes.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center space-x-1.5 p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-xs font-bold">
          <button
            onClick={() => setActiveTab('create')}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeTab === 'create'
                ? 'bg-brand-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            Create Document
          </button>
          <button
            onClick={() => setActiveTab('registry')}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeTab === 'registry'
                ? 'bg-brand-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            Issued Registry ({certificates.length})
          </button>
          <button
            onClick={() => setActiveTab('leads')}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeTab === 'leads'
                ? 'bg-brand-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            Leads & Inquiries ({leads.length})
          </button>
          {previewDoc && (
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-4 py-2 rounded-xl transition-all ${
                activeTab === 'preview'
                  ? 'bg-brand-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              Print Preview
            </button>
          )}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: CREATE DOCUMENT FORM */}
      {/* ========================================================================= */}
      {activeTab === 'create' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Document Type Switcher */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Select Document Template</h3>
            
            <div className="space-y-2">
              {[
                { id: 'training_certificate', title: '1. Course Training Certificate', desc: 'Accredited certificate with modules, duration, and performance grade.', icon: Award },
                { id: 'internship_certificate', title: '2. Internship Completion Certificate', desc: 'Verified industrial internship credential with live capstones.', icon: Briefcase },
                { id: 'internship_offer', title: '3. Internship Offer Letter', desc: 'Formal offer letter with start date, stipend, and terms.', icon: FileText },
                { id: 'mou', title: '4. Institutional / College MoU', desc: 'Memorandum of Understanding for university partnerships & workshops.', icon: Building2 },
              ].map(item => {
                const Icon = item.icon;
                const isSelected = docType === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleTypeChange(item.id)}
                    className={`w-full p-4 rounded-2xl text-left border transition-all flex items-start space-x-3 cursor-pointer ${
                      isSelected 
                        ? 'bg-brand-50/80 dark:bg-brand-950/60 border-brand-500 shadow-md ring-2 ring-brand-500/20' 
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      isSelected ? 'bg-brand-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className={`text-xs font-bold ${isSelected ? 'text-brand-900 dark:text-brand-200' : 'text-slate-900 dark:text-white'}`}>
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Form Fields */}
          <div className="lg:col-span-8 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
            <h3 className="text-base font-black text-slate-900 dark:text-white pb-2 border-b border-slate-100 dark:border-slate-800">
              Fill Document Details
            </h3>

            <form onSubmit={handleGenerate} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {docType === 'mou' ? 'Partner College / Institution' : 'Student / Candidate Full Name'} *
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    placeholder="e.g. Rahul Sharma"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    College / University (Optional)
                  </label>
                  <input
                    type="text"
                    name="college"
                    value={formData.college}
                    onChange={handleInputChange}
                    placeholder="e.g. Galgotias / Sharda / RKGIT"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {docType === 'internship_offer' ? 'Internship Role / Designation' : 'Course / Program Title'} *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="e.g. Java Full Stack Development"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Duration & Timeline
                  </label>
                  <input
                    type="text"
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    placeholder="e.g. 6 Months (Jan 2026 – Jun 2026)"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:outline-none"
                  />
                </div>
              </div>

              {docType !== 'internship_offer' && docType !== 'mou' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Performance Grade
                    </label>
                    <input
                      type="text"
                      name="grade"
                      value={formData.grade}
                      onChange={handleInputChange}
                      placeholder="e.g. Grade A+ (Distinction)"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Issue Date
                    </label>
                    <input
                      type="date"
                      name="issueDate"
                      value={formData.issueDate}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {docType === 'internship_offer' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Stipend / Compensation
                    </label>
                    <input
                      type="text"
                      name="stipend"
                      value={formData.stipend}
                      onChange={handleInputChange}
                      placeholder="e.g. Performance Based + Certificate"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Joining / Start Date
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:outline-none"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Technical Stack / Modules (Comma-separated)
                </label>
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  placeholder="e.g. Core Java, Spring Boot 3, React.js, Hibernate, Docker"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Capstone Project Title / Scope
                </label>
                <input
                  type="text"
                  name="projectTitle"
                  value={formData.projectTitle}
                  onChange={handleInputChange}
                  placeholder="e.g. Enterprise Cloud Logistics Application"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Faculty / Mentor Name
                  </label>
                  <input
                    type="text"
                    name="instructor"
                    value={formData.instructor}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Authorized Signatory
                  </label>
                  <input
                    type="text"
                    name="authorizedSignatory"
                    value={formData.authorizedSignatory}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 px-6 rounded-2xl bg-brand-600 hover:bg-brand-500 text-white font-black text-sm shadow-xl hover:shadow-brand-500/25 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Generate & Save to Firebase Registry</span>
                </button>
              </div>
            </form>
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: ISSUED CERTIFICATES REGISTRY */}
      {/* ========================================================================= */}
      {activeTab === 'registry' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by student, ID or college..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>

            <button
              onClick={() => setActiveTab('create')}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-brand-600 text-white font-bold text-xs flex items-center justify-center space-x-1 shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Issue New Document</span>
            </button>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-black border-b border-slate-200 dark:border-slate-800 uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="p-3.5">Certificate ID</th>
                    <th className="p-3.5">Student / Institution</th>
                    <th className="p-3.5">Course / Role</th>
                    <th className="p-3.5">Issue Date</th>
                    <th className="p-3.5">Grade</th>
                    <th className="p-3.5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-800 dark:text-slate-200">
                  {filteredCerts.length > 0 ? (
                    filteredCerts.map((cert) => (
                      <tr key={cert.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
                        <td className="p-3.5 font-mono font-bold text-brand-600 dark:text-brand-400">
                          {cert.id || cert.certId}
                        </td>
                        <td className="p-3.5">
                          <p className="font-extrabold text-slate-900 dark:text-white">{cert.studentName}</p>
                          {cert.college && <p className="text-[10px] text-slate-400">{cert.college}</p>}
                        </td>
                        <td className="p-3.5 max-w-xs truncate font-medium">
                          {cert.title}
                        </td>
                        <td className="p-3.5 text-slate-500 font-mono text-[11px]">
                          {cert.issueDate || '2026-06-30'}
                        </td>
                        <td className="p-3.5">
                          <span className="px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-[10px] border border-emerald-200 dark:border-emerald-800">
                            {cert.grade || 'Verified'}
                          </span>
                        </td>
                        <td className="p-3.5 text-right space-x-1.5 whitespace-nowrap">
                          <button
                            onClick={() => copyVerifyLink(cert.id)}
                            title="Copy Public Verification Link"
                            className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-brand-50 dark:hover:bg-brand-950 text-slate-700 dark:text-slate-300 hover:text-brand-600 transition-all cursor-pointer"
                          >
                            {copiedId === cert.id ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                          <button
                            onClick={() => {
                              setPreviewDoc(cert);
                              setActiveTab('preview');
                            }}
                            title="View & Print Certificate"
                            className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-brand-50 dark:hover:bg-brand-950 text-slate-700 dark:text-slate-300 hover:text-brand-600 transition-all cursor-pointer"
                          >
                            <Printer className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDelete(cert.id)}
                            title="Revoke / Delete"
                            className="p-1.5 rounded-lg bg-rose-50 dark:bg-rose-950 hover:bg-rose-100 text-rose-600 dark:text-rose-400 transition-all cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="p-8 text-center text-slate-400 text-xs">
                        No certificates found matching your query.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: LEADS & ENQUIRIES DASHBOARD */}
      {/* ========================================================================= */}
      {activeTab === 'leads' && (
        <div className="space-y-4 animate-fadeIn">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">
              Student & Enterprise Inbound Inquiries ({leads.length})
            </h3>
            <button
              onClick={loadData}
              className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-xs font-bold text-slate-700 dark:text-slate-300 transition-all"
            >
              Refresh Leads
            </button>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-black border-b border-slate-200 dark:border-slate-800 uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="p-3.5">Candidate / Company</th>
                    <th className="p-3.5">Contact</th>
                    <th className="p-3.5">Program / Service</th>
                    <th className="p-3.5">Mode / Type</th>
                    <th className="p-3.5">Message / Note</th>
                    <th className="p-3.5 text-right">Instant Connect</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-800 dark:text-slate-200">
                  {leads.length > 0 ? (
                    leads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
                        <td className="p-3.5">
                          <p className="font-extrabold text-slate-900 dark:text-white">{lead.name || 'Anonymous'}</p>
                          <p className="text-[10px] text-slate-400">{lead.submittedAt ? new Date(lead.submittedAt).toLocaleString('en-IN') : 'Recent'}</p>
                        </td>
                        <td className="p-3.5 space-y-0.5">
                          {lead.phone && <p className="font-mono text-slate-700 dark:text-slate-300 font-bold">{lead.phone}</p>}
                          {lead.email && <p className="text-slate-500 text-[11px] truncate max-w-[160px]">{lead.email}</p>}
                        </td>
                        <td className="p-3.5">
                          <span className="font-extrabold text-brand-600 dark:text-brand-400">
                            {lead.course || lead.service || lead.type || 'Course Training'}
                          </span>
                        </td>
                        <td className="p-3.5">
                          <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-bold">
                            {lead.mode || lead.type || 'General'}
                          </span>
                        </td>
                        <td className="p-3.5 max-w-xs truncate text-slate-600 dark:text-slate-400 text-[11px]">
                          {lead.message || 'Enrollment enquiry submitted via website.'}
                        </td>
                        <td className="p-3.5 text-right space-x-1.5 whitespace-nowrap">
                          {lead.phone && (
                            <>
                              <a
                                href={`https://wa.me/${lead.phone.replace(/\D/g, '')}?text=${encodeURIComponent(`Hello ${lead.name || ''}, thank you for contacting Yukti Software regarding ${lead.course || 'our training programs'}.`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 hover:bg-emerald-100 transition-colors"
                                title="WhatsApp"
                              >
                                <Phone className="w-3.5 h-3.5" />
                              </a>
                              <a
                                href={`tel:${lead.phone}`}
                                className="inline-flex p-1.5 rounded-lg bg-brand-50 dark:bg-brand-950 text-brand-600 hover:bg-brand-100 transition-colors"
                                title="Direct Call"
                              >
                                <Phone className="w-3.5 h-3.5 rotate-90" />
                              </a>
                            </>
                          )}
                          {lead.email && (
                            <a
                              href={`mailto:${lead.email}`}
                              className="inline-flex p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 hover:bg-slate-200 transition-colors"
                              title="Email"
                            >
                              <Mail className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="p-8 text-center text-slate-400 text-xs">
                        No enquiries recorded yet. New website form submissions will appear here automatically.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: PRINTABLE TEMPLATE PREVIEW */}
      {/* ========================================================================= */}
      {activeTab === 'preview' && previewDoc && (
        <div className="space-y-4">
          <div className="flex items-center justify-between bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm print:hidden">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span className="text-xs font-bold text-slate-900 dark:text-white">
                Certificate Generated: <strong className="font-mono text-brand-600">{previewDoc.id}</strong>
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => copyVerifyLink(previewDoc.id)}
                className="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-xs font-bold transition-all flex items-center space-x-1"
              >
                {copiedId === previewDoc.id ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>Copy Verify Link</span>
              </button>
              <button
                onClick={() => window.print()}
                className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-black shadow-md transition-all flex items-center space-x-1"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Document</span>
              </button>
            </div>
          </div>

          {/* Official Printable Certificate Container */}
          <div className="p-8 sm:p-14 bg-white text-slate-900 rounded-3xl border-8 border-slate-900 shadow-2xl relative overflow-hidden space-y-8 font-serif">
            
            {/* Corner Decorative Borders */}
            <div className="absolute top-2 left-2 w-12 h-12 border-t-2 border-l-2 border-brand-600" />
            <div className="absolute top-2 right-2 w-12 h-12 border-t-2 border-r-2 border-brand-600" />
            <div className="absolute bottom-2 left-2 w-12 h-12 border-b-2 border-l-2 border-brand-600" />
            <div className="absolute bottom-2 right-2 w-12 h-12 border-b-2 border-r-2 border-brand-600" />

            {/* Header with Logo */}
            <div className="text-center space-y-2 border-b-2 border-slate-200 pb-6">
              <img src={brandLogo} alt="Yukti Software" className="h-14 w-auto mx-auto" />
              <h2 className="text-3xl font-black tracking-wider text-slate-900 uppercase font-sans">YUKTI SOFTWARE</h2>
              <p className="text-xs text-slate-500 font-sans tracking-widest uppercase">Center for Advanced Software Architecture & Enterprise Training</p>
              <p className="text-[11px] text-slate-400 font-sans">Greater Noida, National Capital Region (NCR), India</p>
            </div>

            {/* Certificate Title */}
            <div className="text-center space-y-3 pt-2">
              <span className="text-xs font-black tracking-widest text-brand-600 uppercase font-sans px-4 py-1 rounded-full bg-brand-50 border border-brand-200 inline-block">
                {previewDoc.type === 'internship_offer' ? 'Official Offer Letter' : 
                 previewDoc.type === 'mou' ? 'Institutional Partnership Agreement' : 
                 previewDoc.type === 'internship_certificate' ? 'Certificate of Industrial Internship' : 'Certificate of Excellence & Completion'}
              </span>

              <p className="text-xs italic text-slate-500 pt-2">This is to proudly certify that</p>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight underline decoration-brand-500 underline-offset-8">
                {previewDoc.studentName}
              </h1>
              {previewDoc.college && (
                <p className="text-sm font-sans font-bold text-slate-600 pt-1">
                  From {previewDoc.college}
                </p>
              )}
            </div>

            {/* Body Description */}
            <div className="text-center max-w-2xl mx-auto space-y-3 font-sans text-xs sm:text-sm text-slate-700 leading-relaxed pt-2">
              <p>
                has successfully completed the comprehensive professional program in{' '}
                <strong className="text-slate-950 font-black">{previewDoc.title}</strong>{' '}
                held during <strong className="text-slate-950">{previewDoc.duration || '2026'}</strong> and evaluated with{' '}
                <strong className="text-emerald-700 font-black">{previewDoc.grade || 'Grade A'}</strong>.
              </p>

              {previewDoc.skills && (
                <p className="text-xs text-slate-600">
                  <span className="font-bold text-slate-800">Mastered Core Competencies:</span> {previewDoc.skills}
                </p>
              )}

              {previewDoc.projectTitle && (
                <p className="text-xs text-slate-600">
                  <span className="font-bold text-slate-800">Live Capstone Architecture:</span> {previewDoc.projectTitle}
                </p>
              )}
            </div>

            {/* Certificate Footer & Signatures */}
            <div className="pt-8 border-t-2 border-slate-200 grid grid-cols-3 gap-4 items-center text-center font-sans">
              <div className="space-y-1">
                <p className="text-xs font-black text-slate-900">{previewDoc.instructor || 'Lead Technical Mentor'}</p>
                <p className="text-[10px] text-slate-500">Technical Mentor</p>
              </div>

              <div className="space-y-1">
                <div className="w-14 h-14 mx-auto rounded-xl border border-slate-300 bg-slate-50 flex items-center justify-center p-1">
                  <QrCode className="w-10 h-10 text-slate-800" />
                </div>
                <p className="text-[9px] font-mono font-bold text-slate-500">{previewDoc.id}</p>
                <p className="text-[8px] text-emerald-600 font-bold uppercase">Online Authenticated</p>
              </div>

              <div className="space-y-1">
                <p className="text-xs font-black text-slate-900">{previewDoc.authorizedSignatory || 'Director of Academics'}</p>
                <p className="text-[10px] text-slate-500">Authorized Signatory</p>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
