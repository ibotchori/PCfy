/* Making HTTP requests */

import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_URL
const token = process.env.REACT_APP_TOKEN

const fetchBrands = async () => {
  const results = await axios(`${baseURL}/brands`)
  return results.data.data
}
const fetchCPUs = async () => {
  const results = await axios(`${baseURL}/cpus`)
  return results.data.data
}
const fetchLaptops = async () => {
  const results = await axios(`${baseURL}/laptops?token=${token}`)
  return results.data.data
}
const fetchLaptop = async (id) => {
  const results = await axios(`${baseURL}/laptop/${id}?token=${token}`)

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
  fetchLaptop,
  submitData,
}

export default laptopInfoService
