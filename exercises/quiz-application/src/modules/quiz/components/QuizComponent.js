import React, { Component } from 'react';
import { Button, Card, Radio } from 'antd';
const RadioGroup = Radio.Group;

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      selected: -1,
    }
  }

  componentWillMount() {
    this.props.getQuestionsAsync();
  }
  render() {

    const radioStyle = {
      display: 'block',
      height: '48px',
      lineHeight: '48px',
    };

    const index = this.state.index;

    return (
      <div>
        {
          this.props.questions &&
          <div>
            <Card title={this.props.questions[index].questionText} style={{ width: '100%', marginBottom: 32 }}>
              <RadioGroup onChange={(e) => { this.setState({ selected: e.target.value }) }} value={this.state.selected}>
                {this.props.questions[index].options.map((item, index) => (
                  <Radio key={index} value={item.id} style={radioStyle}>{item.text}</Radio>
                ))}
              </RadioGroup>
            </Card>

            <Button type="primary"
              onClick={() => {
                const question = this.props.questions[index];
                const result = question.options.filter(option => option.correct);
                if (result) {
                  const c = result[0];
                  if (c.id === this.state.selected) {
                    this.props.postAnswer(1);
                  } else {
                    this.props.postAnswer(0);
                  }
                }

                this.setState({ index: this.state.index + 1 });
                this.setState({ selected: -1 });
              }}
            >Submit</Button>
          </div>
        }
      </div>
    );
  }
}
