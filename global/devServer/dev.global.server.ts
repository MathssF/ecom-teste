import express from 'express';
import { MovieDetailsAPI } from '../fetchTMDB/details';
import { TopRatedMoviesAPI } from '../fetchTMDB/top.rated';
import { TrendingMoviesAPI } from '../fetchTMDB/trendings';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT_GLOBAL || 5000;  // Usando PORT_GLOBAL, ou 5000 como fallback

const movieAPI = new MovieDetailsAPI();
const topRatedAPI = new TopRatedMoviesAPI();
const trendingAPI = new TrendingMoviesAPI();

app.get('/movie/:id', async (req, res) => {
  const movieId = parseInt(req.params.id, 10);
  try {
    const movieDetails = await movieAPI.getMovieDetails(movieId);
    res.json(movieDetails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/top-rated', async (req, res) => {
  try {
    const { limitItems, limitPages, chooseLang } = req.query;
    const data = {
      setLimitItems: true,
      limitItems: parseInt(limitItems as string, 10),
      setLimitPages: true,
      limitPages: parseInt(limitPages as string, 10),
      setLang: true,
      chooseLang: chooseLang ? chooseLang : 'en-US',
      dev: true,
      showFullApi: true,
    };

    const topRatedMovies = await topRatedAPI.getTopRatedMovies(data);
    res.json(topRatedMovies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/top-rated-by-page', async (req, res) => {
  try {
    const { limitItems, limitPages, chooseLang } = req.query;
    const data = {
      resultModeByPage: true,
      setLimitItems: true,
      limitItems: parseInt(limitItems as string, 10),
      setLimitPages: true,
      limitPages: limitPages ? parseInt(limitPages as string, 10) : 20,
      setLang: true,
      chooseLang: chooseLang ? chooseLang : 'en-US',
      dev: true,
      showFullApi: true,
    };

    const topRatedMovies = await topRatedAPI.getTopRatedMovies(data);
    res.json(topRatedMovies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/top-rated/page/:page', async (req, res) => {
  const page = parseInt(req.params.page, 10);
  try {
    const { chooseLang } = req.query;
    const data = { chooseLang: chooseLang ? chooseLang : 'en-US' };
    const topRatedMovies = await topRatedAPI.getTopsByPage(page, data);
    res.json(topRatedMovies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/trending', async (req, res) => {
  try {
    const { mode, limitItems, limitPages, chooseLang } = req.query;
    const data = {
      setLimitItems: true,
      limitItems: parseInt(limitItems as string, 10),
      setLimitPages: true,
      limitPages: parseInt(limitPages as string, 10),
      setLang: true,
      chooseLang: chooseLang ? chooseLang : 'en-US',
      dev: true,
      showFullApi: true,
    };

    const trendingMovies = await trendingAPI.getTrendingMovies(parseInt(mode as string, 10), data);
    res.json(trendingMovies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/trending-by-page', async (req, res) => {
  try {
    const { mode, limitItems, limitPages, chooseLang } = req.query;
    const data = {
      resultModeByPage: true,
      setLimitItems: true,
      limitItems: parseInt(limitItems as string, 10),
      setLimitPages: true,
      limitPages: limitPages ? parseInt(limitPages as string, 10) : 20,
      setLang: true,
      chooseLang: chooseLang ? chooseLang : 'en-US',
      dev: true,
      showFullApi: true,
    };

    const trendingMovies = await trendingAPI.getTrendingMovies(parseInt(mode as string, 10), data);
    res.json(trendingMovies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/trending/page/:mode/:page', async (req, res) => {
  const mode = parseInt(req.params.mode, 10);
  const page = parseInt(req.params.page, 10);
  try {
    const { chooseLang } = req.query;
    const data = { chooseLang: chooseLang ? chooseLang : 'en-US' };
    const trendingMovies = await trendingAPI.getTrendByPage(mode, page, data);
    res.json(trendingMovies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor global rodando na porta ${port}`);
});