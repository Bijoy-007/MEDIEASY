import { Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SearchHospitals from "./SearchHospitals";
import classes from "./Landing.module.css";
import Feature from "./Feature";
import Footer from "./Footer";

const Landing = () => {
   const navigate = useNavigate();

   const searchHospital = () => {
      navigate("/search_hospital");
   };

   return (
      <Container className={classes.contain}>
         <Row style={{ display: "flex" }}>
            <Col className={classes.searchBar} sm={8}>
               <SearchHospitals />
               {/* <Button style={{ margin: "5px" }} variant="success"></Button> */}
            </Col>
            <Col style={{ textAlign: "center", margin: "10% 0" }} st sm={4}>
               <Button variant="success" onClick={searchHospital}>
                  Allow Location
               </Button>
            </Col>
         </Row>
         <Feature />
         <Footer />
      </Container>
   );
};

export default Landing;
