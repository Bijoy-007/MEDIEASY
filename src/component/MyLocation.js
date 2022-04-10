
import { Card, Button ,Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const MyLocationData = (props) => {
  const navigate = useNavigate();
  let unregistered= props.data.getUnavailableHospitals;

  let registered = props.data.getAvailableHospitalsObj;

  return <>
   {registered.length ? registered.map((ele)=>
    (<Card style= {{ margin:'2% auto'}}>
      <Card.Header>{ele.name}<Badge bg="secondary" style={{float:'right'}}> Registered</Badge></Card.Header>
      <Card.Body>
        <Card.Title>{ele.address.name} <Badge bg="secondary">{ele.distance/1000} km</Badge></Card.Title>
        <Card.Text>
          {ele.display_name}
        </Card.Text>
        <Button variant="primary" onClick= {()=>{
          navigate(`/hostpital_details/${ele.osm_id}?name=${ele.display_name}`)
        }} >Details</Button>
      </Card.Body>
    </Card>)) : null
  }
  {unregistered.length && unregistered.map((ele)=>{
    return(<Card style= {{margin:'2% auto'}}>
      <Card.Header>{ele.name} <Badge bg="secondary" style={{float:'right'}}>Not Registered</Badge></Card.Header>
      <Card.Body>
        <Card.Title style={{marginRight:'12px'}}>{ele.address.name}{'  '}<Badge bg="secondary" >{ele.distance/1000} km</Badge></Card.Title>
        <Card.Text>
          {ele.display_name}
        </Card.Text>
      </Card.Body>
    </Card>)
  })}
  </>;
};

export default MyLocationData;
