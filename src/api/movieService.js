import axios from 'axios';

const baseUrl = process.env.REACT_APP_API || '';
const basePath = 'movies';

const buildRequestUrl = ({ url, path, query, searchBy, limit, offset, sortBy, sortOrder, genre }) => {
  return `${url}/${path}?search=${query}&searchBy=${searchBy}&limit=${limit}&offset=${offset}&sortBy=${sortBy}&sortOrder=${sortOrder}&filter=${genre}`;
};

export const getMovies = ({ query, searchBy = 'title', limit = 20, offset = 0, sortBy, sortOrder = 'asc', genre }) => {
  const url = buildRequestUrl({
    url: baseUrl,
    path: basePath,
    query,
    searchBy,
    limit,
    offset,
    sortBy,
    sortOrder,
    genre,
  });
  return axios
    .get(url)
    .then((response) => response.data)
    .then((data) => ({
      movies: data.data,
      offset: data.offset,
      total: data.totalAmount,
    }));
};

export const getMovieBySearchString = (searchString) => {
  const url = buildRequestUrl({ url: baseUrl, path: `${basePath}/search/${searchString}` });
  return axios.get(url);
};

export const deleteMovie = (id) => {
  const url = buildRequestUrl({ url: baseUrl, path: `${basePath}/${id}` });
  return axios.delete(url);
};

export const addMovie = (data) => {
  const url = `${baseUrl}/${basePath}`;
  return axios.post(url, data).then((response) => response.data);
};

export const editMovie = (data) => {
  const url = `${baseUrl}/${basePath}`;
  return axios.put(url, data).then((response) => response.data);
};

export const getMovieById = (id) => {
  const url = `${baseUrl}/${basePath}/${id}`;
  return axios.get(url).then((response) => response.data);
};

