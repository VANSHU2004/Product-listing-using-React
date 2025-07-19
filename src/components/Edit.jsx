import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from '../utils/Context';

const Edit = () => {
    const [products , setProducts] = useContext(ProductContext);
    const navigate = useNavigate();
    const {id} = useParams();
    const [product, setproduct] = useState({
        title: "",
        description: "",
        image: "",
        price: "",
        category:"",

    })  
    
    
    const changeHandler = (e) => {

        setproduct({...product , [e.target.name]: e.target.value})
        
        

    }
    // const [title, setTitle] = useState("");
    // const [image, setImage] = useState("");
    // const [category, setCategory] = useState("");
    // const [price, setPrice] = useState("");
    // const [description, setDescription] = useState("");

    useEffect(() => {

        setproduct(products.filter((p)=> p.id == id)[0]);  
      
      
    }, [id])
    

    const EditProductHandler = (e) =>{
        e.preventDefault();

        if(product.title.trim().length<5 || product.description.trim().length<5 || product.category.trim().length <5 || product.image.trim().length<5 || product.price.trim().length < 1 ){
            alert("Fill all the details")
            return;
        }

        

        const pi = products.findIndex((p)=>p.id == id)

        const copyData = [...products];
        copyData[pi] = {...products[pi], ...product}
        // console.log(product,pi)

        

        setProducts(copyData);

        localStorage.setItem("products", JSON.stringify(copyData))

        navigate(-1)

        // console.log(products)

        // setCategory("") 
        // setTitle("")
        // setDescription("")
        // setPrice("")
        // setImage("")
    }
  return (
    <form
    onSubmit={EditProductHandler}
    className='flex flex-col items-center p-[5%] w-screen h-screen'>
        <h1 className='text-3xl w-1/2 mb-5'>Edit Product</h1>

        <input 
        type='url' 
        placeholder='Image Link' 
        className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
        name='image' 
        onChange={changeHandler}
        value={product && product.image}
        />
        
        <input 
        type="text" 
        placeholder='Title' 
        className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
        name='title' 
        onChange={changeHandler}
        value={product && product.title}
        />

        <div className='w-1/2 flex justify-between'>
            <input 
            type='text' 
            placeholder='Category' 
            className='text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3'
            name='category' 
            onChange={changeHandler}
            value={product && product.category}
            />
            
            <input 
            type="number" 
            placeholder='Price' 
            className='text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3'
            name='price' 
            onChange={changeHandler}
            value={product && product.price}
            />


        </div>

        <textarea 
        className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
        placeholder='Enter Description for the product here...'
        rows="8"
        name='description'
        onChange={changeHandler}
        value={product && product.description}
        ></textarea>
        <div className='w-1/2'>
            <button
            className='py-3 px-5 border rounded border-blue-100 text-blue-300'
            >
                Edit Product
            </button>
        </div>

                

    </form>
  )
}

export default Edit
