module.exports = Object.freeze({
  DEFAULT: [
    { label: 'Comedy', value: 'Comedy' },
    { label: 'Documentary', value: 'Documentary' },
    { label: 'Horror', value: 'Horror' },
    { label: 'Crime', value: 'Crime' },
  ],
  FILTER_DEFAULT: [
    { label: 'release', value: 'release' },
    { label: 'runtime', value: 'runtime' },
  ],
  MAPPING: {
    'release date': 'release',
    runtime: 'runtime',
  },
  FILTERS: ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'],
  SORTING: ['Release', 'Runtime', 'Budget', 'Revenue', 'Vote average', 'Vote count'],
  NOT_FOUND_POSTER: '/images/not-found.png',
  ARROWS: ['/images/arrow_up.png', '/images/arrow_down.png'],
  PASSWORD_HANDLE: ['/images/eye-hide.png', '/images/eye-show.png'],
  DEFAULT_COUNT_FILTER_ITEM: 6,
  ALL_GENRES: 'All',
  CLEAR_SEARCH_INPUT_IMAGE: '/images/close.png',
  EDIT_SUCCESS: 'edit-success',
  DELETE_SUCCESS: 'delete-success',
  ADD_SUCCESS: 'add-success',
  ERROR: 'error',
  FILTER_GENRE_TYPE: 'filter/genre',
  FILTER_ORDER_TYPE: 'filter/order',
  FETCH_MOVIES_LIST_SUCCESS_TYPE: 'movies/fetchMoviesSuccess',
  LOAD_MOVIES_DEFAULT_TYPE: 'movies/loadMovieDefault',
  DELETE_MOVIES_SUCCESS_TYPE: 'movies/deleteMovie',
  EDIT_MOVIE_SUCCESS_TYPE: 'movies/editMovieSuccess',
  LOAD_MOVIES_BY_TITLE_TYPE: 'movies/loadMovieByTitle',
  ADD_MOVIE_SUCCESS_TYPE: 'movies/addMovieSuccess',
  SET_FILTERED_RESULTS_TYPE: 'movies/filteredResults',
  CLEAR_SEARCH_INPUT_TYPE: 'movies/clearSearch',
  PREVIEW_MOVIE_TYPE: 'movies/preview',
  UPDATE_GENRES_TYPE: 'genres/updateGenres',
  LOADER_TYPE: 'common/loader',
  MOVIE_PREVIEW: 'movies/preview',
  ERROR_TYPE: 'common/error',
  RESET_TYPE: 'common/reset',
  PUT_METHOD: 'put',
  POST_METHOD: 'post',
  DELETE_METHOD: 'delete',
  SHOW_SUCCESS_MESSAGE: 'common/successMessage',
  ARROW_IMAGES_ARRAY: [{
    src: './images/scroll_arrow_down.png',
    alt: 'scroll button down',
  }, {
    src: './images/scroll_arrow_up.png',
    alt: 'scroll button up',
  }],
  FORMIK_ERRORS: [{
    title: 'Title is required field',
    release_date: 'Release date is required field',
    poster_path: 'Poster should be a valid url',
    genre: 'Select at least one genre',
    overview: 'Film description is required',
    runtime: 'Runtime should be numeric value more then 0'
  }],
  DEFAULT_DATE_FORMAT: 'MM/dd/yyyy',
});