import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input,Container} from 'reactstrap';
import { toast } from 'react-toastify';
import PouchDb from 'pouchdb';

//creating database Mem. cache
var pouchdb = new PouchDb("contactus");
//creating database remote
//eslint-disable-next-line
var db = new PouchDb('http://admin:password@localhost:5984/kittens');

toast.configure({
    autoClose: 5000,
    //etc you get the idea
  });

class Contactform extends Component {

    constructor() {
        super();
        // toast.success("You are in offline mode");
        this.state = {
            _id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5),            
            name: '',
            city: '',
            email: '',
            message: ''
        };
    }
    onChange = (e) => {
        e.preventDefault();

        this.setState({
            _id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5),  
            [e.target.name]: e.target.value 
        });

    }
    onSubmit = (e) => {
        e.preventDefault();
        //create database
        pouchdb.put(this.state).then( (response) => toast.success("Added")).then(
            this.setState({
                _id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5),            
                name: '',
                city: '',
                email: '',
                message: ''
            })
            
        ).catch((err) => toast.error("Error"));
        
    }

  render() {
      
    const {name,city, email, message} = this.state;

    return (

        <Container>
            
            <Row>

                <Col md={12}>
                    <h1>Contact Form</h1>
                </Col>

            </Row>
          <Form onSubmit={this.onSubmit} >
                
            <Row form>

                <Col md={6}>
                    <FormGroup>
                        <Label for="exampleEmail">Name</Label>
                        <Input type="text" name="name" id="Name" placeholder="Enter your Name" value={name} onChange={this.onChange}  required/>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="City">City</Label>
                        <Input type="text" name="city" id="City" placeholder="Enter your city name"  value={city} onChange={this.onChange} required/>
                    </FormGroup>
                </Col>
            
                <Col md={6}>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder"  value={email} onChange={this.onChange} required/>
                    </FormGroup>
                </Col>
                <Col md={12}>
                    <FormGroup>
                        <Label for="Message">Leave a Message</Label>
                        <Input type="textarea" name="message" className="form-control" id="message" cols="30" rows="10" onChange={this.onChange} value={message} required/>
                    
                    </FormGroup>
                </Col>
                <Col className="d-flex justify-content-center">
                    <Button color="outline-info" className="shadow">Send Message</Button>
                </Col>
                
            </Row>
          
          </Form>
        </Container>
    );
  }
}

export default Contactform;
