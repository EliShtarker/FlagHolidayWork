import React, { Component } from 'react';
import Flag from './Flag';

class NewFlagDetials extends Component {

    state = {
        flag_from_input: {
            country: "",
            population: "",
            link_to_flag: "",
            capital: "",
            continent:""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('adding flag: ' + this.state.flag_from_input);
        this.props.add_flag(this.state.flag_from_input)
    }


handleChange2 = (e) => {
    this.setState({
        flag_from_input:{
            ...this.state.flag_from_input,
            [e.target.name]: e.target.value
        }
    })
}

/* handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
      filter:{
        ...this.state.filter,
        [e.target.name]: e.target.value
      } 
    })
      this.props.set_filter({[e.target.name]: e.target.value})  
    }*/

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>County Name: <input type="text" name="country" onChange={this.handleChange2}
                        value={this.state.flag_from_input.country} placeholder="Country Name" required /></p>
                        <p>Population: <input type="number" name="population" onChange={this.handleChange2}
                        value={this.state.flag_from_input.population} placeholder="Population" required /></p>
                        <p>Continent: <input type="text" name="continent" onChange={this.handleChange2}
                        value={this.state.flag_from_input.continent} placeholder="Continent" required /></p>
                        <p>Capital: <input type="text" name="capital" onChange={this.handleChange2}
                        value={this.state.flag_from_input.capital} placeholder="Capital" required /></p>
                        <p>Link to flag: <input type="text" name="link_to_flag" onChange={this.handleChange2}
                        value={this.state.flag_from_input.link_to_flag} placeholder="Link to flag" required /></p>
                        <button type="submit">Add flag</button>                   
                </form>
            </div>)
    }

}

export default NewFlagDetials;