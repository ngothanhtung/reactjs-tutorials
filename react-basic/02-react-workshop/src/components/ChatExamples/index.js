import React from 'react'
import Chatkit from '@pusher/chatkit'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import NewRoomForm from './components/NewRoomForm'

import { tokenUrl, instanceLocator } from './config'

class ChatExamples extends React.Component {

  constructor() {
    super()
    this.state = {
      roomId: null,
      messages: [],
      joinableRooms: [],
      joinedRooms: []
    }
    this.sendMessage = this.sendMessage.bind(this)
    this.subscribeToRoom = this.subscribeToRoom.bind(this)
    this.getRooms = this.getRooms.bind(this)
    this.createRoom = this.createRoom.bind(this)
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'tungnt',
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    })

    chatManager.connect()
      .then(currentUser => {
        this.currentUser = currentUser
        this.getRooms()
      })
      .catch(err => console.log('error on connecting: ', err))
  }

  getRooms() {
    this.currentUser.getJoinableRooms()
      .then(joinableRooms => {
        this.setState({
          joinableRooms,
          joinedRooms: this.currentUser.rooms
        })
      })
      .catch(err => console.log('error on joinableRooms: ', err))
  }

  subscribeToRoom(roomId) {
    this.setState({ messages: [] })
    this.currentUser.subscribeToRoom({
      roomId: roomId,
      hooks: {
        onNewMessage: message => {
          this.setState({
            messages: [...this.state.messages, message]
          })
        }

      }
    })
      .then(room => {
        this.setState({
          roomId: room.id
        })
        this.getRooms()
      })
      .catch(err => console.log('error on subscribing to room: ', err))
  }

  sendMessage(text) {
    this.currentUser.sendMessage({
      text,
      roomId: this.state.roomId
    })
  }

  createRoom(name) {
    this.currentUser.createRoom({
      name
    })
      .then(room => {
        this.subscribeToRoom(room.id)
      })
      .catch(err => console.log('error with createRoom: ', err))
  }

  render() {
    return (
      <div style={{ display: 'flex', flex: 1 }}>
        <div style={{ padding: 8, flex: 1, backgroundColor: '#dfe6e9' }}>
          <RoomList
            subscribeToRoom={this.subscribeToRoom}
            rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}
            roomId={this.state.roomId} />
          <hr />
          <NewRoomForm createRoom={this.createRoom} />
        </div>
        <div style={{ padding: 8, flex: 4, backgroundColor: '#ffffff' }}>
          <SendMessageForm
            disabled={!this.state.roomId}
            sendMessage={this.sendMessage} />
          <hr />
          <MessageList
            roomId={this.state.roomId}
            messages={this.state.messages} />


        </div>

      </div>
    );
  }
}

export default ChatExamples