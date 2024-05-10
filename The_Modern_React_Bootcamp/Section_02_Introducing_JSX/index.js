function getMood() {
  const moods = ['Angry', 'Hungry', 'Happy', 'Sad'];
  return moods[Math.floor(Math.random() * moods.length)];
}

class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>My Current Mode is : {getMood()}</h1>
      </div>
    );
  }
}

function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
  render() {
    const num = getNum();
    return (
      <div>
        <h1>Your Number is: {num}</h1>
        <p>{num === 7 ? 'Congrats!' : 'Unlucky!'}</p>
      </div>
    );
  }
}

// ReactDOM.render(<JSXDemo />, document.getElementById('root'));
ReactDOM.render(<NumPicker />, document.getElementById('root'));
