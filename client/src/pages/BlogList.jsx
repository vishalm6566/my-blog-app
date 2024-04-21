import { useEffect, useState } from "react";
import { getBlogsData } from "../services/blog";
import { useSelector, useDispatch } from "react-redux";
import { removeBlogAction, addAllBlogAction } from "../features/blogSlice";
import { useNavigate, Link } from "react-router-dom";

export default function BlogList() {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.items);
  const userId = useSelector((state) => state.user.id);
  const navigate = useNavigate();
  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    const response = await getBlogsData();
    dispatch(addAllBlogAction(response.data));
  };

  const removeBlog = (blog) => {
    dispatch(removeBlogAction(blog));
  };

  const editBlog = (blog) => {
    navigate("/editBlog", { state: blog });
  };

  return (
    <div>
      <h4 className="page-title p-1">
        <u>blogList works</u>
      </h4>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-6 table">
          <table>
            <thead>
              <th>Title</th>
              <th>Contents</th>
              <th>Edit</th>
              <th>Delete</th>
            </thead>
            <tbody>
              {blogs.length != 0 &&
                blogs.map((blog) => {
                  console.log(blog.id + userId)
                  return (
                    <tr key={blog.id}>
                      <td>{blog.title}</td>
                      <td>{blog.contents}</td>
                      <td>
                        {blog.user_id == userId && (
                          <button
                            onClick={() => {
                              editBlog(blog);
                            }}
                            className="btn btn-primary"
                          >
                            Edit
                          </button>
                        )}
                      </td>
                      <td>
                        {blog.user_id == userId && (
                          <button
                            onClick={() => {
                              removeBlog(blog);
                            }}
                            className="btn btn-danger"
                          >
                            delete
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <Link className="btn btn-success" to="/addnewblog">
            Add blog
          </Link>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}
