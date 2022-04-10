import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
   const navigate = useNavigate();
   return (
      <div style={{ textAlign: "center", padding: "5rem" }}>
         <h1>Not Found</h1>
         <Button
            onClick={() => {
               navigate("/");
            }}
            variant="success"
            size="lg"
         >
            Go Back
         </Button>
      </div>
   );
};
export default NotFound;
