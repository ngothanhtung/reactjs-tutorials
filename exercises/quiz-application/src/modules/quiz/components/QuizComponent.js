import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Card, Radio, Spin, Input, message } from 'antd';
const RadioGroup = Radio.Group;

class OneCorrectOptionQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: -1,
    }
  }
  render() {
    const radioStyle = {
      display: 'block',
      height: '48px',
      lineHeight: '48px',
      fontWeight: '700',
    };

    return (
      <div>
        <Card title={this.props.question.questionText} style={{ width: '100%', marginBottom: 32 }}>
          <RadioGroup onChange={(e) => { this.setState({ selected: e.target.value }) }} value={this.state.selected}>
            {this.props.question.options.map((item, index) => (
              <Radio key={index} value={item.id} style={radioStyle}>{item.text}</Radio>
            ))}
          </RadioGroup>
        </Card>

        <Button type="primary"
          onClick={() => {
            const question = this.props.question;
            const found = question.options.filter(option => option.correct);
            if (found) {
              const correct = found[0];
              if (correct.id === this.state.selected) {
                this.props.onSubmit(true);
              } else {
                this.props.onSubmit(false);
              }
            }
          }}
        >Submit</Button>
      </div>
    )
  }
}


class FillInTheBlankQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
  }
  render() {
    return (
      <div>
        <Card title={this.props.question.questionText} style={{ width: '100%', marginBottom: 32 }}>
          <Input placeholder="Your answer's text" onChange={(e) => {
            this.setState({ text: e.target.value });
          }}
          />
        </Card>

        <Button type="primary"
          onClick={() => {
            const question = this.props.question;
            const correctText = question.correctText;
            if (correctText === this.state.text) {
              this.props.onSubmit(true);
            } else {
              this.props.onSubmit(false);
            }
          }}
        >Submit</Button>
      </div>
    )
  }
}


export default class QuizComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      finished: false
    }
  }

  componentWillMount() {
    this.props.getQuestionsAsync();
  }

  checkFinished() {
    if (this.props.questions && (this.state.index === this.props.questions.length - 1)) {
      this.setState({ finished: true });
    }
  }

  render() {
    let index = this.state.index;
    return (
      <div>
        {this.state.finished && <Redirect to="/finish" />}
        {this.props.loading && <div style={{ padding: 60, textAlign: 'center' }}><Spin size="large" /></div>}
        {
          this.props.questions && (this.state.finished === false) && (this.props.questions[index].type === 'one-correct-option') &&
          <OneCorrectOptionQuestion
            question={this.props.questions[index]}
            onSubmit={(result) => {
              if (result) {
                this.props.postAnswer(1);
                message.success('Good job!');
              }
              else {
                this.props.postAnswer(0);
                message.error('Sorry!');
              }

              this.setState({ index: this.state.index + 1 });
              this.checkFinished();
            }}
          />
        }

        {
          this.props.questions && (this.state.finished === false) && (this.props.questions[index].type === 'fill-in-the-blank') &&
          <FillInTheBlankQuestion
            question={this.props.questions[index]}
            onSubmit={(result) => {
              if (result) {
                this.props.postAnswer(1);
                message.success('Good job!');
              }
              else {
                this.props.postAnswer(0);
                message.error('Sorry!');
              }

              this.setState({ index: this.state.index + 1 });
              this.checkFinished();
            }}
          />
        }
      </div>
    );
  }
}
