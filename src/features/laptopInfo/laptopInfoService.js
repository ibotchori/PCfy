/* Making HTTP requests */

import axios from 'axios'

const baseURL = 'https://pcfy.redberryinternship.ge/api'

const fetchBrands = async () => {
  const results = await axios(`${baseURL}/brands`)
  return results.data.data
}
const fetchCPUs = async () => {
  const results = await axios(`${baseURL}/cpus`)
  return results.data.data
}

const laptopInfoService = {
  fetchBrands,
  fetchCPUs,
}

export default laptopInfoService
