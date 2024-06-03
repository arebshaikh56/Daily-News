import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
// import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>                 
          <Route path="/" element={<News key='sports' pageSize ={6} country= "in" category="sports" />}/>
          <Route path="/business" element={<News key="business" category='business' pageSize ={6} country= "in" />}/>
          <Route path="/entertainment" element={<News key="entertainment" category='entertainment' pageSize ={6} country= "in" />}/>
          <Route path="/general" element={<News key="general" category='general' pageSize ={6} country= "in"/>} />
          <Route path="/health" element={<News key="health" category='health' pageSize ={6} country= "in" />}/>
          <Route path="/science" element={<News key="science" category='science' pageSize ={6} country= "in"/>} />
          <Route path="/sports" element={<News key="sports" category='sports' pageSize ={6} country= "in"/>} />
          <Route path="/technology" element={<News key="technology" category='technology' pageSize ={6} country= "in"/>} />      
      </Routes>
      </Router>
      </div>
    )
  }
}

export default App

// API KEY = 505445417ad64ed08dbd138e7cff9daf