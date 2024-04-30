import React, { Component } from 'react';

class FlagFilter extends Component {

    state = {
        filter_by_population: 0
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value
        })
        this.props.set_filter({[e.target.name]: e.target.value})
       
    }
  

    render() {
        return (
            <div>
                <h2>Filter flags by population</h2>
                <p>Population Filter: <input type="number" 
                                  name="filter_by_population" onChange={this.handleChange}
                                  value={this.state.filter_by_population} placeholder="Enter Population" /></p>
                                 
            </div>
        );
    }

}

export default FlagFilter;