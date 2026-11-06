// import { Routes,Route } from "react-router-dom"
// import Home from "./pages/Home"
// import Blogs from "./pages/Blogs"
// import AddBlog from "./pages/AddBlog"
// export default function App(){
//     return(
//         <>
//         <Routes>
//             <Route path="/" element={ <Home />} />
//             <Route path="/blogs" element={ <Blogs />} />
//             <Route path="/add-blog" element={<AddBlog />} />
//         </Routes>
//         </>
//     )
// }

import { useState } from "react"
import { Routes,Route } from "react-router-dom"
import Header from "./Components/Header"
import Home from "./pages/Home"
import Blogs from "./pages/Blogs"
import AddBlog from "./pages/AddBlog"
import Footer from "./Components/Footer"
import {  blogs as initialBlog} from "./data/blogs"
export default function App(){
    const [blogs,setBlogs]=useState(initialBlog)
    const addBlog= (newBlog)=>{
            setBlogs([newBlog, ...blogs])
    }
    return(
        <>
        <div className="min-h-screen bg-gray-50 text-gray-800">
            <Header />
            <Routes>
                <Route path="/" element={ <Home />} />
                <Route path="/blogs" element={<Blogs blogs={blogs} />} />
                <Route path="/add-blog" element={<AddBlog addBlog={addBlog} />} />
            </Routes>
            <Footer />
        </div>
        </>
    )
}