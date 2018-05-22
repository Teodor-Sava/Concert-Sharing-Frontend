export interface Band {
    id: number;
    name: string;
    country_id: number;
    user_id: number;
    no_members: number;
    founded_at: Date;
    country: Country;
    genre: Genre[];
    band_requests: string;
    short_description: string;
    long_description: string;
    price: number;
    image_url: string;
    created_at?: Date;
    updated_at?: Date;
}

export interface Concert {
    id: number;
    band_id: number;
    space_id: number;
    user_id: number;
    available_tickets: number;
    total_tickets: number;
    concert_start: Date;
    name: string;
    poster_url: string;
    band: Band;
    short_description: string;
    long_description: string;
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
