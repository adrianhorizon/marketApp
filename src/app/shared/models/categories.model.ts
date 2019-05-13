export interface Categories {
    name: string;
    id: number;
    sublevels: CategoriesSub[];
}

export interface CategoriesSub {
    name: string;
    id: number;
    sublevels: [];
}
