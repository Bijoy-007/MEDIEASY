import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Details";

const AllRoutes = () => {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/hostpital_details/:placeId" element={<Detail />} />
            </Routes>
         </BrowserRouter>
      </>
   );
};

export default AllRoutes;
