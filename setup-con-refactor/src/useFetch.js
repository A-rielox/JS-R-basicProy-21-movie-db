import React, { useState, useEffect } from 'react';

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const useFetch = urlParams => {
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState({ show: false, msg: '' });
   const [movies, setMovies] = useState([]);

   const fetchMovies = async url => {
      setIsLoading(true);

      try {
         const response = await fetch(url);
         const data = await response.json();
         // console.log(data); // {Search: Array(10), totalResults: '470', Response: 'True'}

         if (data.Response === 'True') {
            setMovies(data.Search);
            setError({ show: false, msg: '' });
         } else {
            setError({ show: true, msg: data.Error });
         }

         setIsLoading(false);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      fetchMovies(`${API_ENDPOINT}&s=${urlParams}`);
   }, [urlParams]);

   return <div></div>;
};

export default useFetch;