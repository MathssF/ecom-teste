export class ApiTools {
  constructor(
    //
  ) {}

  async filterByGenres() {
    //
  }

  async noteByGenres() {
    //
  }

  async filterByYear() {
    //
  }

  async checkEach() {
    //
  }

  async validadeGenreRef(
    data: { chooseGenreRef: string | number },
    genres: { id: number, name: string }[],
  ) {
    const genreId = Number(data.chooseGenreRef);
    const generoPorId = genres.find(g => g.id === genreId);
    if (generoPorId) {
      return generoPorId;
    }
    const genreName = data.chooseGenreRef.toString();
    const generoPorNome = genres.find(g => g.name.toLowerCase() === data.chooseGenreRef.toString().toLowerCase());
    if (generoPorNome) {
      return generoPorNome;
    }
    return null;
  }
}