import React, { useContext, useState } from 'react'
import { ProductContext } from '../utils/Context';

import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Create = () => {
    const navigate = useNavigate();

    const [products , setProducts] = useContext(ProductContext);

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const AddProductHandler = (e) =>{
        e.preventDefault();

        if(title.trim().length<5 || description.trim().length<5 || category.trim().length <5 || image.trim().length<5 || price.trim().length < 1 ){
            alert("Fill all the details")
            return;
        }

        const product = {
            id: nanoid(),
            image,
            title,
            category,
            price,
            description
        }

        setProducts([...products , product] );

        localStorage.setItem("products", JSON.stringify([...products, product]))
        toast.success("Product added successfully")
        

        navigate("/")

        // console.log(products)

        // setCategory("") 
        // setTitle("")
        // setDescription("")
        // setPrice("")
        // setImage("")
    }



    




  return (
    <form
    onSubmit={AddProductHandler}
    className='flex flex-col items-center p-[5%] w-screen h-screen'>
        <h1 className='text-3xl w-1/2 mb-5'>Add New Product</h1>

        <input 
        type='url' 
        placeholder='Image Link' 
        className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3' 
        onChange={(e)=> setImage(e.target.value)}
        value={image}
        />
        
        <input 
        type="text" 
        placeholder='Title' 
        className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3' 
        onChange={(e)=> setTitle(e.target.value)}
        value={title}
        />

        <div className='w-1/2 flex justify-between'>
            <input 
            type='text' 
            placeholder='Category' 
            className='text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3' 
            onChange={(e)=> setCategory(e.target.value)}
            value={category}
            />
            
            <input 
            type="number" 
            placeholder='Price' 
            className='text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3' 
            onChange={(e)=> setPrice(e.target.value)}
            value={price}
            />


        </div>

        <textarea 
        className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
        placeholder='Enter Description for the product here...'
        rows="8"
        onChange={(e)=> setDescription(e.target.value)}
        value={description}
        ></textarea>
        <div className='w-1/2'>
            <button
            className='py-3 px-5 border rounded border-blue-100 text-blue-300'
            >
                Add new Product
            </button>
        </div>

                

    </form>
  )
}

export default Create

