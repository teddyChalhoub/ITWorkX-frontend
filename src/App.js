import "./App.css";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import ContactUs from "./pages/contactUs/ContactUs";
import StorePage from "./pages/store/store-page";
import ItemDisplay from "./components/itemDisplay/ItemDisplay";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import Home from "./pages/home/Home.js";
import SignUp from "./pages/signUp/SignUp";
import SignIn from "./pages/signIn/SignIn";
import aboutUs from "./pages/aboutUs/AboutUs";
import Service from "./pages/service/service-page";
import Cart from "./pages/cart/crat-page";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [nbOrder, setNbOrder] = useState(0);
  const fetchSearchValue = (value) => {
    setSearchValue(value);
  };

  useEffect(() => {
    setNbOrder(parseInt(localStorage.getItem("nbOrders")));
  }, [nbOrder]);
  return (
    <Router>
      <div className="App">
        <Router>
          <NavBar
            searchValue={searchValue}
            fetchSearchValue={fetchSearchValue}
          />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route
              path="/store"
              render={(props) => {
                return <StorePage {...props} searchValue={searchValue} />;
              }}
              exact
            />
            <Route
              path="/store/:title"
              render={(props) => <ItemDisplay {...props} />}
              exact
            />
            <Route path="/contact-us" component={ContactUs} exact />
            <Route path="/services" component={Service} exact />
            <Route path="/about-us" component={aboutUs} exact />
            <Route path="/cart" component={Cart} exact />
            <Route path="/log-in" component={SignIn} exact />
            <Route path="/sign-up" component={SignUp} exact />
          </Switch>
        </Router>
      </div>
    </Router>
  );
};

export default App;
