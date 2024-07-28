import React, { useEffect, useState , useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {motion} from "framer-motion"
import { RiAccountCircleFill } from "react-icons/ri";
import SideNavContent from "../SideNavContent";
import { IoCloseSharp } from "react-icons/io5";

const Headerbottom = () => {
  const ref=useRef();
  const [sidebar, setSidebar] = useState(false)
  useEffect(() =>{
    // eslint-disable-next-line no-unused-expressions
    document.body.addEventListener("click",(e)=>{
      if(e.target.contains(ref.current)){
        setSidebar(false)
      }
  })
  },[])
  return (
    <div className="w-full px-4 h-[36px] bg-amazon_light text-white flex items-center">
      {/* =============== listItems start here ============ */}
      <ul className="flex items-center gap-2 text-sm tracking-wide">
        <li
          onClick={() => setSidebar(true)}
          className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100  gap-1"
        >
          <GiHamburgerMenu className="flex items-center text-[18px]" /> All
        </li>
        <li className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
          Today's Deals
        </li>
        <li className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
          Customer Service
        </li>
        <li className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
          Gift Cards
        </li>
        <li className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
          Registry
        </li>
        <li className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
          Sell
        </li>
      </ul>
      {/* =============== listItems end here ============ */}
      {/* =============== sidenav start here ============ */}
      {sidebar && (
        <div className="w-full h-screen text-black  fixed top-0 left-0 bg-amazon_blue bg-opacity-50  ">
          <div className="w-full h-full relative ">
            <motion.div ref={ref} initial={{x:-500,opacity:0}} animate={{x:0, opacity:1 }} transition={{duration:0.9}}
            className=" w-[350px] h-full bg-white border border-black">
              <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center  gap-4">
                <RiAccountCircleFill className="text-[30px]" />
                <h3 className="font-titleFont font-bold text-lg tracking-wide">
                  {" "}
                  Hello, Mr_Hashtag{" "}
                </h3>
              </div>
              <SideNavContent
                title="Digital content & Devices"
                one="Amazon Music"
                two="Kindle E-readers & Books"
                three=" Amazon Appstore"
              />
              <SideNavContent
                title="Shop by Department"
                one="Electronics"
                two="Computers"
                three="Smart Home"
                four="Arts & Crafts"
              />
              <SideNavContent
                title="Programs & Features"
                one="Gift Cards"
                two="Shop by Interest"
                three="Amazon Live"
                four="International shopping"
              />
              <SideNavContent
                title="Help & Settings"
                one="Your Account"
                two="Customer service"
                three="Sign in"
              />
              <span onClick={() =>setSidebar(false)} className="cursor-pointer absolute top-0 left-[360px] w-10 h-10 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300">
              <IoCloseSharp />
            </span>
            </motion.div>
            
          </div>
        </div>
      )}

      {/* =============== sidenav end here ============ */}
    </div>
  );
};

export default Headerbottom;
