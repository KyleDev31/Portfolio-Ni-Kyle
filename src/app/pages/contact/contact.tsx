import Footer from "@/app/components/footer/footer";
import './contact.css';  
export default function Contact(){
    return(
        <>
        <main>
<section id="contactpage" className="bg-green-50 dark:bg-green-900">
<div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-green-900 dark:text-green-100" style={{ textShadow: "0 2px 2px rgba(128, 128, 128, 0.9)" }}>Contact KyleDev</h2>
<p className="mb-8 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">For more Inquiries or Business plans/proposal Let me Know.</p>
<form action="#" className="space-y-6">
<div>
<label id="email" className="block mb-2 text-sm font-medium text-green-900 dark:text-gray-300">Your email</label>
<input type="email" id="email" className="shadow-sm bg-green-50 border border-green-900 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600" placeholder="name@gmail.com" required>
          </input></div>
          <div>
              <label id="subject" className="block mb-2 text-sm font-medium text-green-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-green-50 rounded-lg border border-green-900 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let me know how can I help you..." required>
          </input></div>
          <div className="sm:col-span-2">
              <label id="message" className="block mb-2 text-sm font-medium text-green-900 dark:text-gray-400">Your message</label>
              <textarea id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-green-50 rounded-lg shadow-sm border border-green-900 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-700 sm:w-fit hover:bg-primary-800 focus:ring-2 focus:outline-none focus:ring-green-900">Send message</button>
          </form>
          <Footer/>  
  </div>
</section>
</main>
        </>
    )
}