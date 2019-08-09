import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import './App.css';
import Nav from './components/Nav/Nav'
import routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.location.pathname === '/' ? null: <Nav/>}
        {routes}
      </div>
    )
  }
}

export default withRouter(App);
