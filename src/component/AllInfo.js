import { useState } from "react";
import { Container, Row, Col, FormCheck, Badge } from "react-bootstrap";
import moment from "moment";
import { FcCheckmark } from "react-icons/fc";

const AllInfo = (props) => {
   const { detail, name } = props.onData;
   const [update, setUpdate] = useState(true);

   const hospitalName = `${name.split(" ")[0]} ${name.split(" ")[1]} ${
      name.split(" ")[2]
   }`;

   const time = moment(detail?.updatedAt).format();
   const updatedTime = moment(time).fromNow();
   const tempTime = moment().subtract(12, "hours");

   if (moment(updatedTime).isBefore(tempTime)) {
      setUpdate(true);
   }

   return (
      <>
         <Container
            fluid="lg"
            style={{
               margin: "2% auto",
               backgroundColor: "#E0FFFF",
               borderRadius: "10px",
               padding: "2%",
            }}
         >
            <div style={{ textAlign: "center" }}>
               <h3>{hospitalName}</h3>
               <h5 style={{ color: "green" }}>
                  <FcCheckmark />
                  Authorized
               </h5>
            </div>
            <Row lg={4} style={{ margin: "2%" }}>
               <Col lg={8}>
                  <h5>Address</h5>
                  <p
                     style={{
                        backgroundColor: "white",
                        borderRadius: "5px",
                        padding: "1% 3%",
                     }}
                  >
                     {detail?.hospitalAddress}
                  </p>
               </Col>

               <Col lg={4}>
                  <h5>Last Updated </h5>
                  {update ? (
                     <p
                        style={{
                           backgroundColor: "white",
                           borderRadius: "5px",
                           padding: "1% 3%",
                        }}
                     >
                        {updatedTime}
                     </p>
                  ) : (
                     <p
                        style={{
                           backgroundColor: "grey",
                           color: "red",
                           borderRadius: "5px",
                           padding: "1% 3%",
                        }}
                     >
                        {updatedTime}
                     </p>
                  )}
               </Col>
            </Row>

            <Row lg={6} style={{ margin: "2%" }}>
               <Col lg={6}>
                  <h5>Contact NO</h5>
                  <p
                     style={{
                        backgroundColor: "white",
                        borderRadius: "5px",
                        padding: "1% 3%",
                     }}
                  >
                     {detail?.hospitalNumber}
                  </p>
               </Col>

               <Col lg={6}>
                  <h5>Helpline No</h5>
                  <p
                     style={{
                        backgroundColor: "white",
                        borderRadius: "5px",
                        padding: "1% 3%",
                     }}
                  >
                     {detail?.helpline}
                  </p>
               </Col>
            </Row>

            <Row lg={4} style={{ margin: "2%" }}>
               <Col lg={4}>
                  <h5>Beds types</h5>
                  {detail?.beds && (
                     <p>
                        {detail?.beds.map((ele, ind) => (
                           <Badge
                              style={{ padding: "1% 3%", margin: "auto 2%" }}
                              size="lg"
                              bg="success"
                              key={ind}
                           >
                              {ele.type} = {ele.vacancy}
                           </Badge>
                        ))}
                     </p>
                  )}
               </Col>

               <Col lg={4}>
                  <h5>Blood Types</h5>
                  {detail?.blood && (
                     <p>
                        {detail?.blood.map((ele, ind) => (
                           <Badge
                              style={{ padding: "1% 3%", margin: "auto 2%" }}
                              size="lg"
                              bg="success"
                              key={ind}
                           >
                              {ele}
                           </Badge>
                        ))}
                     </p>
                  )}
               </Col>
            </Row>

            <Row lg={4} style={{ margin: "2%" }}>
               <Col lg={4}>
                  <h5>Emergency Availability</h5>
                  {detail?.EmergencyAvailability ? (
                     <FormCheck
                        checked={false}
                        type="switch"
                        id="disabled-custom-switch"
                     />
                  ) : (
                     <FormCheck
                        checked={true}
                        type="switch"
                        id="disabled-custom-switch"
                     />
                  )}
               </Col>

               <Col lg={4}>
                  <h5>Ambulance Availability</h5>
                  {detail?.ambulanceAvailability ? (
                     <FormCheck
                        value="on"
                        checked={false}
                        type="switch"
                        id="disabled-custom-switch"
                     />
                  ) : (
                     <FormCheck
                        checked={true}
                        type="switch"
                        id="disabled-custom-switch"
                     />
                  )}
               </Col>
            </Row>
         </Container>
      </>
   );
};

export default AllInfo;
