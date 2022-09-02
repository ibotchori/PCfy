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
const fetchLaptops = async () => {
  const results = await axios(
    `${baseURL}/laptops?token=5e58375285e927fe3f2ae52b4b607811`
  )
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
