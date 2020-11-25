import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// Importing Components
import Home from './Pages/Home';
import Navbar from './Components/navbar';
import LoginPage from './Pages/LoginPage';

function App() {
  return (
    
    <div className="App">
    
    <Navbar/>
    
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/home" component={Home}/>
    <Route path="/login" component={LoginPage}/>
    
    </Switch>
    </div>
    
  );
}

export default App;
