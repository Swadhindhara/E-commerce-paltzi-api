import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userAPI from "./userAPI";
import { toast } from "sonner";


export const fetchUser = createAsyncThunk('user/fetchUser', async (_, thunkAPI) => {
    try {
        const response = await userAPI.getProfile();
        return response;
    } catch (error) {
        thunkAPI.rejectWithValue(error.message || "No user available");
    }
});  


export const updateUser = createAsyncThunk('user/updateUser', async ({id,userData}, thunkAPI) => {
    try {
        const response = await userAPI.updateProfile(id, userData);
        console.log(response, "Updated profile");
        return response;
    } catch (error) {
        thunkAPI.rejectWithValue(error.message || "Failed to update user");
    }
})

const useSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        isLoading: false,
        isError: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchUser.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
        })
        .addCase(fetchUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            console.error(action.payload);
        })

        // =========== Update =================
        .addCase(updateUser.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(updateUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            toast.success("User updated successfully");
        })
        .addCase(updateUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            console.error(action.payload);
        })
    }
})


export default useSlice.reducer;