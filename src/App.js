import './App.css';
import { Body } from './components/Body';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Body />
      </header>
    </div>
  );
}

export default App;
