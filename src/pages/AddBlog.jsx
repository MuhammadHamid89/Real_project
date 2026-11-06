// import Footer from "../Components/Footer";
// import Header from "../Components/Header";

// export default function AddBlog(){
//     return(
//         <>
//         {/* <Header /> */}
//         <main className="container mx-auto py-16 px-4">
//             <h2 className="text-3xl font-bold">Add blog pages</h2>
//         </main>

//         {/* <Footer /> */}
//         </>
//     )
// }

import { useState } from "react";

const emptyForm={
    title:'',
    category:'',
    author:'',
    image:'',
    description:'',
};

export default function AddBlog({addBlog}){
    const [formData,setFormData]=useState(emptyForm)
    const [successMessage,setSuccessMessage]=useState('')

    const handleChange=(event)=>{
        const name=event.target.name;
        const value= event.target.value;

        setFormData({
            ...formData,
            [name]:value,
        });
        setSuccessMessage('')
    };

    const handleSubmit =(event)=>{
        event.preventDefault();

        const newBlog={
            id:Date.now(),
            title: formData.title,
            category : formData.category,
            author: formData.author,
            image: formData.image,
            description: formData.description,
        };

        addBlog(newBlog)
        setFormData(emptyForm);
        setSuccessMessage('blog added successfully go to pages to see it')
    }
    return(
        <>
        <main className="px-6 py-10">
            <div className="mx-auto max-w-3xl">
                <h1 className="mb-3 text-3xl font-bold text-gray-900">Add new blog</h1>
                <p className="mb-8 text-gray-600">fill this form to add new blog post</p>

                {successMessage && ( <p className="mb-6 rounded-lg bg-green-100 px-4 py-3 text-green-700"> {successMessage}</p>)}
            </div>

            <form onSubmit={handleSubmit} className="rounded-xl bg-white p-6 shadow-md">

                <div className="mb-5">
                    <label htmlFor="title" className="mb-2 block font-medium text-gray-700">Blog title</label>
                    <input type="text" id="title" name="title" placeholder="enter title blog"
                    value={formData.title} onChange={handleChange} className="w-full rounded-lg border border-gray-300
                    px-3 py-3 outline-none focus:border-blue-500"/>
                </div>
                <div className="mb-5">
                    <label htmlFor="title" className="mb-2 block font-medium text-gray-700">Blog category</label>
                    <input type="text" id="category" name="category" placeholder="enter blog category"
                    value={formData.category} onChange={handleChange} className="w-full rounded-lg border border-gray-300
                    px-3 py-3 outline-none focus:border-blue-500"/>
                </div>
                <div className="mb-5">
                    <label htmlFor="title" className="mb-2 block font-medium text-gray-700">Author Name</label>
                    <input type="text" id="author" name="author" placeholder="enter author name"
                    value={formData.author} onChange={handleChange} className="w-full rounded-lg border border-gray-300
                    px-3 py-3 outline-none focus:border-blue-500"/>
                </div>
                <div className="mb-5">
                    <label htmlFor="title" className="mb-2 block font-medium text-gray-700">Blog Image Url</label>
                    <input type="text" id="image" name="image" placeholder="enter title blog"
                    value={formData.image} onChange={handleChange} className="w-full rounded-lg border border-gray-300
                    px-3 py-3 outline-none focus:border-blue-500"/>
                </div>
                
                
                <div className="mb-5">
                    <label htmlFor="description" className="mb-2 block font-medium text-gray-700">Blog description</label>
                    <textarea id="description" name="description" placeholder="enter blog description"
                    value={formData.description} rows="4" onChange={handleChange} className="w-full rounded-lg border border-gray-300
                    px-3 py-3 outline-none focus:border-blue-500"></textarea>
                </div>

                <button type="submit" className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                    Add blog
                    </button>
            </form>
        </main>
        </>
    )
}