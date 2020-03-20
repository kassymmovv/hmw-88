import React, {Component, Fragment} from 'react';
import Toolbar from "./components/Toolbar/Toolbar";
import {Container} from "reactstrap";
import {Route, Switch} from "react-router-dom";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import Post from "./containers/Posts/Post";
import NewPost from "./containers/NewPost/NewPost";
import Comments from "./containers/Comments/Comments";

class App extends Component {
  render() {
    return (
        <Fragment>
          <header>
            <Toolbar/>
          </header>
          <Container style={{marginTop: '20px'}}>
            <Switch>
                <Route path="/" exact component={Post}/>
              <Route path="/register" exact component={Register}/>
              <Route path="/login" exact component={Login}/>
              <Route path="/posts/new" exact component={NewPost}/>
              <Route path="/post/comments/:id"  component={Comments}/>
            </Switch>
          </Container>
        </Fragment>
    );
  }
}

export default App;