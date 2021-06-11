import './App.css';
import Content from './components/Content';
import Nav from './components/Nav';
import ScrollHandler from './components/ScrollHandler';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollHandler />
        <Nav />
        <Content />
      </div>
    </BrowserRouter>
  );
}

export default App;
