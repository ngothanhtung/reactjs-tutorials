import React, { Component } from 'react';
import axios from 'axios';

export default class TranslationExamples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      translatedText: ''
    };
  }

  render() {
    return (
      <div>
        <input className="form-control" value={this.state.text} type="text" onChange={(e) => this.setState({ text: e.target.value })} />
        <button
          className="btn btn-primary"
          onClick={() => {
            axios.post('https://slacklivechat.com/translate/translate', {
              text: this.state.text
            }).then(response => {
              this.setState({ translatedText: response.data })
            })
          }}
        >Tranlate</button>
        <h3>
          {this.state.translatedText}
        </h3>
      </div>
    );
  }
}
