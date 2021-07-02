import React, { Component } from 'react';  
import axios from 'axios';  
import { APIEndPoint,endPoints } from '../api';
import Table from './TableSummary';  

export default class SummaryList extends Component {  

  constructor(props) {  
      super(props);  
      this.state = {covidsummary: []};  
    }  
    componentDidMount(){  
      debugger;  
      APIEndPoint(endPoints.Summary).getSummary()
      //axios.get('https://localhost:44317/api/Responses/GetSummary')  
        .then(response => {  
          this.setState({ covidsummary: response.data });  
          debugger;  

        })  
        .catch(function (error) {  
          console.log(error);  
        })  
    }  

    tabRow(){  
      return this.state.covidsummary.map(function(object, i){  
          return <Table obj={object.response[i]} key={i} />;  
      });  
    }  

    render() {  
      return (  
        <div>  
          <h4 align="center">Summary List</h4>  
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th>Day</th>  
                <th>Continent</th>  
                <th>Country</th>  
                <th>Active Cases</th>  
              </tr>  
            </thead>  
            <tbody>  
             { this.tabRow() }   
            </tbody>  
          </table>  
        </div>  
      );  
    }  
  }
