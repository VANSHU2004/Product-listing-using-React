import React, {useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ProductContext } from '../utils/Context'
import axios from '../utils/axios'
import Loading from './Loading'

const Details = () => {
    const [products , setproducts] = useContext(ProductContext)

    const navigate = useNavigate();

    

    const [product, setproduct] = useState(null)

    const {id} = useParams();
    // console.log(id)
    
    // const getSingleProduct = async() =>{
    //     try {
    //         const {data} = await axios.get(`/products/${id}`)
    //         // console.log(data)
    //         setproduct(data)
            
    //     } catch (error) {

    //         console.log(error)
            
    //     }
    // }


    useEffect(() => {
        if(!product){
            setproduct(products.filter((p) => p.id == id)[0])
        }
    //   getSingleProduct();     
    }, []);

    const productDeleteHandler =(id)=>{
        const filteredProducts = products.filter((p)=> p.id !== id);

        setproducts(filteredProducts);

        localStorage.setItem("products" , JSON.stringify(filteredProducts))


        navigate("/")


    }
    

    
  return ( product ?
    <div className='flex justify-between items-center w-[80%] h-full m-auto p-[8%] gap-5'>

        <img
        className='h-[80%] w-[40%] object-contain'
        src = {product.image}
        alt="" />
        <div className="content w-[50%]">
            <h1 className='text-4xl' >{product.title}</h1>
            <h3 className='text-zinc-400 my-5'>{product.category}</h3>
            <h2 className='text-red-300 mb-3'>{`$${product.price}`}</h2>
            <p className='text-sm mb-[5%]' >{product.description}</p>
            <Link
            to={`/edit/${product.id}`}
            className='py-1 px-5 border rounded border-blue-100 text-blue-300 mr-7'>Edit</Link>
            <button 
            onClick={()=>productDeleteHandler(product.id)}
            className='py-1 px-5 border rounded border-red-100 text-red-300'>Delete</button>

        </div>
             
    </div>:< Loading/>
  )
}

export default Details
