import React, { useEffect , useState } from "react";
import AmountCard from "./AmountCard";
import TableRecentOrder from "./TableRecentOrder"
import AdminNav from "../AdminNav"
import CustomerSatisfaction from "./CustomerSatisfaction";
import axios from "axios";

import { config } from "../../../apiData/api";

function Compo_dashboard() {
    const [ total , setTotal ] = useState([]);
    const [ monthly , setMonthly ] = useState([]);
    const [ categories , setCategories] = useState([]);

    
    useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem('access_token');
        const response = await axios.get(
          `${config.api}/user/get-dashboard` , 
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        
        console.log(response.data);
        if (response.data) {
            setTotal(response.data.allTotal);
            setMonthly(response.data.totalMonthly);
            setCategories(response.data.topCategories);
            console.log("Fetch all Categories Success");
        } else {
            console.log("No data received from the API.");
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
    }, []);

    console.log(categories)
    return (
        <div>
            <AdminNav />
            <AmountCard total = {total}/>
            <TableRecentOrder/>
            <CustomerSatisfaction monthly = {monthly} categories = {categories}/>
            <p>Hello</p>
        </div>
    );
}

export default Compo_dashboard;
