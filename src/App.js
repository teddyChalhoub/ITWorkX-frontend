import SignUp from './signUp/SignUp'
import SignIn from './signIn/SignIn'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import secondaryFooter from './components/secondaryFooter/SecondaryFooter';
import primaryFooter from './components/primaryFooter/PrimaryFooter'; 



function App() {
  return (
    <Router>

    <div className="App">
     <Route path="/signup" component={SignUp} />
     <Route path="/signin" component={SignIn} />
     <Route path="/secondaryFooter" component={secondaryFooter} />
     <Route path="/primaryFooter" component={primaryFooter} />

  
    </div>
    </Router>
  );
}

export default App;
