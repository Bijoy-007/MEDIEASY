import Loading from "./Loading";



const MyLocation = async () => {
   return new Promise((resolve, reject) => {
      const showPosition = (res) =>{
         resolve(res);
      }
       if(navigator.geolocation){
           navigator.geolocation.getCurrentPosition(showPosition);
       }
    });
};

export default MyLocation;