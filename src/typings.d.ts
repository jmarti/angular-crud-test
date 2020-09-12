declare interface Category {
    id: number;
    name: string;
}

declare interface Service {
    id?: number;
    title: string;
    description: string;
    category: number;
}