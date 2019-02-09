import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const ReactRouterDemo = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>New York Artificial Intelligence in Healthcare</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
    <p>We are a organization dedicated to the developement of 
    artificial intelligence technologies and the med tech economy
    in New York City.</p>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/roldex`}>Roldex</Link>
      </li>
      <li>
        <Link to={`${match.url}/technical-resources`}>Technical Resources</Link>
      </li>
      <li>
        <Link to={`${match.url}/business-resources`}>Business Resources</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default ReactRouterDemo;