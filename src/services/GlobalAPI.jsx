import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = "2ec0d66f5bdf1dd12eefa0723f1479cf"

const MoviesByGenreBaseURL  = 'https://api.themoviedb.org/3/discover/movie?api_key=' + api_key;
// Example: https://api.themoviedb.org/3/discover/movie?api_key

const getTrendingVideos = () => axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key);
const getMoviesByGenreId = (id) => axios.get(MoviesByGenreBaseURL + "&with_genres=" + id);

export default {
    getTrendingVideos,
    getMoviesByGenreId
};
// const url = "https://api.themoviedb.org/3/discoverapi_key=YOUR_API_KEY&with_genres=28";

 
// import axios from "axios";

// const movieBaseUrl="https://api.themoviedb.org/3"
// const api_key='2ec0d66f5bdf1dd12eefa0723f1479cf'

// const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';

// //https://api.themoviedb.org/3/trending/all/day?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf
// const getTrendingVideos=axios.get(movieBaseUrl+
//     "/trending/all/day?api_key="+api_key);
//     const getMovieByGenreId=(id)=>
//     axios.get(movieByGenreBaseURL+"&with_genres="+id)

// export default{
//     getTrendingVideos,
//     getMovieByGenreId
// }
// 