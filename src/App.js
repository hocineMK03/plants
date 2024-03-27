import './App.css';
import LandingPage from './pages/landingpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <div className="App">
       <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth"  />
        <Route path="/pricing" />
        <Route path="/about"/>
        <Route path="/contactus"  />
        <Route path="/shop"  />
        </Routes>
        </Router>
    </div>
  );
}

export default App;
