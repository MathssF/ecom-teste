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
    selectGenre,
    setGenreSelected,
    setInfoMode,
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
      const weightedRatings = genres.map(g => g.moviesWeightedAverage);

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
                    backgroundColor: colors,
                  },
                ],
              }}
              options={{
                onClick: (event, elements) => {
                  if (elements.length > 0) {
                    const index = elements[0].index;
                    const genreId = genres[index].id;
                    selectGenre(genreId);
                  }
                },
                plugins: {
                  legend: {
                    position: 'right',
                  },
                  title: {
                    display: true,
                    text: 'Quantidade de filmes por gênero',
                  },
                },
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
                  {
                    label: 'Nota Média Ponderada',
                    data: weightedRatings,
                    backgroundColor: 'rgba(153, 102, 255, 0.6)',
                  },
                ],
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                  position: 'top',
                  },
                  title: {
                    display: false,
                  },
                },
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

      const labels = genreSelected.movies.map(m => m.title);
      const scores = genreSelected.movies.map(m => m.voteAverage);


      return (
        <div style={{ width: '50%' }}>
          <h3>Média de nota do gênero: {genreSelected.name}</h3>
          
          <Bar
          data={{
            labels,
            datasets: [
              {
                label: 'Nota',
                data: scores,
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
            },
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
              <p>
                <strong>Nota Média:</strong> {g.moviesRatingAverage.toFixed(2)} |{' '}
                <strong>Nota Média Ponderada:</strong> {g.moviesWeightedAverage.toFixed(2)}
              </p>
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
          <p>
            <strong>Nota Média:</strong> {genreSelected.moviesRatingAverage.toFixed(2)} |{' '}
            <strong>Nota Média Ponderada:</strong> {genreSelected.moviesWeightedAverage.toFixed(2)}
          </p>
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
  
      <div style={{ margin: '20px 0' }}>
        <label>
          <strong>Selecionar Gênero:</strong>{' '}
          <select
            value={genreSelected?.id || ''}
            onChange={(e) => {
              const genreId = Number(e.target.value);
              if (genreId) {
                selectGenre(genreId);
              } else {
                setGenreSelected(null);
              }
            }}
          >
            <option value="">Todos os Gêneros</option>
            {genres.map((g) => (
              <option key={g.id} value={g.id}>
                {g.name}
              </option>
            ))}
          </select>
        </label>
  
        <div style={{ marginTop: '10px' }}>
          <button onClick={() => setInfoMode(infoMode === 1 ? 0 : 1)}>
            Alternar para {infoMode === 1 ? 'Lista' : 'Gráficos'}
          </button>
  
          {genreSelected && (
            <button
              onClick={() => setGenreSelected(null)}
              style={{ marginLeft: '10px' }}
            >
              Limpar seleção de gênero
            </button>
          )}
        </div>
      </div>
  
      <hr />
  
      {infoMode === 1 ? renderCharts() : renderLists()}
    </div>
  );
  
};

export default GenreDashboard;
