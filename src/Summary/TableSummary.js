import React, { Component } from 'react';  
class Table extends Component {  
  constructor(props) {  
    super(props);  
    } 
  render() {  
    return (  
        <tr id={this.props.obj.id}>  
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
        </tr>  
    );  
  }  
}  

export default Table;