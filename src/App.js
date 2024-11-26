import "./App.css";
import { Routes, Route } from "react-router-dom";
import Loginpage from "./components/Loginpage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Loginpage />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
