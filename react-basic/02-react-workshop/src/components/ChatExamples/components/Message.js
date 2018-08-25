import React from 'react';

function Message(props) {
  return (
    <div style={{ display: 'flex', flex: 1, backgroundColor: '#ffffff', margin: 4 }}>
      <div style={{ color: '#ffffff', margin: 4, backgroundColor: '#d63031', padding: 12, borderRadius: 100 }}>
        {props.username}
      </div>
      <div style={{ color: '#ffffff', margin: 4, flex: 1, backgroundColor: '#0984e3', padding: 12, paddingLeft: 24, borderRadius: 100 }}>
        {props.text}
      </div>
    </div>
  )
}

export default Message