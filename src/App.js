import React, { Component } from 'react'
import './App.css';
import Nations from './components/Nations'
import FlagFilter from './components/FlagFilter'
import NewFlagDetials from './components/NewFlagDetails';
import Flag from './components/Flag';

class App extends Component {

  static my_flags_seq_next = 4

  state = {
    flags: [
      { id:1, country: "Israel", population: 9, continent: "Asia",  capital:"Jerusalem", link_to_flag:"https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/israel-flag-icon.png" },
      { id:2, country: "Germany", population: 83, continent: "Europe", capital:"Berlin", link_to_flag: "https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/germany-flag-icon.png" },
      {id:3, country: "USA", population: 341, continent: "North America" , capital:"Washington, D.C.", link_to_flag:"https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/united-states-flag-icon.png" }
    ],
    filter_by_population: 0
  }
  
  addflag = (_flag) => {
  
    const new_flags = [ { ..._flag, id: App.my_flags_seq_next++ }, ...this.state.flags]     
   

    this.setState({
    
      flags: new_flags
    })
  }
  deleteflag = (_id) => {
    console.log(_id);
    
    const filtered_flags = this.state.flags.filter(flag => flag.id !== _id)
    this.setState({
      flags: filtered_flags
    })
  }

  setFilter = (filter) => {
    this.setState(
     filter)
  }
 

  shouldComponentUpdate(nextProps, nextState) {
   

    return true;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>World Flags</h1>
          <NewFlagDetials add_flag={this.addflag} />          
          <hr />          
          <FlagFilter set_filter={this.setFilter}/>
          <hr />
          <Nations flags={this.state.flags} delete_flag={this.deleteflag} 
            filter_by_population={this.state.filter_by_population}
             />
        </header>
      </div>
    );
  }
}

export default App;
