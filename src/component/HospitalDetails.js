import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { httpGet } from "../helper/Http";
import Loading from "./Loading";
import apis from "../helper/Apis";
import AllInfo from "./AllInfo";

const DetailsPage = () => {
   const { placeId } = useParams();
   const [isLoading, setIsLoading] = useState(false);
   const [detail, setDetails] = useState(null);

   useEffect(() => {
      const fetchDeatails = async () => {
         setIsLoading(true);
         const res = await httpGet(
            `${apis.GET_HOSPITAL_BY_PLACEID}/${placeId}`
         );
         if (!res.data.status) {
            setDetails(null);
         }
         setDetails(res.data.data);
         setIsLoading(false);
      };
      fetchDeatails();
   }, [placeId]);

   return (
      <>{isLoading ? <Loading /> : <AllInfo onData={{ placeId, detail }} />};</>
   );
};
export default DetailsPage;
