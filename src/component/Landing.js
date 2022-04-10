import { Button, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SearchHospitals from "./SearchHospitals";
import classes from "./Landing.module.css";
import Feature from "./Feature";


const Landing = () => {
  const navigate = useNavigate();
  const findLocation = async () => {
   navigator.geolocation.getCurrentPosition((position) => {
     console.log(position.coords.latitude);
     navigate(`/my_location/${position.coords.latitude}/${position.coords.longitude}`);
   });
 };
  
  
  return (
    <div id="home" className={classes["section-wrapper"]}>
      <div className={classes.contain}>
        <div className={classes.title}>
          <h2 className={classes["main-title"]}>MediEasy</h2>
          <h5 className={classes["title-description"]}>
            An integrated hospital detecting platform. FREE FOREVER.
          </h5>
        </div>

        <Card className={classes["card-wrapper"]}>
          <Row>
            <Col style={{ textAlign: "center" }} lg={6} md={6}>
              <h3 className={classes["heading"]}>
                Wanna search about a hospital?
              </h3>
              <SearchHospitals />
            </Col>
            <Col style={{ textAlign: "center" }} lg={6} md={6}>
              <h3 className={classes["heading"]}>
                Searching for nearby hospitals?
              </h3>
              <Button
                className={classes["location-btn"]}
                variant="success"
                onClick={findLocation}
              >
                Detect by location
              </Button>
            </Col>
          </Row>
        </Card>
      </div>
      <Feature />
    </div>
  );
};

export default Landing;
