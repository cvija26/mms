
import GreenTable from '../components/GreenTable';
import RedTable from '../components/RedTable';
import YellowTable from '../components/YellowTable';
import React, { useEffect, useState } from "react";

import "../styles/App.css"
import axios from "axios";
  
function createData(name, username, email, phone, website) {
 return { name, username, email, phone, website };
}
  
const rows = [];


export default function Home() {
 
    

 const [data, setData] = useState([]);
  
 useEffect(() => {
   axios
     .get("https://jsonplaceholder.typicode.com/users")
     .then((res) => {
       setData(res.data);
       
     })
     .catch((error) => {
      
     });
 }, []);
  
 return (
  <div className="container">
    <div className="container-1">
    <div className="flex-1"><GreenTable data={data}/></div>
     </div>
   <div className="container-2">
   <div className="flex-2"><YellowTable data={data}/></div>
   <div className="flex-3"><RedTable data={data}/></div>
    </div>
    </div>
    

 );
}