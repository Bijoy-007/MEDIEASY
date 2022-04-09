import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SearchNearBy from "../pages/SearchNearBy";

const AllRoutes = () => {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/search-nearby" element={<SearchNearBy />} />
            </Routes>
         </BrowserRouter>
      </>
   );
};

export default AllRoutes;
