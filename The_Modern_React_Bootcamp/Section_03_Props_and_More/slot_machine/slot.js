class Slot extends React.Component {
  render() {
    // console.log(this.props);
    const props = this.props;
    const status = props.s1 === props.s2 && props.s2 === props.s3;
    const h1Style = {
      fontSize: '50px',
      backgroundColor: 'purple',
    };
    return (
      <div className="Slot">
        <p style={h1Style}>
          {props.s1} {props.s2} {props.s3}
        </p>
        <h2 style={{ color: status ? 'green' : 'red' }}>
          {status ? 'You win!' : 'You lose!'}
        </h2>
      </div>
    );
  }
}
