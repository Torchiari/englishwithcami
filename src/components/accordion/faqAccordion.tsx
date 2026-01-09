import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqCategory } from "../../types/faq";

interface Props {
  data: FaqCategory[];
}

export default function FaqAccordion({ data }: Props) {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full columns-1 md:columns-2 gap-6">
      
      {data.map((section, categoryIndex) => (
        <div 
          key={categoryIndex} 
          className="break-inside-avoid mb-6 bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 overflow-hidden transition-all hover:shadow-xl hover:shadow-slate-200/60"
        >
          <div className="bg-slate-50/80 px-6 py-4 border-b border-slate-100">
            <h3 className="text-lg font-bold text-indigo-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              {section.category}
            </h3>
          </div>

          <div className="divide-y divide-slate-100">
            {section.items.map((item, itemIndex) => {
              const id = `${categoryIndex}-${itemIndex}`;
              const isOpen = openItem === id;

              return (
                <div key={id} className={`transition-colors duration-300 ${isOpen ? "bg-indigo-50/30" : "bg-white"}`}>
                  <button
                    onClick={() => toggleItem(id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left group"
                  >
                    <span 
                      className={`text-base font-medium transition-colors duration-200 ${
                        isOpen ? "text-indigo-700" : "text-slate-700 group-hover:text-indigo-600"
                      }`}
                    >
                      {item.q}
                    </span>

                    <span 
                      className={`shrink-0 text-slate-400 transition-transform duration-300 ease-in-out ${
                        isOpen ? "rotate-180 text-indigo-500" : "group-hover:text-indigo-400"
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed text-sm md:text-base">
                      {item.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}