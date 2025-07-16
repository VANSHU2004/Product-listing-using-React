import React, { useContext } from 'react'
import { ProductContext } from '../utils/Context'
import { Link } from 'react-router-dom';

const Nav = () => {
    const [products] = useContext(ProductContext);

    let distinct_category = products && products.reduce((acc , cv)=>[...acc ,cv.category] , [])

    distinct_category = [...new Set(distinct_category)];

    // console.log(distinct_category)


    const color = ()=>{
        return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},0.5)`
    }



  return (
    <nav className='w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5'>
        <a className='py-3 px-5 border rounded border-blue-100 text-blue-300' href="/create">Add new Product</a>
        <hr className='w-[80%] my-3' />
        <h1 className='text-2xl mb-3 w-[80%]'>Category Filter</h1>
        <div className='w-[80%]'>
          {distinct_category.map((category , key)=>{
            return < Link to={`/?category=${category}`} key={key} className='mb-3 flex items-center'>
            <span style={{backgroundColor: color()}} className='w-[15px] h-[15px] rounded-full mr-2'></span>
            {category}</Link>
          })}          
        </div>
      </nav>
  )
}

export default Nav
