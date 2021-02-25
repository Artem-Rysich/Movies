const TrendingMovieApi = async () => {
  return await fetch(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=c8cbdfe2b34379877a5e05e7cb09d40c'
  )
    .then((respons) => respons.json())
    .then((data) => data.results);
};

export default TrendingMovieApi;
