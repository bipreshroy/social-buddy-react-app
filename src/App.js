import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import PostDetail from './Components/PostDetail/PostDetail';
import Comments from './Components/Comments/Comments';
import CommentDetails from './Components/CommentDetails/CommentDetails';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path ="/home">
            <Home/>
          </Route>
          <Route path = "/post/:postId">
            <PostDetail/>
            <Comments/>
          </Route>
          <Route path = "/comment/:commentId">
            <CommentDetails/>
          </Route>
          <Route exact path = "/">
            <Home/>
          </Route>
          <Route path = "*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
