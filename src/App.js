import "./App.css";
//import { GrDashboard } from "react-icons/gr";
import NavBar from "./components/NavBar";
import ContactUs from "./pages/ContactUs";
import StorePage from "./pages/store/store-page";
import ItemDisplay from "./components/itemDisplay/ItemDisplay";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar numberOfItemsInCart={1} />
        <Switch>
          <Route path="/" component={""} exact />
          <Route
            path="/store"
            render={(props) => {
              return <StorePage {...props} />;
            }}
            exact
          />
          <Route path="/itemDisplay" component={ItemDisplay} exact />
          <Route path="/contact-us" component={ContactUs} exact />
          <Route path="/services" component={""} exact />
          <Route path="/about-us" component={""} exact />
          <Route path="/cart" component={""} exact />
          <Route path="/picture" component={""} exact />
          <Route path="/log-in" component={""} exact />
          <Route path="/sign-up" component={""} exact />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
