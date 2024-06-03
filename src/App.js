import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
// import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';


export class App extends Component {
  apikey = process.env.REACT_APP_NEWS_API
  state ={
    progress : 10
  }

  setProgress = (progress) =>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height='3'
      />
        <Routes>                 
          <Route path="/" element={<News setProgress={this.setProgress} apikey= {this.apikey} key='sports' pageSize ={6} country= "in" category="sports" />}/>
          <Route path="/business" element={<News setProgress={this.setProgress} apikey= {this.apikey} key="business" category='business' pageSize ={6} country= "in" />}/>
          <Route path="/entertainment" element={<News setProgress={this.setProgress} apikey= {this.apikey} key="entertainment" category='entertainment' pageSize ={6} country= "in" />}/>
          <Route path="/general" element={<News setProgress={this.setProgress} apikey= {this.apikey} key="general" category='general' pageSize ={6} country= "in"/>} />
          <Route path="/health" element={<News setProgress={this.setProgress} apikey= {this.apikey} key="health" category='health' pageSize ={6} country= "in" />}/>
          <Route path="/science" element={<News setProgress={this.setProgress} apikey= {this.apikey} key="science" category='science' pageSize ={6} country= "in"/>} />
          <Route path="/sports" element={<News setProgress={this.setProgress} apikey= {this.apikey} key="sports" category='sports' pageSize ={6} country= "in"/>} />
          <Route path="/technology" element={<News setProgress={this.setProgress} apikey= {this.apikey} key="technology" category='technology' pageSize ={6} country= "in"/>} />      
      </Routes>
      </Router>
      </div>
    )
  }
}

export default App

// API KEY = 505445417ad64ed08dbd138e7cff9daf