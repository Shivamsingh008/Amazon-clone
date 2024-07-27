import React from "react";
import Banner from "../components/home/Banner";
import Card from "../components/Card";
import Card1 from "../components/Card1";
import { data } from "../constants/index";
import SliderProduct from "../components/productslider/SliderProduct";


function Home() {
  return (
    <div className="">
      {/* Banner */}
      <div className="">
        <Banner />
      </div>

      {/* Content over Banner */}
      <div className="relative bg-[#e3e6e6] bg-gradient-to-b from-gray-100 to-gray-400 from-[30px] to-30% mt-[-90px]"> {/* Adjust mt value if needed */}
      
        <div className="grid ">
       
        <div className="absolute border bg-[#f5f6f6] m-4 p-3 w-[1440px] text-center text-sm font-semibold mt-[-180px]">
          You are on amazon.com. You can also shop on Amazon India for millions of
            products with fast local delivery.
            <a
              className="text-blue-900 text-sm hover:underline cursor-pointer"
              href="https://www.amazon.in/?ref=aisgw_intl_stripe_in"
            >
              Click here to go to amazon.in
            </a>
            
          </div>
          <div className="absolut max-w-screen-2xl w-full h-auto grid grid-cols-4 gap-4 pl-4 pr-4 mt-[-100px]">
          {data.map((Item, index) => (
            <div key={index} className="border bg-white h-[412px] ">
              {Item.card === 4 && <Card item={Item} />}
              {Item.card === 1 && <Card1 item={Item} />}
             
            </div>
          ))}
          </div>
           <div className=" border border-gray-50 items-center"> 
           <SliderProduct/>
           </div> 
        </div>
      </div>
     </div>
  );
}

export default Home;