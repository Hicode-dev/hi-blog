import React from 'react';
import { img_300, unavailable } from '../config/config';
import Rating from '@mui/material/Rating';

const MovieCard = (
{
    id,
poster,
title,
date,
count
}

) => {
  return (
  <div >
 <div className=''>
 <div className=" ">
    
    <img src={ poster? `${img_300}/${poster}` : `${unavailable}` } className='rounded-md' />
  <div className='flex justify-between items-center py-2'>
  <h1>{id}</h1>
    <div className=''>
       
<Rating
  name="simple-controlled"
  value={count} readOnly
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
/>
  </div>
</div>
    <h1>{title}</h1>


  </div>
 </div>
  </div>
  );
}

export default MovieCard;
