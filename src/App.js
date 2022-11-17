import './App.css';
import { Home } from './Views/Home'
import { Page } from './Views/Page'
import {
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/:id" element={<Page />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
