import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, MessageCircle, Briefcase, Globe, User, 
  CalendarDays, HelpCircle, Quote, Star 
} from 'lucide-react';
import FaqAccordion from '../../components/accordion/faqAccordion';
import { faqData } from '../../data/faqData';
import { reviewsData, type Review } from '../../data/reviewsData';
import camiFoto from '../../assets/foto-cami.jpeg'; 

const Hero: React.FC = () => {
  return (
    <div className="w-full bg-white">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          display: flex;
          width: max-content;
          animation: scroll 40s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section className="relative w-full min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center overflow-hidden px-6 py-12 md:py-20">
        
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 mix-blend-multiply" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 mix-blend-multiply" />

        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-4">
                <GraduationCap className="w-4 h-4" />
                <span>Graduada en 2024 - Prof. San José de Tandil</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Hola, soy <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">Cami</span>.
              </h1>
              <h2 className="text-xl md:text-2xl text-slate-600 mt-2 font-medium">
                Profesora de inglés personalizada
              </h2>
            </div>

            <div className="relative group lg:hidden mt-8">
              <div className="absolute inset-0 bg-linear-to-tr from-indigo-600 to-purple-600 rounded-[2rem] rotate-3 opacity-20" />
              <div className="relative bg-white p-2 rounded-[2rem] shadow-xl overflow-hidden aspect-[4/5]">
                <img src={camiFoto} alt="Cami" className="w-full h-full object-cover rounded-[1.8rem]" />
              </div>
            </div>

            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
              <p>
                Me dedico a dar clases personalizadas porque sé lo difícil que puede ser aprender de manera tradicional y animarse a hablar.
              </p>
              <p className="border-l-4 border-indigo-500 pl-4 italic text-slate-600">
                "En mis clases vas a encontrar un espacio pensado para tus objetivos, donde vas a conversar desde el primer día."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FeatureCard icon={<Globe className="w-5 h-5 text-blue-500" />} title="Viajar" desc="Comunicate con confianza." />
              <FeatureCard icon={<Briefcase className="w-5 h-5 text-purple-500" />} title="Trabajar" desc="Potenciá tu carrera." />
              <FeatureCard icon={<MessageCircle className="w-5 h-5 text-green-500" />} title="Socializar" desc="Sin barreras." />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/calendar" className="flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-200 transform hover:-translate-y-1">
                <CalendarDays className="w-5 h-5" />
                Agendar una clase
              </Link>
              <Link to="/courses" className="flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 font-semibold border border-slate-200 rounded-xl transition-all hover:shadow-md">
                <User className="w-5 h-5" />
                Ver mis cursos
              </Link>
            </div>
          </div>

          <div className="relative group hidden lg:block">
            <div className="absolute inset-0 bg-linear-to-tr from-indigo-600 to-purple-600 rounded-[2rem] rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-500" />
            <div className="relative bg-white p-2 rounded-[2rem] shadow-xl overflow-hidden aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
              <img src={camiFoto} alt="Cami" className="w-full h-full object-cover rounded-[1.8rem]" />
            </div>
          </div>

        </div>
      </section>

      <section className="py-16 bg-white border-y border-slate-100 relative overflow-hidden">
        
        <div className="container mx-auto px-6 mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center justify-center gap-2">
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                Lo que dicen mis alumnos
            </h2>
        </div>

        <div className="relative w-full max-w-[100vw] overflow-hidden">
             <div className="absolute top-0 left-0 h-full w-20 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
             <div className="absolute top-0 right-0 h-full w-20 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />
             
             <div className="animate-infinite-scroll flex gap-6 px-6">
                {[...reviewsData, ...reviewsData].map((item, index) => (
                    <ReviewCard key={`${item.id}-${index}`} data={item} />
                ))}
             </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-20 bg-linear-to-b from-white to-transparent" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-full text-indigo-600 mb-4">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Todo lo que necesitás saber sobre la modalidad, pagos y materiales.
            </p>
          </div>
          <FaqAccordion data={faqData} />
          
        </div>
      </section>

    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
    <div className="mb-2 bg-slate-50 w-fit p-2 rounded-lg">{icon}</div>
    <h3 className="font-bold text-slate-800 text-sm mb-1">{title}</h3>
    <p className="text-xs text-slate-500 leading-snug">{desc}</p>
  </div>
);

const ReviewCard: React.FC<{ data: Review }> = ({ data }) => (
  <div className="w-[300px] md:w-[350px] shrink-0 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow select-none flex flex-col justify-between">
    <div>
      <div className="flex justify-between items-start mb-3">
        <Quote className="w-6 h-6 text-indigo-200 fill-indigo-100" />
      </div>
      <p className="text-slate-700 text-base font-medium leading-relaxed mb-4 line-clamp-4">
        "{data.text}"
      </p>
    </div>

    <div className="flex items-center gap-3 border-t border-slate-50 pt-3 mt-auto">
      <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-sm">
        {data.name.charAt(0)}
      </div>
      <div>
        <p className="text-slate-900 font-bold text-base">{data.name}</p>
        <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide">{data.age} años</p>
      </div>
    </div>
  </div>
);

export default Hero;