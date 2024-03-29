import Home from "./components/pages/Home";
import Stories from "./components/pages/Stories";
import Header from "./components/layouts/Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <div className="lg:px-0 w-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="stories" element={<Stories />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
