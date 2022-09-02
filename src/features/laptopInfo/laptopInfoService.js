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
const fetchLaptops = async (token) => {
  const results = await axios(`${baseURL}/laptops?token=${token}`)
  return results.data.data
}

const submitData = async (dataForSubmit) => {
  const results = await axios({
    method: 'POST',
    url: `${baseURL}/laptop/create`,
    data: dataForSubmit,
  })

  return results.status
}

const laptopInfoService = {
  fetchBrands,
  fetchCPUs,
  fetchLaptops,
  submitData,
}

export default laptopInfoService
