import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Search, 
  CheckCircle2, 
  AlertCircle, 
  Download, 
  Printer, 
  Award, 
  Calendar, 
  Clock, 
  Building2, 
  GraduationCap, 
  Code2, 
  Sparkles, 
  ExternalLink,
  QrCode,
  Share2,
  Check
} from 'lucide-react';
import { verifyCertificate } from '../services/certificateService';
import brandLogo from '../assets/yukti-logo.svg';

export default function VerificationPage({ onOpenConsultation }) {
  const [certIdInput, setCertIdInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [verificationResult, setVerificationResult] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Read ?id= or ?cert= query parameter on initial load
  useEffect(() => {
    document.title = "Online Certificate Verification | Yukti Software Greater Noida";
    
    try {
      const params = new URLSearchParams(window.location.search);
      const queryId = params.get('id') || params.get('cert') || params.get('certId');
      if (queryId) {
        setCertIdInput(queryId);
        handleSearch(queryId);
      }
    } catch (e) {
      console.warn('URL param parse error:', e);
    }
  }, []);

  const handleSearch = async (idToSearch) => {
    const targetId = (idToSearch || certIdInput).trim();
    if (!targetId) return;

    setIsLoading(true);
    setVerificationResult(null);
    setHasSearched(true);

    try {
      const result = await verifyCertificate(targetId);
      setVerificationResult(result);
    } catch (err) {
      console.error('Verification error:', err);
      setVerificationResult({ success: false, message: 'An error occurred while verifying certificate.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    if (verificationResult?.data?.id) {
      const verifyUrl = `${window.location.origin}/verify?id=${encodeURIComponent(verificationResult.data.id)}`;
      navigator.clipboard.writeText(verifyUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const certData = verificationResult?.data;

  return (
    <div className="min-h-[80vh] py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-10 animate-fadeIn">
      
      {/* Header Section */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider shadow-sm">
          <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>Official Document Verification Portal</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Verify Yukti Software <span className="text-brand-600 dark:text-brand-400">Credentials</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Verify the authenticity of training certificates, industrial internship credentials, and course accreditations issued by <strong>Yukti Software (Greater Noida)</strong>.
        </p>
      </div>

      {/* Search Bar Container */}
      <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-3">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2.5">
          <div className="relative flex-1 w-full">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={certIdInput}
              onChange={(e) => setCertIdInput(e.target.value)}
              placeholder="Enter Certificate ID (e.g. YUK-2026-FS-101)"
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all uppercase"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading || !certIdInput.trim()}
            className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-500 disabled:opacity-50 text-white font-extrabold text-sm shadow-lg hover:shadow-brand-500/25 transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            {isLoading ? (
              <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
            ) : (
              <>
                <ShieldCheck className="w-4 h-4" />
                <span>Verify Now</span>
              </>
            )}
          </button>
        </form>
      </div>

      {/* Verification Result Card */}
      {hasSearched && (
        <div className="max-w-3xl mx-auto animate-fadeIn">
          {isLoading ? (
            <div className="p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-950/60 border border-brand-500/20 flex items-center justify-center mx-auto text-brand-600 dark:text-brand-400 shadow-inner">
                <span className="animate-spin rounded-full h-7 w-7 border-3 border-brand-600 border-t-transparent dark:border-brand-400 dark:border-t-transparent" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                  Verifying Official Credential...
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
                  Querying official registry records for Certificate ID <span className="font-mono font-bold text-brand-600 dark:text-brand-400">"{certIdInput.trim().toUpperCase()}"</span>.
                </p>
              </div>
              <div className="flex items-center justify-center space-x-2 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 pt-1">
                <ShieldCheck className="w-4 h-4 animate-pulse" />
                <span>Secure Registry Authentication</span>
              </div>
            </div>
          ) : verificationResult?.success && certData ? (
            <div className="bg-white dark:bg-slate-900 rounded-3xl border-2 border-emerald-500/40 shadow-2xl overflow-hidden print:border-none print:shadow-none">
              
              {/* Authenticated Banner */}
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-wider">Officially Verified Credential</h3>
                    <p className="text-[11px] text-emerald-100">Authenticated by Yukti Software Central Registry</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 print:hidden">
                  <button
                    onClick={handleCopyLink}
                    className="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold transition-all flex items-center space-x-1"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-200" /> : <Share2 className="w-3.5 h-3.5" />}
                    <span>{copiedLink ? 'Copied!' : 'Share'}</span>
                  </button>
                  <button
                    onClick={handlePrint}
                    className="px-3 py-1.5 rounded-xl bg-white text-emerald-900 hover:bg-emerald-50 text-xs font-bold transition-all shadow-md flex items-center space-x-1"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Certificate</span>
                  </button>
                </div>
              </div>

              {/* Certificate Body */}
              <div className="p-6 sm:p-10 space-y-8 bg-gradient-to-b from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-950">
                
                {/* Brand Logo & Certificate Top ID */}
                <div className="flex flex-col sm:flex-row items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800 gap-4 text-center sm:text-left">
                  <div className="flex items-center space-x-3">
                    <img src={brandLogo} alt="Yukti Software" className="h-10 w-auto" />
                    <div>
                      <h4 className="text-base font-black text-slate-900 dark:text-white">YUKTI SOFTWARE</h4>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold">Tech Innovation Hub, Greater Noida, NCR, India</p>
                    </div>
                  </div>

                  <div className="text-center sm:text-right">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Certificate ID</span>
                    <span className="text-base font-black text-brand-600 dark:text-brand-400 font-mono tracking-wider">
                      {certData.id || certData.certId}
                    </span>
                  </div>
                </div>

                {/* Candidate Presentation */}
                <div className="text-center space-y-2">
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                    This is to verify and certify that
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                    {certData.studentName}
                  </h2>
                  {certData.college && (
                    <p className="text-xs font-semibold text-slate-600 dark:text-slate-300 flex items-center justify-center gap-1">
                      <GraduationCap className="w-4 h-4 text-brand-500 inline" />
                      <span>{certData.college}</span>
                    </p>
                  )}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto pt-1">
                    has successfully completed the comprehensive professional program in
                  </p>
                  <h3 className="text-lg sm:text-xl font-black text-brand-700 dark:text-brand-300 pt-1">
                    {certData.title}
                  </h3>
                </div>

                {/* Verification Metadata Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 p-4 rounded-2xl bg-slate-100/70 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 text-xs">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Duration</span>
                    <span className="font-extrabold text-slate-900 dark:text-white flex items-center space-x-1 mt-0.5">
                      <Clock className="w-3.5 h-3.5 text-brand-500" />
                      <span>{certData.duration || '6 Months'}</span>
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Issue Date</span>
                    <span className="font-extrabold text-slate-900 dark:text-white flex items-center space-x-1 mt-0.5">
                      <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{certData.issueDate || '2026-06-30'}</span>
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Performance</span>
                    <span className="font-extrabold text-emerald-600 dark:text-emerald-400 flex items-center space-x-1 mt-0.5">
                      <Award className="w-3.5 h-3.5" />
                      <span>{certData.grade || 'Grade A'}</span>
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Status</span>
                    <span className="font-extrabold text-emerald-600 dark:text-emerald-400 flex items-center space-x-1 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span className="capitalize">{certData.status || 'Active'}</span>
                    </span>
                  </div>
                </div>

                {/* Technical Skills & Capstone Project */}
                {(certData.skills || certData.projectTitle) && (
                  <div className="space-y-3 pt-2">
                    {certData.skills && (
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Verified Technical Stack:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {certData.skills.split(',').map((skill, i) => (
                            <span key={i} className="px-2.5 py-0.5 rounded-lg bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 font-bold text-[11px] border border-brand-200 dark:border-brand-800">
                              {skill.trim()}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {certData.projectTitle && (
                      <div className="text-xs text-slate-600 dark:text-slate-300 pt-1">
                        <span className="font-bold text-slate-900 dark:text-white">Live Capstone Project:</span> {certData.projectTitle}
                      </div>
                    )}
                  </div>
                )}

                {/* Signatures & Accreditation Footer */}
                <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="text-center sm:text-left space-y-1">
                    <p className="text-xs font-black text-slate-900 dark:text-white">{certData.instructor || 'Lead Technical Mentor'}</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold">Faculty & Technical Mentor</p>
                  </div>

                  <div className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-bold">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>{certData.verificationSeal || 'Verified by Yukti Software Greater Noida'}</span>
                  </div>

                  <div className="text-center sm:text-right space-y-1">
                    <p className="text-xs font-black text-slate-900 dark:text-white">{certData.authorizedSignatory || 'Director of Academics'}</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold">Authorized Signatory</p>
                  </div>
                </div>

              </div>

            </div>
          ) : (
            <div className="p-8 rounded-3xl bg-rose-50 dark:bg-rose-950/30 border-2 border-rose-500/30 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400 flex items-center justify-center mx-auto">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white">Certificate Not Found</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-md mx-auto">
                  {verificationResult?.message || `No record found matching the Certificate ID "${certIdInput}".`}
                </p>
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-md transition-all"
                >
                  Contact Admissions Helpline
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Corporate Verification Trust Info */}
      <div className="pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-5 text-center sm:text-left">
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
          <ShieldCheck className="w-5 h-5 text-brand-600" />
          <h4 className="text-xs font-bold text-slate-900 dark:text-white">Tamper-Proof Verification</h4>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">Direct query against official Firestore records ensures verified authenticity for HRs & colleges.</p>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
          <QrCode className="w-5 h-5 text-brand-600" />
          <h4 className="text-xs font-bold text-slate-900 dark:text-white">Instant QR Code Scan</h4>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">All issued certificates contain a high-resolution QR code linking directly to this portal.</p>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
          <Award className="w-5 h-5 text-brand-600" />
          <h4 className="text-xs font-bold text-slate-900 dark:text-white">Industry Accreditation</h4>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">Recognized by 20+ hiring partners and leading engineering universities across NCR.</p>
        </div>
      </div>

    </div>
  );
}
