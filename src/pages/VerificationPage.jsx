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

// Authentic Greek Key Geometric Corner Ornament matching Official Yukti Certificate
function GreekCorner({ className = "w-10 h-10 sm:w-16 sm:h-16" }) {
  return (
    <svg 
      viewBox="0 0 54 54" 
      className={className} 
      fill="none" 
      stroke="#0c1b33" 
      strokeWidth="2.5" 
      strokeLinecap="square" 
      strokeLinejoin="miter"
    >
      <path d="M 2 54 L 2 2 L 54 2" />
      <path d="M 8 54 L 8 8 L 54 8" />
      <path d="M 14 54 L 14 20 L 34 20 L 34 14 L 54 14" />
      <path d="M 20 54 L 20 26 L 28 26 L 28 20 L 54 20" />
      <path d="M 8 26 L 14 26" />
      <path d="M 28 8 L 28 14" />
    </svg>
  );
}

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
            <div className="space-y-8">
              
              {/* Authenticated Action Bar */}
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-4 rounded-3xl flex flex-wrap items-center justify-between gap-3 shadow-lg print:hidden">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-wider">Officially Verified Credential</h3>
                    <p className="text-[11px] text-emerald-100">Authenticated by Yukti Software Central Registry</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleCopyLink}
                    className="px-3.5 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold transition-all flex items-center space-x-1 cursor-pointer"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-200" /> : <Share2 className="w-3.5 h-3.5" />}
                    <span>{copiedLink ? 'Copied Link!' : 'Share'}</span>
                  </button>
                  <button
                    onClick={handlePrint}
                    className="px-4 py-2 rounded-xl bg-white text-emerald-900 hover:bg-emerald-50 text-xs font-black transition-all shadow-md flex items-center space-x-1.5 cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Official PDF</span>
                  </button>
                </div>
              </div>

              {/* Print CSS Override */}
              <style>{`
                @media print {
                  body * {
                    visibility: hidden !important;
                  }
                  #official-certificate-print-area, #official-certificate-print-area * {
                    visibility: visible !important;
                  }
                  #official-certificate-print-area {
                    position: absolute !important;
                    left: 0 !important;
                    top: 0 !important;
                    width: 100% !important;
                    max-width: 100% !important;
                    margin: 0 !important;
                    padding: 30px !important;
                    border: 3px solid #0c1b33 !important;
                    box-shadow: none !important;
                    background: white !important;
                    color: #0c1b33 !important;
                    -webkit-print-color-adjust: exact !important;
                    print-color-adjust: exact !important;
                  }
                }
              `}</style>

              {/* ================================================================= */}
              {/* EXACT AUTHENTIC OFFICIAL CERTIFICATE CONTAINER (MATCHING SCAN PDF) */}
              {/* ================================================================= */}
              <div 
                id="official-certificate-print-area"
                className="w-full max-w-[850px] mx-auto bg-white text-[#0c1b33] p-6 sm:p-14 relative overflow-hidden shadow-2xl rounded-2xl border-[3px] border-[#0c1b33] font-serif select-none"
                style={{ minHeight: '1050px' }}
              >
                {/* Inner Thin Border */}
                <div className="absolute inset-3 border border-[#0c1b33] pointer-events-none" />

                {/* 4 Corner Geometric Greek Key Ornaments */}
                <div className="absolute top-4 left-4">
                  <GreekCorner className="w-10 h-10 sm:w-16 sm:h-16" />
                </div>
                <div className="absolute top-4 right-4 rotate-90">
                  <GreekCorner className="w-10 h-10 sm:w-16 sm:h-16" />
                </div>
                <div className="absolute bottom-4 right-4 rotate-180">
                  <GreekCorner className="w-10 h-10 sm:w-16 sm:h-16" />
                </div>
                <div className="absolute bottom-4 left-4 -rotate-90">
                  <GreekCorner className="w-10 h-10 sm:w-16 sm:h-16" />
                </div>

                {/* Subtle Repeating Watermark Background */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.035] select-none">
                  <div className="text-center transform -rotate-12 space-y-16">
                    <p className="text-6xl sm:text-7xl font-serif font-black tracking-widest text-slate-900 uppercase">YUKTI SOFTWARE</p>
                    <p className="text-6xl sm:text-7xl font-serif font-black tracking-widest text-slate-900 uppercase">YUKTI SOFTWARE</p>
                    <p className="text-6xl sm:text-7xl font-serif font-black tracking-widest text-slate-900 uppercase">YUKTI SOFTWARE</p>
                  </div>
                </div>

                {/* Main Certificate Content */}
                <div className="relative z-10 flex flex-col justify-between h-full space-y-8 text-center pt-2 pb-2">
                  
                  {/* 1. Official Yukti Software Logo */}
                  <div className="pt-2">
                    <img 
                      src={brandLogo} 
                      alt="Yukti Software" 
                      className="h-16 sm:h-20 w-auto mx-auto object-contain" 
                    />
                  </div>

                  {/* 2. Certificate Header */}
                  <div className="space-y-1.5 pt-4">
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-widest text-[#0c1b33] uppercase">
                      CERTIFICATE
                    </h1>
                    <p className="text-xs sm:text-sm font-serif font-bold tracking-[0.3em] text-[#0c1b33] uppercase">
                      OF COMPLETION
                    </p>
                  </div>

                  {/* 3. Presentation Line */}
                  <div className="pt-2">
                    <p className="text-sm sm:text-base font-serif italic text-slate-800">
                      This Certificate is Awarded to
                    </p>
                  </div>

                  {/* 4. Recipient Name */}
                  <div className="py-2">
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-black tracking-widest text-[#0c1b33] uppercase italic">
                      {certData.studentName || 'CANDIDATE NAME'}
                    </h2>
                    {certData.college && (
                      <p className="text-xs font-sans font-semibold text-slate-600 mt-1">
                        {certData.college}
                      </p>
                    )}
                  </div>

                  {/* 5. Body Text Statement */}
                  <div className="max-w-2xl mx-auto px-4 sm:px-6">
                    <p className="text-xs sm:text-[13.5px] font-serif text-slate-800 leading-relaxed text-center sm:text-justify font-medium">
                      {certData.description || (
                        `This is to certify that ${certData.studentName || 'the candidate'} has successfully completed the internship program at Yukti Software as an ${certData.title || 'Associate Developer Intern'} from ${certData.startDate || '15th of June 2026'} to ${certData.endDate || '13th of July 2026'}. During this period, she demonstrated dedication, professionalism, and a strong willingness to learn. He contributed to various projects and tasks, showing commendable growth and collaboration.`
                      )}
                    </p>
                  </div>

                  {/* 6. Signatories & Real Verification QR Code Section */}
                  <div className="pt-6 sm:pt-12 grid grid-cols-3 gap-2 sm:gap-4 items-end px-2 sm:px-6">
                    
                    {/* Left: Founder & CEO */}
                    <div className="text-center space-y-1">
                      <div className="h-14 sm:h-16 flex items-end justify-center mb-1">
                        {(certData.ceoSignatureUrl || (typeof window !== 'undefined' && localStorage.getItem('yukti_global_ceo_sign'))) ? (
                          <img 
                            src={certData.ceoSignatureUrl || localStorage.getItem('yukti_global_ceo_sign')} 
                            alt="CEO Signature" 
                            className="max-h-14 sm:max-h-16 w-auto object-contain filter drop-shadow-xs" 
                          />
                        ) : (
                          <span className="font-serif italic text-xs sm:text-sm text-slate-400">Signed</span>
                        )}
                      </div>
                      <div className="w-32 sm:w-44 border-t border-[#0c1b33] mx-auto pt-1">
                        <p className="text-[10px] sm:text-xs font-serif font-black tracking-wider text-[#0c1b33] uppercase">
                          {certData.ceoName || certData.authorizedSignatory || 'MANISHA KUMARI'}
                        </p>
                        <p className="text-[9px] sm:text-[11px] font-sans text-slate-600">
                          {certData.ceoTitle || 'Founder & CEO'}
                        </p>
                      </div>
                    </div>

                    {/* Center: Real Scannable Verification QR Code */}
                    <div className="text-center space-y-1">
                      <div className="inline-block p-1 bg-white border border-slate-300 rounded-lg shadow-xs">
                        <img
                          src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent('https://yuktisoftware.com/verify?id=' + (certData.id || certData.certId))}`}
                          alt="Verify QR Code"
                          className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                        />
                      </div>
                      <p className="text-[8px] sm:text-[9px] font-sans font-bold text-slate-500 uppercase tracking-wider">
                        Scan to Verify
                      </p>
                    </div>

                    {/* Right: CTO */}
                    <div className="text-center space-y-1">
                      <div className="h-14 sm:h-16 flex items-end justify-center mb-1">
                        {(certData.ctoSignatureUrl || (typeof window !== 'undefined' && localStorage.getItem('yukti_global_cto_sign'))) ? (
                          <img 
                            src={certData.ctoSignatureUrl || localStorage.getItem('yukti_global_cto_sign')} 
                            alt="CTO Signature" 
                            className="max-h-14 sm:max-h-16 w-auto object-contain filter drop-shadow-xs" 
                          />
                        ) : (
                          <span className="font-serif italic text-xs sm:text-sm text-slate-400">Signed</span>
                        )}
                      </div>
                      <div className="w-32 sm:w-44 border-t border-[#0c1b33] mx-auto pt-1">
                        <p className="text-[10px] sm:text-xs font-serif font-black tracking-wider text-[#0c1b33] uppercase">
                          {certData.ctoName || certData.instructor || 'MITHILESH KUMAR'}
                        </p>
                        <p className="text-[9px] sm:text-[11px] font-sans text-slate-600">
                          {certData.ctoTitle || 'CTO'}
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* 7. Bottom Metadata Strip */}
                  <div className="pt-6 sm:pt-8 flex items-center justify-between text-[10px] sm:text-[11px] font-sans px-2 sm:px-6 text-slate-700">
                    <span className="font-medium">
                      Issued on : <strong className="text-[#0c1b33] font-bold">{certData.issueDate || '14-07-2026'}</strong>
                    </span>
                    <span className="font-medium">
                      Certificate Id : <strong className="font-mono text-[#0c1b33] font-bold">{certData.id || certData.certId}</strong>
                    </span>
                  </div>

                </div>

              </div>

              {/* Supporting Credential Registry Summary Card */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-5 shadow-lg print:hidden">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">
                      Verified Registry Summary
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                    Active & Authenticated
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Candidate</span>
                    <span className="font-black text-slate-900 dark:text-white mt-0.5 block">{certData.studentName}</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Duration</span>
                    <span className="font-black text-slate-900 dark:text-white mt-0.5 block">{certData.duration || '1 Month'}</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Performance</span>
                    <span className="font-black text-emerald-600 dark:text-emerald-400 mt-0.5 block">{certData.grade || 'Commendable'}</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Serial ID</span>
                    <span className="font-mono font-bold text-brand-600 dark:text-brand-400 mt-0.5 block truncate">{certData.id || certData.certId}</span>
                  </div>
                </div>

                {certData.skills && (
                  <div className="pt-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                      Verified Technical Skills
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {certData.skills.split(',').map((skill, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-lg bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 font-bold text-xs border border-brand-200 dark:border-brand-800">
                          {skill.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
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
