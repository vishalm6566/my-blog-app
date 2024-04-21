import { useDispatch } from 'react-redux'
import { addToCartAction } from '../features/cartSlice'
import config from '../config'
import { useNavigate } from 'react-router-dom'

function Property({ property }) {
  const getShortDetails = () => {
    return property.details.length > 50
      ? property.details.substr(0, 50) + '...'
      : property.details
  }

  // used to update the state
  const dispatch = useDispatch()

  const bookProperty = () => {
    dispatch(addToCartAction(property))
  }

  const navigate = useNavigate()
  const onPropertyClick = () => {
    navigate(`/property-details/${property.id}`)
  }

  return (
    <div
      onClick={onPropertyClick}
      className='col-3'
      style={{ display: 'inline-block', cursor: 'pointer', padding: 10 }}
    >
      <div className='card'>
        <img
          style={{ height: 200 }}
          className='card-img-top'
          src={`${config.url}/image/${property.profileImage}`}
          alt=''
        />
        <div className='card-body'>
          <h5 className='card-title'>{property.title}</h5>
          <p className='card-text'>{getShortDetails()}</p>
          <div style={{ fontWeight: 600 }}>₹ {property.rent} night</div>
          <button
            onClick={bookProperty}
            style={{ position: 'absolute', right: 15, bottom: 15 }}
            className='btn btn-success'
          >
            Book
          </button>
        </div>
      </div>
    </div>
  )
}

export default Property
