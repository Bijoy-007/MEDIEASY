import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NearByHospitals from "../pages/nearByHospitals";

import Detail from "../pages/Details";
import NotFound from "../pages/404";

const AllRoutes = () => {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route
                  path="/my_location/:lat/:long"
                  element={<NearByHospitals/>}
               />
               <Route path="/hostpital_details/:placeId" element={<Detail />} />
               <Route path="/404" element={<NotFound />} />
            </Routes>
         </BrowserRouter>
      </>
   );
};

export default AllRoutes;
