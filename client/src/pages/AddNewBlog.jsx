import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addMyBlog, editBlogData, getMyBlogsData } from "../services/blog";

export default function AddNewBlog() {
  const navigate = useNavigate();
  const [blog, setBlog] = useState({});
  const [selectorValue, setSelectorValue] = useState();

  const EditTheBlog = async () => {
    // setBlog({...blog, id : location.state.id});
    console.log(blog);
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
        <select className="form-select m-2" aria-label="Default select example" value={selectorValue} onChange={(e)=>setBlog((prev)=> ({...prev, category_id : e.target.value}))}>
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

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
