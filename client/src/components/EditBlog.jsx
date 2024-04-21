import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addMyBlog, editBlogData } from "../services/blog";

export default function EditBlog() {
  const navigate = useNavigate();
  const location = useLocation();
  const [blog, setBlog] = useState(location.state);

  const EditTheBlog = async () => {
    setBlog({...blog, id : location.state.id});
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
        <h3 className="page-title">Edit Blog</h3>
        <input
          type="text"
          className="form-control m-2"
          onChange={(e) =>
            setBlog((prev) => ({ ...prev, title: e.target.value }))
          }
          defaultValue={location.state.title}
        />
        <input
          type="text"
          className="form-control m-2"
          onChange={(e) =>
            setBlog((prev) => ({ ...prev, contents: e.target.value }))
          }
          defaultValue={location.state.contents}
        />

        <button onClick={EditTheBlog} className="btn btn-success m-2">
          Edit
        </button>
        <button onClick={cancelEdit} className="btn btn-danger m-2">
          Cancel
        </button>
      </div>
      <div className="col"></div>
    </div>
  );
}
