export interface Imobile{
    id: number;
    name: string;
    brand: string;
    price: number;
    actualprice: number;
    image: string;
    isAvailable: boolean;
    rating: number;
    noOfItem: number;
    getDiscount: number;
    specifications: {
        ram: string;
        storage: string;
        display: string;
        camera: string;
        battery: string;
}
}


export   interface Ipost{
    title: string;
    description: string;
    coverImage: string;
}