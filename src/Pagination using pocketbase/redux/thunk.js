import { createAsyncThunk } from "@reduxjs/toolkit";



// get the data of user 
export const userData = createAsyncThunk("userData", async (obj) => {
    try {
       
        console.log(obj.pageSize)
        const records = await pb.collection('users').getList(obj.page, obj.pageSize, {
            expand: 'role_id',
        });
        // console.log(records);
        const data = records?.items?.filter((item) => item.expand.role_id.role_type === "content_author" || item.expand.role_id.role_type === "admin")
        // console.log(data.length);

        return {
            data,
            page: records.page,
            perPage: records.perPage,
            totalItems: records.totalItems,
            totalPages: records.totalPages
        };
    }
    catch (error) {
        console.log(error);
    }
})

// delete the user using id 
export const deleteUser = createAsyncThunk("deleteUser", async (id) => {
    try {
        await pb.collection('users').delete(`${id}`);
    }
    catch (error) {
        console.log(error);
    }
})
