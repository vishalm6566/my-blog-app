import axios from 'axios'
import config from '../config'

export async function getProperties() {
  // read the token from sessionStorage
  // const token = sessionStorage.token
  // const token = sessionStorage['token']
  const token = sessionStorage.getItem('token')

  const response = await axios.get(`${config.url}/property`, {
    headers: {
      token,
    },
  })
  return response.data
}

export async function getPropertyDetails(id) {
  const token = sessionStorage.getItem('token')

  const response = await axios.get(`${config.url}/property/details/${id}`, {
    headers: {
      token,
    },
  })
  return response.data
}

export async function addProperty(
  title,
  details,
  contactName,
  contactNumber,
  address,
  rent
) {
  // read the token from sessionStorage
  // const token = sessionStorage.token
  // const token = sessionStorage['token']
  const token = sessionStorage.getItem('token')

  const body = {
    title,
    details,
    rent,
    address,
    contactNo: contactNumber,
    ownerName: contactName,
    isLakeView: 0,
    isTV: 1,
    isAC: 1,
    isWifi: 1,
    isMiniBar: 0,
    isBreakfast: 1,
    isParking: 1,
    guests: 3,
    bedrooms: 2,
    beds: 2,
    bathrooms: 1,
  }

  const response = await axios.post(`${config.url}/property`, body, {
    headers: {
      token,
    },
  })
  return response.data
}
