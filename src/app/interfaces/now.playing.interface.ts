import { Movie } from './movie.interface';

export interface NowPlayingInterface {
    total_pages: number;
    results: Movie[];
    dates: Dates;
    page: number;
    total_results: number;
}

export interface Dates {
    maximum: Date;
    minimum: Date;
}
