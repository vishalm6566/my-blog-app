import { useDispatch } from "react-redux";
import { removeFromCartAction } from "../features/cartSlice";
import config from "../config";

function CartItem({ property }) {
  const getShortDetails = () => {
    return property.details.length > 50
      ? property.details.substr(0, 50) + "..."
      : property.details;
  };

  // used to update the state
  const dispatch = useDispatch();

  const cancelBooking = () => {
    dispatch(removeFromCartAction(property));
  };

  return (
    <div className="col-3" style={{ display: "inline-block", padding: 10 }}>
      <div className="card">
        <img
          style={{ height: 200 }}
          className="card-img-top"
          src={`${config.url}/image/${property.profileImage}`}
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">{property.title}</h5>
          <p className="card-text">{getShortDetails()}</p>
          <div style={{ fontWeight: 600 }}>₹ {property.rent} night</div>
          <button
            onClick={cancelBooking}
            style={{ position: "absolute", right: 15, bottom: 15 }}
            className="btn btn-danger"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
