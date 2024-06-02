class Slot extends React.Component {
  render() {
    // console.log(this.props);
    const { s1, s2, s3 } = this.props;
    const status = s1 === s2 && s2 === s3;
    const h1Style = {
      fontSize: '50px',
      backgroundColor: 'purple',
    };
    return (
      <div className="Slot">
        <p style={h1Style}>
          {s1} {s2} {s3}
        </p>
        <h2 style={{ color: status ? 'green' : 'red' }}>
          {status ? 'You win!' : 'You lose!'}
        </h2>
      </div>
    );
  }
}
