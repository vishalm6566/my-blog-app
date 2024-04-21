import { useEffect, useState } from 'react'
import { getProperties } from '../services/property'
import { toast } from 'react-toastify'
import Property from './property'

function PropertyList() {
  const [properties, setProperties] = useState([])

  const loadProperties = async () => {
    const result = await getProperties()
    if (result['status'] === 'success') {
      setProperties(result['data'])
    } else {
      toast.error(result['error'])
    }
  }

  useEffect(() => {
    loadProperties()
  }, [])

  return (
    <div>
      {properties.map((property) => {
        return <Property property={property} />
      })}
    </div>
  )
}

export default PropertyList
