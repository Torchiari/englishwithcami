import type { FaqCategory } from "../types/faq";

export const faqData: FaqCategory[] = [
    {
        category: "Pagos y condiciones",
        items: [
            {
                q: "¿Cuándo se realizan los pagos?",
                a: "Los pagos se realizan del 1 al 10 de cada mes."
            },
            {
                q: "¿Qué pasa si decido dejar de asistir?",
                a: "Si decidís dejar de asistir, debés avisar con un mes de anticipación, ya que hay cupos limitados y lista de espera."
            }
        ]
    },
    {
        category: "Calendario y modalidad",
        items: [
            {
                q: "¿En qué meses hay clases?",
                a: "Las clases se dictan de marzo a diciembre y también durante el mes de febrero."
            },
            {
                q: "¿Puedo elegir cuántos meses y días asistir?",
                a: "Sí, cada persona puede elegir qué meses asistir y cuántas veces por semana."
            },
            {
                q: "¿Se dictan clases durante los feriados nacionales?",
                a: "No, durante los feriados nacionales no se dictan clases."
            },
            {
                q: "¿Cuál es la modalidad de las clases?",
                a: "Las clases son 100% online."
            }
        ]
    },
    {
        category: "Clases y materiales",
        items: [
            {
                q: "¿Qué tipos de clases ofrecen?",
                a: "Se ofrecen clases individuales o grupales. Podés asistir con un amigo o conocido siempre que tengan el mismo nivel. También pueden coordinar una entrevista para resolver dudas."
            },
            {
                q: "¿Qué materiales se utilizan en las clases?",
                a: "Se trabaja con libros, canciones, podcasts, TED Talks, páginas web, juegos y otros recursos."
            },
            {
                q: "¿Cómo se eligen los materiales de estudio?",
                a: "Los materiales se seleccionan según el nivel y los objetivos del alumno o del grupo."
            }
        ]
    },
    {
        category: "Plataforma y recursos",
        items: [
            {
                q: "¿Qué plataforma se utiliza para las clases?",
                a: "Las clases se realizan a través de Google Meet."
            },
            {
                q: "¿Dónde se registra el contenido trabajado en clase?",
                a: "Se utiliza Google Docs para registrar todo lo trabajado durante las clases."
            }
        ]
    },
    {
        category: "Reprogramaciones",
        items: [
            {
                q: "¿Se pueden reprogramar las clases?",
                a: "Sí, las clases pueden reprogramarse si avisás con 48 horas de anticipación y según la disponibilidad del docente."
            }
        ]
    },
    {
        category: "Clases extra de conversación",
        items: [
            {
                q: "¿Ofrecen clases extra de conversación?",
                a: "Sí, se ofrecen encuentros adicionales abonando un pago por hora para practicar conversación con otros alumnos."
            },
            {
                q: "¿Cómo se informa sobre las clases extra?",
                a: "La fecha, el horario y la temática se difunden previamente."
            },
            {
                q: "¿Se entrega material después de las clases de conversación?",
                a: "Sí, después de cada clase recibirás un booklet con el vocabulario trabajado."
            }
        ]
    },
    {
        category: "Beneficios y descuentos",
        items: [
            {
                q: "¿Hay beneficios por venir con un amigo?",
                a: "Sí, si venís con un amigo o amiga, ambos obtienen un 10% de descuento para siempre."
            },
            {
                q: "¿Hay descuentos por recomendar las clases?",
                a: "Sí, si recomendás las clases a alguien, ambos reciben un 10% de descuento durante 3 meses."
            }
        ]
    }
];
