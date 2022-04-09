import Navbar from "../component/Navbar";

const Layout = (props) => {
   return (
      <>
         <Navbar />
         <div>{props.children}</div>
      </>
   );
};

export default Layout;
