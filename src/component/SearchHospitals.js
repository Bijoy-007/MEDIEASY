import { useState, Fragment } from "react";
import apis from "../helper/Apis";
import { http } from "../helper/Http";
import Swal from "sweetalert2";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { useNavigate } from "react-router-dom";

const SearchHospitals = () => {
   const [isLoading, setIsLoading] = useState(false);
   const [options, setOptions] = useState([]);
   const navigate = useNavigate();

   const handleSearch = async (query) => {
      setIsLoading(true);

      const res = await http(apis.SEARCH_PLACE, { query });
      if (!res.data.status) {
         Swal.fire("Error!", "Failed to fetch!", "error");
      }

      setOptions(res.data.data);
      setIsLoading(false);
   };

   const selectHandler = async (data) => {
      const placeId = data[0].osm_id;
      const name = data[0].display_name;
      navigate(`/hostpital_details/${placeId}?name=${name}`);
   };

   const filterBy = () => true;

   return (
      <div
         style={{
            padding: "2rem",
         }}
      >
         <AsyncTypeahead
            filterBy={filterBy}
            id="search-hospital"
            isLoading={isLoading}
            labelKey="display_name"
            onChange={selectHandler}
            minLength={3}
            onSearch={handleSearch}
            options={options}
            placeholder="Search for a Hospital ..."
            renderMenuItemChildren={(data, props) => (
               <Fragment>
                  <img
                     alt={data.display_name}
                     src={data.icon}
                     style={{
                        height: "24px",
                        marginRight: "10px",
                        width: "24px",
                     }}
                  />
                  <span>{data.display_name}</span>
               </Fragment>
            )}
         />
      </div>
   );
};

export default SearchHospitals;
