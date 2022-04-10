import { Spinner } from "react-bootstrap";

const Loading = () => {
   return (
      <>
         <div
            style={{
               margin: "10%",
               textAlign: "center"
            }}
         >
            <Spinner animation="border" size ='xl' />
         </div>
      </>
   );
};
export default Loading;
