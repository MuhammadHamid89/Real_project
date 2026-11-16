//yaha javascript k function hoty hain
import { NavigationType } from "react-router-dom";
import posts from "../data/posts.js";
const getPosts= (req,res) =>{
    // res.status(200).json(posts)

    let result= [...posts]  // copy make with the help of spread operator
    const category= req.query.category;
    const search= req.query.search;
    const sort= req.query.sort;

    //Query parameters arrive as strings
    // use simple defaullts when page limit are not provided

    const page=Number(req.query.page) || 1 ;
    const limit= Number(req.query.limit) || 3

    // 1: filter by category
    if(category){
        result=result.filter((post)=>{
            return post.category.toLocaleLowerCase() === category.toLocaleLowerCase()
        })
    }

    // 2 : search by title
    if(search){
        result=result.filter((post)=>{
            return post.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        })
    }

    // 3 : sort by date
    if(sort === 'latest'){
        result.sort((a,b)=>{
            return new Date(b.date) - new Date(a.date)
        })
    }

    if(sort == 'oldest'){
        result.sort((a,b)=>{
            return new Date(a.date) - new Date(b.date)
        })
    }

    //count matching post before pagination
    const totalPosts=result.length;
    const totalPages=Math.ceil(totalPosts/limit)

    // 4: paginate
    const startIndex=(page - 1) * limit
    const paginatedPosts=result.slice(startIndex,startIndex + limit)

    res.status(200).json({
        page: page,
        limit: limit,
        totalPosts: totalPosts,
        totalPages: totalPages,
        posts : paginatedPosts
    })
}
const getPostsById=(req,res)=>{
    const id = Number(req.params.id) //yaha ye sure kr rhy hain k id number hi ho
    const post=posts.find((post)=> post.id === id)
    if(!post){
        return res.status(400).json({message:'post not found'})
    }
    res.status(200).json(post)
}

const createPost=(req,res)=>{
    const newPost={
        // let {title,content,author,category,date}=req.body (esy bi likh sakty hain body destructure)
        id: posts.length > 0 ? posts[posts.length - 1].id + 1 : 1,
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        category: req.body.category,
        date: req.body.date
    }
    posts.push(newPost)
    res.status(201).json(newPost)
}

const updatePost=(req,res)=>{
    const id=Number(req.params.id)
    const post = posts.find((post)=> post.id === id) // post array hain is liye find kr rhy  hain id k sat

    if(!post){
        return res.status(404).json({message: 'page not found'})
    }
    post.title=req.body.title;
    post.content=req.body.content;
    post.author=req.body.author;
    post.category=req.body.category;
    post.date=req.body.date

    res.status(200).json(post)
}

const deletePost=(req,res)=>{
    const id = Number(req.params.id)
    const postIndex=posts.findIndex((post)=> post.id === id)

    if(postIndex=== -1){
        return res.status(404).json({message : 'post not found'})
    }
    const deletedPost=posts.splice(postIndex,1)
    res.status(200).json({
        message: 'post delete successfully',
        post: deletedPost[0]
    })
}
export default {getPosts,getPostsById, createPost, deletePost,updatePost}