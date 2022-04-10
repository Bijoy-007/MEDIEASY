import { Container, Row, Col } from "react-bootstrap";
import { FaHospitalSymbol } from "react-icons/fa";
const Feature = () => {
   return (
      <div style={{ backgroundColor: "white" }}>
         <h2 style={{ padding: "1%" }}>
            Why Book IRCTC Train Tickets With Confirmtkt?
         </h2>
         <Container>
            <Row sm={6} style={{ margin: "2%" }}>
               <Col style={{ display: "flex" }} lg={6}>
                  <FaHospitalSymbol size="100px" marginRight="5px" />
                  <div>
                     <h3>Get Confirmed IRCTC Ticket</h3>
                     <p>
                        With our same train alternates and prediction feature,
                        increase your chances of getting confirm IRCTC train
                        tickets.
                     </p>
                  </div>
               </Col>
               <Col style={{ display: "flex" }} lg={6}>
                  <FaHospitalSymbol size="100px" marginRight="5px" />
                  <div>
                     <h3>Get Confirmed IRCTC Ticket</h3>
                     <p>
                        With our same train alternates and prediction feature,
                        increase your chances of getting confirm IRCTC train
                        tickets.
                     </p>
                  </div>
               </Col>
            </Row>
            <Row sm={6} style={{ margin: "2%" }}>
               <Col style={{ display: "flex" }} lg={6}>
                  <FaHospitalSymbol size="100px" marginRight="5px" />
                  <div>
                     <h3>Get Confirmed IRCTC Ticket</h3>
                     <p>
                        With our same train alternates and prediction feature,
                        increase your chances of getting confirm IRCTC train
                        tickets.
                     </p>
                  </div>
               </Col>
               <Col style={{ display: "flex" }} lg={6}>
                  <FaHospitalSymbol size="100px" marginRight="5px" />
                  <div>
                     <h3>Get Confirmed IRCTC Ticket</h3>
                     <p>
                        With our same train alternates and prediction feature,
                        increase your chances of getting confirm IRCTC train
                        tickets.
                     </p>
                  </div>
               </Col>
            </Row>
         </Container>
      </div>
   );
};

export default Feature;
