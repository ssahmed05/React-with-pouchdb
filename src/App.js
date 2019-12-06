
import React , { Component} from 'react';
// eslint-disable-next-line
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Showcontacts from './Components/site/Allcontacts';
import Home from './Components/site/Home';
import Contactform from './Components/site/Contactform';
import MainNavbar from './Components/site/MainNavbar';
import {Container, Row, Col} from 'reactstrap';
import {BrowserRouter, Route, Switch } from "react-router-dom";

import PouchDb from 'pouchdb';

//creating database Mem. cache

// eslint-disable-next-line
var pouchdb = new PouchDb("contactus");
//creating database remote
//eslint-disable-next-line
var db = new PouchDb('http://admin:password@localhost:5984/kittens');

toast.configure({
  autoClose: 5000
});


class App extends Component {

  constructor(props){
    super(props);

    toast("You are in offline mode", {
      className: 'text-dark',
      position: toast.POSITION.TOP_CENTER
    });

  }

  render(){
   
    return (
      <BrowserRouter>
          <div>
          <MainNavbar/>

          <Container>
            <Row>
              
              <Col md={12} className="mt-5">

              <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/all-contacts' component={Showcontacts} />
                  <Route path='/add-contacts' component={Contactform} />
              </Switch>

              </Col>
            </Row>
          </Container>
          </div>             
      </BrowserRouter>
   
    )
  }
}

export default App;
