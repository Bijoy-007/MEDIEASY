import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { httpGet } from "../helper/Http";
import Loading from "./Loading";
import apis from "../helper/Apis";
import AllInfo from "./AllInfo";

const DetailsPage = () => {
   const { placeId } = useParams();
   const [isLoading, setIsLoading] = useState(false);
   const [detail, setDetails] = useState(null);
   let [searchParams] = useSearchParams();
   const navigate = useNavigate();

   const name = searchParams.get("name");

   useEffect(() => {
      const fetchDeatails = async () => {
         setIsLoading(true);
         const res = await httpGet(
            `${apis.GET_HOSPITAL_BY_PLACEID}/${placeId}`
         );
         if (!res.data.status) {
            setDetails(null);
         }
         
         if (!res.data.data) {
            navigate("/404");
         }
         setDetails(res.data.data);
         setIsLoading(false);
      };
      fetchDeatails();
      // eslint-disable-next-line
   }, [placeId]);

   return (
      <>
         {isLoading && <Loading />}
         {detail && <AllInfo onData={{ placeId, detail, name }} />}
      </>
   );
};
export default DetailsPage;
