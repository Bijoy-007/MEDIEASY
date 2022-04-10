import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { http } from "../helper/Http";
import apis from "../helper/Apis";
import Layout from "../layout/Layout";
import { Col, Container, Row, Dropdown } from "react-bootstrap";
import MyLocationData from "../component/MyLocation";
import Loading from "../component/Loading";

const NearByHospitals = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { lat, long } = useParams();
  const [rad, setRad] = useState(5000);
  const [details, setDetails] = useState(null);
  const radius = [5000,10000,15000];
  useEffect(() => {
    //alert("dsad");
    const fetchDeatails = async () => {
      try {
        setIsLoading(true);
        const res = await http(`${apis.NEAR_BY_HOSPITAL}`, {
          lat: lat,
          lon: long,
          radius: rad,
        });
        if (!res.data.status) {
          setDetails(null);
        }
        setDetails(res.data.data);
        setIsLoading(false);
        //alert("settting false");
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };
    fetchDeatails();
  }, [lat, long, rad]);
  // console.log(details[0]);

  return (
    <Layout>
      <Container
        style={{
          marginTop: "30px",
        }}
      >
        <Row>
          <h1>Your Nearest Hospitals</h1>
          <Dropdown
            onSelect={(value) => {
              console.log(value)
              setRad(value === null ? 15000 :radius[value]);
            }}
          >
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Select radius
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey={0}>5 km</Dropdown.Item>
              <Dropdown.Item eventKey={1}>10 km</Dropdown.Item>
              <Dropdown.Item evenKey={2}>15 km</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <hr></hr>
        </Row>
        <Row>
          <Col>
            {details ? (
              <MyLocationData data={details ? details[0] : []} />
            ) : null}
            {isLoading && <Loading />}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default NearByHospitals;
