import React from "react";
import { footerBottomItem } from "../../constants";

const FooterBottom = () => {
  return (
    <div className="w-full bg-footerBottom py-8">
      <div className="max-w-5xl mx-auto">
        <div className='w-full grid grid-cols-4 place-items-center gap-3 text-gray-400'>

          {footerBottomItem.map((item) => (
            <div className=" group cursor-pointer" key={item._id}>
              <h3 className="footerBottomText">{item.title}</h3>
              <p className="w-24 tracking-tight text-[11px] text-[#999] group-hover:underline leading-3 mt-1">{item.des}</p>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
