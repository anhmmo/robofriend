import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield : ''
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({robots: users}))
  }

  onSearchChange = (event) => {
    const search = event.target.value.toLowerCase();
    this.setState({searchfield: search});
  }
  
  render() {
    const filtedRobots = this.state.robots.filter(item => item.name.toLowerCase().includes(this.state.searchfield));
    if(robots.length === 0 ){
      return <h1>Loading</h1>
    }
    else {
      return (
    
        <div className="tc">
          <h1>Robofriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <CardList robots={filtedRobots} />
        </div>
    );
    }
    
  }
}

export default App;
