import React, { Component } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom';  
class Table extends Component {  
  constructor(props) {  
    super(props);  
    }  
    DeleteSummary= () =>{  
     axios.delete('https://localhost:44317/api/Responses/'+this.props.obj.id)  
    .then(json => {  
    if(json.status===201)
    {  
        alert('Record deleted successfully!!');  
        this.props.history.push('/UAECovidList');
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