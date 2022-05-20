import React from 'react'

class RoomList extends React.Component {
  render() {
    const orderedRooms = [...this.props.rooms].sort((a, b) => a.id > b.id)
    return (
      <div>
        <h3>Your rooms:</h3>
        {orderedRooms.map(room => {
          const active = room.id === this.props.roomId ? 'btn-primary' : 'btn-default';
          return (
            <button key={room.id}
              className={"btn btn-block " + active}
              style={{ textAlign: 'left' }}
              onClick={() => this.props.subscribeToRoom(room.id)}>
              {room.name}
            </button>
          )
        })}
      </div>
    )
  }
}

export default RoomList