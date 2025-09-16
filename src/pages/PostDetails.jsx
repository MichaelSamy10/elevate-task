import axios from "axios";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => {
        console.error("Error fetching posts:", err);
      });
  }, [id]);

  return (
    <div className="m-auto text-left mt-4" style={{ width: 1200 }}>
      <div
        style={{
          padding: 24,
          backgroundColor: "rgba(59,91, 131, 0.8)",
          borderRadius: "15px 15px 0 0",
        }}
      >
        <div style={{ marginTop: 100 }}>
          <Link
            to="/"
            className="btn btn-secondary text-black mt-3 mb-3 border-light"
            style={{
              borderRadius: 20,
              backgroundColor: "#FFFFFFBF",
              fontWeight: 600,
              fontSize: 16,
            }}
          >
            <ArrowLeft height={16} width={16} /> Back to Posts
          </Link>

          <h2
            className="text-white mb-3"
            style={{ fontWeight: 700, fontSize: 36 }}
          >
            {post?.title}
          </h2>
        </div>
      </div>
      <div
        className=""
        style={{
          padding: 24,
          borderRadius: "0 0 15px 15px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          height: 490,
        }}
      >
        <p style={{ fontWeight: 400, fontSize: 18, paddingRight: 50 }}>
          {post?.body}
        </p>
      </div>
    </div>
  );
};

export default PostDetails;
