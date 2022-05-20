import React from 'react'
import ReactDOM from 'react-dom'
import Message from './Message'

class MessageList extends React.Component {
  render() {
    if (!this.props.roomId) {
      return (
        <div>
          <div>
            Join a room! &rarr;
          </div>
        </div>
      )
    }
    return (
      <div style={{ display: 'flex', flexDirection: 'column-reverse' }}>
        {
          this.props.messages.map((message, index) => {
            return (
              <Message key={message.id} username={message.senderId} text={message.text} />
            )
          })
        }
      </div>
    )
  }
}

export default MessageList