import React, { Component } from 'react';
import CheckBox from './CheckBox';
import TextInput from './TextInput';
import axios from 'axios';

class Post extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.title}</h4>
        <p>
          {this.props.body}
        </p>
      </div>
    );
  }
}

class Posts extends Component {
  render() {
    return (
      <div>
        {
          this.props.posts.map((item, index) => (
            <div key={index}>
              <Post title={item.title} body={item.body} />
              <hr />
            </div>
          ))
        }
      </div>
    );
  }
}

export default class AsyncExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: false,
    }

    this.getDataHandle = this.getDataHandle.bind(this);
  }

  getDataHandle() {
    // axios get
    const url = "https://jsonplaceholder.typicode.com/posts";
    this.setState({ loading: true });
    axios.get(url)
      .then((response) => {
        // handle success
        console.log('Result', response);
        this.setState({ loading: false });
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  }

  render() {
    return (
      <div>
        <button onClick={this.getDataHandle}>Get data</button>
        <hr />
        {
          this.state.loading &&
          <h3>
            Loading ...
					</h3>
        }
        {
          (this.state.loading === false) &&
          <Posts posts={this.state.posts} />
        }

      </div>
    );
  }
}
