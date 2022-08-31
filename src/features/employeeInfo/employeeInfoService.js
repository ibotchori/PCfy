/* Making HTTP requests */

import axios from 'axios'

const baseURL = 'https://pcfy.redberryinternship.ge/api'

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
