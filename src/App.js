// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  apiKey = "9b4a9e91da6a4efcbe55910fda75bd6a";
  state = {
    progress: 0
  }
  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
      />
        <Routes>
              <Route exact path="/" element={<News setProgress={this.setProgress}  key="general" apiKey={this.apiKey} pageSize={6} country="in" category="general"/>} />

              <Route exact path="/business" element ={<News setProgress={this.setProgress}  key="business" apiKey={this.apiKey} pageSize={6} country="in" category="business"/>} />

              <Route exact path="/entertainment" element={<News setProgress={this.setProgress}  key="entertainment" apiKey={this.apiKey} pageSize={6} country="in" category="entertainment"/>} />

              <Route exact path="/general" element={<News setProgress={this.setProgress}  key="general" apiKey={this.apiKey} pageSize={6} country="in" category="general"/>} />

              <Route exact path="/health" element={<News setProgress={this.setProgress}  key="health" apiKey={this.apiKey} pageSize={6} country="in" category="health"/>} />

              <Route exact path="/science" element={<News setProgress={this.setProgress}  key="science" apiKey={this.apiKey} pageSize={6} country="in" category="science"/>} />

              <Route exact path="/sports" element={<News setProgress={this.setProgress}  key="sports" apiKey={this.apiKey} pageSize={6} country="in" category="sports"/>} />

              <Route exact path="/technology" element = {<News setProgress={this.setProgress}  key="technology" apiKey={this.apiKey} pageSize={6} country="in" category="technology"/>} />
        </Routes>
        </Router>
      </div> 
    )
  }
}
