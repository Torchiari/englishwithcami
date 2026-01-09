export interface FaqItem {
    q: string;
    a: string;
}

export interface FaqCategory {
    category: string;
    items: FaqItem[];
}
