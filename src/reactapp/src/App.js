import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './Home';
import MemberList from './MemberList'
import MemberDisplay from './MemberDisplay'

class App extends Component {
  render() {
    return (
        <Router>
          <Routes>
            <Route path='/' exact={true} element={<Home/>}/>
            <Route path='/api/member/:id' exact={true} element={<MemberDisplay/>}/>
          </Routes>
        </Router>

    )
  }
}

export default App;
