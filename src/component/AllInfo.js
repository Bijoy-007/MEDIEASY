import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";

const AllInfo = (props) => {
   const { placeId, detail } = props.onData;

   const operations = detail?.availableOperations
      ? detail?.availableOperations
      : [];

   return (
      <>
         <Container fluid="sm" style={{ margin: "7%" }}>
            <h1>{detail?.hospitalName}</h1>
            <Row style={{ margin: "2%" }}>
               <Col>Contact NO - {detail?.hospitalNumber}</Col>
               <Col>Address - {detail?.hospitalAddress}</Col>
               <Col>Address - {detail?.hospitalAddress}</Col>
               <Col>Helpline - {detail?.helpline}</Col>
            </Row>
            <Row>
               <Col>Address - {detail?.hospitalAddress}</Col>
               <ListGroup>
                  {operations.map((opt, ind) => {
                     return <ListGroupItem key={ind}>{opt}</ListGroupItem>;
                  })}
               </ListGroup>
            </Row>
         </Container>
      </>
   );
};

export default AllInfo;