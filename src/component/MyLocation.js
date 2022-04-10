import Loading from "./Loading";
import { useState } from "react";
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
  const [isLoading, setIsLoading] = useState(false);

  console.log(props);
  let unregistered= props.data.getUnavailableHospitals;
  console.log(props.data.getUnavailableHospitals);
  let registered = props.data.getAvailableHospitalsObj;

  return <>
   {registered.length ? registered.map((ele)=>
    (<Card style= {{ margin:'2%'}}>
      <Card.Header>{ele.name}<Badge bg="secondary" style={{float:'right'}}> Registered</Badge></Card.Header>
      <Card.Body>
        <Card.Title>{ele.address.name} <Badge bg="secondary">Not Registered</Badge></Card.Title>
        <Card.Text>
          {ele.display_name}
        </Card.Text>
        <Button variant="primary">Details</Button>
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
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>)
  })}
  </>;
};

export default MyLocationData;
