export interface Movie {
    adult: boolean;
    backdrop_path: string;
    title: string;
    vote_count: number;
    original_language: OriginalLanguage;
    original_title: string;
    poster_path: string;
    id: number;
    video: boolean;
    vote_average: number;
    popularity: number;
    overview: string;
    release_date: Date;
    genre_ids: number[];
}

export enum OriginalLanguage {
    En = "en",
    Fr = "fr",
    Ja = "ja",
    Ko = "ko",
}