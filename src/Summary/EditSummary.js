import React from 'react';   
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
//import axios from 'axios';
import '../Summary/AddSummary.css';
import { APIEndPoint,endPoints } from '../api';
class Edit extends React.Component {  
    constructor(props) {  
        super(props)  
    this.onChangeDay = this.onChangeDay.bind(this);  
    this.onChangeContinent = this.onChangeContinent.bind(this);  
    this.onChangeCountry = this.onChangeCountry.bind(this);  
    this.onSubmit = this.onSubmit.bind(this);  
                this.state = {
                    id: '00000000-0000-0000-0000-000000000000',
                    continent: '',
                    country: '',
                    population: 0,
                    cases:
                    {
                        id: '',
                        new: '',
                        active: 0,
                        critical: 0,
                        recovered: 0,
                        _1M_pop: '',
                        total: 0
                    },
                    deaths: {
                        id: '',
                        new: '',
                        _1M_pop: '',
                        total: 0
                    },
                    tests: {
                        id: '',
                        _1M_pop: '',
                        total: 0
                    },
                    day: '',
                    time: ''
                }
    }  

  componentDidMount() { 
    APIEndPoint(endPoints.Base).getUAECovidbyId(this.props.match.params.id) 
      //axios.get('https://localhost:44317/api/Responses/'+this.props.match.params.id)  
          .then(response => { 
              this.setState({
                  id: response.data.id, 
                continent: response.data.continent,
                 country: response.data.country,
                  population: response.data.population,
                  cases: { id: response.data.cases.id,
                     new: response.data.cases.new, 
                     active: response.data.cases.active,
                     critical: response.data.cases.critical,
                     recovered: response.data.cases.recovered,
                     _1M_pop: response.data.cases._1M_pop,
                     total: response.data.cases.total
                    }, 
                    deaths: 
                    { id: response.data.deaths.id, 
                    new: response.data.deaths.new,
                    _1M_pop: response.data.deaths._1M_pop, 
                    total: response.data.deaths.total 
                }, 
                tests: { id: response.data.testsid, 
                    _1M_pop: response.data.tests_1M_pop, 
                    total: response.data.teststotal }, 
                day: response.data.day, time: response.data.time }
            );  
          })  
          .catch(function (error) {  
              console.log(error);  
          })  
    }  

  onChangeDay(e) {  
    this.setState({  
        day: e.target.value  
    });  
  }  
  onChangeContinent(e) {  
    this.setState({  
        continent: e.target.value  
    });    
  }  
  onChangeCountry(e) {  
    this.setState({  
        country: e.target.value  
    });  
}  
    
  onSubmit(e) {  
    e.preventDefault();  
    const obj = {id: this.props.match.params.id, 
        continent: this.state.continent, 
        country: this.state.country, 
        population: this.state.population,
         cases: { 
             id: this.state.cases.id, new: this.state.cases.new, active: this.state.cases.active,
             critical: this.state.cases.critical, recovered: this.state.cases.recovered,
             _1M_pop: this.state.cases._1M_pop, total: this.state.cases.total }, 
       deaths: { id: this.state.deaths.id, 
            new: this.state.deaths.new, 
            _1M_pop: this.state.deaths._1M_pop, 
            total: this.state.deaths.total
            }, 
        tests: { id: this.state.tests.id, 
            _1M_pop: this.state.tests._1M_pop, 
            total: this.state.tests.total }, 
        day: this.state.day, 
        time: this.state.time 
    }
    APIEndPoint(endPoints.Base).updateUAECovidEntry(obj.id, obj) 
    //axios.put('https://localhost:44317/api/Responses/'+obj.id, obj)  
        .then(res => 
            this.props.history.push('/UAECovidList') 
        );  
        
  }  
    render() {  
        return (  
            <Container className="App">  
             <h4 className="PageHeading">Update Covid History Informations</h4>  
                <Form className="form" onSubmit={this.onSubmit}>  
                    <Col>  
                        <FormGroup row>  
                            <Label for="name" sm={2}>Day</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="Day" value={this.state.day} onChange={this.onChangeDay}  
                                placeholder="Enter Day" />  
                            </Col>  
                        </FormGroup>  
                        <FormGroup row>  
                            <Label for="Password" sm={2}>Continent</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="Continent" value={this.state.continent} onChange={this.onChangeContinent} placeholder="Enter Continent" />  
                            </Col>  
                        </FormGroup>  
                         <FormGroup row>  
                            <Label for="Password" sm={2}>Country</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="Country" value={this.state.country} onChange={this.onChangeCountry} placeholder="Enter Country" />  
                            </Col>  
                        </FormGroup>  
                    </Col>  
                    <Col>  
                        <FormGroup row>  
                            <Col sm={5}>  
                            </Col>  
                            <Col sm={1}>  
                          <Button type="submit" color="success">Submit</Button>{' '}  
                            </Col>  
                            <Col sm={1}>  
                                <Button color="danger">Cancel</Button>{' '}  
                            </Col>  
                            <Col sm={5}>  
                            </Col>  
                        </FormGroup>  
                    </Col>  
                </Form>  
            </Container>  
        );  
    }  

}  

export default Edit;  