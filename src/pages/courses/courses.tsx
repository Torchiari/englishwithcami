import React from 'react';
import {
  MessageCircle, Globe, Briefcase, GraduationCap,
  Video, BookOpen, Clock, CalendarCheck,
  Users, Heart, Sparkles, CheckCircle2
} from 'lucide-react';

const Courses: React.FC = () => {
  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20 pt-24 md:pt-32">
      <div className="container mx-auto px-6 max-w-6xl mb-16">
        <div className="text-center space-y-4 mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            ¿Qué estás buscando <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">hoy?</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Mis clases se ajustan a tu nivel actual y a tus objetivos personales. Aprendé inglés sin estrés, a tu propio ritmo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <ObjectiveCard icon={<Briefcase />} text="¿Entrevista laboral o mejor puesto?" />
          <ObjectiveCard icon={<Globe />} text="¿Viajar y comunicarte con confianza?" />
          <ObjectiveCard icon={<MessageCircle />} text="¿Fluidez real al hablar?" />
          <ObjectiveCard icon={<GraduationCap />} text="¿Inglés técnico o universitario?" />
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-indigo-50 text-center max-w-4xl mx-auto">
          <p className="text-xl text-slate-700 font-medium leading-relaxed">
            Ofrezco <span className="text-indigo-600 font-bold">cursos mensuales</span> o <span className="text-purple-600 font-bold">clases particulares</span> para objetivos específicos: inglés de negocios, viajes, presentaciones laborales o simplemente por hobby.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-6 max-w-5xl mb-16">
        <div className="relative bg-linear-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 md:p-12 text-white overflow-hidden shadow-2xl shadow-indigo-200">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-sm font-semibold">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span>Novedad Mensual</span>
              </div>
              <h2 className="text-3xl font-bold">Grupos de Speaking</h2>
              <p className="text-indigo-100 text-lg leading-relaxed">
                Además de los cursos, todos los meses organizo encuentros grupales para perder el miedo y practicar interacción real sobre una temática específica.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>Se abonan aparte.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>Incluyen booklet digital con lo trabajado.</span>
                </li>
              </ul>
              <div className="pt-2">
                <a
                  href="https://instagram.com/englishwithcami.d"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-indigo-700 px-6 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors shadow-lg"
                >
                  Ver fechas en Instagram
                </a>
              </div>
            </div>
            <div className="hidden md:block opacity-20 transform rotate-12">
              <Users size={200} />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Metodología Flexible y Divertida</h2>
          <p className="text-slate-600">Aprendizaje diseñado para tu vida real.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureBox
            icon={<Video className="w-6 h-6 text-blue-500" />}
            title="100% Online"
            desc="Clases cómodas a través de Google Meet."
          />
          <FeatureBox
            icon={<Heart className="w-6 h-6 text-pink-500" />}
            title="Sin Presiones"
            desc="Sin tareas obligatorias. Acceso a Classroom con actividades extra opcionales."
          />
          <FeatureBox
            icon={<BookOpen className="w-6 h-6 text-indigo-500" />}
            title="Materiales Variados"
            desc="Libros, canciones, podcasts, TED Talks y juegos. Todo en tu Google Doc."
          />
          <FeatureBox
            icon={<MessageCircle className="w-6 h-6 text-green-500" />}
            title="Feedback Constante"
            desc="Para que avances con seguridad (Sin certificaciones oficiales)."
          />
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <CalendarCheck className="w-6 h-6 text-indigo-600" />
              Modalidad y Pagos
            </h3>
            <ul className="space-y-4">
              <InfoItem label="Calendario" value="Clases de marzo a diciembre (febrero opcional). Feriados nacionales no se dictan clases." />
              <InfoItem label="Flexibilidad" value="Vos elegís cuántos meses asistir y la frecuencia semanal." />
              <InfoItem label="Pagos" value="Del 1 al 10 de cada mes." />
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Clock className="w-6 h-6 text-purple-600" />
              Condiciones
            </h3>
            <ul className="space-y-4">
              <InfoItem label="Reprogramar" value="Avisando con 48hs de anticipación (sujeto a disponibilidad web)." />
              <InfoItem label="Bajas" value="Avisar con un mes de anticipación para liberar cupo a la lista de espera." />
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl mb-20">
        <h2 className="text-2xl font-bold text-center text-slate-900 mb-8 flex items-center justify-center gap-2">
          <Sparkles className="w-6 h-6 text-yellow-500 fill-yellow-500" />
          Beneficios Exclusivos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BenefitCard
            title="Plan Amigo"
            desc="Si venís con alguien del mismo nivel, ambos tienen 10% de descuento para siempre."
            tag="10% OFF Forever"
          />
          <BenefitCard
            title="Referidos"
            desc="Si recomendás las clases, ambos reciben 10% de descuento por 3 meses."
            tag="10% OFF x 3 Meses"
          />
        </div>
      </div>

      <div className="text-center px-6">
        <a
          href="https://wa.me/5492983693168"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white text-lg font-bold px-10 py-5 rounded-full shadow-xl shadow-green-200 transition-transform transform hover:-translate-y-1 active:scale-95"
        >
          <MessageCircle className="w-6 h-6" />
          Escribime para reservar tu lugar
        </a>
      </div>

    </div>
  );
};


const ObjectiveCard: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow group">
    <div className="p-3 bg-indigo-50 text-indigo-600 rounded-full group-hover:bg-indigo-600 group-hover:text-white transition-colors">
      {React.cloneElement(icon as React.ReactElement, { className: "w-6 h-6" } as any)}
    </div>
    <p className="font-semibold text-slate-700">{text}</p>
  </div>
);

const FeatureBox: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-indigo-100 transition-colors">
    <div className="mb-4 bg-slate-50 w-fit p-3 rounded-xl">{icon}</div>
    <h3 className="font-bold text-slate-800 mb-2">{title}</h3>
    <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

const InfoItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <li className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 text-sm md:text-base">
    <span className="font-bold text-slate-700 min-w-[120px]">{label}:</span>
    <span className="text-slate-600">{value}</span>
  </li>
);

const BenefitCard: React.FC<{ title: string; desc: string; tag: string }> = ({ title, desc, tag }) => (
  <div className="bg-white p-6 rounded-2xl border-2 border-dashed border-indigo-200 relative overflow-hidden flex flex-col justify-center text-center hover:border-indigo-400 transition-colors">
    <div className="absolute top-0 right-0 bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-bl-lg">
      {tag}
    </div>
    <h3 className="text-xl font-bold text-indigo-900 mb-2">{title}</h3>
    <p className="text-slate-600">{desc}</p>
  </div>
);

export default Courses;