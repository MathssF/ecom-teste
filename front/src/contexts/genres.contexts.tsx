// 'use client';
// import { createContext, useContext, useState, ReactNode } from 'react';
// import { TopRatedMoviesAPI } from '../../../global/fetchTMDB/top.rated';
// import { ApiTools } from '../../../global/tools/api.tools';
// import { limitsData } from '../../../global/tables/interfaces';
// import { GenresType } from '../../../global/tools/api.interfaces';
// import { GenreContextType, GenreAnalysis } from './interfaces/genres.interface';
// import { Genres } from '../../../global/tables/seed.tables';

// const GenreContext = createContext<GenreContextType | undefined>(undefined);

// export const GenreProvider = ({ children }: { children: ReactNode }) => {
//   const [genres, setGenres] = useState<GenreAnalysis[] | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const fetchGenres = async (limitItems: number = 250) => {
//     setLoading(true);
//     setError(null);

//     try {
//       const topRatedApi = new TopRatedMoviesAPI();
//       const apiTools = new ApiTools();

//       const tops = await topRatedApi.getTopRatedMovies({
//         setLimitItems: true,
//         limitItems,
//         frontEndPage: false,
//       });

//       const formatted = tops.map((movie: any) => ({
//         ...movie,
//         votesCounts: movie.vote_count,
//         voteAverage: movie.vote_average,
//         genre_id: movie.genre_ids,
//       }));

//       const genreStats = apiTools.filterByGenres(formatted, null);
//       setGenres(genreStats); //
//     } catch (err: any) {
//       setError(err.message || 'Erro ao buscar filmes por gênero');
//       setGenres(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <GenreContext.Provider value={{ genres, loading, error, fetchGenres }}>
//       {children}
//     </GenreContext.Provider>
//   );
// };

// export const useGenres = () => {
//   const context = useContext(GenreContext);
//   if (context === undefined) {
//     throw new Error('useGenres deve ser usado dentro de um GenreProvider');
//   }
//   return context;
// };
