export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const BG_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg"

export const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY

export const THE_MOVIE_API_KEY = process.env.REACT_APP_THE_MOVIE_API_KEY

export const THE_MOVIE_API_READ_ACCESS_TOKEN = process.env.REACT_APP_THE_MOVIE_API_READ_ACCESS_TOKEN

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer" + process.env.REACT_APP_TMDB_KEY
    }
  };

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500"
// export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg"

export const SUPPORTED_LANGUAGES = [
  {identifier : "en" , name: "english"},
  {identifier : "hindi" , name: "hindi"},
  {identifier : "tel" , name: "telugu"}
]

export const OPENAI_GPT_API_KEY = process.env.REACT_APP_OPENAI_GPT_API_KEY;