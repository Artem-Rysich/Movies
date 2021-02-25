const MovieReviewsApi = async (id) => {
  return await fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=c8cbdfe2b34379877a5e05e7cb09d40c&language=en-US`
  )
    .then((respons) => respons.json())
    .then((data) => data.results);
};
export default MovieReviewsApi;
