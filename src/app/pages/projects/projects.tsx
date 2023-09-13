import Navigation from "@/app/components/navigation/navigation";
import Footer from "@/app/components/footer/footer";
export default function Projects(){
    return (
        <>
        <Navigation/>
        <main className="flex min-h-screen flex-col justify-between p-10">
    <section id="projectpage" className='grid grid-cols-12 gap-4 flex'>
                <div className='md:col-span-12 flex place-self-center '>
                    <h1 className="text-4xl font-extrabold"  style={{ textShadow: "0 2px 0px rgba(0, 128, 0, 0.5)" }}>Projects</h1>
                </div>
    </section> 
            <section className='flex justify-center gap-4 my-5'>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src="coming soon.jpg" alt="Picture" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Coming Soon</h5>
        </a>
        <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">Lorem Ipsum</p>
        <a href="#" className="inline-flex items-center px-3 py-3 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-100 dark:bg-green-900 dark:hover:bg-green-700 dark:focus:ring-green-800">
            Read more
             <svg className="w-3.5 h-3.5 ml-2"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src="coming soon.jpg" alt="Picture" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Coming Soon</h5>
        </a>
        <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">Lorem Ipsum</p>
        <a href="#" className="inline-flex items-center px-3 py-3 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-100 dark:bg-green-900 dark:hover:bg-green-700 dark:focus:ring-green-800">
            Read more
             <svg className="w-3.5 h-3.5 ml-2"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src="coming soon.jpg" alt="Picture" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Coming Soon</h5>
        </a>
        <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">Lorem Ipsum</p>
        <a href="This Project" className="inline-flex items-center px-3 py-3 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-100 dark:bg-green-900 dark:hover:bg-green-700 dark:focus:ring-green-800">
            Read more
             <svg className="w-3.5 h-3.5 ml-2"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
</section>
<button className="" style={{ textShadow: "0 2px 5px rgba(0, 0  , 0, 0.5)" }}>
    <a href="home.tsx">
    <h2 className="inline-flex items-center border-2 border-blue-900 px-7 py-2 text-sm font-bold text-center text-green-900 bg-green-200 rounded-lg hover:bg-green-100 focus:ring-4 focus:outline-none focus:ring-green-100 dark:bg-green-900 dark:hover:bg-green-700 dark:focus:ring-green-800">Tech Stack</h2>
</a></button>
        </main>
        </>
    )
}