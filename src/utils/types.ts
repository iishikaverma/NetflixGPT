export type VideoBackgroundProps = {
    movieId: number;
};

type MovieProps = {
    id: number;
    poster_path: string | null;
};

export type MovieListProps = {
    title: string;
    movies: MovieProps[] | null;
};

export type MovieCardProps = {
    posterPath: string | null;
};