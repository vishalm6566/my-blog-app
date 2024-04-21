import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { editBlogData } from "../services/blog";

export default function EditCategory() {
  const navigate = useNavigate();
  const location = useLocation();
  const [blog, setBlog] = useState(location.state);

  const EditTheBlog = async () => {
    setBlog({...blog, id : location.state.id});
    const response = await editBlogData(blog);
    toast.success("category edited successfully....");
    navigate("/categories");
  };

  const cancelEdit = () => {
    toast.success("edit canceled!!");
    navigate("/categories");
  };

  return (
    <div className="row">
      <div className="col"></div>
      <div className="col form">
        <h3 className="page-title">Edit Category</h3>
        <input
          type="text"  
          className="form-control m-2"
          onChange={(e) =>
            setBlog((prev) => ({ ...prev, title: e.target.value }))
          }
          defaultValue={location.state.title}
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
