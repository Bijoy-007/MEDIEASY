import Navbar from "../component/Navbar";

const Layout = (props) => {
   return (
      <>
         <Navbar />
         {props.children}
      </>
   );
};

export default Layout;
