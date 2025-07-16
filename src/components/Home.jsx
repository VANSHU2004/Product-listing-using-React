import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, useLocation } from 'react-router-dom'
import { ProductContext } from '../utils/Context'
import Loading from './Loading'
import axios from '../utils/axios'

const Home = () => {

    const [products] = useContext(ProductContext);

    const {search} = useLocation();
    // console.log(search)

    const category = decodeURIComponent(search.split("=")[1]);
    // console.log(category)
    // console.log(products)

    const [filterProducts, setfilterProducts] = useState(null)

    const getproductscategory = async ()=>{
        try {

            const {data} = await axios.get(`/products/category/${category}`); 
            setfilterProducts(data);
            
        } catch (error) {

            console.log(error)
            
        }
    }


    useEffect(() => {
      if(!filterProducts || category == "undefined") setfilterProducts(products)
      if(category != "undefined") getproductscategory(); 
      
    }, [category, products]);

    // console.log(filterProducts)
    
    
  return ( products?
    <>
      <Nav/>
    
      <div className='h-full w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto'>

        {filterProducts && filterProducts.map((product,idx)=>{
            return  <Link key = {product.id}
        to={`/details/${product.id}`}
        className='mr-3 mb-3 card p-3 border shadow rounded w-[18%] h-[30vh] flex flex-col justify-center items-center'>
            <div 
            className=' hover:scale-115 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center'
            style={{
                backgroundImage: `url(${product.image})`,
            }}

            
            ></div>
          <h1 className='hover:text-blue-300'>{product.title}</h1>
        </Link>
        })}


      </div>
    </>:<Loading/>
  )
}

export default Home
