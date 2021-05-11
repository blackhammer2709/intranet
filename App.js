import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import Login from './componentes/Login/Login.js';
import Main from './componentes/Main/Main';
import Navbar from './componentes/Navbar/Navbar';
//instalar react-bootstrap

const App= () =>(
    
    <div className="App">
      
      <Router>
        <Navbar/>
        <Switch>
        
          <Route exact path="/">
      
            <Redirect to="/login"></Redirect>
      
          </Route>
        
          <Route path="/login" exact component={Login}/>
        
          <Route path="/main" exact component={Main}/>
        
        </Switch>
      
      </Router>
      
      
    </div>
);
export default App;

//aqui es donde se mete todo el codigo
//router y route son para manejar direccionamientos tengo que investigarlo un poco mas pero es eso