import { createSlice } from "@reduxjs/toolkit";
// import blogData from './data/blogs'

const initialState={
    blogs:[
        {
            id:1,
            title:'react basis',
            author:'ali',
            categoty:'react'
        },
        {
            id:2,
            title:'understanding use state',
            author:'akram',
            categoty:'redux'
        },
        {
            id:3,
            title:'redux toolkit',
            author:'parveez',
            categoty:'css'
        },
    ]
}

const blogSlice=createSlice({
    name:'blog',
    initialState,
    reducers:{
        addBlog:(state,action)=>{
            state.blogs.push(action.payload)
        },
        deleteBlog:(state,action)=>{
            state.blogs=state.blogs.filter((blog)=> blog.id !== action.payload)
        }
    }
})

export const {addBlog,deleteBlog}=blogSlice.actions
export default blogSlice.reducer