import { useEffect, useState } from "react";
import { addCategoryData, getCategoriesData } from "../services/categories";
import {
  addAllCategoryAction,
  addCategoryAction,
  removeCategoryAction,
} from "../features/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeBlogAction } from "../features/blogSlice";
import { toast } from "react-toastify";

export default function Categories() {
  const [cat, setCat] = useState();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.items);
  console.log("cate");
  console.log(categories);
  const navigate = useNavigate();

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const response = await getCategoriesData();
    dispatch(addAllCategoryAction(response.data));
  };

  const removeCategory = (category) => {
    dispatch(removeCategoryAction(category));
  };

  const editCategory = (category) => {
    navigate("/editcat", { state: category });
  };

  const addCategory = async () => {
    const body = { title: cat, description: "" };
    console.log(body);
    dispatch(addCategoryAction(body));
    const response = await addCategoryData(body);
    toast.success("category added successfully");
    navigate("/categories");
  };

  return (
    <div>
      <h4 className="page-title p-1">
        <u>blogList works</u>
      </h4>
      <div className="row">
        <div className="col"></div>
        <div className="col table">
          <div className="row form">
            <input
              type="text"
              className="form-control"
              onChange={(e) => setCat(e.target.value)}
            />
          </div>
          <button className="btn btn-success page-title" onClick={addCategory}>
            Add Category
          </button>

          <table>
            <thead>
              <th>Title</th>
              <th>Contents</th>
              <th>Edit</th>
              <th>Delete</th>
            </thead>
            <tbody>
              {categories.length != 0 &&
                categories.map((category) => {
                  return (
                    <tr key={category.id}>
                      <td>{category.title}</td>
                      <td>{category.contents}</td>
                      <td>
                        <button
                          onClick={() => {
                            editCategory(category);
                          }}
                          className="btn btn-primary"
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            removeCategory(category);
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
