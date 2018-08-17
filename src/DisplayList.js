import React from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import {Data} from './DataUpdate';
import assembleIndex from './data.json';
import {Table} from 'react-bootstrap';

export class DisplayList extends React.Component{
    constructor(props){
        super(props);
        this.state = {ListOfInstruction: assembleIndex};
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e){
        var searchQuery = e.target.value.toLowerCase();
        var displayData = assembleIndex.filter(function(lst){
            var searchValue = lst.Instruction.toLowerCase();

            return searchValue.indexOf(searchQuery) !== -1;
        });
        this.setState({
            ListOfInstruction : displayData
        });
    }
    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to 68k command index page!</h1>
                </header>
                <div>
                    <br/>
                    <input id="formControlsText" type="text" placeholder="Search command" 
                        onChange={this.handleChange}/>
                        <br/><br/>
                    
                    <Table responsive striped bordered condensed hover>
                        <thead style={{backgroundColor : "lightgray"}}>
                            <tr>
                                <th>Instruction</th>
                                <th>Page #</th>
                            </tr>
                        </thead>
                        <tbody>
                            <Data dList={this.state.ListOfInstruction}/>       
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

DisplayList.propTypes = {
    ListOfInstruction : PropTypes.array
};
