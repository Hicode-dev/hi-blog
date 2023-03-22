import React from 'react';
import { BsArrowClockwise } from 'react-icons/bs'
import { useState,useContext } from 'react';

import ThemeContext, { ThemeProvider } from '../providers/ThemeProvider';
const SearchBar = () => {
 
 
  const { HandleSubmit ,query, setQuery }= useContext(ThemeProvider)
  return (
    <div className='flex items-center gap-[4rem]  z-50'>
         <form className='search z-50' onSubmit={(e)=>HandleSubmit(e)}>
        <input type="text" placeholder='search for movies' className='outline-none' onChange={(e)=>setQuery(e.target.value)} />
        
        </form>
       
    </div>
  );
}

export default SearchBar;
