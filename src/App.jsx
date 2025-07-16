import React from 'react'
import Home from './components/Home'
import { Routes , Route, Link, useLocation } from 'react-router-dom'
import Details from './components/Details'

const App = () => {
  const {search , pathname} = useLocation();

  return (
    <div className='h-screen w-screen flex'>

      {(pathname != "/" || search.length > 0) && (
        <Link to={"/"} className='text-red-300 absolute left-[18%] top-[4%]'> Home</Link>
      )}

      
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path='/details/:id' element ={<Details/>}/>
      </Routes>
    </div>
  )
}

export default App
