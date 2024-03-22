import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleSearchInput } from "../../context/security";
import ErrorModal from "./ErrorModal";

const Logo = () => (
  <button>
    <div className="grow self-stretch text-3xl font-bold tracking-widest">
      <a href={`/`}> DEADSTOCK</a>
    </div>
  </button>
);

const NavItem = ({ children, href }) => (
  <button>
    <div className="self-stretch my-auto">
      <a href={href}>{children}</a>
    </div>
  </button>
);

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    try {
      // Pass the searchQuery and navigate function to handleSearchInput
      handleSearchInput(searchQuery, (sanitizedQuery) => {
        // Navigate to the product page with the sanitized search query as a parameter
        navigate(`/product?search=${sanitizedQuery}`);
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
          className="my-auto"
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
const IconButton = ({ src, alt, href }) => {
  return (
    <button>
      <a href={href}>
        <img
          loading="lazy"
          src={src}
          alt={alt}
          className="shrink-0 self-stretch my-auto aspect-square w-[18px]"
        />
      </a>
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
          {item}
        </div>
      ))}
    </div>
  );
};

const DropDownIconButton = ({ src, alt, href, dropdownItems }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setShowDropdown(true)}>
      <button>
        <a href={href}>
          <img
            loading="lazy"
            src={src}
            alt={alt}
            className="shrink-0 self-stretch my-auto aspect-square w-[18px]"
          />
        </a>
      </button>
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
  return (
    <header className="flex justify-center items-center px-16 py-8 w-full text-sm tracking-wider text-black whitespace-nowrap bg-white shadow-sm max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between w-full max-w-[1147px] max-md:flex-wrap max-md:max-w-full">
        <nav className="flex gap-5 justify-between items-center my-auto max-md:flex-wrap max-md:max-w-full">
          <Logo />
          <div className="flex gap-2 self-stretch my-auto">
            <NavItem alt="Clothing" href="/product">
              Clothing
            </NavItem>
            <DropDownIconButton
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca9a5e45fd2df9e49e64483dc0f5a809255417ad46f565b20f629cbe90d5b1d4?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
              alt="Clothing icon"
              href="/product"
              dropdownItems={["Shirt", "Jacket"]}
            />
          </div>
          <NavItem alt="Shoes" href="/product?category=shoes">
            Shoes
          </NavItem>
          <NavItem alt="Accessories" href="/product">
            Accessories
          </NavItem>
        </nav>
        <div className="flex gap-5 justify-between items-center">
          <SearchBar />
          <IconButton
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/958a286ffd0e768cef7c402512f9df78b2526d5adad0c72e0dfb55b20703ff4c?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
            alt="User profile"
            href="/login"
          />
          <IconButton
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3be0dbe071019cdd38d2d5fea243d0b5d03b797052b9cb7708b862fd40b2671?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
            alt="Shopping cart"
            href="/cart"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
