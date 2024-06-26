import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import AboutPage from "../AboutPage/AboutPage";
import PlanPage from "../PlanPage/PlanPage";
import ContactPage from "../ContactPage/ContactPage";
import BlogPage from "../BlogPage/BlogPage";
import AdminPage from "../AdminPage/AdminPage";
import "./App.css";
import Footer from "../../components/Footer/Footer";

function App() {
  const location = useLocation();

  const shouldRenderNavs = () => {
    return !location.pathname.includes("/admin");
  };

  return (
    <div className="App">
      {shouldRenderNavs() && <NavBar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/plans" element={<PlanPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />

        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      {shouldRenderNavs() && <Footer />}
    </div>
  );
}

export default App;
