

import React,{useState,useEffect} from 'react'
import AppContext from './AppContext'
import axios from 'axios'
const AppState = ({children}) => {
  const url ="http://localhost:3000/api";
const [product,setProduct]=useState([]);
    async function fetchData() {
  try {
    const res = await axios.get(`${url}/product/get`);
    console.log(res.data);
    setProduct(res.data);
  } catch (err) {
    console.error("Error fetching books:", err);
  }
}

useEffect(()=>{
    fetchData();
},[])

  return (
    <AppContext.Provider value={{
        product,
        

    }}>
        {children}  
    </AppContext.Provider>
  )
}

export default AppState
