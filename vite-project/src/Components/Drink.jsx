import React from 'react'

const Drink = () => {
  return (
    <>
    <hr />
   <div className="drinks bg-slate-100 h-screen  mt-11 m-16 ">
   <h2 className='text-center font-extrabold'>drinks</h2>
      <div className="img m-auto justify-center mt-9 flex gap-7 ">
        <img src="./public/1.jpg" className='w-[400px] rounded-lg' alt="" />
        <img src="./public/2.jpg" className='w-[400px] rounded-lg' alt="" />
        <img src="./public/3.jpg" className='w-[400px]rounded-lg ' alt="" />
        <img src="./public/4.jpg"  className='w-[400px] rounded-lg'alt="" />
      </div>
   </div>
    </>
  )
}

export default Drink
