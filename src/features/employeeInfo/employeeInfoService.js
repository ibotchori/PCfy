/* Making HTTP requests */

import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_URL

const fetchTeams = async () => {
  const results = await axios(`${baseURL}/teams`)
  return results.data.data
}
const fetchPositions = async () => {
  const results = await axios(`${baseURL}/positions`)
  return results.data.data
}

const employeeInfoService = {
  fetchTeams,
  fetchPositions,
}

export default employeeInfoService
