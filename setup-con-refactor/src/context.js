import React, { useState, useContext, useEffect } from 'react';

// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`; //////

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
   const [query, setQuery] = useState('hobbit');

   return (
      <AppContext.Provider
         value={{ isLoading, error, movies, query, setQuery }}
      >
         {children}
      </AppContext.Provider>
   );
};

// make sure use
export const useGlobalContext = () => {
   return useContext(AppContext);
};

export { AppContext, AppProvider };

/*

Here is your key: 80b57e07
REACT_APP_MOVIE_API_KEY
Please append it to all of your API requests,

OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=80b57e07



Usage
Send all data requests to:

http://www.omdbapi.com/?apikey=[yourkey]&

Poster API requests:

http://img.omdbapi.com/?apikey=[yourkey]&


con t=batman
let list = {
   Title: 'Batman',
   Year: '1989',
   Rated: 'PG-13',
   Released: '23 Jun 1989',
   Runtime: '126 min',
   Genre: 'Action, Adventure',
   Director: 'Tim Burton',
   Writer: 'Bob Kane, Sam Hamm, Warren Skaaren',
   Actors: 'Michael Keaton, Jack Nicholson, Kim Basinger',
   Plot: 'The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.',
   Language: 'English, French, Spanish',
   Country: 'United States, United Kingdom',
   Awards: 'Won 1 Oscar. 9 wins & 26 nominations total',
   Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg',
   Ratings: [
      { Source: 'Internet Movie Database', Value: '7.5/10' },
      { Source: 'Rotten Tomatoes', Value: '71%' },
      { Source: 'Metacritic', Value: '69/100' },
   ],
   Metascore: '69',
   imdbRating: '7.5',
   imdbVotes: '352,984',
   imdbID: 'tt0096895',
   Type: 'movie',
   DVD: '22 Aug 1997',
   BoxOffice: '$251,348,343',
   Production: 'N/A',
   Website: 'N/A',
   Response: 'True',
};







con s=batman
const vari = {
   Search: [
      {
         Title: 'Batman Begins',
         Year: '2005',
         imdbID: 'tt0372784',
         Type: 'movie',
         Poster:
            'https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
      },
      ...
      {
         Title: 'Batman: The Dark Knight Returns, Part 1',
         Year: '2012',
         imdbID: 'tt2313197',
         Type: 'movie',
         Poster:
            'https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg',
      },
   ],
   totalResults: '470',
   Response: 'True',
};


*/
