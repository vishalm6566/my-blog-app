import { useState } from 'react'
import { addProperty } from '../services/property'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function AddProperty() {
  const [title, setTitle] = useState('')
  const [contactName, setContactName] = useState('')
  const [address, setAddress] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [rent, setRent] = useState('')
  const [details, setDetails] = useState('')

  const navigate = useNavigate()

  const addNewProperty = async () => {
    const result = await addProperty(
      title,
      details,
      contactName,
      contactNumber,
      address,
      rent
    )
    console.log(result)

    if (result['status'] == 'success') {
      toast.success('Successfully added a property')
      navigate('/home')
    } else {
      toast.error(result['error'])
    }
  }

  return (
    <div>
      <h2 className='page-title'>Add Property</h2>

      <div className='form'>
        <div className='mb-3'>
          <label htmlFor=''>Title</label>
          <input
            onChange={(e) => {
              setTitle(e.target.value)
            }}
            type='text'
            className='form-control'
          />
        </div>

        <div className='row'>
          <div className='col'>
            <div className='mb-3'>
              <label htmlFor=''>Contact Name</label>
              <input
                onChange={(e) => {
                  setContactName(e.target.value)
                }}
                type='text'
                className='form-control'
              />
            </div>
          </div>
          <div className='col'>
            <div className='mb-3'>
              <label htmlFor=''>Contact Number</label>
              <input
                onChange={(e) => {
                  setContactNumber(e.target.value)
                }}
                type='text'
                className='form-control'
              />
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <div className='mb-3'>
              <label htmlFor=''>Address</label>
              <input
                onChange={(e) => {
                  setAddress(e.target.value)
                }}
                type='text'
                className='form-control'
              />
            </div>
          </div>
          <div className='col'>
            <div className='mb-3'>
              <label htmlFor=''>Rent</label>
              <input
                onChange={(e) => {
                  setRent(e.target.value)
                }}
                type='number'
                className='form-control'
              />
            </div>
          </div>
        </div>

        <div className='mb-3'>
          <label htmlFor=''>Details</label>
          <textarea
            onChange={(e) => {
              setDetails(e.target.value)
            }}
            rows='10'
            className='form-control'
          ></textarea>
        </div>

        <div className='mb-3'>
          <button onClick={addNewProperty} className='btn btn-success'>
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddProperty
