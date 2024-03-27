import React, { useState } from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section 
    className="flex relative flex-col justify-center items-start" 
    style={{ 
      backgroundImage: "url('https://twovaultvintage.com/cdn/shop/files/IMG_4027-2.jpg?v=1690296288&width=2000')", 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat' ,
      backgroundColor: "rgba(0, 0, 0, 0.5)" 
    }}
    >
      <div className="bg-black bg-opacity-65 px-16 py-20" style={{ width: '105%', height: '100%' }}>
        <div className="flex flex-col mt-32 mb-28 ml-44 max-w-full w-[480px] max-md:my-10">
          <header className="text-3xl font-bold tracking-widest text-white max-md:max-w-full">
            <h1 className="text-4xl font-medium">
              Vintage Boutique Store Online
            </h1>
            <p className="text-lg font-medium">
              The all-in-one platform to buy & sell vintage and designer fashion securely.
            </p>
          </header>
          <Link
            to="/product"
            className={`justify-center self-start px-10 py-3.5 mt-3.5 text-xs font-medium tracking-wide text-black whitespace-nowrap bg-white rounded-3xl max-md:px-5 ${isHovered ? 'hover:bg-gray-200' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
