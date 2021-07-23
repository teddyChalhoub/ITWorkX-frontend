import "./App.css";
import { useState } from "react";
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
import useFetch from "./utils/useFetch.js";
import { Store } from "@material-ui/icons";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const fetchSearchValue = (value) => {
    setSearchValue(value);
  };
  return (
    <div className="App">
      <Router>
        <NavBar
          numberOfItemsInCart={1}
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
          <Route path="/services" component={""} exact />
          <Route path="/about-us" component={""} exact />
          <Route path="/cart" component={""} exact />
          <Route path="/picture" component={""} exact />
          <Route path="/log-in" component={""} exact />
          <Route path="/sign-up" component={""} exact />
        </Switch>
      </Router>

      {/* <Home /> */}
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
