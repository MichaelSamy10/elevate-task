import { ScrollText } from "lucide-react";
import "./Home.css";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import PostList from "../components/PostList";

const Home = () => {
  return (
    <div
      className="posts-header m-auto text-center mt-4"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
    >
      <div
        className="d-flex justify-content-between bg-light"
        style={{ height: 64, padding: 16, borderRadius: "15px 15px 0 0" }}
      >
        <div className="post-brand">
          <ScrollText /> <span>Post List</span>
        </div>
        <Link className="create-post text-muted mt-1" to={"/create-post"}>
          <Plus width={18} height={18} />
          <span className="ms-1">Create a new post</span>
        </Link>
      </div>

      <PostList />
    </div>
  );
};

export default Home;
