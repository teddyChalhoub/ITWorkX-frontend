import "./App.css";
import { GrDashboard } from "react-icons/gr";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/* TODO: Pass number of items it cart */}
        <NavBar numberOfItemsInCart={1} />
        <Switch>
          <Route path="/" component={""} exact />
          <Route path="/store" component={""} exact />
          <Route path="/contact-us" component={""} exact />
          <Route path="/services" component={""} exact />
          <Route path="/about-us" component={""} exact />
          <Route path="/cart" component={""} exact />
        </Switch>
        {/* <Route path="/" render={() => <Dashboard authed={true} />} />
        function Dashboard ({authed}) {

        } */}
      </Router>
    </div>
  );
}

export default App;
