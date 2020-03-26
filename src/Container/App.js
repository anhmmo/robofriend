import React, { Component } from 'react';
import CardList from '../Component/CardList';
import {connect} from 'react-redux';
import SearchBox from '../Component/SearchBox';
import Scroll from '../Component/Scroll';
import './App.css';
import ErrorBoundry from '../Component/ErrorBoundry'

import { setSearchField } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}


class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: []
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({robots: users}))
  }
  
  render() {
    const {robots} = this.state;
    const {searchField, onSearchChange} = this.props;
    
    const filtedRobots = robots.filter(item => item.name.toLowerCase().includes(searchField));
    return !robots.length ? <h1>Loading</h1> :
      (
        <div className="tc">
          <h1>Robofriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filtedRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  
  }


export default connect(mapStateToProps, mapDispatchToProps)(App);
