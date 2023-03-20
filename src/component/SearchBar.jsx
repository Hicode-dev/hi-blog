import React from 'react';
import { BsArrowClockwise } from 'react-icons/bs'
import { useState } from 'react';
import axios, { Axios } from 'axios';
const SearchBar = () => {
  const [query, setQuery] = useState('')
  console.log(query);
  const HandleSubmit = async(e)=>{
    e.preventDefault();
    const{data} =  await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=4775edc64ad8431afd9086f7cbb07b45&language=en-US&query=${query}&page=1&include_adult=false`)
   console.log(data); 

  }
  return (
    <div className='flex items-center gap-[4rem]'>
         <form className='search' onSubmit={(e)=>HandleSubmit(e)}>
        <input type="text" placeholder='search for movies' onChange={(e)=>setQuery(e.target.value)} />
        </form>
       
    </div>
  );
}

export default SearchBar;
