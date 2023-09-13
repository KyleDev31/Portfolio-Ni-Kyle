import About from "@/app/pages/about/about"
import Link from "next/link"
export default function Navigation() { 
    return (
        <>
        <header>
    <nav className="block bg-[hsla(0,0%,0%,0.5)] px-3 py-3 shadow-[0_2px_15px_-3px_rgba(0,255,0,0.3),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:px-12 lg:-mr-14 backdrop-blur-[30px]">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="" className="flex items-center">
                <img src="/Untitled-1.png" className=" mr-3 h-10 sm:h-10" alt="My Logo" />
                <span className="self-center whitespace-nowrap dark:text-white text-white font-lg font-serif">KyleDev</span>
            </a>
            <div className="flex items-center lg:order-2">
                <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-white dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <a href="#homepage" className="block py-2 pr-4 pl-3 text-white rounded border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-lime-800 lg:border-1 lg:hover:text-primary-700 lg:p-2 ">Home</a>
                    </li>
                    <li>
                        <a href="#aboutpage" className="block py-2 pr-4 pl-3 text-white rounded border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-lime-800 lg:border-1 lg:hover:text-primary-700 lg:p-2 ">About</a>
                    </li>
                    <li>
                        <a href="#projectpage" className="block py-2 pr-4 pl-3 text-white rounded border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-lime-800 lg:border-1 lg:hover:text-primary-700 lg:p-2 ">Projects</a>
                    </li>
                    <li>
                        <a href="#contactpage" className="block py-2 pr-4 pl-3 text-white rounded border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-lime-800 lg:border-1 lg:hover:text-primary-700 lg:p-2 ">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
        </>
    )
}