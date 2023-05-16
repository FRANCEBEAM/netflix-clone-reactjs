const key = '34ffdfd2511b1b98d4f4a9053c2ddff0';

const requests = {
    requestPopular:`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${key}`,
    requestTopRated: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&api_key=${key}`,
    requestTrending: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc&api_key=${key}`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=34ffdfd2511b1b98d4f4a9053c2ddff0&query=horror&include_adult=false&language=en-US&page=1`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${key}`,
};

export default requests;