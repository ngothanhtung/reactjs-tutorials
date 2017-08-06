/*
The main difference between state and props is that props are immutable.

This is why container component should define state that can be updated and changed,
while the child components should only pass data from the state using props.
*/

import React, { Component } from 'react';

class PropsExample extends Component {
  render() {
      return (
         <div>
            <h1>{this.props.headerText}</h1>
            <h2>{this.props.contentText}</h2>
         </div>
      );
   }
}

PropsExample.defaultProps = {
   headerText: "Header from default props...",
   contentText:"Content from default props..."
}

export default PropsExample;
