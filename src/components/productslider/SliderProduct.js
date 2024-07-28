import React from 'react';

function SliderProduct() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex overflow-x-scroll scrollbar-hide gap-4 mt-3">
        {/* List of images */}
        <div className="flex-shrink-0 w-40"><img src="https://m.media-amazon.com/images/I/813dNK7+jmL._AC_SY200_.jpg" alt="img 01" className="w-full h-auto" /><p>img 01</p></div>
        <div className="flex-shrink-0 w-40"><img src="https://m.media-amazon.com/images/I/716l31Ldo5L._AC_SY200_.jpg" alt="img 02" className="w-full h-auto" /><p>img 02</p></div>
        <div className="flex-shrink-0 w-40"><img src="https://m.media-amazon.com/images/I/61Nr1kankxL._AC_SY200_.jpg" alt="img 03" className="w-full h-auto" /><p>img 03</p></div>
        <div className="flex-shrink-0 w-40"><img src="https://m.media-amazon.com/images/I/61O3+fkYeRL._AC_SY200_.jpg" alt="img 04" className="w-full h-auto" /><p>img 04</p></div>
        <div className="flex-shrink-0 w-40"><img src="https://m.media-amazon.com/images/I/617UyLjOhQL._AC_SY200_.jpg" alt="img 05" className="w-full h-auto" /><p>img 05</p></div>
        <div className="flex-shrink-0 w-40"><img src="https://m.media-amazon.com/images/I/912YrMqFzHL._AC_SY200_.jpg" alt="img 06" className="w-full h-auto" /><p>img 06</p></div>
        <div className="flex-shrink-0 w-40"><img src="https://m.media-amazon.com/images/I/81FClXF4G1L._AC_SY200_.jpg" alt="img 07" className="w-full h-auto" /><p>img 07</p></div>

        {/* Repeat images to enable scrolling */}
        <div className="flex-shrink-0 w-40"><img src="https://m.media-amazon.com/images/I/813dNK7+jmL._AC_SY200_.jpg" alt="img 01" className="w-full h-auto" /><p>img 01</p></div>
        <div className="flex-shrink-0 w-40"><img src="https://m.media-amazon.com/images/I/716l31Ldo5L._AC_SY200_.jpg" alt="img 02" className="w-full h-auto" /><p>img 02</p></div>
        <div className="flex-shrink-0 w-40"><img src="https://m.media-amazon.com/images/I/61Nr1kankxL._AC_SY200_.jpg" alt="img 03" className="w-full h-auto" /><p>img 03</p></div>
        <div className="flex-shrink-0 w-40"><img src="https://m.media-amazon.com/images/I/61O3+fkYeRL._AC_SY200_.jpg" alt="img 04" className="w-full h-auto" /><p>img 04</p></div>
        <div className="flex-shrink-0 w-40"><img src="https://m.media-amazon.com/images/I/617UyLjOhQL._AC_SY200_.jpg" alt="img 05" className="w-full h-auto" /><p>img 05</p></div>
        <div className="flex-shrink-0 w-40"><img src="https://m.media-amazon.com/images/I/912YrMqFzHL._AC_SY200_.jpg" alt="img 06" className="w-full h-auto" /><p>img 06</p></div>
        <div className="flex-shrink-0 w-40"><img src="https://m.media-amazon.com/images/I/81FClXF4G1L._AC_SY200_.jpg" alt="img 07" className="w-full h-auto" /><p>img 07</p></div>
      </div>
    </div>
  );
}

export default SliderProduct;
