import React from 'react';  
import { Button } from 'reactstrap';
import AddSummary from './Summary/AddSummary';  
import SummaryList from './Summary/SummaryList';  
import UAECovidList from './Summary/UAECovidList';  
import EditSummary from './Summary/EditSummary';  
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import './App.css';  
function App() {  
  return (  
    <Router>  
      <div className="container">  
        <nav className="navbar navbar-expand-lg navheader">  
          <div className="collapse navbar-collapse" >  
            <ul className="navbar-nav mr-auto">  
              <li className="nav-item">  
                <Link to={'/SummaryList'} className="nav-link">Summary List</Link>  
              </li>  
              <li className="nav-item">  
                <Link to={'/UAECovidList'} className="nav-link">UAE Covid List</Link>  
              </li>  
              <li className="nav-item">  
                <Link to={'/AddSummary'} className="nav-link">AddSummary</Link>  
              </li> 
            </ul>  
          </div>  
        </nav> <br />  
        <Switch>  
          <Route exact path='/AddSummary' component={AddSummary} />  
          <Route path='/edit/:id' component={EditSummary} />  
          <Route path='/SummaryList' component={SummaryList} />  
          <Route path='/UAECovidList' component={UAECovidList} />  
        </Switch>  
      </div>  
    </Router>  
  );  
}  

export default App;  