export interface Review {
    id: number;
    name: string;
    age: string;
    text: string;
}

export const reviewsData: Review[] = [
    {
        id: 1,
        name: "Agustin",
        age: "30",
        text: "Me gusta la modalidad, salirse del aprendizaje tradicional y que se haga algo más naturalizado hace más fácil el clase a clase.",
    },
    {
        id: 2,
        name: "Monica",
        age: "62",
        text: "Comencé sin saber ni una palabra. Hoy trato de hablar y leer. Es un desafío para mí con una gran enseñante.",
    },
    {
        id: 3,
        name: "Nicolas",
        age: "27",
        text: "La planificación y la dinámica de las clases es excelente, adaptándolas a las necesidades de cada uno.",
    },
    {
        id: 4,
        name: "Silvia",
        age: "60",
        text: "Mi interés por el idioma sigue intacto gracias a lo dinámicas que son las clases. Me animé a hablar y el tiempo se pasa volando. ¡Muy recomendado!",
    },
    {
        id: 5,
        name: "Laura",
        age: "24",
        text: "Necesitaba inglés para viajar y en pocos meses logré la confianza que me faltaba. ¡Súper recomendado!",
    }
];