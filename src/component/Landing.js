import { Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import landingImg from "../assets/hospital-bg.jpg";

const Landing = () => {
   const navigate = useNavigate();
   const findLocation = () => {
      navigate("/my-location");
   };
   const searchNearBy = () => {
      navigate("/search-nearby");
   };

   return (
      <Container
         style={{
            minWidth: "100vh",
            minHeight: "100vh",
            padding: "0",
            margin: "0",
            border: "2px solid black",
            background: "linear-gradient(to right, #96DEDA, #50C9C3)",
         }}
      >
         <Row style={{ display: "flex" }}>
            <Col style={{}} sm={8}>
               <Button
                  style={{ justifyContent: "center", alignItems: "center" }}
                  variant="info"
                  onClick={findLocation}
               >
                  Find My Location
               </Button>
            </Col>
            <Col sm={4}>
               <Button
                  style={{ justifyContent: "center", alignItems: "center" }}
                  variant="info"
                  onClick={searchNearBy}
               >
                  Seach Near by Place
               </Button>
            </Col>
         </Row>
      </Container>
   );
};

export default Landing;
