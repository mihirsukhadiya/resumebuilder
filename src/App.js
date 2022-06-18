import "./App.css";
import ResumeForm from "./Component/ResumeForm";
import ResumeView from "./Component/ResumeView";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ResumeForm />} />
          <Route path="/resume" element={<ResumeView />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
