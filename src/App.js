// import logo from './logo.svg';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Sub from './Pages/Sub';
import Hello from './Pages/Hello';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hello />} />
          <Route path='/sub' element={<Sub />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
