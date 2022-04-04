import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Blogs from "./Components/Blogs";
import Dashbord from "./Components/Dashbord";
import Header from "./Components/Header";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";
import Reviews from "./Components/Reviews";

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/dashbord" element={<Dashbord />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
