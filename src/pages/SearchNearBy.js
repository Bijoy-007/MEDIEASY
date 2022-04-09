import { useState, useEffect } from "react";
import apis from "../helper/Apis";
import { http } from "../helper/Http";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import Loading from "../component/Loading";

const SearchNearBy = () => {
   const [query, setQuery] = useState("");
   const [result, setResult] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      if (query) {
         const fetchData = async () => {
            setIsLoading(true);

            const res = await http(apis.SEARCH_PLACE, { query });
            if (!res.data.status) {
               Swal.fire("Error!", "Failed to fetch!", "error");
            }
            setResult(res.data.data);
            setIsLoading(false);
         };
         fetchData();
      }
   }, [query]);

   const searchData = (query) => {
      setQuery(query);
   };

   return (
      <>
         <div style={{ margin: "10%" }}>
            <h2>Search Hospitals</h2>
            <label>
               Enter Hospital Name:
               <input
                  type="text"
                  value={query}
                  onChange={(e) => searchData(e.target.value)}
               />
            </label>
            <br />
            <ListGroup defaultActiveKey="#link1">
               <ListGroup.Item>
                  {result.map((ele, ind) => {
                     return (
                        <li>
                           <Link to="/my_location" key={ind}>
                              {ele.display_name}
                           </Link>
                        </li>
                     );
                  })}
               </ListGroup.Item>
            </ListGroup>
         </div>
         {isLoading && <Loading />}
      </>
   );
};

export default SearchNearBy;
