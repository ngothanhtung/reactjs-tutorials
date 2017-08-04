/*
Properties validation is useful way to force correct usage of your components.
This will help you during development to avoid future bugs and problems once your app become larger.
It also makes code more readable since you can see how each component should be used.
*/

import React from 'react';
import PropTypes from 'prop-types';

class ValidatingPropsExample extends React.Component {
   render() {
      return (
         <div>
            <h3>Array: {this.props.propArray}</h3>
            <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
            <h3>Func: {this.props.propFunc(3)}</h3>
            <h3>Number: {this.props.propNumber}</h3>
            <h3>String: {this.props.propString}</h3>
            <h3>Object: {this.props.propObject.objectName1}</h3>
            <h3>Object: {this.props.propObject.objectName2}</h3>
            <h3>Object: {this.props.propObject.objectName3}</h3>
         </div>
      );
   }
}

ValidatingPropsExample.propTypes = {
   propArray: PropTypes.array.isRequired,
   propBool: PropTypes.bool.isRequired,
   propFunc: PropTypes.func,
   propNumber: PropTypes.number,
   propString: PropTypes.string,
   propObject: PropTypes.object
}

ValidatingPropsExample.defaultProps = {
   propArray: [1,2,3,4,5],
   propBool: false,
   propFunc: function(e){return e},
   propNumber: 1,
   propString: "String value...",

   propObject: {
      objectName1:"objectValue1",
      objectName2: "objectValue2",
      objectName3: "objectValue3"
   }
}

export default ValidatingPropsExample;
