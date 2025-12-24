import React, { useState, useEffect } from 'react'
import AppContext from './AppContext'
import axios from 'axios'

const AppState = ({ children }) => {
  const url = "http://localhost:3000/api";
  const [product, setProduct] = useState([]);
  const [user, setUser] = useState();
  const [cart, setCart] = useState([]);


  async function fetchData() {
    try {
      const res = await axios.get(`${url}/product/get`);
      console.log(res.data);
      setProduct(res.data);
    } catch (err) {
      console.error("Error fetching books:", err);
    }
  }


  // const addToCart=()=>{
  //   setCart

  // }

  useEffect(() => {
    fetchData();
  }, []);

  // Fix: Make register accept userData and await axios.post
  const register = async (userData) => {
    try {
      const response = await axios.post(`${url}/auth/register`, userData);
      setUser(response.data);
    } catch (err) {
      console.error("Error registering user:", err);
    }
  };

  // Remove this call here - calling register immediately is wrong
  // register();

  return (
    <AppContext.Provider value={{
      product,
      user,
      register // expose register so you can call it from components
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppState
