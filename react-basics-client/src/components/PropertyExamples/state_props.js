/*
The main difference between state and props is that props are immutable.

This is why container component should define state that can be updated and changed,
while the child components should only pass data from the state using props.
*/

import React, { Component } from 'react';

class StateAndPropsExample extends Component {
  constructor(props) {
      super(props);

      this.state = {
         headerText: this.props.headerText,
         contentText: this.props.contentText
      }
   }
   render() {
        return (
           <div>
              <MyHeader headerText = {this.state.headerText}/>
              <MyContent contentText = {this.state.contentText}/>
           </div>
        );
     }
}

class MyHeader extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.headerText}</h1>
         </div>
      );
   }
}

class MyContent extends React.Component {
   render() {
      return (
         <div>
            <h2>{this.props.contentText}</h2>
         </div>
      );
   }
}

export default StateAndPropsExample;
