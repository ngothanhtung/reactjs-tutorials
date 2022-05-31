import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CheckBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: props.checked,
    }

    this.handleCheckbox = this.handleCheckbox.bind(this);

  };

  componentWillMount() {
    this.id = `checkbox_${Math.random().toString().replace(/0\./, '')}`;
  }

  handleCheckbox(e) {
    this.setState({ checked: e.target.checked });
    // Callback
    this.props.onChange(e.target.checked);

  }
  render() {
    return (
      <span>
        <input id={this.id} checked={this.state.checked} type="checkbox" onChange={this.handleCheckbox} />
        <label style={{ paddingLeft: 8 }} className="form-check-label" htmlFor={this.id}>{this.props.label}</label>
      </span>
    );
  };
}

CheckBox.propTypes = {
  onChange: PropTypes.func.isRequired
}
