import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import employeeService from './employeeInfoService'

export const fetchTeams = createAsyncThunk(
  'employeeInfo/fetchTeams', // <-- action name
  async function (_, { rejectWithValue }) {
    try {
      // API call from employeeService file
      return await employeeService.fetchTeams()
    } catch (error) {
      // pass error message to fetchTeams.reject (action.payload)
      return rejectWithValue(error.message)
    }
  }
)
export const fetchPositions = createAsyncThunk(
  'employeeInfo/fetchPositions', // <-- action name
  async function (_, { rejectWithValue }) {
    try {
      // API call from employeeService file
      return await employeeService.fetchPositions()
    } catch (error) {
      // pass error message to fetchPositions.reject (action.payload)
      return rejectWithValue(error.message)
    }
  }
)

const initialState = {
  fetchedTeams: [],
  fetchedPositions: [],
  status: null,
  error: null,
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
    resetEmployeeInfoState: (state) => {},
  },
  extraReducers: {
    [fetchTeams.pending]: (state) => {
      state.status = 'pending'
      state.error = null
    },
    [fetchTeams.fulfilled]: (state, action) => {
      state.status = 'fulfilled'
      state.fetchedTeams = action.payload
      state.error = null
    },
    [fetchTeams.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
    [fetchPositions.pending]: (state) => {
      state.status = 'pending'
      state.error = null
    },
    [fetchPositions.fulfilled]: (state, action) => {
      state.status = 'fulfilled'
      state.fetchedPositions = action.payload
      state.error = null
    },
    [fetchPositions.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  setName,
  setSurname,
  setSelectedTeam,
  setTeamID,
  setSelectedPosition,
  setPositionID,
  setEmail,
  setPhoneNumber,
} = employeeInfoSlice.actions

export default employeeInfoSlice.reducer
