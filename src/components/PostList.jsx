import axios from "axios";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const postsPerPage = 10;

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().startsWith(searchText.toLowerCase())
  );

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirst, indexOfLast);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
      });
  }, []);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div>
      {/* Search and Filter */}
      <div
        className="d-flex align-items-center justify-content-between p-3"
        style={{ backgroundColor: "#00000026" }}
      >
        <div className="input-group flex-grow-1 me-3">
          <span className="input-group-text border-0 bg-white rounded-start-pill">
            <Search width={18} height={18} />
          </span>
          <input
            type="text"
            className="form-control border-0 rounded-end-pill"
            placeholder="Search for a post..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>
      <ul className="list-group" style={{ borderRadius: 0 }}>
        {currentPosts.map((post) => (
          <Link key={post.id} to={`/posts/${post.id}`}>
            <li
              className="list-group-item d-flex align-items-center"
              style={{
                height: 55,
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                fontSize: 16,
                fontWeight: 500,
                borderBottom: "1px solid #00000029",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#ffffff10")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.4)")
              }
            >
              {post.title}
            </li>
          </Link>
        ))}
      </ul>
      {/* Pagination */}
      <nav
        className="mt-3 bg-light"
        style={{
          padding: "15px 10px",
          height: 80,
          borderRadius: "0 0 15px 15px",
        }}
      >
        <ul className="pagination justify-content-center">
          <li className={`m-2 page-item ${currentPage === 1 && "disabled"}`}>
            <button
              className="rounded-circle page-link"
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            >
              &laquo;
            </button>
          </li>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <li
              key={num}
              className={`page-item m-2 ${currentPage === num ? "active" : ""}`}
            >
              <button
                className="rounded-circle  page-link"
                onClick={() => setCurrentPage(num)}
              >
                {num}
              </button>
            </li>
          ))}

          <li
            className={`m-2 page-item ${
              currentPage === totalPages && "disabled"
            }`}
          >
            <button
              className="page-link rounded-circle"
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            >
              &raquo;
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PostList;
