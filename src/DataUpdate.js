import React from 'react';

export class Data extends React.Component{
    render(){
        return(
            this.props.dList.map(function(c1, i){
                return (
                    <tr key={i}>
                        <td>{c1.Instruction}</td>
                        <td>{c1.Page}</td>
                    </tr>
                )  
            })
        );
    }
}