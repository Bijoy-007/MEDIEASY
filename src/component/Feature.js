import { Row, Col } from "react-bootstrap";
import {
  FcClock,
  FcAcceptDatabase,
  FcBullish,
  FcClearFilters,
} from "react-icons/fc";

import classes from "./Feature.module.css";

const Feature = () => {
  return (
    <div id="features" className={classes.wrapper}>
      <h2 className={classes["main-title"]}>Why MediEasy?</h2>
      <div>
        <Row sm={6} style={{ margin: "2%" }}>
          <Col lg={6}>
            <p>
              <FcClock size="3rem" />
            </p>
            <div>
              <h5>Time conserving</h5>
              <p>
                Time is precious, so we have designed our system to save you
                time. So that you act quickly in the time of emergency..
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <p>
              <FcAcceptDatabase size="3rem" />
            </p>
            <div>
              <h5>Wide variety of hospitals</h5>
              <p>
                We believe in diversity, so we have a wide variety of hospitals
                to choose from.
              </p>
            </div>
          </Col>
        </Row>
        <Row sm={6} style={{ margin: "2%" }}>
          <Col lg={6}>
            <p>
              <FcBullish size="3rem" />
            </p>
            <div>
              <h5>Get realtime data</h5>
              <p>
                We also try to provide realtime data to our users to help them
                taking right decisions in emergrncy .
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <p>
              <FcClearFilters size="3rem" marginRight="5px" />
            </p>
            <div>
              <h5>Get personalized results</h5>
              <p>
                We provide personalized results to our users to help them. We
                also provide details about the hospital based on their location.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Feature;
