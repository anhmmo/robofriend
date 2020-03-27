import React, { Component } from 'react';
import CardList from '../Component/CardList';
import {connect} from 'react-redux';
import SearchBox from '../Component/SearchBox';
import Scroll from '../Component/Scroll';
import './App.css';
import ErrorBoundry from '../Component/ErrorBoundry'

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}


class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }
  
  render() {
  
    const {searchField, onSearchChange, robots, isPending} = this.props;
    
    const filtedRobots = robots.filter(item => item.name.toLowerCase().includes(searchField));
    return isPending ? <h1>Loading</h1> :
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
