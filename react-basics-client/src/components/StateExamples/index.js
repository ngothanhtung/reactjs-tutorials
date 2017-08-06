/*
State is the place where the data comes from.

You should always try to make your state as simple as possible
and minimize number of stateful components.

If you have, for example, ten components that need data from the state,
you should create one container component that will keep the state for all of them.
*/

import React, { Component } from 'react';

class StateExample extends Component {
  constructor(props) {
      super(props);

      this.state = {
         header: "Header from state...",
         content: "Content from state..."
      }
   }

   render() {
      return (
         <div>
            <h1>{this.state.header}</h1>
            <h2>{this.state.content}</h2>
         </div>
      );
   }
}
export default StateExample;
