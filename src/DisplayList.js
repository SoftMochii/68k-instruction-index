import React from 'react';
// import logo from './logo.svg';
import logo from './binary-icon.png';
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
                    <a href="http://google.com" target="_blank"><h5 className="Info">About this project</h5></a>
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to 68k instructions index page!</h1>
                </header>
                <div>
                    <br/>
                    <b>Page number can be reference using this <a href="https://www.nxp.com/files-static/archives/doc/ref_manual/M68000PRM.pdf">68k manual</a></b>
                    <br/><br/>
                    <input id="formControlsText" type="text" placeholder="Search instruction" 
                        onChange={this.handleChange}/>
                        <br/><br/>
                    
                    <Table responsive striped bordered condensed hover className="Table-Format">
                        <thead className="Table-Header">
                            <tr>
                                <td>Instruction</td>
                                <td>Page #</td>
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

export default DisplayList;
