import React, { useRef } from "react";
import lang from "../utils/LanguageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/OpenAi";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/GptSearchSlice";

const GptSearchBar = () => {

  const langKey = useSelector(store => store.config.lang)
  const searchText = useRef(null);
  const dispatch = useDispatch()

  const searchMovieTmdb = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS)
    const json = await data.json;
    return json.results;
  }
  
  const handleGptSearch = async () => {
    console.log(searchText.current.value);

    const gptQuery = "Act as a movie recommendation system and suggest some movies for the query : " + searchText.current.value + ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, sholay, jasmine, rose, england"

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    if(!gptResults.choices){
      //TODO :  write error handling
    }

    console.log(gptResults.choices?.[0]?.message?.content)
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",")

    const promiseArray = gptMovies.map((movie) => searchMovieTmdb(movie));
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}))
  }
 
  return (
    <div className="pt-[35%] md:pt-[10%] p-20">
      <form className="flex justify-center items-center" onSubmit={(e) => e.preventDefault()}>
        <input
        ref={searchText}
          className="border md:ml-40 border-black bg-white rounded-full md:px-4 px-2 md:py-3 py-2 mx-4 w-4/5 md:w-3/5 text-lg"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          className="bg-gray-500 text-white md:px-4 px-2 py-2 md:py-2 rounded-full bg-opacity-80 text-xl md:text-2xl w-1/5" onClick={handleGptSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
