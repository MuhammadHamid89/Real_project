import Header from "../Components/Header";
import Hero from "../Components/Hero";
import BlogCard from "../Components/BlogCard";
import Footer from "../Components/Footer";
export default function Home(){
    return(
        <>
        {/* <Header /> */}
        <Hero/>
        <main className="container mx-auto px-4 py-10">
            <div className="grid gap-6 md:grid-cols-3">
                <BlogCard title='Learning React' description='React make UI simple' />
                <BlogCard title='understanding props' description='props allow us to pass date'/>
                <BlogCard  title='tailwind css' description='tailwind css help modern UI'/>

            </div>

        </main>
        {/* <Footer /> */}
        </>
    )
}