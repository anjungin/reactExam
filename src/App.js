import logo from './logo.svg';
import './App.css';
import myheader from './myheader.js';
import Counter from './Counter.js';

function App() {
  let name = '안정인';
  const style = {
      App : {
          background : "yellow",
      }
  }
  return (
    <div className="App" style={style.App}>
        <myheader />
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
    </div>
  );
}

export default App;
