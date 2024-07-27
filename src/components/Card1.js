import React from 'react'

function Card1({item}) {
  return (
    <div>
      <h1 className='font-semibold text-2xl p-3  '>{item.title} </h1>
      <div className=''>
        <div>
            <img className='h-[300px] p-4' src={item.img01} alt="" />
        </div>
      </div>
      <a className='text-blue-500 pl-4 cursor-pointer hover:text-red-500 ' href={item.url}>{item.link}</a>
    </div>
  )
}

export default Card1
