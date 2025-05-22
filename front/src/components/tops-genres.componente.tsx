'use client';

import React from 'react';
import { useGenre } from '../contexts/tops-by-genres.context';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const colors = [
  '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
  '#FF9F40', '#8DD3C7', '#FFFFB3', '#BEBADA', '#FB8072',
  '#80B1D3', '#FDB462', '#B3DE69', '#FCCDE5', '#D9D9D9',
  '#BC80BD', '#CCEBC5', '#FFED6F', '#FFB6C1', '#87CEFA'
];


const GenreDashboard: React.FC = () => {
  const {
    genres,
    genreSelected,
    infoMode,
    loading,
    error,
    fetchGenres,
  } = useGenre();

  React.useEffect(() => {
    if (!genres) {
      fetchGenres();
    }
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;
  if (!genres) return <div>Sem dados.</div>;

  const renderCharts = () => {
    if (!genreSelected) {
      // 📊 Caso NENHUM gênero selecionado — gráficos gerais

      const labels = genres.map(g => g.name);
      const movieCounts = genres.map(g => g.movies.length);
      const avgRatings = genres.map(g => g.moviesRatingAverage);

      return (
        <div style={{ display: 'flex', gap: '40px' }}>
          <div style={{ width: '45%' }}>
            <h3>Quantidade de filmes por gênero</h3>
            <Pie
              data={{
                labels,
                datasets: [
                  {
                    label: 'Filmes',
                    data: movieCounts,
                    backgroundColor: [
                      '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
                      '#FF9F40', '#8DD3C7', '#FFFFB3', '#BEBADA', '#FB8072',
                      '#80B1D3', '#FDB462', '#B3DE69', '#FCCDE5', '#D9D9D9',
                      '#BC80BD', '#CCEBC5', '#FFED6F', '#FFB6C1', '#87CEFA',
                    ],
                  },
                ],
              }}
            />
          </div>

          <div style={{ width: '50%' }}>
            <h3>Média de notas por gênero</h3>
            <Bar
              data={{
                labels,
                datasets: [
                  {
                    label: 'Nota Média',
                    data: avgRatings,
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                  },
                ],
              }}
              options={{
                scales: {
                  y: {
                    min: 0,
                    max: 10,
                  },
                },
              }}
            />
          </div>
        </div>
      );
    } else {
      // 📊 Caso COM gênero selecionado — gráfico individual

      return (
        <div style={{ width: '50%' }}>
          <h3>Média de nota do gênero: {genreSelected.name}</h3>
          <Bar
            data={{
              labels: ['Nota Média'],
              datasets: [
                {
                  label: genreSelected.name,
                  data: [genreSelected.moviesRatingAverage],
                  backgroundColor: 'rgba(153, 102, 255, 0.6)',
                },
              ],
            }}
            options={{
              scales: {
                y: {
                  min: 0,
                  max: 10,
                },
              },
            }}
          />
        </div>
      );
    }
  };

  const renderLists = () => {
    if (!genreSelected) {
      // 📄 Caso NENHUM gênero selecionado — listar por gênero
      return (
        <div>
          {genres.map(g => (
            <div key={g.id}>
              <h3>{g.name}</h3>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Nota Média</th>
                  </tr>
                </thead>
                <tbody>
                  {g.movies.map(m => (
                    <tr key={m.id}>
                      <td>{m.id}</td>
                      <td>{m.title}</td>
                      <td>{m.voteAverage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <hr />
            </div>
          ))}
        </div>
      );
    } else {
      // 📄 Caso COM gênero selecionado — listar filmes do gênero
      return (
        <div>
          <h3>Filmes do gênero: {genreSelected.name}</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Título</th>
                <th>Nota Média</th>
              </tr>
            </thead>
            <tbody>
              {genreSelected.movies.map(m => (
                <tr key={m.id}>
                  <td>{m.id}</td>
                  <td>{m.title}</td>
                  <td>{m.voteAverage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  };

  return (
    <div>
      <h2>Dashboard de Gêneros</h2>
      <div>
        <strong>Modo:</strong> {infoMode === 1 ? 'Gráficos' : 'Lista'}
      </div>
      <hr />
      {infoMode === 1 ? renderCharts() : renderLists()}
    </div>
  );
};

export default GenreDashboard;
