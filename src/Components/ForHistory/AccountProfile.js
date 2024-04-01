import React from "react";
import AddressDetails from "./AddressDetails";
import OrderHistory from "./OrderHistory";
import { useNavigate } from 'react-router-dom';

function AccountProfile() {
  const navigate = useNavigate()
  return (
    <>
      <div>
        <div className="self-start mt-10 mb-8 ml-5 text-4xl font-light text-black max-md:mt-10 max-md:max-w-full">
          Account
        </div>
        <button 
            className="ml-5 justify-center items-center text-black px-12 py-3 bg-grey rounded-3xl border border-black border-solid max-md:px-5 hover:bg-gray-500"
            onClick={() => {
              localStorage.removeItem("access_token");
              localStorage.removeItem("refresh_token");
              navigate('/')
            }}
        >
            Logout
        </button>
      </div>
      <div className="flex flex-wrap mt-10">
          <div className="w-full md:w-2/3 ">
              <OrderHistory/>
          </div>
          <div className="w-full md:w-1/3 ">
              <AddressDetails/>
          </div>          
      </div>   
    </> 
  )
}

export default AccountProfile;
