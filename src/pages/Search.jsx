import React from 'react';
import Layout from '../defaultLayoult/Layout';
import { useState,useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import SearchBar from '../component/SearchBar';
const Search = () => {
  const [search, setSearch] = useState('')
  const FetchSearch = async()=>{
    // const api_key = import.meta.env.VITE_MOVIE_API_KEY
   const {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4775edc64ad8431afd9086f7cbb07b45&language=en-US&page=1&include_adult=false`)
setSearch(data.result)
console.log('edfio');
     
  }
  useEffect(() => {
   FetchSearch();
    
  })
  return (
   <Layout>
     <div>
    
    </div>
   </Layout>
  );
}

export default Search;
