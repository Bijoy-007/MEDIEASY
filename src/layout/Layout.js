import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Layout = (props) => {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #96deda, #50c9c3)",
      }}
    >
      <Navbar />

      {props.children}

      <Footer />
    </div>
  );
};

export default Layout;
