import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import AboutPage from "../AboutPage/AboutPage";
import AdminPage from "../AdminPage/AdminPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/about">
          About
        </NavLink>
        <NavLink activeClassName="active" to="/admin">
          Admin
        </NavLink>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </div>
  );
}

export default App;
