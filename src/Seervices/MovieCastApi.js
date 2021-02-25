const MovieCastApi = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c8cbdfe2b34379877a5e05e7cb09d40c&language=en-US`
  )
    .then((respons) => respons.json())
    .then((data) => data.cast);
};
export default MovieCastApi;
