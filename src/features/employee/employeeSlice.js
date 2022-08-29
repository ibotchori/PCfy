import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import employeeService from './employeeService'

export const fetchTeams = createAsyncThunk(
  'employee/fetchTeams', // <-- action name
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
  'employee/fetchPositions', // <-- action name
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
  email: '',
  phone: '',
}

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addSkill: (state, action) => {
      state.addedSkills.push({
        id: action.payload.selectedSkillID,
        experience: action.payload.expYear,
        title: action.payload.selectedSkill,
      })
    },
    removeSkill: (state, action) => {
      state.addedSkills = state.skills.filter(
        (skill) => skill.id !== action.payload.itemId
      )
    },
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
export const { addSkill, removeSkill } = employeeSlice.actions

export default employeeSlice.reducer
