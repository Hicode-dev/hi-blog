import React ,{createContext, useState} from 'react';
import axios, { Axios } from 'axios';

  const ThemeProvider = createContext(null)
  export {ThemeProvider}

  const ThemeContext =  ({children})=>{
    const [query, setQuery] = useState('')
    const [mode ,setMode] = useState('light')
//    console.log(query);

    const HandleSubmit = async(e)=>{
        e.preventDefault();
        const{data} =  await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=4775edc64ad8431afd9086f7cbb07b45&language=en-US&query=${query}&page=1&include_adult=false`)
        console.log(data);
     
      }

    return(
        <ThemeProvider.Provider value={{query, setQuery,mode ,setMode,HandleSubmit}}>
            {children}
        </ThemeProvider.Provider>

    )
  }

  export default ThemeContext;
