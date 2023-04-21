import "./App.css";
import { Provider } from "react-redux";
// import configureStore from "./redux/store/thunkStore";
import store from "./redux/store/sagaStore";
import Application from "./Application";
import { BrowserRouter } from "react-router-dom";
// let { store } = configureStore();
import { useEffect } from "react";

var createHost = require('cross-domain-storage/host');

function App() {

  var storageHost = createHost([
    {
        origin: 'http://localhost:3000',
        allowedMethods: ['get', 'set', 'remove'],
    },
    {
        origin: 'http://localhost:3001',
        allowedMethods: ['get'],
    },
]);

console.log("bazStorage", storageHost);


useEffect(()=>{
  localStorage.setItem('fizz','trdssdyts')

},[])
  return (
<Provider store={store}>
{/* <PersistGate loading={null} persistor={persistor}> */}
  <BrowserRouter>
    <Application />
  </BrowserRouter>
{/* </PersistGate> */}
</Provider>

  );
}

export default App;
