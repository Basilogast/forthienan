import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Parallax } from "./components/Parallax";
import { LoveLetter } from "./components/LoveLetter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { YesPage } from "./components/YesPage";
import { NoPage } from "./components/NoPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Parallax />
                <LoveLetter />
              </>
            }
          />
          <Route path="/yes" element={<YesPage />} />
          <Route path="/no" element={<NoPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
