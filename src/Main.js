import './App.scss';
import { Routes, Route, Link } from "react-router-dom";
import Provenance from './components/Provenance';
import Landing from './Landing'
import App from './App';

function Main() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/provenance" element={<Provenance />} />
        <Route path="/staking" element={<Landing />} />
      </Routes>
    </div> 
  );
}

export default Main;
