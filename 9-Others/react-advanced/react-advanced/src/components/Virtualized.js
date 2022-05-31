import React, { Component } from 'react';
import { List } from 'react-virtualized';

// List data as an array of strings
const list = [];

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    for (var i = 0; i < 100000; i++) {
      list.push('Product Name ' + i);
    }
  }


  rowRenderer({
    key,         // Unique key within array of rows
    index,       // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible,   // This row is visible within the List (eg it is not an overscanned row)
    style        // Style object to be applied to row (to position it)
  }) {
    return (
      <div key={key} style={style}>
        <div style={{ textAlign: 'left', padding: 4, backgroundColor: 'yellow' }}>
          {list[index]}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        {/* {
          list.map((item, index) => (
            <div style={{ backgroundColor: 'green', padding: 4, textAlign: 'left', borderBottom: '1px solid white' }} key={index}>
              {list[index]}
            </div>
          ))
        } */}
        <List
          style={{ width: '100%', padding: 2, }}
          width={1024}
          height={400}
          rowCount={list.length}
          rowHeight={30}
          rowRenderer={this.rowRenderer}
        />
      </div>
    );
  }
}
