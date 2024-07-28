import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
const SideNavContent =({title,one,two,three ,four})=> {
  return (
    <div>
       <div className="py-3 border-b-[1px] border-gray-200 ">
                <h3 className="text-lg font-titleFont font-semibold mb-1 px-6"> {title}</h3>
                <ul className='text-sm overflow-auto '>
                    <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">{one} <span><MdKeyboardArrowRight /></span></li>
                    <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer"> {two} <span><MdKeyboardArrowRight /></span></li>
                    <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer"> {three} <span><MdKeyboardArrowRight /></span></li>
                    <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">{four}<span><MdKeyboardArrowRight /></span>  </li>
                </ul>
                
            </div>
    </div>
  )
}

export default SideNavContent
