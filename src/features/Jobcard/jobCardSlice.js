import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { url } from "../../components/common/api";
export const fetchJobcards = createAsyncThunk('fetchJobcards', async () => {
    const response = await fetch("https://siaserver.pythonanywhere.com/api/");
    return response.json()
})

export const fetchSingleJobcard = createAsyncThunk('fetchSingleJobcard', async(id) => {
    const response = await fetch(`${url}/api/detail/${id}`)
    return response.json()
})

export const searchJobcards = createAsyncThunk('searchJobcards', async (key) =>{
    const response = await fetch(`${url}/api/filters?search=${key}`)
    return response.json()
})

const jobcardSlice = createSlice({
    name : "jobcard",
    initialState : {
        isLoading : false,
        jobcards : null,
        singleJobcard : null,
        searchResults : null,
        iserror : false
    },
    extraReducers : (builder) => {
        builder.addCase(fetchJobcards.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchJobcards.fulfilled, (state, action) => {
            state.isLoading = false
            state.jobcards = action.payload
        });
        builder.addCase(fetchJobcards.rejected, (state, action) => {
            state.isLoading = false
            state.iserror = true
        });
        builder.addCase(fetchSingleJobcard.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchSingleJobcard.fulfilled, (state, action) => {
            state.isLoading = false
            state.singleJobcard = action.payload
        });
        builder.addCase(fetchSingleJobcard.rejected, (state, action) => {
            state.isLoading = false
            state.iserror = true
        })
        builder.addCase(searchJobcards.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(searchJobcards.fulfilled, (state, action) => {
            state.isLoading = false
            state.jobcards = action.payload
        });
        builder.addCase(searchJobcards.rejected, (state, action) => {
            state.isLoading = false
            state.iserror = true
        })
    }
})
export default jobcardSlice.reducer;