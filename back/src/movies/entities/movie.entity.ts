export class Movie {
  id: string;
  title: string;
  releaseDate: Date;
  genreId: string;
  languageId: string;

  constructor(id: string, title: string, releaseDate: Date, genreId: string, languageId: string) {
    this.id = id;
    this.title = title;
    this.releaseDate = releaseDate;
    this.genreId = genreId;
    this.languageId = languageId;
  }
}

export class MovieDetail {
  id: string;
  description: string;
  duration: number;
  director: string;
  producer: string;
  movieId: string;

  constructor(id: string, description: string, duration: number, director: string, producer: string, movieId: string) {
    this.id = id;
    this.description = description;
    this.duration = duration;
    this.director = director;
    this.producer = producer;
    this.movieId = movieId;
  }
}