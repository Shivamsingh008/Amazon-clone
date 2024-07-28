import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdArrowDropDown } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { logo } from "../../assets/index";
import { allItems } from "../../constants";
import { GiShoppingCart } from "react-icons/gi";
import Headerbottom from "./Headerbottom";

function Header() {
  const [showAll, setShowAll] = useState(false)


  console.log(showAll);
  return (
    <div className=" w-[1473px] sticky top-0 z-50 ">
      <div className="max-w-[1473px] w-[1473px]  bg-amazon_blue text-white px-4 py-3 flex items-center gap-4 "> 
        {/* =========== Image Start here ========== */}
        <div className="headerHover">
          <img className="w-24 mt-2" src={logo} alt="logo" />
        </div>
        {/* =========== Image End here ========== */}

        {/* =========== Deliver Start here ========== */}
        <div className="headerHover"> 
          <CiLocationOn />
          <p className="text-sm text-lightText font-light flex flex-col">
            {" "}
            Deliver to{" "}
            <span className="text-sm font-semibold -mt-1 text-whiteText">
              Oman
            </span>
          </p>
        </div>
        {/* =========== Deliver End here ========== */}

        {/* =========== Search Start here ========== */}
        <div className="h-10 rounded-md flex flex-grow relative ">
          <span
            onClick={() => setShowAll(!showAll)}
            className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md"
          >
            All <span className=" flex"></span>
            <MdArrowDropDown />
          </span>
          {showAll && (
            <div>
              <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-50">
               

              {
                allItems.map((item)=>(
                  <li className="text-sm tracking-wide font-titlefont border-b-[1.9px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200" key={item._id}
                  >
                  {item.title}</li>

                ))
              }
                
              </ul>
              <div className=" w-[750px] flex justify-center items-center h-full">
                <input
                  className=" h-full border text-base text-amazon_blue flex-grow outline-none border-none px-2"
                  type="text"
                />
                
              </div>

              {/* <span className="w-12 flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-be-md">
              <IoSearch /></span> */}
            </div>
          )}
          {!showAll && (
            <>
              <div className="w-[750px] flex justify-center items-center h-full">
                <input
                  className=" h-full border border-red-600  text-base text-amazon_blue flex-grow outline-none border-none px-2"
                  type="text"
                />
                
              </div>
            </>
            
          )}
          <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-be-md" >
                <IoSearch />
                </span>
          {/* =========== Search End here ========== */}
          {/* =========== Signin Start here ========== */}
        
          <div className="flex flex-col items-start justify-center ml-4 px-2 h-[95%] text-sm border  border-transparent hover:border-white cursor-pointer duration-100 ">
            <p className="text-xs text-lightText font-light">Hello Sign in </p>
            <p className="flex text-sm font-semibold -mt-1 text-whiteText ">
              Accounts & Lists{" "}
              <span>
                {" "}
                <MdArrowDropDown />
              </span>
            </p>
          </div>

          {/* =========== Signin End here ========== */}

          {/* =========== Orders Start here ========== */}
          <div className="flex flex-col items-start justify-center ml-4 px-2 h-[95%] text-sm border  border-transparent hover:border-white cursor-pointer duration-100 ">
            <p className="text-xs text-lightText font-light">Returns</p>
            <p className="flex text-sm font-semibold -mt-1 text-whiteText">
              & Orders
            </p>
          </div>
          {/* =========== Orders End here ========== */}

          {/* =========== Cart Start here ========== */}

          <div className="px-2 h-[90%] flex items-center border border-transparent border-cover relative hover:border-white cursor-pointer duration-100">
          <GiShoppingCart  className="text-[33px]"/>
          <p className="text-xs font-semibold mt-3 text-whitetext  flex flex-col">
            {" "}cart
            <span className="absolute flex text-xs -top-1 left-7 mt-1 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full justify-center items-center">
              0
            </span>
          </p>
        </div>
        
          {/* =========== Cart End here ========== */}
        </div>
      </div>


      <Headerbottom/>
    </div>
  );
}
export default Header;
