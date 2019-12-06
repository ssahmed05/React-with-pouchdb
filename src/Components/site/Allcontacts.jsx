import React, { Component , Fragment } from 'react';
import { Table, } from "reactstrap";
import PouchDb from "pouchdb";
import {AiTwotoneEdit, AiTwotoneDelete , AiOutlinePlus} from "react-icons/ai";
import { Link } from "react-router-dom";

var pouchdb = new PouchDb("contactus");

class Allcontacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allRows : []
        }
    }

    componentDidMount(){

        this.getAllData().then(result => 
            this.setState({allRows : result}
        ))
    }

    getAllData(){

        return pouchdb.allDocs({include_docs: true}).then(function (result) {
            return Promise.all(result.rows.map(function (row) {
                
                    return pouchdb.get(row.id)
                
                })
            )
        }).catch(err => console.log(err));

    }
    render() {
        
        return (
            
            <Fragment>

                <h2 className="mb-3">All Contacts are here!</h2>
                <Table className="table-sm table-hover border">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>City</th>
                            <th>Email</th>
                            <th>Messages</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                      
                    {this.state.allRows.map((item, key) =>

                        <tr key={key}>
                            <td className={item.name === '' ? "text-danger font-weight-bold" : ""} >{item.name === '' ? "N/A" : item.name}</td>
                            <td className={item.city === '' ? "text-danger font-weight-bold" : ""}>{item.city === '' ? "N/A" : item.city}</td>
                            <td className={item.email === '' ? "text-danger font-weight-bold" : ""}>{item.email === '' ? "N/A" : item.email}</td>
                            <td className={item.message === '' ? "text-danger font-weight-bold" : ""}>{item.message === '' ? "N/A" : item.message}</td>
                            <td><Link className="nav-item ml-2" to="data"><AiTwotoneEdit/></Link><Link to="test" className="nav-item ml-2"><AiTwotoneDelete/></Link><Link to="/add-contacts" className="nav-item ml-2"><AiOutlinePlus/></Link> </td>
                        </tr>
                    )}
        
                        
                    </tbody>

                </Table>
                
            </Fragment>
        );
    }
}

export default Allcontacts;