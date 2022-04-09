import { Spinner } from "react-bootstrap";

const Loading = () => {
   return (
      <>
         <div
            style={{
               margin: "10%",
               diplay: "flex",
               justifyContent: "center",
               alignItems: "center",
            }}
         >
            <Spinner animation="border" />
         </div>
      </>
   );
};
export default Loading;
