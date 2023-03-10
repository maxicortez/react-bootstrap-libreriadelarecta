import React from 'react';
import ModLicencia from "./ModLicencia"
import "./style.css";

export class ComponentToPrint extends React.PureComponent {
    render() {  
        return (
            <ModLicencia id={this.props.id}></ModLicencia>
        )
    }
  }