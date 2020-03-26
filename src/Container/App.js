import CardList from '../Component/CardList';
import { robots } from '../robots';
import SearchBox from '../Component/SearchBox';
import Scroll from '../Component/Scroll';
import React, { Component } from 'react';
import './App.css';
import ErrorBoundry from '../Component/ErrorBoundry'

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
    const {robots, searchfield} = this.state;
    const filtedRobots = robots.filter(item => item.name.toLowerCase().includes(searchfield));
    return !robots.length ? <h1>Loading</h1> :
      (
        <div className="tc">
          <h1>Robofriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filtedRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  
  }


export default App;
