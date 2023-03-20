import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios';
import http from './config/httpClient';
// import { Switch } from 'react-router-dom';

import MainNav from './component/MainNav'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import { Switch } from '@mui/material';
import Home from './pages/Home'
import Series from './pages/Series';
import Tending from './pages/Tending';
import Search from './pages/Search';
function App() {
  let isMounted = true;
  const [count, setCount] = useState(0)
// useEffect(() => {
//   const Run  = async ()=>{
//     try {
//       const response = await http.get( `/discover/movie ` ,{
//        params:{
//         // api_key:process.env.VITE_MOVIE_API_KEY
//        }
//       })
//       console.log(response.data);
//     } catch (error) {
      
//     }
//   }
//   isMounted && Run();
//   return () => {
//  isMounted = false
//   };
// }, [])

  
 return (
  <BrowserRouter>
  <Routes>
    < Route path="/" element={<MainNav />} />
    <Route path="/home" element={<Home />} />
    <Route path="/series" element={<Series />} />
    <Route path="/tending" element={<Tending />} />
    <Route path="/search" element={<Search />} />
  </Routes>
</BrowserRouter>
 )
}

export default App
