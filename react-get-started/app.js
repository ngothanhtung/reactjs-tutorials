var Application = React.createClass({
  render: function() {
    return(
      <div>
        <h1>Hello React</h1>
        <Player />
      </div>
    );
  }
});

function Player(props) {
  return (
    <div className="player">
      PLAYERS
    </div>
  );
}

ReactDOM.render(<Application />, document.getElementById('container'));
