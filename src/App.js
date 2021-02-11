import React from "react";
import HomeContainer from "./containers/HomeContainer";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Weatherdetails from "./containers/Weatherdetails";
function App() {

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
    <switch>
      <Route exact path={'/weather/:city'} component={Weatherdetails} />
      <Route exact path={["/","/weatherapp"]} component={HomeContainer} />
    </switch>
    </Router>
    </div>
  );
}

export default App;
