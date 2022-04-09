import { Container, Row, Col } from "react-bootstrap";
import { FaHospitalSymbol } from "react-icons/fa";
import { Link } from "react-router-dom";
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
               <Link to="/">Home</Link>
            </Col>

            <Col md={6}>
               <Link to="/">Admin Portal</Link>
            </Col>
         </Row>
         <p>Copyright@{year}</p>
         <p>Made with 💖 by CodeStars</p>
      </Container>
   );
};

export default Footer;
