export function extractMoviesList(data: any): any[] {
  if (Array.isArray(data)) {
    return data;
  } else if (data && Array.isArray(data.movies)) {
    return data.movies;
  } else if (data && Array.isArray(data.results)) {
    return data.results;
  } else {
    throw new Error('Formato inesperado: não foi possível extrair os filmes');
  }
}
