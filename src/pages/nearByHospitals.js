import { useState,useEffect,} from "react";
import { useParams } from "react-router-dom";
import { http } from "../helper/Http";
import apis from "../helper/Apis";
import Layout from "../layout/Layout";
import { Col, Container, Row, Dropdown } from "react-bootstrap";
import MyLocationData from "../component/MyLocation";

const NearByHospitals = () => {
  const { lat, long } = useParams();
  const [rad, setRad] = useState(5);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    // alert("dsad")
    const fetchDeatails = async () => {

      const res = await http(`${apis.NEAR_BY_HOSPITAL}`, {
        lat: lat,
        lon: long,
        radius: +rad*1000,
      });
      if (!res.data.status) {
        setDetails(null);
      }
      setDetails(res.data.data);
    };
    fetchDeatails();
  }, [lat, long,rad]);
  // console.log(details[0]);

  return (
    <Layout>
      <Container
        style={{
          marginTop: "30px",
        }}
      >
        <Row>
          <h1>See your Nearest Hospitals ....</h1>
          <hr></hr>
        </Row>
        <Row>
          <Col sm={4}>
            <Dropdown onSelect={(value)=>{
              setRad(value)
            }}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey ={5}>5</Dropdown.Item>
                <Dropdown.Item eventKey ={10}>10</Dropdown.Item>
                <Dropdown.Item evenKey  = {15}>15</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col sm={8}>
            {details ? (<MyLocationData data={details ? details[0] : []}/>):null}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default NearByHospitals;
