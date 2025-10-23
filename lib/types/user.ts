export interface User {
    _id?: string;
    username?: string;
    first_name?: string;
    last_name?: string;
    phone_number?: string;
    email?: string;
    password?: string;
    profile_image?: string;
    background_image?: string;
    bio?: string;
    wins?: number;
    losses?: number;
    competitions?: number;
    score?: number;
    elo?: number;
    placements?: number[];
    streak?: number;
    podium_count?: number;
    rivals?: string[];
    top_rivals?: string[];
    tracks?: string[];
    top_tracks?: string[];
    admin?: boolean;
    resetPasswordToken?: string;
    resetPasswordExpires?: Date;
}