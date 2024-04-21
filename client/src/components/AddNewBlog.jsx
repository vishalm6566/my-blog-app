import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addMyBlog, editBlogData, getMyBlogsData } from "../services/blog";

export default function AddNewBlog() {
  const navigate = useNavigate();
  const [blog, setBlog] = useState({});

  const EditTheBlog = async () => {
    // setBlog({...blog, id : location.state.id});
    const response = await addMyBlog(blog);
    toast.success("blog edited successfully....");
    navigate("/home");
  };

  const cancelEdit = () => {
    toast.success("edit canceled!!");
    navigate("/home");
  };

  return (
    <div className="row">
      <div className="col"></div>
      <div className="col form">
        <h3 className="page-title">Add Blog</h3>
        <input
          type="text"
          className="form-control m-2"
          onChange={(e) =>
            setBlog((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <input
          type="text"
          className="form-control m-2"
          onChange={(e) =>
            setBlog((prev) => ({ ...prev, contents: e.target.value }))
          }
        />

        <button onClick={EditTheBlog} className="btn btn-success m-2">
          Add Blog
        </button>
        <button onClick={cancelEdit} className="btn btn-danger m-2">
          Cancel
        </button>
      </div>
      <div className="col"></div>
    </div>
  );
}
