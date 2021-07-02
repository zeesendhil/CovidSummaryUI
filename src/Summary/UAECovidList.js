import React, { Component } from 'react';  
import Table from './Table';  
import { APIEndPoint,endPoints } from '../api';
export default class UAECovidList extends Component {  

  constructor(props) {  
      super(props);  
      this.state = {covidhistory: []};  
    }  
    componentDidMount(){  
     //axios.get('https://localhost:44317/api/Responses/GetResponse')  
      APIEndPoint(endPoints.CovidHistory).getSummary()
        .then(response => {  
          this.setState({ covidhistory: response.data });  
        })  
        .catch(function (error) {  
          console.log(error);  
        })  
    }  

    tabRow(){  
      return this.state.covidhistory.map(function(object, i){  
          return <Table obj={object} key={i} />;  
      });  
    }  

    render() {  
      return (  
        <div>  
          <h4 align="center">UAE Covid List</h4>  
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th>Day</th>  
                <th>Continent</th>  
                <th>Country</th>  
                <th>Active Cases</th>  
                <th colSpan="4">Action</th>  
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
