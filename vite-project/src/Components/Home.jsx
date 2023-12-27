import React from 'react'

const Home = () => {
  return (
    <>
    <hr />
   <div className="home flex flex-row-reverse mr-4 mt-16 p-2">
   <div className='w-[600px] h-[400px]  bg-red-500 text-white text-center p-4'>
     <h2 className='text-6xl font-semibold'>Cunnoyinkeena</h2>  
    <p className='text-3xl mt-5'>Makhaayad <br /> Cunto  <br />dhadhan wangsan Leh! <br />🥣</p></div>
    <div className="images">
<img src="./public/cunto.jpg" className='w-[600px] h-[400px] ' alt="" />
    </div>
   </div>
    </>
  )
}

export default Home
