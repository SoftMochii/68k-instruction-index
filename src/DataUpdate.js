import React from 'react';

export class Data extends React.Component{
    render(){
        return(
            this.props.dList.map(function(c1, i){
                return (
                    <tr key={i}>
                        <td>{c1.Instruction}</td>
                        <td>
                            <a href={"https://www.nxp.com/files-static/archives/doc/ref_manual/M68000PRM.pdf#page=" + c1.Page}>{c1.Page}</a>
                        </td>
                    </tr>
                )  
            })
        );
    }
}