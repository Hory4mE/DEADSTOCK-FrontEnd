import React, { useState , useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { handleSearchInput } from "../../context/security";
import ErrorModal from "./ErrorModal";
import { useUserData } from '../../context/AuthContext';


const Logo = () => (
  <button>
    <div className="grow self-stretch text-3xl font-bold tracking-widest">
      <Link to={`/`}> DEADSTOCK</Link>
    </div>
  </button>
);

const NavItem = ({ alt, to, children }) => { 
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link 
      to={to} 
        alt={alt}
        className="hover:underline"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ textDecoration: isHovered ? 'underline' : 'none' }}
      >
      {children}
    </Link>
  );
};

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);
  const navigate = useNavigate();
  const sanitizeInput = (input) => {
    return input
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#x27;")
      .replace(/\//g, "&#x2F;");
  };
 
  const handleSearch = () => {
    try {
      // Pass the searchQuery and navigate function to handleSearchInput
      handleSearchInput(searchQuery, (sanitizedQuery) => {
    
        navigate(`/product?search=${sanitizeInput(sanitizedQuery)}`);
      });
    } catch (error) {
      console.error("Error:", error.message);
      setShowErrorModal(true); // Show the error modal
    }
  };

  const dismissErrorModal = () => {
    setShowErrorModal(false); // Hide the error modal
  };

  return (
    <div className="flex flex-col flex-1 justify-center self-stretch">
      {showErrorModal && (
        <ErrorModal
          errorMessage="Invalid keyword"
          onClose={dismissErrorModal}
        />
      )}
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="flex gap-5 justify-between px-5 py-1.5 bg-white rounded-2xl border border-black border-solid">
        <input
          type="text"
          id="search"
          placeholder="Search"
          className="my-auto focus:outline-none"
          aria-label="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c0aa996fc4584d547a77379de1f22e4cb30e4900b5b7d1f5c7ceed493d66ec8?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
            alt=""
            className="shrink-0 aspect-square w-[18px]"
          />
        </button>
      </div>
    </div>
  );
};

const IconButton = ({ src, alt, to }) => { 
  return (
    <button>
      <Link to={to}> {/* Use Link instead of <a> */}
        <img
          loading="lazy"
          src={src}
          alt={alt}
          className="shrink-0 self-stretch my-auto aspect-square w-[18px]"
        />
      </Link>
    </button>
  );
};

const DropdownMenu = ({ items, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className="absolute z-10 top-full left-0 w-36 mt-2 py-2 bg-white rounded shadow-lg"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.map((item, index) => (
        <div key={index} className="px-4 py-2 hover:bg-gray-100">
          <Link to={`/product?category=${item}`} alt={item}>{item}</Link>
        </div>
      ))}
    </div>
  );
};

const DropDownIconButton = ({ src, alt, to, dropdownItems }) => { 
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setShowDropdown(true)}>
        <Link to={to}> {/* Use Link instead of <a> */}
          <img
            loading="lazy"
            src={src}
            alt={alt}
            className="shrink-0 self-stretch my-auto aspect-square w-[18px]"
          />
        </Link>
      {showDropdown && (
        <DropdownMenu
          items={dropdownItems}
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        />
      )}
    </div>
  );
};

function Header() {
  const { isLoginModalOpen } = useUserData();
  const [isProfileHovered, setIsProfileHovered] = useState(false);
  const [isCartHovered, setIsCartHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);



  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset >= 200) { 
      setIsScrolled(true);
    } else if (offset < 200) { 
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header style={{ backgroundColor: 'white' }} className={`flex justify-center items-center px-16 py-8 w-full text-sm tracking-wider text-black whitespace-nowrap shadow-sm max-md:px-5 max-md:max-w-full transition-transform duration-500 ${isScrolled ? '-translate-y-full top-0 ' : 'translate-y-[-10]'}`}>
      <div className="flex gap-5 justify-between w-full max-w-[1147px] max-md:flex-wrap max-md:max-w-full">
        <nav className="flex gap-5 justify-between items-center my-auto max-md:flex-wrap max-md:max-w-full">
          <Logo />
          <div className="flex gap-2 self-stretch my-auto">
            <NavItem alt="Clothing" to="/product?category=Clothing">
              Clothing
            </NavItem>
            <DropDownIconButton
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca9a5e45fd2df9e49e64483dc0f5a809255417ad46f565b20f629cbe90d5b1d4?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
              alt="Clothing icon"
              dropdownItems={["Shirt", "Jacket"]}
              onClick={DropDownIconButton}
            />
          </div>
          <NavItem alt="Shoes" to="/product?category=Shoes"> {/* Change href to to */}
            Shoes
          </NavItem>
          <NavItem alt="Accessories" to="/product?category=Accessories"> {/* Change href to to */}
            Accessories
          </NavItem>
        </nav>
        <div className="flex gap-5 justify-between items-center">
          <SearchBar />  
          {
            isLoginModalOpen ? 
            <IconButton
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/958a286ffd0e768cef7c402512f9df78b2526d5adad0c72e0dfb55b20703ff4c?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
              alt="User profile"
              to="/account" // Change href to to
              style={{ textDecoration: isProfileHovered ? 'underline' : 'none' }}
              onMouseEnter={() => setIsProfileHovered(true)}
              onMouseLeave={() => setIsProfileHovered(false)}
            />
            :
            <IconButton
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/958a286ffd0e768cef7c402512f9df78b2526d5adad0c72e0dfb55b20703ff4c?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
              alt="User profile"
              to="/login" // Change href to to
              style={{ textDecoration: isProfileHovered ? 'underline' : 'none' }}
              onMouseEnter={() => setIsProfileHovered(true)}
              onMouseLeave={() => setIsProfileHovered(false)}
            />
            
          }
          <IconButton
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3be0dbe071019cdd38d2d5fea243d0b5d03b797052b9cb7708b862fd40b2671?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
            alt="Shopping cart"
            to="/cart" // Change href to to
            style={{ textDecoration: isCartHovered ? 'underline' : 'none' }}
            onMouseEnter={() => setIsCartHovered(true)}
            onMouseLeave={() => setIsCartHovered(false)}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;