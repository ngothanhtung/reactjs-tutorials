import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

export default class Topics extends Component {
  render() {
    return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${this.props.match.url}/rendering/1`}>
              Rendering with React
            </Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/components/2`}>
              Components
        </Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/props-v-state/3`}>
              Props v. State
        </Link>
          </li>
        </ul>

        <Route path={`${this.props.match.url}/:topic/:id`} component={Topic} />
        <Route exact path={this.props.match.url} render={() => (
          <h3>Please select a topic.</h3>
        )} />
      </div>
    );
  }
}

const Topic = ({ match }) => (
  <div>
    {/* GET PARAMS */}
    <h5>Selected: {match.params.topic} :  {match.params.id}</h5>
  </div>
)
