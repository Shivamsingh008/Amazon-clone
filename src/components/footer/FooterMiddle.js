import React from 'react'
import FooterMiddleList from './FooterMiddleList'
import { middleList } from '../../constants'
import {logo, india} from '../../assets/index'

const FooterMiddle =()=> {
  return (
    <div className='w-full bg-amazon_light text-white'>
      {/* =============Top Start here =========== */}
      <div className="w-full border-b-[1px] border-gray-500 py-10">
        <div className='max-w-5xl mx-auto'>
        <div className='w-full grid grid-cols-4 place-items-center items-start gap-3 text-gray-400'>
        {
          middleList.map((item)=> (
            <FooterMiddleList 
            key={item._id}
              title={item.title}
              ListItem={item.ListItem}
            />
          )
          )
        }
        </div>
        </div>
      </div>
      {/* =============Top end here =========== */}
      {/* =============Bottom Start here =========== */}
      <div className='w-full flex gap-6 items-center justify-center py-6'>
<div>
  <img className='w-20 pt-3' src={logo} alt="logo" />
</div>
<div className='flex gap-2'>
<p className='flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2
 py-1'>English</p>
 </div>
 <div className='flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2
 py-1'>
  <img className='w-8' src={india} alt="flagImg" /><p>India</p>
 </div>

      </div>
      {/* =============bottom end here =========== */}
    </div>
  )
}

export default FooterMiddle
