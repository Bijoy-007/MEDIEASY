import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import DetailsPage from "../pages/Details";
import NearByHospitals from "../pages/nearByHospitals";

import Detail from "../pages/Details";

const AllRoutes = () => {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route
                  path="/hostpital_details/:placeId"
                  element={<DetailsPage />}
               />
               <Route
                  path="/my_location/:lat/:long"
                  element={<NearByHospitals/>}
               />
               <Route path="/hostpital_details/:placeId" element={<Detail />} />
            </Routes>
         </BrowserRouter>
      </>
   );
};

export default AllRoutes;
