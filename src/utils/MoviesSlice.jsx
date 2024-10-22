import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies : null,
        trailerVideo: null,
        popularMovies : null
    },
    reducers:{
        addNowPlayingMovie: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovie: (state, action) => {
            state.popularMovies = action.payload;
        }
    } 
})

export const { addNowPlayingMovie, addTrailerVideo, addPopularMovie } = MovieSlice.actions;

export default MovieSlice.reducer;
