import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// AWS Amplify
// import Amplify from "aws-amplify";
// import awsExports from "./aws-exports";
// Amplify.configure(awsExports);

// Importing Components
import Home from './Pages/Home';
import Navbar from './Components/navbar';
import LoginPage from './Pages/LoginPage';
import Shop from './Pages/ShopPage';

function App() {
  return (
    
    <div className="App">
    
    <Navbar/>
    
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/home" component={Home}/>
    <Route path="/shop" component={Shop}/>
    <Route path="/login" component={LoginPage}/>
    
    </Switch>
    </div>
    
  );
}

export default App;
