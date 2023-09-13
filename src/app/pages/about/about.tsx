import Image from 'next/image';
import './about.css';
import Navigation from '@/app/components/navigation/navigation';
export default function About() {
    return (
      <>
      <Navigation/>
      <main className="flex min-h-screen flex-col justify-between p-20">
      <section id="aboutpage" className='grid grid-cols-12 gap-4 flex '>
          <div className='md:col-span-12 flex place-self-center'>
          <h1 className='text-5xl font-bold text-green-900'>Get To Know Me!</h1>
       </div>
            <div id="image" className='lg:col-span-7 md:col-span-12 flex object-contain animate-pulse border-8 border-y-8 border-green-500 rounded lg:col-span-7 md:col-span-12 place-self-center my-5'>
            <Image
            src="/me.jpg"
            alt="Developer"
            width={300}
            height={20}
            priority/>
        </div>
              <div id="Details" className="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.10)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px] lg:col-span-5 md:col-span-12 place-self-center">
              <p className="Personal Details">I am <b className="text-green-900">Kyle Joseph Ardepuela</b>, 19 years old from Nabunturan, Davao De Oro. A 2nd year student from <b className="text-green-600">STI College Tagum </b> in the program  
              <i>  Bachelor of Science in Information Systems</i>.</p>
              <button id="AchievementsBtn" className="my-5 text-white bg-green-900 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-green-900 dark:hover:bg-green-900 dark:focus:ring-green-900" type="button">Achievements
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </button>
        <a
  href="/public\7.jpg"  
  download="7.jpg"  
  className="m-10 text-green-900 hover:bg-gray-300 px-3 py-2"
>
  Download CV
</a>
        </div>
        </section>
      </main>
      </>
    )
  }
  