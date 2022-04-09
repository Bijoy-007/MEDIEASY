import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import DetailsPage from "../pages/HospitalDetails";

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
            </Routes>
         </BrowserRouter>
      </>
   );
};

export default AllRoutes;
