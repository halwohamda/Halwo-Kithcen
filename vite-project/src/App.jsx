import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Home from './Components/Home'
import Drink from './Components/Drink'
import Food  from './Components/Food'



const App = () => {
  return (
    <>
  
    <div className="makhaayad cunto🍔">
      <div className="header flex justify-around mt-6 items-center">
        <h1 className='text-4xl text-black font-bold'>Arwo Restuarant🍝</h1>
        <div className="menu flex text-red-500 gap-16 text-2xl font-semibold">
          <Link to={'/Home'}>Home</Link>
          <Link to={'/Drink'}>Drink</Link>
          <Link to={'/Food'}>Food</Link>
        </div>
      
          


      </div>

    </div>
    <Routes>
    <Route path='Home'element={<Home/>}/>
    <Route path='Drink'element={<Drink/>}/>
    <Route path='Food'element={<Food/>}/>   

    </Routes>
      </>
  )
}

export default App
