import { useEffect, useState } from "react";
import { getBlogsData, getMyBlogsData } from "../services/blog";
import { useSelector, useDispatch } from "react-redux";
import { removeBlogAction, addAllBlogAction } from "../features/blogSlice";
import { useNavigate } from "react-router-dom";

export default function MyBlog() {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.items);
  const navigate = useNavigate();
  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    const response = await getMyBlogsData();
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
        <div className="col"></div>
        <div className="col table">
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
                  return (
                    <tr key={blog.id}>
                      <td>{blog.title}</td>
                      <td>{blog.contents}</td>
                      <td>
                        <button
                          onClick={() => {
                            editBlog(blog);
                          }}
                          className="btn btn-primary"
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            removeBlog(blog);
                          }}
                          className="btn btn-danger"
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}
