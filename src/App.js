
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TicTacToe from './pages/TicTacToe';
import LightOn from './pages/LightOn';
import Layout from './Layout';
import NoPage from './pages/NoPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<TicTacToe />} />
          <Route path="lighton" element={<LightOn />} />
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
