import { useState, Fragment , useEffect, useReducer} from "react";
import { useParams } from "react-router-dom";
import { http } from "../helper/Http";
import apis from "../helper/Apis";
import Layout from "../layout/Layout";
import { Col, Container ,Row} from "react-bootstrap";

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
    <Layout>
      <Container
      style={{
        marginTop:'30px'
      }}
       >
         <Row>
           <h1>See your NearBY Hospitals ....</h1>
         </Row>
        <Row>
          <Col sm={4}>
 
          </Col>
          <Col sm={8}>
dsfsdfdsf
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default NearByHospitals