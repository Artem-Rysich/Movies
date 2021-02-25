const FindMovieApi = async (query) => {
  return await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=c8cbdfe2b34379877a5e05e7cb09d40c&language=en-US&page=1&include_adult=false&query=${query}`
  )
    .then((response) => response.json())
    .then((data) => data.results);
};

export default FindMovieApi;
