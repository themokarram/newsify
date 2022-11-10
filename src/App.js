import React, { Component } from 'react'
import Navbar from "./component/Navbar"
import News from "./component/News"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        
        
      <Router>
        <Navbar/>
      <Routes>
          <Route exact path="/general" element={<News key="general" pageSize={12} country="in" category="general"/>}></Route>
          <Route exact path="/business" element={<News key="business"  pageSize={12} country="in" category="business"/>}/>
          <Route exact path="/entertainment" element={<News key="entertainment"  pageSize={12} country="in" category="entertainment"/>}> </Route>
          <Route exact path="/health" element={<News key="health"  pageSize={12} country="in" category="health"/>}></Route>
          <Route exact path="/technology" element={<News key="technology"  pageSize={12} country="in" category="technology"/>}></Route>
          <Route exact path="/sports" element={<News key="sports"  pageSize={12} country="in" category="sports"/>}></Route>
          <Route exact path="/science" element={<News  key="science" pageSize={12} country="in" category="science"/>}></Route>
        
          </Routes>
         
      </Router>
      </div>
    )
  }
}
