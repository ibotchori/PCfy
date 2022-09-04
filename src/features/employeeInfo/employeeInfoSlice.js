import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import employeeService from './employeeInfoService'

export const fetchTeams = createAsyncThunk(
  'employeeInfo/fetchTeams',
  async function (_, { rejectWithValue }) {
    try {
      return await employeeService.fetchTeams()
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
export const fetchPositions = createAsyncThunk(
  'employeeInfo/fetchPositions',
  async function (_, { rejectWithValue }) {
    try {
      return await employeeService.fetchPositions()
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const initialState = {
  fetchedTeams: [],
  fetchedPositions: [],
  name: '',
  surname: '',
  selectedTeam: '',
  selectedPosition: '',
  team_id: '',
  position_id: '',
  email: '',
  phone_number: '',
}

export const employeeInfoSlice = createSlice({
  name: 'employeeInfo',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload
    },
    setSurname: (state, action) => {
      state.surname = action.payload
    },
    setSelectedTeam: (state, action) => {
      state.selectedTeam = action.payload
    },
    setTeamID: (state, action) => {
      state.team_id = action.payload
    },
    setSelectedPosition: (state, action) => {
      state.selectedPosition = action.payload
    },
    setPositionID: (state, action) => {
      state.position_id = action.payload
    },
    setEmail: (state, action) => {
      state.email = action.payload
    },
    setPhoneNumber: (state, action) => {
      state.phone_number = action.payload
    },
    resetEmployeeInfoState: (state) => {
      state.fetchedTeams = []
      state.fetchedPositions = []
      state.name = ''
      state.surname = ''
      state.selectedTeam = ''
      state.selectedPosition = ''
      state.team_id = ''
      state.position_id = ''
      state.email = ''
      state.phone_number = ''
    },
  },
  extraReducers: {
    [fetchTeams.fulfilled]: (state, action) => {
      state.fetchedTeams = action.payload
    },
    [fetchPositions.fulfilled]: (state, action) => {
      state.fetchedPositions = action.payload
    },
  },
})

export const {
  setName,
  setSurname,
  setSelectedTeam,
  setTeamID,
  setSelectedPosition,
  setPositionID,
  setEmail,
  setPhoneNumber,
  resetEmployeeInfoState,
} = employeeInfoSlice.actions

export default employeeInfoSlice.reducer
