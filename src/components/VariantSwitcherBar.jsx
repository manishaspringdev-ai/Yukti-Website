import React from 'react';
import { Sparkles } from 'lucide-react';
import { useCustomizer } from '../context/CustomizerContext';

export default function VariantSwitcherBar({ currentVariant, setVariant, variants, label = "Layout Variant", hide = false }) {
  const customizer = useCustomizer ? useCustomizer() : null;
  const isGlobalHidden = customizer?.hideVariantSwitchers;

  if (hide || isGlobalHidden) return null;

  return (
    <div className="flex flex-wrap items-center justify-center gap-1.5 mb-5 animate-fadeIn">
      <div className="inline-flex flex-wrap items-center justify-center space-x-1 p-1 rounded-2xl bg-slate-200/70 dark:bg-slate-800/90 border border-slate-300/60 dark:border-slate-700/80 shadow-sm backdrop-blur-md max-w-full">
        <div className="flex items-center space-x-1 px-2.5 py-1 text-[11px] font-bold text-slate-500 dark:text-slate-400">
          <Sparkles className="w-3 h-3 text-brand-500" />
          <span className="hidden sm:inline">{label}:</span>
        </div>
        {variants.map((v, idx) => {
          const isSelected = currentVariant === v.id;
          const isDocxRef = v.id.startsWith('v_docx');
          return (
            <button
              key={v.id}
              onClick={() => setVariant(v.id)}
              className={`px-2.5 py-1 rounded-xl text-[11px] sm:text-xs font-bold transition-all relative group my-0.5 ${
                isSelected
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-500/30 scale-105 ring-2 ring-brand-400/30'
                  : isDocxRef
                  ? 'bg-amber-500/10 text-amber-700 dark:text-amber-300 hover:bg-amber-500/20 border border-amber-500/30'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-700/60'
              }`}
              title={`${v.name} - ${v.desc}`}
            >
              <span>{isDocxRef ? '📄 Docx Ref' : `V${idx + 1}`}</span>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex flex-col items-center pointer-events-none z-50">
                <div className="bg-slate-900 text-white text-[10px] font-medium py-1.5 px-3 rounded-xl whitespace-nowrap shadow-2xl border border-slate-700">
                  <p className="font-bold text-brand-300">{v.name}</p>
                  <p className="text-slate-400 text-[9px]">{v.desc}</p>
                </div>
                <div className="w-2 h-2 bg-slate-900 rotate-45 -mt-1 border-r border-b border-slate-700"></div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
