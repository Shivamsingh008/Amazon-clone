import React from 'react';

function SliderProduct() {
  return (
    <div className="relative w-full overflow-scroll overflow-x-scroll">
      <div className="flex  gap-4 p-2 mt-3 ">
      
        {/* List of images */}
        <div className="flex-shrink-0 w-70 hover:scale-105 duration-200"><img src="https://m.media-amazon.com/images/I/813dNK7+jmL._AC_SY200_.jpg" alt="img 01" className="w-full h-auto cursor-pointer hover:shadow-fuchsia-500 hover:shadow-lg" /></div>
        <div className="flex-shrink-0 w-70 hover:scale-105 duration-200"><img src="https://m.media-amazon.com/images/I/716l31Ldo5L._AC_SY200_.jpg" alt="img 02" className="w-full h-auto cursor-pointer hover:shadow-green-500 hover:shadow-lg" /></div>
        <div className="flex-shrink-0 w-70 hover:scale-105 duration-200"><img src="https://m.media-amazon.com/images/I/61Nr1kankxL._AC_SY200_.jpg" alt="img 03" className="w-full h-auto cursor-pointer hover:shadow-blue-400 hover:shadow-lg" /></div>
        <div className="flex-shrink-0 w-70 hover:scale-105 duration-200"><img src="https://m.media-amazon.com/images/I/61O3+fkYeRL._AC_SY200_.jpg" alt="img 04" className="w-full h-auto cursor-pointer hover:shadow-orange-400 hover:shadow-lg" /></div>
        <div className="flex-shrink-0 w-70 hover:scale-105 duration-200"><img src="https://m.media-amazon.com/images/I/617UyLjOhQL._AC_SY200_.jpg" alt="img 05" className="w-full h-auto cursor-pointer hover:shadow-amber-900  hover:shadow-lg" /></div>
        <div className="flex-shrink-0 w-70 hover:scale-105 duration-200"><img src="https://m.media-amazon.com/images/I/912YrMqFzHL._AC_SY200_.jpg" alt="img 06" className="w-full  cursor-pointer hover:shadow-pink-500 hover:shadow-lg h-auto" /></div>
        <div className="flex-shrink-0 w-70 hover:scale-105 duration-200"><img src="https://m.media-amazon.com/images/I/81FClXF4G1L._AC_SY200_.jpg" alt="img 07" className="w-full h-auto cursor-pointer hover:shadow-gray-500 hover:shadow-lg" /></div>

        {/* Repeat images to enable scrolling */}
        <div className="flex-shrink-0 w-70 hover:scale-105 duration-200"><img src="https://m.media-amazon.com/images/I/813dNK7+jmL._AC_SY200_.jpg" alt="img 01" className="w-full h-auto cursor-pointer hover:shadow-fuchsia-500 hover:shadow-lg" /></div>
        <div className="flex-shrink-0 w-70 hover:scale-105 duration-200"><img src="https://m.media-amazon.com/images/I/716l31Ldo5L._AC_SY200_.jpg" alt="img 02" className="w-full h-auto cursor-pointer hover:shadow-green-500 hover:shadow-lg" /></div>
        <div className="flex-shrink-0 w-70 hover:scale-105 duration-200"><img src="https://m.media-amazon.com/images/I/61Nr1kankxL._AC_SY200_.jpg" alt="img 03" className="w-full h-auto cursor-pointer hover:shadow-blue-400 hover:shadow-lg" /></div>
        <div className="flex-shrink-0 w-70 hover:scale-105 duration-200"><img src="https://m.media-amazon.com/images/I/61O3+fkYeRL._AC_SY200_.jpg" alt="img 04" className="w-full h-auto cursor-pointer hover:shadow-orange-400 hover:shadow-lg" /></div>
        <div className="flex-shrink-0 w-70 hover:scale-105 duration-200"><img src="https://m.media-amazon.com/images/I/617UyLjOhQL._AC_SY200_.jpg" alt="img 05" className="w-full h-auto cursor-pointer hover:shadow-amber-900 hover:shadow-lg" /></div>
        <div className="flex-shrink-0 w-70 hover:scale-105 duration-200"><img src="https://m.media-amazon.com/images/I/912YrMqFzHL._AC_SY200_.jpg" alt="img 06" className="w-full h-auto cursor-pointer hover:shadow-pink-500 hover:shadow-lg " /></div>
        <div className="flex-shrink-0 w-70 hover:scale-105 duration-200"><img src="https://m.media-amazon.com/images/I/81FClXF4G1L._AC_SY200_.jpg" alt="img 07" className="w-full h-auto cursor-pointer hover:shadow-gray-500 hover:shadow-lg" /></div>
      </div>
    </div>
  );
}

export default SliderProduct;
