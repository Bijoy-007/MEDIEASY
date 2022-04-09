import { Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SearchHospitals from "./SearchHospitals";

const Landing = () => {
   const navigate = useNavigate();
   // const findLocation = () => {
   //    navigate("/my_location");
   // };
   const searchHospital = () => {
      navigate("/search_hospital");
   };

   return (
      <Container
         style={{
            minWidth: "100vh",
            minHeight: "100vh",
            padding: "0",
            margin: "0",
            background: "linear-gradient(to right, #96DEDA, #50C9C3)",
         }}
      >
         <Row style={{ display: "flex" }}>
            <Col sm={8}>
               <SearchHospitals />
            </Col>
            <Col sm={4}>
               <Button
                  style={{ justifyContent: "center", alignItems: "center" }}
                  variant="info"
                  onClick={searchHospital}
               >
                  Seach Near by Place
               </Button>
            </Col>
         </Row>
      </Container>
   );
};

export default Landing;
