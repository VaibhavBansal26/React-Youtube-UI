import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import SearchPage from './SearchPage';


function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <div className="app__page">
        <Sidebar/>
        <Switch>
          <Route path="/search/:searchTerm"><SearchPage/></Route>
          <Route path='/'><RecommendedVideos/></Route>
        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
