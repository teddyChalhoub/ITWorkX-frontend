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
import SignUp from './signUp/SignUp'
import SignIn from './signIn/SignIn';
import secondaryFooter from './components/secondaryFooter/SecondaryFooter';
import primaryFooter from './components/primaryFooter/PrimaryFooter'; 
import aboutUs from './pages/aboutUs/AboutUs';
import TeamSection from './components/teamSection/TeamSection';
import Service from "./pages/service/service-page"


const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const fetchSearchValue = (value) => {
    setSearchValue(value);
  };
  return (
    <Router>

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
          <Route path="/services" component={Service} exact />
          <Route path="/about-us" component={aboutUs} exact />
          <Route path="/cart" component={""} exact />
          <Route path="/picture" component={""} exact />
          <Route path="/log-in" component={SignIn} exact />
          <Route path="/sign-up" component={SignUp} exact />
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
    </Router>
  );
};

export default App;
