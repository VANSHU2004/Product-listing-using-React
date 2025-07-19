

import React, { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext();

const Context = ({children}) => {
    const [products, setproducts] = useState(JSON.parse(localStorage.getItem("products"))||null)

    // const getProducts = async ()=>{
    //     try {
    //         const {data} = await axios("/products");
    //         // console.log(data)
    //         setproducts(data)
            
    //     } catch (error) {

    //         console.log(error)
            
    //     }
    // }

    // useEffect(() => {
    //   getProducts();
    // }, [])
    
  return (
    <ProductContext.Provider value={[products,setproducts]}>
        {children}      
    </ProductContext.Provider>
  )
}

export default Context
