import React, { Component } from 'react';

class Flag extends Component {

    state =  {

    }

    constructor(props) {
        console.log('============= ctor Flag');
        super(props)
    }

    componentDidMount() {
       
        console.log('========== finished mounting flag component');
    }

    componentWillUnmount  () {
       
        console.log('========== removing flag component ' + this.props.country);
    }    

    render() {

        console.log(this.props);
        
        

        const { id, country, population, continent, capital, link_to_flag ,delete_flag } = this.props
        console.log('==' + id);
       
        return (<div style={{float:'left',paddingLeft:'12px'}}>
            <div key={id} style={{width:'210px',border:'solid 5px black', margin:'10px',marginLeft:'45%', borderRadius:'15px',paddingBottom:'5px'}}>
            <img style={{ width:'200px',float:'left',margin:'5px'}} src={link_to_flag} alt={country}></img>
            <p>Country: {country}</p>
            <p>Population: {population} Millon</p>
            <p>Continent: {continent}</p>
            <p>Capital: {capital}</p>
                <button style={{ color: 'black',backgroundColor:'red',borderRadius:'15px' }} onClick={() => { delete_flag(id) }}>X</button>
            </div></div>)

    }


}

export default Flag;