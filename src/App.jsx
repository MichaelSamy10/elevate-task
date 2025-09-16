import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import PostDetails from "./pages/PostDetails";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router basename="/elevate-task">
      <div className="hero">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/posts/:id" element={<PostDetails />} />
        </Routes>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          closeOnClick
          pauseOnHover
        />
      </div>
    </Router>
  );
}

export default App;
