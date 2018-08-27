import React from 'react'

class NewRoomForm extends React.Component {

  constructor() {
    super()
    this.state = {
      roomName: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      roomName: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.createRoom(this.state.roomName)
    this.setState({ roomName: '' })
  }

  render() {
    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <input
          className="form-control"
          value={this.state.roomName}
          onChange={this.handleChange}
          type="text"
          placeholder="Create a room"
          required />
        <button className="btn btn-primary" id="create-room-btn" type="submit">+</button>
      </form>
    )
  }
}

export default NewRoomForm