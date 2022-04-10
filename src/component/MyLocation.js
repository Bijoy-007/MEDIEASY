import Loading from "./Loading";
import { Card, Button ,Badge } from "react-bootstrap";

const listCard = (props) =>{
  console.log(props.data)
  return(
    <Card>
        <Card.Header>{props.data.address}</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
  )
}

const MyLocationData = (props) => {
  console.log(props);
  let unregistered= props.data.getUnavailableHospitals;
  console.log(props.data.getUnavailableHospitals);
  let registered = props.data.getAvailableHospitalsObj;

  return <>
   {registered.length ? registered.map((ele)=>
    (<Card>
      <Card.Header>{ele.name}</Card.Header>
      <Card.Body>
        <Card.Title>{ele.address.name}</Card.Title>
        <Card.Text>
          {ele.display_name}
        </Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>)) : null
  }
  {unregistered.length && unregistered.map((ele)=>{
    return(<Card>
      <Card.Header>{ele.name} <Badge bg="secondary" style={{float:'right'}}>Not Registered</Badge></Card.Header>
      <Card.Body>
        <Card.Title>{ele.address.name}</Card.Title>
        <Card.Text>
          {ele.display_name}
        </Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>)
  })}
  </>;
};

export default MyLocationData;
