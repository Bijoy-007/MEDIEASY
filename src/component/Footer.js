import { Container, Row, Col } from "react-bootstrap";
// import { FaHospitalSymbol } from "react-icons/fa";
const Footer = () => {
   const date = new Date();
   const year = date.getFullYear();
   return (
      <Container
         style={{
            backgroundColor: "black",
            padding: "2%",
            textAlign: "center",
            color: "white",
         }}
      >
         <Row lg={6} style={{ textDecoration: "none" }}>
            <Col md={6}>
               <a href="/">Home</a>
            </Col>

            <Col md={6}>
               <a href="https://medieasy-hospital.netlify.app/">Admin Portal</a>
            </Col>
         </Row>
         <p>Copyright@{year}</p>
         <p>Made with 💖 by CodeStars</p>
      </Container>
   );
};

export default Footer;
