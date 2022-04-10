import { Provider } from "react-redux";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import AllRoutes from "./routes/route";
import { store } from "./store/store";

function App() {
   return (
      <Provider store={store}>
         <AllRoutes />;
      </Provider>
   );
}

export default App;
