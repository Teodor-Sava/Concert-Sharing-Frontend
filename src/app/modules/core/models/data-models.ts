export interface Band {
    id: number;
    name: string;
    country_id: number;
    no_members: number;
    founded_at: Date;
    country: Country;
    genre: Genre;
    band_requests: string;
    short_description: string;
    long_description: string;
    price: number;
    image_url: string;
    created_at?: Date;
    updated_at?: Date;
}

export interface Country {
    id: number;
    name: string;
    created_at: Date;
    updated_at: Date;
}

export interface Genre {
    id: number;
    type: string;
    created_at: Date;
    updated_at: Date;
}
