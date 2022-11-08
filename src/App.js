import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import AnotherPage from './components/AnotherPage';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/another-page' element={<AnotherPage />} />
    </Routes>
  );
}

export default App;
