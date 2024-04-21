import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addMyBlog, editBlogData, getMyBlogsData } from "../services/blog";
import { useSelector } from "react-redux";

export default function AddBlog() {
  const navigate = useNavigate();
  const [blog, setBlog] = useState({});
  const [selectorValue, setSelectorValue] = useState();
  const categories = useSelector((state)=>state.category.items);
  console.log(categories);

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
        <h3 className="page-title">Add the Blog</h3>
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
        <select
          className="form-select m-2"
          value={selectorValue}
          onChange={(e) =>
            setBlog((prev) => ({ ...prev, category_id: e.target.value }))
          }
        >
          <option selected>select Category</option>
          {categories.length != 0 &&
            categories.map((category) => {
              return( <option value={category.id}>{category.title}</option> );
            })}
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
