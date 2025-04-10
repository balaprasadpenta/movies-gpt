import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_IMAGE } from '../utils/constants'

const GptSearchPage = () => {
  return (
    <>
       <div className="fixed -z-10 " >
        <img className='h-screen w-screen object-cover' src={BG_IMAGE} alt="background-image" />
      </div>

      <div className="">
     <GptSearchBar />
     <GptMovieSuggestions />
 </div>
    </>
   
  )
}

export default GptSearchPage