'use client';

import { useContext, useState } from 'react';
import { TopRatedContext } from '../contexts/top-list.context';

export const TopsRated = () => {
  const context = useContext(TopRatedContext);
  const [inputYear, setInputYear] = useState<number | ''>('');

  if (!context) {
    return <div>Contexto não encontrado.</div>;
  }

  const {
    movies,
    moviesByYear,
    loading,
    error,
    year,
    setYear,
    fetchTopRated,
  } = context;

  const currentYear = new Date().getFullYear();

  const handleSetYear = () => {
    if (inputYear === '') {
      setYear(null);
      return;
    }

    if (inputYear >= 1800 && inputYear <= currentYear) {
      setYear(inputYear);
    } else {
      alert(`Digite um ano entre 1800 e ${currentYear}`);
    }
  };

  const handleClearYear = () => {
    setInputYear('');
    setYear(null);
  };

  const listToRender = year ? moviesByYear : movies;

  return (
    <div>
      <h2>Filmes Mais Bem Avaliados</h2>

      <div style={{ marginBottom: '16px' }}>
        <input
          type="number"
          placeholder="Filtrar por ano"
          value={inputYear}
          onChange={(e) => {
            const value = e.target.value;
            if (value === '') {
              setInputYear('');
            } else {
              setInputYear(Number(value));
            }
          }}
        />
        <button onClick={handleSetYear}>Filtrar</button>
        <button onClick={handleClearYear} disabled={year === null}>
          Limpar Filtro
        </button>
      </div>

      {loading && <p>Carregando filmes...</p>}
      {error && <p style={{ color: 'red' }}>Erro: {error}</p>}

      {!loading && !error && (
        <ul>
          {listToRender.length === 0 ? (
            <li>Nenhum filme encontrado.</li>
          ) : (
            listToRender.map((movie) => (
              <li key={movie.id}>
                {movie.id} - {movie.title} | Nota: {movie.vote_average}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};
