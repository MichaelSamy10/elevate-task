import axios from "axios";
import { Notebook } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title,
      body,
      userId: 1,
    });
    console.log("Post created:", res.data);
    setTitle("");
    setBody("");
    toast.success("A new post has been successfully created!");
    // window.location.href = "/";
  };

  return (
    <div
      className="posts-header m-auto text-center mt-4"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.7)", paddingBottom: 24 }}
    >
      <div
        className="d-flex justify-content-between bg-light"
        style={{ height: 64, padding: 16, borderRadius: "15px 15px 0 0" }}
      >
        <div className="post-brand">
          <Notebook /> <span>Create a New Post</span>
        </div>
      </div>

      {/* Form */}
      <div
        className="bg-light "
        style={{
          padding: 24,
          width: 850,
          borderRadius: 15,
          margin: 24,
          height: 600,
        }}
      >
        <form className="text-start" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="Title" className="form-label fw-bold">
              Title
            </label>
            <input
              className="form-control"
              id="Title"
              placeholder="Enter post title"
              style={{ backgroundColor: "#0000001A" }}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Body" className="form-label fw-bold">
              Body
            </label>
            <textarea
              className="form-control"
              id="Body"
              placeholder="Enter post body"
              style={{
                backgroundColor: "#0000001A",
                width: 800,
                height: 125,
                resize: "none",
              }}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            />
          </div>

          <div className="text-end" style={{ paddingTop: 46 }}>
            <button
              type="submit"
              className="btn text-white"
              style={{
                backgroundColor: "#333333",
                fontSize: 16,
                fontWeight: 400,
                width: 407,
                height: 51,
                borderRadius: 15,
              }}
            >
              Create Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
