import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    id : undefined,
    loginStatus: false,
  },
  reducers: {
    loginAction: (state) => {
      state.loginStatus = true
    },
    logoutAction: (state) => {
      state.loginStatus = false
    },

    setId : (state, action) => {
      state.id = action.payload;
    }
  },
})

export const { loginAction, logoutAction, setId } = userSlice.actions
export default userSlice.reducer
