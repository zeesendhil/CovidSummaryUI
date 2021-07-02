import React from 'react';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
//import axios from 'axios';
import '../Summary/AddSummary.css';
import { APIEndPoint,endPoints } from '../api';


class AddSummary extends React.Component {
    constructor(props) {
        super(props)
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
    AddSummary = () => {
        const payloadobj={id: this.state.id, continent: this.state.continent, country: this.state.country, population: this.state.Cpopulation, cases: { id: this.state.Cid, new: this.state.new, active: this.state.active, critical: this.state.critical, recovered: this.state.recovered, _1M_pop: this.state._1M_pop, total: this.state.total }, deaths: { id: this.state.Did, new: this.state.Dnew, _1M_pop: this.state.D_1M_pop, total: this.state.Dtotal }, tests: { id: this.state.Tid, _1M_pop: this.state.T_1M_pop, total: this.state.Ttotal }, day: this.state.day, time: this.state.time };
        APIEndPoint(endPoints.Base).createUAECovidEntry(payloadobj)
        //axios.post('https://localhost:44317/api/Responses/',{ id: this.state.id, continent: this.state.continent, country: this.state.country, population: this.state.Cpopulation, cases: { id: this.state.Cid, new: this.state.new, active: this.state.active, critical: this.state.critical, recovered: this.state.recovered, _1M_pop: this.state._1M_pop, total: this.state.total }, deaths: { id: this.state.Did, new: this.state.Dnew, _1M_pop: this.state.D_1M_pop, total: this.state.Dtotal }, tests: { id: this.state.Tid, _1M_pop: this.state.T_1M_pop, total: this.state.Ttotal }, day: this.state.day, time: this.state.time })
            .then(json => {
                if (json.status === 201) {
                    console.log(json.data);
                    alert("Data Save Successfully");
                    this.props.history.push('/UAECovidList')
                }
                else {
                    alert('Data not Saved');
                    debugger;
                    this.props.history.push('/UAECovidList')
                }
            })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <Container className="App">
                <h4 className="PageHeading">Add Covid History Informations</h4>
                <Form className="form">
                    <Col>
                    <FormGroup row>  
                            <Label for="continent" sm={2}>Continent</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="continent"  onChange={this.handleChange} value={this.state.continent}
                                placeholder="Enter Continent"/>  
                            </Col>  
                        </FormGroup> 
                        <FormGroup row>
                            <Label for="country" sm={2}>Country</Label>
                            <Col sm={10}>
                                <Input type="text" name="country" onChange={this.handleChange} value={this.state.country}
                                placeholder="Enter country" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="population" sm={2}>Population</Label>
                            <Col sm={10}>
                                <Input type="number" name="population" onChange={this.handleChange} value={this.state.Cpopulation}
                                 placeholder="Enter population" />
                                 </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={10}>
                                <Label for="Cases" sm={2}>Cases</Label>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="new" sm={2}>New</Label>
                            <Col sm={10}>
                                <Input type="text" name="new" onChange={this.handleChange} value={this.state.new} 
                                placeholder="Enter new" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="active" sm={2}>Active</Label>
                            <Col sm={10}>
                                <Input type="number" name="active" onChange={this.handleChange} value={this.state.active}
                                placeholder="Enter active" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="critical" sm={2}>Critical</Label>
                            <Col sm={10}>
                                <Input type="number" name="critical" onChange={this.handleChange} value={this.state.critical}
                                placeholder="Enter critical" />
                             </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="recovered" sm={2}>Recovered</Label>
                            <Col sm={10}>
                                <Input type="number" name="recovered" onChange={this.handleChange} value={this.state.recovered}
                                placeholder="Enter recovered" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="_1M_pop" sm={2}>M_pop</Label>
                            <Col sm={10}>
                                <Input type="text" name="_1M_pop" onChange={this.handleChange} value={this.state._1M_pop}
                                placeholder="Enter _1M_pop" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="total" sm={2}>Total</Label>
                            <Col sm={10}>
                                <Input type="number" name="total" onChange={this.handleChange} value={this.state.total}
                                placeholder="Enter total" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={10}> 
                                <Label for="deaths" sm={2}>Deaths</Label>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="new" sm={2}>New</Label>
                            <Col sm={10}>
                                <Input type="text" name="Dnew" onChange={this.handleChange} value={this.state.Dnew} 
                                placeholder="Enter new" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="_1M_pop" sm={2}>M_pop</Label>
                            <Col sm={10}>
                                <Input type="text" name="D_1M_pop" onChange={this.handleChange} value={this.state.D_1M_pop}
                                placeholder="Enter _1M_pop" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="total" sm={2}>Total</Label>
                            <Col sm={10}>
                                <Input type="number" name="Dtotal" onChange={this.handleChange} value={this.state.Dtotal} 
                                placeholder="Enter total" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={10}>
                                <Label for="Tested" sm={2}>Tested</Label>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="T_1M_pop" sm={2}>M_pop</Label>
                            <Col sm={10}>
                                <Input type="text" name="T_1M_pop" onChange={this.handleChange} value={this.state.T_1M_pop}
                                placeholder="Enter _1M_pop" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="total" sm={2}>Total</Label>
                            <Col sm={10}>
                                <Input type="number" name="Ttotal" onChange={this.handleChange} value={this.state.Ttotal}
                                placeholder="Enter total" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="day" sm={2}>Day</Label>
                            <Col sm={10}>
                                <Input type="text" name="day" onChange={this.handleChange} value={this.state.day}
                                placeholder="Enter day" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="time" sm={2}>Time</Label>
                            <Col sm={10}>
                                <Input type="text" name="time" onChange={this.handleChange} value={this.state.time}
                                placeholder="Enter time" />
                            </Col>
                        </FormGroup>
                    </Col>
            <Col>
                <FormGroup row>
                    <Col sm={5}></Col>
                    <Col sm={1}>
                        <button type="button" onClick={this.AddSummary} className="btn btn-success">Submit</button>
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

export default AddSummary;