import movieReducer from "./movieReducer";
import * as Constants from "../constants";

describe("MovieReducer", () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      movies: [
        {
          id: 123
        }
      ],
      offset: 1,
      data: [
        {
          id: 123
        }
      ]
    };
  });

  test("when SET_FILTERED_RESULTS", () => {
    const newState = movieReducer(initialState, {
      type: Constants.SET_FILTERED_RESULTS_TYPE,
      payload: [{ id: 456 }]
    });
    expect(newState.filteredResults).toEqual([{ id: 456 }]);
  });

  test("when PREVIEW_MOVIE_TYPE", () => {
    const newState = movieReducer(initialState, {
      type: Constants.PREVIEW_MOVIE_TYPE,
      payload: { id: 456 }
    });
    expect(newState.preview).toEqual({ id: 456 });
  });

  test("when DELETE_MOVIES_SUCCESS_TYPE", () => {
    initialState.movies.push({ id: 19 });
    initialState.offset = 2;
    const newState = movieReducer(initialState, {
      type: Constants.DELETE_MOVIES_SUCCESS_TYPE,
      payload: 19
    });
    expect(newState.movies.length).toEqual(1);
    expect(newState.movies).toEqual([{ id: 123 }]);
    expect(newState.offset).toEqual(1);
  });

  test("when DELETE_MOVIES_SUCCESS_TYPE 2", () => {
    initialState.movies.push({ id: 19 });
    initialState.offset = 2;
    const newState = movieReducer(initialState, {
      type: Constants.DELETE_MOVIES_SUCCESS_TYPE,
      payload: 987
    });
    expect(newState.movies.length).toEqual(2);
    expect(newState.movies).toEqual([{ id: 123 }, { id: 19 }]);
    expect(newState.offset).toEqual(1);
  });

  test("when UPDATE_GENRES_TYPE", () => {
    initialState.movies.push({ id: 19, genres: ["Comedy", "Drama"] });
    initialState.movies[0].genres = ["Action", "Drama"];
    const newState = movieReducer(initialState, {
      type: Constants.UPDATE_GENRES_TYPE
    });
    expect(newState.genres).toEqual(["All", "Action", "Drama", "Comedy"]);
  });

  test("when EDIT_MOVIE_SUCCESS_TYPE", () => {
    initialState.movies.push({ id: 19, genres: ["Comedy", "Drama"] });
    const newState = movieReducer(initialState, {
      type: Constants.EDIT_MOVIE_SUCCESS_TYPE,
      payload: {
        id: 19,
        genres: ["TEST"]
      }
    });
    expect(newState.movies.length).toEqual(2);
    expect(newState.movies).toEqual([
      { id: 123 },
      { id: 19, genres: ["TEST"] }
    ]);
  });

  test("when EDIT_MOVIE_SUCCESS_TYPE 2", () => {
    initialState.movies.push({ id: 19, genres: ["Comedy", "Drama"] });
    const newState = movieReducer(initialState, {
      type: Constants.EDIT_MOVIE_SUCCESS_TYPE,
      payload: {
        id: 897,
        genres: ["TEST"]
      }
    });
    expect(newState.movies.length).toEqual(3);
    expect(newState.movies).toEqual([
      {
        "id": 123
      },
      {
        "genres": [
          "Comedy",
          "Drama"
        ],
        "id": 19
      },
      {
        "genres": [
          "TEST"
        ],
        "id": 897
      }
    ]);
  });

  test("when ADD_MOVIE_SUCCESS_TYPE", () => {
    const newMovie = { id: 22 };
    const newState = movieReducer(initialState, {
      type: Constants.ADD_MOVIE_SUCCESS_TYPE,
      payload: newMovie
    });
    expect(newState.movies.length).toEqual(2);
    expect(newState.movies).toEqual([{ id: 123 }, { id: 22 }]);
  });

  test("when INVALID", () => {
    const newState = movieReducer(initialState, {
      type: "INVALID"
    });
    expect(newState).toEqual(initialState);
  });

  test("when CLEAR_SEARCH_INPUT_TYPE", () => {
    const newState = movieReducer(initialState, {
      type: Constants.CLEAR_SEARCH_INPUT_TYPE
    });
    expect(newState).toEqual({
      "data": [
        {
          "id": 123
        }
      ],
      "genres": [
        "All"
      ],
      "movies": [],
      "offset": 1
    });
  });

  test("when FETCH_MOVIES_LIST_SUCCESS_TYPE", () => {
    const newMovie = {
      movies: [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        }
      ]
    };
    const newState = movieReducer(initialState, {
      type: Constants.FETCH_MOVIES_LIST_SUCCESS_TYPE,
      payload: newMovie
    });
    expect(newState.movies.length).toEqual(4);
    expect(newState.movies).toEqual([
      {
        "id": 123
      },
      {
        "id": 1
      },
      {
        "id": 2
      },
      {
        "id": 3
      }
    ]);
  });

  test("when LOAD_MOVIES_DEFAULT_TYPE", () => {
    const newMovie = {
      movies: [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        }
      ]
    };
    const newState = movieReducer(initialState, {
      type: Constants.LOAD_MOVIES_DEFAULT_TYPE,
      payload: newMovie
    });
    expect(newState.movies.length).toEqual(4);
    expect(newState.movies).toEqual([
      {
        "id": 123
      },
      {
        "id": 1
      },
      {
        "id": 2
      },
      {
        "id": 3
      }
    ]);
  });

  test("when LOAD_MOVIES_BY_TITLE_TYPE", () => {
    const newMovie = {
      data: [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        }
      ]
    };
    const newState = movieReducer(initialState, {
      type: Constants.LOAD_MOVIES_BY_TITLE_TYPE,
      payload: newMovie
    });
    expect(newState.data.length).toEqual(1);
    expect(newState.data).toEqual([
      {
        "id": 123
      }
    ]);
  });

});
