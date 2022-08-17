import './App.css';
import { Body } from './components/Body';
import { Navbar } from './components/Navbar';
import { useEffect, useState } from 'react';
import { Loader } from './components/loaders/Loader';

const MainContent= 
<div className="App">
  <header className="App-header">
    <h1><Navbar /></h1>
    <Body />
  </header>
</div>

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return loading ? <Loader /> : MainContent;
}

export default App;