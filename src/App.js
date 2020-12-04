import './App.css';
import React ,{useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// Firebase Config files
import {auth, createUserProfileDocument} from './firebase/firebaseUtils';





// Importing Components
import Home from './Pages/Home';
import Navbar from './Components/navbar';
import LoginPage from './Pages/LoginPage';
import Shop from './Pages/ShopPage';
import Cart from './Pages/Cart';

import { connect } from 'react-redux';
import { Unsubscribe } from '@material-ui/icons';


const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  let unsubscribeFromAuth = null;
  useEffect(()=>{
    unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot)=>{
          setCurrentUser({currentUser:{
            id:snapshot.id,
            ...snapshot.data()
          }})
          // console.log("SNAPSHOT DATA: ",snapshot.data());
          
        })
      }
      else {
        setCurrentUser(userAuth);
      }
      // console.log("USER: ",user);

      return () =>{
        unsubscribeFromAuth();
      }
    });
    

  },[]);

  useEffect(()=>{console.log(currentUser)});
  

  return (
    
    <div className="App">
    
    <Navbar currentUser={currentUser}/>
    
    <Switch>
    
    <Route exact path="/" component={Home}/>
    <Route path="/home" component={Home}/>
    <Route path="/shop" component={Shop}/>
    <Route path="/login" component={LoginPage}/>
    <Route path="/cart" component={Cart}/>
    
    </Switch>
    </div>
    
  );
}

export default App;
