import { Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SearchHospitals from "./SearchHospitals";
import classes from "./Landing.module.css";
import Feature from "./Feature";
import MyLocation from "./MyLocation";
import { useEffect, useState } from "react";
const Landing = () => {
  const [lat, satLat] = useState(0);
  const [long, setLong] = useState(0);
  const navigate = useNavigate();
  const findLocation = async () => {
   navigator.geolocation.getCurrentPosition((position) => {
     console.log(position.coords.latitude);
     navigate(`/my_location/${position.coords.latitude}/${position.coords.longitude}`);
   });
 };

  const searchHospital = () => {
    navigate("/search_hospital");
  };

  return (
    <Container className={classes.contain}>
      <Row>
        <Col className={classes.searchBar} sm={8}>
          <SearchHospitals />
        </Col>
        <Col style={{ textAlign: "center", margin: "10% 0" }} st sm={4}>
          <Button variant="success" onClick={findLocation}>
            Allow Location
          </Button>
        </Col>
      </Row>
      <Feature />
    </Container>
  );
};

export default Landing;
