import './App.css';
import Lottery from './Lottery';
import ScoreKeeper from './ScoreKeeper';

function App() {
  return (
    <div className="App">
      <ScoreKeeper />
      <Lottery />
      <Lottery title="Big Lottery" numBalls={10} maxNum={40} />
    </div>
  );
}

export default App;
