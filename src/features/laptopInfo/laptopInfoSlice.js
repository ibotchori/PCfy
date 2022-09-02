import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import laptopInfoService from './laptopInfoService'

export const fetchBrands = createAsyncThunk(
  'laptopInfo/fetchBrands', // <-- action name
  async function (_, { rejectWithValue }) {
    try {
      // API call from laptopInfoService file
      return await laptopInfoService.fetchBrands()
    } catch (error) {
      // pass error message to fetchBrands.reject (action.payload)
      return rejectWithValue(error.message)
    }
  }
)

export const fetchCPUs = createAsyncThunk(
  'laptopInfo/fetchCPUs', // <-- action name
  async function (_, { rejectWithValue }) {
    try {
      // API call from laptopInfoService file
      return await laptopInfoService.fetchCPUs()
    } catch (error) {
      // pass error message to fetchCPUs.reject (action.payload)
      return rejectWithValue(error.message)
    }
  }
)

export const fetchLaptops = createAsyncThunk(
  'laptopInfo/fetchLaptops', // <-- action name
  async function (token, { rejectWithValue }) {
    try {
      // API call from laptopInfoService file
      return await laptopInfoService.fetchLaptops(token)
    } catch (error) {
      // pass error message to fetchLaptops.reject (action.payload)
      return rejectWithValue(error.message)
    }
  }
)

export const fetchLaptop = createAsyncThunk(
  'laptopInfo/fetchLaptop', // <-- action name
  async function (id, { rejectWithValue }) {
    try {
      // API call from laptopInfoService file
      return await laptopInfoService.fetchLaptop(id)
    } catch (error) {
      // pass error message to fetchLaptop.reject (action.payload)
      return rejectWithValue(error.message)
    }
  }
)

export const submitData = createAsyncThunk(
  'laptopInfo/submitData', // <-- action name
  async function (dataForSubmit, { rejectWithValue }) {
    try {
      // API call from adviceService file
      return await laptopInfoService.submitData(dataForSubmit)
    } catch (error) {
      // pass error message to fetchSkills.reject (action.payload)
      return rejectWithValue(error.message)
    }
  }
)

const initialState = {
  fetchedBrands: [],
  fetchedCPUs: [],
  fetchedLaptops: [],
  fetchedLaptop: {},
  status: null,
  error: null,
  laptop_name: '',
  laptop_image: {},
  selectedLaptopBrand: '',
  laptop_brand_id: '',
  laptop_cpu: '',
  laptop_cpu_cores: '',
  laptop_cpu_threads: '',
  laptop_ram: '',
  laptop_hard_drive_type: '',
  laptop_state: '',
  laptop_purchase_date: '',
  laptop_price: '',
  uploadImageError: false,
}

export const laptopInfoSlice = createSlice({
  name: 'laptopInfo',
  initialState,
  reducers: {
    setLaptopName: (state, action) => {
      state.laptop_name = action.payload
    },
    setLaptopImage: (state, action) => {
      state.laptop_image = action.payload
    },
    setSelectedLaptopBrand: (state, action) => {
      state.selectedLaptopBrand = action.payload
    },
    setLaptopBrandId: (state, action) => {
      state.laptop_brand_id = action.payload
    },
    setLaptopCPU: (state, action) => {
      state.laptop_cpu = action.payload
    },
    setLaptopCPUCores: (state, action) => {
      state.laptop_cpu_cores = +action.payload
    },
    setLaptopCPUThreads: (state, action) => {
      state.laptop_cpu_threads = +action.payload
    },
    setLaptopRam: (state, action) => {
      state.laptop_ram = +action.payload
    },
    setLaptopHardDriveType: (state, action) => {
      state.laptop_hard_drive_type = action.payload
    },
    setLaptopState: (state, action) => {
      state.laptop_state = action.payload
    },
    setLaptopPurchaseDate: (state, action) => {
      state.laptop_purchase_date = action.payload
    },
    setLaptopPrice: (state, action) => {
      state.laptop_price = +action.payload
    },
    setUploadImageError: (state, action) => {
      state.uploadImageError = action.payload
    },

    resetLaptopInfoState: (state) => {},
  },
  extraReducers: {
    [fetchBrands.pending]: (state) => {
      state.status = 'pending'
      state.error = null
    },
    [fetchBrands.fulfilled]: (state, action) => {
      state.status = 'fulfilled'
      state.fetchedBrands = action.payload
      state.error = null
    },
    [fetchBrands.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
    [fetchCPUs.pending]: (state) => {
      state.status = 'pending'
      state.error = null
    },
    [fetchCPUs.fulfilled]: (state, action) => {
      state.status = 'fulfilled'
      state.fetchedCPUs = action.payload
      state.error = null
    },
    [fetchCPUs.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
    [fetchLaptops.pending]: (state) => {
      state.status = 'pending'
      state.error = null
    },
    [fetchLaptops.fulfilled]: (state, action) => {
      state.status = 'fulfilled'
      state.fetchedLaptops = action.payload
      state.error = null
    },
    [fetchLaptops.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
    [fetchLaptop.pending]: (state) => {
      state.status = 'pending'
      state.error = null
    },
    [fetchLaptop.fulfilled]: (state, action) => {
      state.status = 'fulfilled'
      state.fetchedLaptop = action.payload
      state.error = null
    },
    [fetchLaptop.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
    [submitData.pending]: (state) => {
      state.status = 'pending'
    },
    [submitData.fulfilled]: (state) => {
      state.status = 'fulfilled'
    },
    [submitData.rejected]: (state, action) => {
      state.status = 'rejected'
      // set value to error from rejectWithValue parameter
      state.error = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  setLaptopName,
  setLaptopImage,
  setSelectedLaptopBrand,
  setLaptopBrandId,
  setLaptopCPU,
  setLaptopCPUCores,
  setLaptopCPUThreads,
  setLaptopRam,
  setLaptopHardDriveType,
  setLaptopState,
  setLaptopPurchaseDate,
  setLaptopPrice,
  setUploadImageError,
} = laptopInfoSlice.actions

export default laptopInfoSlice.reducer
