class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to="Ringo" from="Paul" bangs={4} />
        <Hello to="Cher" from="Sonny" bangs={2} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
