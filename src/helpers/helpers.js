import { resetEmployeeInfoState } from 'features/employeeInfo/employeeInfoSlice'
import { resetLaptopInfoState } from 'features/laptopInfo/laptopInfoSlice'

export const navigatePage = (path, navigate, dispatch) => {
  navigate(path)
  localStorage.removeItem('selectedTeamID')
  localStorage.removeItem('selectedPositionID')
  localStorage.removeItem('storageKey')
  dispatch(resetLaptopInfoState())
  dispatch(resetEmployeeInfoState())
}
