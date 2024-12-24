import { Route, Routes } from "react-router-dom";
import Services from "./Pages/Services";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
};

export default App;
