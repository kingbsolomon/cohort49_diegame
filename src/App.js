import Die from './Components/Die/Die';
import './App.css';

function App() {
  return (
    <div className="App">
      <Die numSides={5}/>
      <Die numSides={7}/>
      <Die numSides={9}/>
      <Die numSides={15}/>
      <Die numSides={27}/>
      <Die numSides={52}/>
    </div>
  );
}

export default App;
