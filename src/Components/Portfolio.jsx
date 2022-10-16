import React, { Component } from "react";
import ProjectList from "./ProjectList";
import Toolbar from "./Toolbar";
import PropTypes from 'prop-types';


export default class Portfolio extends Component {
    constructor(proprs) {
        super()
        this.state = {selected: 'All'}
    }
    


    render() {
        return (
            <div className="Portfolio">
                <Toolbar
                filters={["All", "Websites", "Flayers", "Business Cards"]}
                selected={this.state.selected}
                onSelectFilter={(filter) => { console.log(filter); this.setState({selected: filter}) }} />

                <ProjectList projects = {this.props.projects} selected={this.state.selected}/> 
            </div>
             

        )
    }
}

Portfolio.propTypes = {
    projects: PropTypes.array
  };
