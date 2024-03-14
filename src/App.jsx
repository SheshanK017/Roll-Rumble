import Home from "./Home";
import "./App.css";
import Next from "./Next";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//const navigate = useNavigate();

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/Next" element={<Next />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
