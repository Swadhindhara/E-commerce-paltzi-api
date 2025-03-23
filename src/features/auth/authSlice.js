import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { LOGIN_REQUEST } from "./authTypes"
import authAPI from "./authAPI"


export const loginUser = createAsyncThunk(LOGIN_REQUEST, async(userData, thunkAPI) =>{
    try {
        const response = await authAPI.login(userData);
        localStorage.setItem("token", JSON.stringify(response));
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isLoading: false,
        isSuccess: false,
        isError: false,
        message : ''
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            authAPI.logout();
        }
    },

    extraReducers: (builder) => {
        builder
        .addCase(loginUser.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
})

export const { logout } = authSlice.actions;
export default authSlice.reducer