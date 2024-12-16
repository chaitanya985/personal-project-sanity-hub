export interface simplifiedProduct {
    _id: string;
    price: number;
    title: string;
    slug: string;
    categoryName: string;
    imageUrl: string;
}

export interface allProducts {
    _id: string;
    title: string;
    price: number;
    slug: string;
    categoryName: string;
    images: any;
    description: any;
    id: string;
    
}
