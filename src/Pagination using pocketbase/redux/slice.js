const { createSlice } = require("@reduxjs/toolkit");


export const userdataSlice = createSlice({
    name: "userData",
    initialState: {
        isLoading: false,
        isError: false,
        data: null,
        page: 1,
        perPage: 5,
        totalItems: 0,
        totalPages: 0,
    },
    extraReducers: (builder) => {
        builder.addCase(userData.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        builder.addCase(userData.fulfilled, (state, action) => {
            // console.log(action.payload.page)
            state.isLoading = false;
            state.data = action.payload.data;
            state.page = action.payload.page;
            state.perPage = action.payload.perPage;
            state.totalItems = action.payload.totalItems;
            state.totalPages = action.payload.totalPages;
        })
        builder.addCase(userData.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    }
})