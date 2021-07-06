import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Store from "./pages/Store";
import ContactUs from "./pages/ContactUs";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" component={""} exact />
          <Route path="/store" component={Store} exact />
          <Route path="/contact-us" component={ContactUs} exact />
          <Route path="/services" component={""} exact />
          <Route path="/about-us" component={""} exact />
          <Route path="/cart" component={""} exact />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
