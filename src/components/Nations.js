import React, { Component } from 'react';
import Flag from './Flag'

class Nations extends Component {
    
    render() {

        console.log(this.props);
      
        
        const flags_list = this.props.flags.filter(flag => flag.population >= this.props.filter_by_population)
            .map(flag => 
            <Flag country={flag.country} population={flag.population} id={flag.id}
                 continent={flag.continent} key={flag.id} capital={flag.capital} link_to_flag={flag.link_to_flag} delete_flag={this.props.delete_flag} />)


        return (
            <>
                {flags_list}
            </>
        )
    }
}

export default Nations;