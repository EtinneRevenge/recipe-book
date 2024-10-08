import { createAsyncThunk } from "@reduxjs/toolkit"

const fetchUserById = userId =>
    new Promise(reslove =>
        setTimeout(() => reslove({
            id: 1, name: 'Stepan'
        }), 1000)
    )


export const getUserById = createAsyncThunk('users/by-id',
    async (userId, thunkApi) => {
        try {
            const response = await fetchUserById(userId)
            return response
        }
        catch (error) {
            thunkApi.rejectWithValue({ error })
        }
    }
)