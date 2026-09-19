import React, { useState, useRef, useEffect } from 'react';
import { getRoadmapLogo } from './TechLogos';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const steps = [
  {
    stepNumber: "01",
    title: "Requirement Analysis",
    description: "Our software experts will sit with you to understand your requirements and your business goals. We will also evaluate your profile during this initial consultation, which will help us configure customizations as required.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    imageCaption: "Scoping & Requirement Analysis Workshop"
  },
  {
    stepNumber: "02",
    title: "Strategy & Planning",
    description: "After the initial consultation, we move to the planning phase, where we use the insights and the intel we gathered during the consultation to design highly effective and cost-efficient strategies.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    imageCaption: "Architecture Strategy & Sprint Planning"
  },
  {
    stepNumber: "03",
    title: "UI/UX Design",
    description: "We will create intuitive wireframes, prototypes, and user-friendly interfaces all according to what’s right for your business and what fits best. You will also receive the prototypes for review and feedback.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
    imageCaption: "Wireframes, Design Tokens & Figma Prototypes"
  },
  {
    stepNumber: "04",
    title: "Software Development",
    description: "Now comes the most important part: based on the finalized UI and your requirements, we will build scalable, secure, and high-performance software solutions.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    imageCaption: "Clean Codebase & Scalable Full-Stack Engineering"
  },
  {
    stepNumber: "05",
    title: "Testing & Quality Assurance",
    description: "In order to ensure reliability and long-term solutions, we conduct testing through rigorous methods. Automated tools and software are used to reduce time and ensure maximum accuracy.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    imageCaption: "Rigorous QA Verification & Automated Testing"
  },
  {
    stepNumber: "06",
    title: "Deployment & Go-Live",
    description: "After strict testing and fixing the bugs, your project is deployed. Our deployment services are designed for maximum security and minimum errors to ensure that neither your time nor money is wasted.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    imageCaption: "Production Cloud Deployment & Zero-Downtime Release"
  },
  {
    stepNumber: "07",
    title: "Maintenance & Support",
    description: "Our services do not end with the software deployment. At Yukti Software, we cover post-deployment maintenance and offer continuous support to ensure the software solutions are working as intended.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    imageCaption: "Continuous Maintenance & 24/7 Dedicated Support"
  }
];

export default function Roadmap() {
  const [activeStep, setActiveStep] = useState(0);
  const current = steps[activeStep];
  const scrollContainerRef = useRef(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    const activeEl = stepRefs.current[activeStep];
    if (container && activeEl) {
      const scrollLeft = activeEl.offsetLeft - (container.clientWidth / 2) + (activeEl.clientWidth / 2);
      container.scrollTo({
        left: Math.max(0, scrollLeft),
        behavior: 'smooth'
      });
    }
  }, [activeStep]);

  return (
    <section id="roadmap" className="pt-2 sm:pt-4 pb-8 sm:pb-12 relative overflow-hidden bg-slate-50/70 dark:bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-7">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
            Software Solution Delivery Roadmap
          </h3>
        </div>

        {/* Interactive Top Timeline Stepper */}
        <div ref={scrollContainerRef} className="overflow-x-auto pb-2 scrollbar-none no-scrollbar scroll-smooth">
          <div className="flex items-center justify-between min-w-[700px] relative px-4 py-1.5">
            {/* Horizontal Timeline Connector Bar */}
            <div className="absolute top-[28px] sm:top-[30px] left-10 right-10 h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0 rounded-full"></div>
            
            {steps.map((step, idx) => {
              const isSelected = activeStep === idx;
              const isCompleted = idx < activeStep;
              return (
                <button
                  key={idx}
                  ref={(el) => (stepRefs.current[idx] = el)}
                  onClick={() => setActiveStep(idx)}
                  className="relative z-10 flex flex-col items-center group focus:outline-none cursor-pointer"
                >
                  <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center p-2 transition-all duration-300 ${
                    isSelected
                      ? 'bg-white dark:bg-slate-900 shadow-lg shadow-brand-500/20 scale-110 ring-4 ring-brand-500/20 border-2 border-brand-500'
                      : isCompleted
                      ? 'bg-white dark:bg-slate-900 border-2 border-emerald-500 shadow-sm'
                      : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-brand-400'
                  }`}>
                    {getRoadmapLogo(step.stepNumber, "w-5 h-5 sm:w-6 sm:h-6")}
                  </div>
                  <span className={`text-[11px] sm:text-xs font-bold mt-2 transition-colors text-center ${
                    isSelected ? 'text-brand-600 dark:text-brand-400 font-extrabold' : 'text-slate-600 dark:text-slate-400'
                  }`}>
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed 2-Column Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200/80 dark:border-slate-800 p-5 sm:p-7 lg:p-8 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Side: Stage Image Showcase */}
            <div className="lg:col-span-5 relative rounded-xl sm:rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-800 h-52 sm:h-64 lg:h-72 group">
              <img 
                src={current.image} 
                alt={current.title} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="px-2.5 py-0.5 rounded-full bg-brand-600 text-white text-[10px] sm:text-xs font-bold shadow">
                  Stage {current.stepNumber} of 07
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-200 mt-1 drop-shadow line-clamp-1">
                  {current.imageCaption}
                </p>
              </div>
            </div>

            {/* Right Side: Step Title, Description & Controls */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-0.5 rounded-lg bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 font-mono font-bold text-xs border border-brand-200/60 dark:border-brand-800/60">
                    Step {current.stepNumber}
                  </span>
                  <span className="text-brand-500 font-bold text-sm">↬</span>
                </div>

                <h4 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  {current.title}
                </h4>

                <p className="text-xs sm:text-sm lg:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* Stage Progress & Step Switchers */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center space-x-1.5">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                        activeStep === i 
                          ? 'w-7 bg-brand-600 dark:bg-brand-400' 
                          : 'w-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600'
                      }`}
                      aria-label={`Go to Step ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center space-x-2.5 w-full sm:w-auto justify-between sm:justify-end">
                  <button 
                    disabled={activeStep === 0} 
                    onClick={() => setActiveStep(prev => Math.max(0, prev - 1))} 
                    className="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 disabled:opacity-40 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center space-x-1.5 cursor-pointer disabled:cursor-not-allowed shadow-sm"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Previous</span>
                  </button>
                  <button 
                    disabled={activeStep === steps.length - 1} 
                    onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))} 
                    className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-brand-600 hover:bg-brand-700 disabled:opacity-40 transition-colors flex items-center space-x-1.5 cursor-pointer disabled:cursor-not-allowed shadow-md"
                  >
                    <span>Next</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
