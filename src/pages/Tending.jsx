import axios from 'axios'
import React from 'react'
import { useEffect, useState, useContext } from 'react'
import CostomPagnation from '../component/costomPagnation';
import ModalContent from '../component/ModalContent';
import Layout from '../defaultLayoult/Layout';
import { ThemeProvider } from '../providers/ThemeProvider';
import MovieCard from './MovieCard';
const Tending = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(2)
  const [open, setOpen] = useState(true)
  const [filter,setFilter] = useState([])
  //   const HandlePage = ()=>{
  //     setPage(page)
  //     window.scroll(0,0)
  // }
  const { mode,query, setQuery} = useContext(ThemeProvider)
useEffect(()  =>{
  const filterd = content.filter((c) =>{
    if (query == "") {
      return true
    }else if ((c.title && c.title.toLowerCase().includes(query.toLowerCase()))) {
      return true
    }else if(c.name && c.name.toLowerCase().includes(query.toLowerCase())){
      return true
    } else{
      return false
    }
  })
  setFilter(filterd )
},[query,content])

  
  console.log(mode);
  const FetchData = async () => {
    // const api_key = import.meta.env.VITE_MOVIE_API_KEY
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=4775edc64ad8431afd9086f7cbb07b45&page=${page}`)
    setContent(data.results);
    setPage(page)
  }

  useEffect(() => {
    FetchData();
  }, [])
  return (
    <Layout>
      <div className='flex flex-wrap w-full p-4 sm:ml-64  gap-3  justify-center items-center h-screen  mx-auto bg-[#212426] text-white'>
        <ModalContent />

        { 

         
         filter &&
          filter.map((c) => (
            <MovieCard
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date}
              count={c.vote_average}
            />) ) 
        }

        <CostomPagnation />
      </div>

    </Layout>
  )
}

export default Tending
