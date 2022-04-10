import { useState, Fragment , useEffect, useReducer} from "react";
import { useParams } from "react-router-dom";
import { http } from "../helper/Http";
import apis from "../helper/Apis";

const NearByHospitals = () =>{
  const {lat, long} = useParams();
  const [rad ,setRad ] =useState(5000);
  const [details ,setDetails] =useState([])

  useEffect(()=>{
    const fetchDeatails = async () => {
      const res = await http(
         `${apis.NEAR_BY_HOSPITAL}`,{
           lat:lat,
           long:long,
           radius:rad
         }
      );
      if (!res.data.status) {
        setDetails(null);
     }
     setDetails(res.data.data);
   };
   fetchDeatails();
  },[lat,long])
  console.log(details);
  return (
    <>
    hello
    </>
  )
}

export default NearByHospitals