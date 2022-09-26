import './App.css';

import Trending from './pages/Trending/Trending'

import { Routes, Route } from "react-router-dom";
import Developers from './pages/Developers/Developers';
function App() {
  return (
   <Routes>
        <Route exat path="/"  element={<Trending/>} />
        <Route path="/Trending" element={<Trending/>} />
        <Route path="/Developer" element={<Developers/>} />
        </Routes>

  );
}

export default App;
