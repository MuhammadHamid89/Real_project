// import Footer from "../Components/Footer";
// import Header from "../Components/Header";

// export default function Blogs(){
//     return(
//         <>
//         <Header/>

//         <main className="container mx-auto py-10 px-4">
//             <h2 className="text-3xl font-bold">Blog pages</h2>
//         </main>
//         <Footer /> 
//         </>
//     )
// }



// import BlogList from "../Components/BlogList";
// import { blogs } from "../data/blogs";
// import Header from "../Components/Header";
// import Footer from "../Components/Footer";
// export default function Blogs(){
//     return(
//         <>
//         {/* <Header /> */}
//         <main className="bg-gray-50 min-h-screen">
//             <section className="max-w-6xl mx-auto px-6 py-14">
//                 <div className="text-center mb-10">
//                     <p className="text-blue-600 font-semibold mb-2">Our Blogs</p>
//                     <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest articles</h1>

//                     <p className="text-gray-600 max-w-2xl mx-auto">Read beginner friendly articles</p>
//                 </div>

//                 <BlogList blogs={blogs} />
//             </section>
//         </main>
//         {/* <Footer /> */}
//         </>
//     )
// }


// import BlogList from "../Components/BlogList";
// export default function Blogs({blogs}){
//     return(
//         <>
//         <main className="px-6 py-10">
//             <div className="mx-auto max-w-6xl">
//                 <h1 className="mb-3 text-3xl font-bold text-gray-900">All blogs</h1>
//                 <p className="mb-8 text-gray-600">Read latest blogs post add to our website</p>

//                 <BlogList blogs={blogs} />
//             </div>
//         </main>
//         </>
//     )
// }



// import { useState } from "react";
// import BlogList from "../Components/BlogList";
// export default function Blogs({blogs}){
//     const [selectCategory,setSelectCategory]=useState('All')
//     const [sortBy, setSortBy]=useState('newest')
//     const [currentPage,setCurrentPage]=useState(1)

//     const blogsPerPage=3;
//     const categories=['All','React','JavaScript','Css','Node.js','Lion','Horse','spider-man']

//     function handleCategoryChange(event){
//         setSelectCategory(event.target.value);
//         setCurrentPage(1)
//     }

//     function handleSortChange(event){
//         setSortBy(event.target.value)
//         setCurrentPage(1)
//     }

//     const filteredBlogs=blogs.filter((blog)=>{
//         if(selectCategory === 'All'){
//             return true
//         }
//         return blog.category===selectCategory
//     })

//     const sortedBlogs=[...filteredBlogs].sort((a,b)=>{
//         if (sortBy === 'newest'){
//         return new Date(a.date)- new Date(b.date);
//         }

//         if(sortBy === 'oldest'){
//             return new Date(a.date) - new Date(b.date)
//         }
//         if(sortBy === 'az'){
//             return a.title.localeCompare(b.title)
//         }
//         if(sortBy === 'za'){
//             return b.title.localeCompare(a.title)
//         }
//         return 0;
//     })

//     const totalPages=Math.ceil(sortedBlogs.length / blogsPerPage)

//     const startIndex= (currentPage - 1) * blogsPerPage;

//     const endIndex = startIndex + blogsPerPage;

//     const displayBlogs= sortedBlogs.slice(startIndex,endIndex)

//     function goToPreviousPage(){
//         if(currentPage > 1){
//             setCurrentPage(currentPage - 1)
//         }
//     }

//     function goToNextPage(){
//         if(currentPage < totalPages){
//             setCurrentPage(currentPage + 1)
//         }
//     }

//     return(
//         <>
//         <main className="max-w-6xl mx-auto px-4 py-10">
//             <div className="mb-8 text-center">
//                 <h1 className="text-3xl font-bold text-gray-900">All Pages</h1>
//                 <p className="mt-2 text-gray-600">
//                     Filter,sort and explore our latest blog
//                 </p>
//             </div>

//             <div className="mb-8 flex flex-col gap-4 rounded-xl bg-gray-100 p-4 
//             sm:items-center sm:justify-between">

//                 <div className="flex flex-col gap-2">
//                     <label className="text-sm font-semibold text-gray-700">Filter by category</label>

//                     <select value={selectCategory} onChange={handleCategoryChange}
//                     className="rounded-lg border border-gray-300 bg-white px-4 py-2 outline-none focus:border-blue-500">
//                         {categories.map((category)=>(
//                             <option value={category} key={category}>
//                                 {category}
//                             </option>
//                         ))}

//                     </select>
//                 </div>

//                 <div className="flex flex-col gap-2">
//                     <label className="text-sm font-semibold text-gray-700">
//                         Sort blogs
//                     </label>

//                     <select value={sortBy} onChange={handleSortChange}
//                     className="rounded-lg border border-gray-300 bg-white px-4 py-2 outline-none focus:border-blue-500">

//                         <option value="newest">Newest First</option>
//                         <option value="oldest">Oldest First</option>
//                         <option value="az">A-Z</option>
//                         <option value="za">Z-A</option>
//                     </select>
//                 </div>
//             </div>

//             {displayBlogs.length > 0 ? (
//                 <BlogList blogs={displayBlogs} />
//             ) : (
//                 <p className="rounded-xl bg-yellow-50 p-6 text-center text-gray-700">
//                     no blogs found
//                 </p>
//             )}

//             {totalPages > 1 && (
//                 <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
//                     <button onClick={goToPreviousPage} disabled={currentPage === 1}
//                      className="rounded-lg bg-gray-900 px-4 py-2 text-white disabled:cursor-not-allowed disabled:bg-gray-400">

//                         previous
//                         </button>

//                         {Array.from({length:totalPages},(_,index)=>(
//                             <button key={index+1}
//                             onClick={()=> setCurrentPage(index+1)}
//                             className={`rounded-lg px-4 py-2 ${
//                                 currentPage === index+1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
//                             }`}>{index+1}</button>
//                         ))}

//                         <button onClick={goToNextPage} disabled={currentPage === totalPages}
//                         className="rounded-lg bg-gray-900 px-4 py-2 text-white disabled:cursor-not-allowed disabled:bg-gray-400">
//                             next
//                         </button>
//                 </div>
//             )}
//         </main>
//         </>
//     )
// }


import { useState } from "react";
import BlogList from "../Components/BlogList";
import { useSelector } from "react-redux";
export default function Blogs(){
    const blogs=useSelector((state)=>state.blog.blogs)
    const [selectCategory,setSelectCategory]=useState('All')
    const [sortBy, setSortBy]=useState('newest')
    const [currentPage,setCurrentPage]=useState(1)

    // const filteredBlogs=blogs.filter((blog)=>blog.title.toLowerCase().includes(search.toLowerCase()))
    // const sortedBlogs=[...filteredBlogs].sort((a,b)=>a.title.localeCompare(b.title))


    const blogsPerPage=3;
    const categories=['All','React','JavaScript','Css','Node.js','Lion','Horse','spider-man']

    function handleCategoryChange(event){
        setSelectCategory(event.target.value);
        setCurrentPage(1)
    }

    function handleSortChange(event){
        setSortBy(event.target.value)
        setCurrentPage(1)
    }

    const filteredBlogs=blogs.filter((blog)=>{
        if(selectCategory === 'All'){
            return true
        }
        return blog.category===selectCategory
    })

    const sortedBlogs=[...filteredBlogs].sort((a,b)=>{
        if (sortBy === 'newest'){
        return new Date(a.date)- new Date(b.date);
        }

        if(sortBy === 'oldest'){
            return new Date(a.date) - new Date(b.date)
        }
        if(sortBy === 'az'){
            return a.title.localeCompare(b.title)
        }
        if(sortBy === 'za'){
            return b.title.localeCompare(a.title)
        }
        return 0;
    })

    const totalPages=Math.ceil(sortedBlogs.length / blogsPerPage)

    const startIndex= (currentPage - 1) * blogsPerPage;

    const endIndex = startIndex + blogsPerPage;

    const displayBlogs= sortedBlogs.slice(startIndex,endIndex)

    function goToPreviousPage(){
        if(currentPage > 1){
            setCurrentPage(currentPage - 1)
        }
    }

    function goToNextPage(){
        if(currentPage < totalPages){
            setCurrentPage(currentPage + 1)
        }
    }

    return(
        <>
        <main className="max-w-6xl mx-auto px-4 py-10">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-gray-900">All Pages</h1>
                <p className="mt-2 text-gray-600">
                    Filter,sort and explore our latest blog
                </p>
            </div>

            <div className="mb-8 flex flex-col gap-4 rounded-xl bg-gray-100 p-4 
            sm:items-center sm:justify-between">

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">Filter by category</label>

                    <select value={selectCategory} onChange={handleCategoryChange}
                    className="rounded-lg border border-gray-300 bg-white px-4 py-2 outline-none focus:border-blue-500">
                        {categories.map((category)=>(
                            <option value={category} key={category}>
                                {category}
                            </option>
                        ))}

                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">
                        Sort blogs
                    </label>

                    <select value={sortBy} onChange={handleSortChange}
                    className="rounded-lg border border-gray-300 bg-white px-4 py-2 outline-none focus:border-blue-500">

                        <option value="newest">Newest First</option>
                        <option value="oldest">Oldest First</option>
                        <option value="az">A-Z</option>
                        <option value="za">Z-A</option>
                    </select>
                </div>
            </div>

            {displayBlogs.length > 0 ? (
                <BlogList blogs={displayBlogs} />
            ) : (
                <p className="rounded-xl bg-yellow-50 p-6 text-center text-gray-700">
                    no blogs found
                </p>
            )}

            {totalPages > 1 && (
                <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
                    <button onClick={goToPreviousPage} disabled={currentPage === 1}
                     className="rounded-lg bg-gray-900 px-4 py-2 text-white disabled:cursor-not-allowed disabled:bg-gray-400">

                        previous
                        </button>

                        {Array.from({length:totalPages},(_,index)=>(
                            <button key={index+1}
                            onClick={()=> setCurrentPage(index+1)}
                            className={`rounded-lg px-4 py-2 ${
                                currentPage === index+1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
                            }`}>{index+1}</button>
                        ))}

                        <button onClick={goToNextPage} disabled={currentPage === totalPages}
                        className="rounded-lg bg-gray-900 px-4 py-2 text-white disabled:cursor-not-allowed disabled:bg-gray-400">
                            next
                        </button>
                </div>
            )}
        </main>
        </>
    )
}