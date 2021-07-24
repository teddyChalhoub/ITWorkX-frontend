import SignUp from './signUp/SignUp'
import SignIn from './signIn/SignIn'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import secondaryFooter from './components/secondaryFooter/SecondaryFooter';
import primaryFooter from './components/primaryFooter/PrimaryFooter'; 
import aboutUs from './pages/aboutUs/AboutUs';
import TeamSection from './components/teamSection/TeamSection';


function App() {
  return (
    <Router>

    <div className="App">
     <Route path="/signup" component={SignUp} />
     <Route path="/signin" component={SignIn} />
     <Route path="/secondaryFooter" component={secondaryFooter} />
     <Route path="/primaryFooter" component={primaryFooter} />
     <Route path="/aboutUs" component={aboutUs} />
     <Route path="/teamSection" component={TeamSection} />



  
    </div>
    </Router>
  );
}

export default App;
