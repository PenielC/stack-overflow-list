import Header from './components/shared/header';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/home';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
