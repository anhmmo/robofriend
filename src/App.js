import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield : ''
    }
  }

  onSearchChange = (event) => {
    const search = event.target.value.toLowerCase();
    this.setState({searchfield : search});
  }
  
  render() {
    const filtedRobots = robots.filter(item => item.name.toLowerCase().includes(this.state.searchfield));

    return (
    
        <div className="tc">
          <h1>Robofriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <CardList robots={filtedRobots} />
        </div>
    );
  }
}

export default App;
