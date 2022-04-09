import Navbar from "../component/Navbar";

const Layout = (props) => {
   return (
      <>
         <Navbar />
         <div style={{ border: "2px solid blue", padding: "0" }}>
            {props.children}
         </div>
      </>
   );
};

export default Layout;
