export interface Category {
    id: number;
    name: string;
}

export interface Service {
    id?: number;
    title: string;
    description: string;
    category: number;
}