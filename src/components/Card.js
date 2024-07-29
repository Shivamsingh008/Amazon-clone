import React from 'react'

function Card({item}) {
  return (
    <div className='bg-white h-[412px]'>
      <h2 className='font-semibold text-2xl p-3  '>{item.title}</h2>
      <div className='grid grid-cols-2 gap-4 p-4   '>
        <div>
            <img src={item.img1} alt="" />
            <p className='text-[12px]'>{item.img1titile}</p>
        </div>
        <div>
            <img src={item.img2} alt="" />
            <p className='text-[12px]'>{item.img2titile}</p>
        </div>
        <div>
            <img src={item.img3} alt="" />
            <p className='text-[12px]'>{item.img3titile}</p>
        </div>
        <div>
            <img src={item.img4} alt="" />
            <p className='text-[12px]'>{item.img4titile}</p>
        </div>
       
      </div>
      <a className='text-blue-500 pl-4 cursor-pointer hover:text-red-500 ' href={item.url}>{item.link}</a>
    </div>

    
  )
}

export default Card
