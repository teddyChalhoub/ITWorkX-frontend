import "./App.css";
import { GrDashboard } from "react-icons/gr";
import NavBar from "./components/NavBar";
import ContactUs from "./pages/ContactUs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Text from "./pages/Text";

const App = () => {
  return (
    <div className="App">
      <Router>
        {/* TODO: Pass number of items it cart */}
        <NavBar numberOfItemsInCart={1} />
        <Switch>
          <Route path="/" component={""} exact />
          <Route path="/store" component={""} exact />
          <Route path="/contact-us" component={ContactUs} exact />
          <Route path="/services" component={""} exact />
          <Route path="/about-us" component={""} exact />
          <Route path="/cart" component={""} exact />
        </Switch>
      </Router>
      <Text />
      {/* <Router>
        <ContactUs>
          <Switch>
            <Route path="https://www.facebook.com/" />
          </Switch>
        </ContactUs>
      </Router> */}
    </div>
  );
};

export default App;
