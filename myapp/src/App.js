import logo from './logo.svg';
import './App.css';
import Demo from './demo';

function App() {
  return (
    <div className="App">
      
    
      <header className="App-header">
        <Demo/>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>pradhum</h1>
        <button style={{borderRadius:"100rem", backgroundColor:'yellow'}}>my button</button>
        { <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;






