import React, { Component } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom';  
import { APIEndPoint,endPoints } from '../api';

class Table extends Component {  
    DeleteSummary= () =>{  
      debugger;
    APIEndPoint(endPoints.Base).deleteUAECovidEntry(this.props.obj.id) 
     //axios.delete('https://localhost:44317/api/Responses/'+this.props.obj.id)  
    .then(json => {  
      debugger;
      if(json.status===200)
      {  
          alert('Record deleted successfully!!');  
          window.location.reload(false);
      }  
    })  
  }  
  render() {  
    return (  
        <tr>  
          <td>  
            {this.props.obj.day}  
          </td>  
          <td>  
            {this.props.obj.continent}  
          </td>  
          <td>  
            {this.props.obj.country}  
          </td>  
          <td>  
            {this.props.obj.cases.active}  
          </td>  
          <td>  
          <Link to={"/edit/"+this.props.obj.id} className="btn btn-success">Edit</Link>  
          </td>  
          <td>  
            <button type="button" onClick={this.DeleteSummary} className="btn btn-danger">Delete</button>  
          </td>  
        </tr>  
    );  
  }  
}  

export default Table;