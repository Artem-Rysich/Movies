const MovieDiteilsApi = (movie_id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=c8cbdfe2b34379877a5e05e7cb09d40c&language=en-US`
  )
    .then((respons) => respons.json())
};

export default MovieDiteilsApi;
