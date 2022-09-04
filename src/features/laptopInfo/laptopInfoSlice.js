import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import laptopInfoService from './laptopInfoService'

export const fetchBrands = createAsyncThunk(
  'laptopInfo/fetchBrands',
  async function (_, { rejectWithValue }) {
    try {
      return await laptopInfoService.fetchBrands()
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const fetchCPUs = createAsyncThunk(
  'laptopInfo/fetchCPUs',
  async function (_, { rejectWithValue }) {
    try {
      return await laptopInfoService.fetchCPUs()
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const fetchLaptops = createAsyncThunk(
  'laptopInfo/fetchLaptops',
  async function (token, { rejectWithValue }) {
    try {
      return await laptopInfoService.fetchLaptops(token)
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const fetchLaptop = createAsyncThunk(
  'laptopInfo/fetchLaptop',
  async function (id, { rejectWithValue }) {
    try {
      return await laptopInfoService.fetchLaptop(id)
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const submitData = createAsyncThunk(
  'laptopInfo/submitData',
  async function (dataForSubmit, { rejectWithValue }) {
    try {
      return await laptopInfoService.submitData(dataForSubmit)
    } catch (error) {
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

    resetLaptopInfoState: (state) => {
      state.fetchedBrands = []
      state.fetchedCPUs = []
      state.fetchedLaptops = []
      state.fetchedLaptop = {}
      state.status = null
      state.error = null
      state.laptop_name = ''
      state.laptop_image = {}
      state.selectedLaptopBrand = ''
      state.laptop_brand_id = ''
      state.laptop_cpu = ''
      state.laptop_cpu_cores = ''
      state.laptop_cpu_threads = ''
      state.laptop_ram = ''
      state.laptop_hard_drive_type = ''
      state.laptop_state = ''
      state.laptop_purchase_date = ''
      state.laptop_price = ''
      state.uploadImageError = false
    },
  },
  extraReducers: {
    [fetchBrands.fulfilled]: (state, action) => {
      state.fetchedBrands = action.payload
    },
    [fetchCPUs.fulfilled]: (state, action) => {
      state.fetchedCPUs = action.payload
    },
    [fetchLaptops.fulfilled]: (state, action) => {
      state.fetchedLaptops = action.payload.reverse()
    },
    [fetchLaptop.fulfilled]: (state, action) => {
      state.fetchedLaptop = action.payload
    },
    [submitData.pending]: (state) => {
      state.status = 'pending'
    },
    [submitData.fulfilled]: (state) => {
      state.status = 'fulfilled'
    },
    [submitData.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
  },
})

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
  resetLaptopInfoState,
} = laptopInfoSlice.actions

export default laptopInfoSlice.reducer
