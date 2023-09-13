import {useState} from 'react';
import './home.css';
import Image from 'next/image';
import Footer from '@/app/components/footer/footer';
import Navigation from '@/app/components/navigation/navigation';
import Breadcrumbs from '@/app/components/breadcrumbs/breadcrumbs';
import React from 'react';
import Achievements from '@/app/components/achievements/achievement';
export default function Home() {
  const containerStyle: React.CSSProperties = {
    textAlign: 'center',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  };
  
  const iconContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '50px',
    marginTop: '20px',
  };
  
  const logoStyle: React.CSSProperties = {
    width: '150px',
    height: '120px',
  };
  
  const resizedLogoStyle: React.CSSProperties = {
    ...logoStyle,
    backgroundColor: 'transparent',
    padding: '10px',
    borderRadius: '8px',
    boxShadow: '0px 2px 5px rgba(0, 255, 0, 0.8)',
  };
  
  interface IconWithTitle {
    name: string;
    title: string;
  }
  
  const iconsWithTitles: IconWithTitle[] = [
    { name: 'androidstudio', title: 'Android Studio' },
    { name: 'css3', title: 'CSS3' },
    { name: 'html5', title: 'HTML5' },
    { name: 'java', title: 'Java' },
    { name: 'javascript', title: 'Javascript' },
    { name: 'laravel', title: 'Laravel' },
    { name: 'nodejs', title: 'NodeJS' },
    { name: 'php', title: 'PHP' },
    { name: 'python', title: 'Python' },
    { name: 'sqlite', title: 'SQL lite' },
    { name: 'tailwindcss', title: 'TailwindCSS' },
    { name: 'typescript', title: 'Typescript' },
  ];
  
  return (
    <>
    <Navigation/>
    <main className="scroll-smooth flex min-h-screen flex-col justify-between fade-in">
    <section id="homepage" className="mb-30">
    <div className="px-6 py-12 text-center md:px-12 lg:text-center">
    <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xl:px-32">
    <div className="grid items-center lg:grid-cols-2">
    <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
        <div className="my-5 block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-20 backdrop-blur-[30px]">
              <h2 className="drop-shadow-md mt-15 mb-10 text-4xl font-bold tracking-tight md:text-5xl xl:text-5xl text-5xl font-extrabold text-transparent bg-clip-text bg-lime-200" >
                Hello! I am Kyle,<br /><span className='bg-clip-text bg-gradient-to-br from-lime-500 to-gray-300 text-4xl'>Exploring around the Techverse</span>
              </h2>
                    <p className='text-base font-mono font-semibold text-xl bg-clip-text '>An Aspiring Software Developer</p>
     <ul>
      <li>
        <p className="hover:text-green-900 hover:font-bold cursor-pointer">Lay-out Artist</p>
      </li>
      <li>
        <p className="hover:text-yellow-900 hover:font-bold cursor-pointer">Graphic Designer</p>
      </li>
      <li>
        <p className="hover:text-red-900 hover:font-bold cursor-pointer">Resource Speaker</p>
      </li>
     </ul>
     <Footer/>
     </div>
     </div>
           <div className="md:mb-12 lg:mb-0">
           <img src="IMG_3432.png"
           className="w-full rounded-lg shadow  dark:shadow-black/20 bg-[hsla(0,0%,25%,0.2)]  " alt="DEVELOPER" />
     </div>
     </div>
     </div>
     </div>
     </section>
     </main>
     <main className="scroll-smooth min-h-screen bg-gray-100 p-4 md:p-8 lg:p-20">
  <section id="aboutpage" className="grid grid-cols-1 md:grid-cols-12 gap-4">
    <div className="md:col-span-5 md:flex md:items-center">
      <div id="image" className="md:mx-auto">
        <Image src="/Hacker.png" alt="Developer" width={500} height={20} priority />
      </div>
    </div>
    <div
      id="Details"
      className="col-span-1 md:col-span-7 p-4 md:px-8 lg:px-12 py-4 md:py-8 shadow-md rounded-lg bg-white dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:self-start"
    >
      <h1 className="text-3xl md:text-5xl font-bold text-green-900 mb-4">
        Get To Know Me!
      </h1>
      <p className="Personal Details mb-4">
        I am <b className="text-green-900">Kyle Joseph Ardepuela</b>, 19 years
        old from Nabunturan, Davao De Oro. A 2nd year student from{" "}
        <b className="text-green-600">STI College Tagum</b> in the program{" "}
        <i> Bachelor of Science in Information Systems.</i>
      </p>
      <p className="text-sm mb-4">
        A little backstory to when and why programming enticed me. As a little
        kid, I grew up with a lot of curiosity to our printing business and how
        they make and print designs possible through the computer. Fast forward
        to High School where my Grade 8 ICT teacher asked me to join a layout
        contest on our school. Through the process of preparing for the
        competition, A Reddit story of a graphic designer/programmer hooked me
        more towards the field of programming websites and applications where I
        first encountered HTML and outputs a website with a Hello World!. As I
        go on with my junior high to senior high school journey, I got to learn
        HTML, CSS, Java, and Python through the elective and strand I chose.
      </p>
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
        <a href="#AchievementsPanel">
          <button
            id="AchievementsBtn"
            className="text-white bg-green-900 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center dark:bg-green-900 dark:hover:bg-green-900 dark:focus:ring-green-900"
            type="button"
          >
            Achievements
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1l4 4 4-4M1 5v13a2 2 0 002 2h16a2 2 0 002-2V5a2 2 0 00-2-2H3a2 2 0 00-2 2z"
              />
          </button>
        </a>
        <a
          href="/public\7.jpg"
          download="7.jpg"
          className="text-green-900 hover:bg-gray-300 px-2 md:px-3 py-1 md:py-2"
        >
          Download CV
        </a>
      </div>
    </div>
  </section>
</main>

<main className="bg-emerald-900 flex min-h-screen flex-col justify-between p-4 md:p-20">
  <section id="projectpage" className='grid grid-cols-12 gap-4 flex'>
  <div className='lg:col-span-12 md:col-span-12 md:text-center'>
      <h1 className="text-4xl md:text-6xl font-extrabold text-white" style={{ textShadow: "0 0px 15px rgba(255, 255, 255, 0.5)" }}>Projects</h1>
    </div>
  </section> 
  <section className='grid grid-cols-1 md:grid-cols-3 gap-4 my-3 '>
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="https://kyledev31.github.io/Quizzer-for-port/">
        <img className="rounded-t-lg" src="QUIZZER PIC.png" alt="Picture"/>
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Quizzer App</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This app is a simple JavaScript project that tests a user's general knowledge when it comes to programming.</p>
        <div id="icon-container">
          <img className="" src="html.png" style={{ width: "80px", height: "40px"}} alt="HTML Icon" />
        </div>
      </div>
    </div>
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src="coming soon.jpg" alt="Picture" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Coming Soon</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem Ipsum</p>
      </div>
    </div>
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src="coming soon.jpg" alt="Picture" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Coming Soon</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem Ipsum</p>
      </div>
    </div>
  </section>
</main>
                <div id="techstackpage" className="bg-lime-100 techstack-container mb-30">
                <div className="content-container " style={containerStyle}>
                    <h1 className="title text-6xl font-bold text-lime-900 italic" style={{ textShadow: "0 3px 0px rgba(0, 0, 0, 0.8)" }}>TechStack</h1>
                        <div className="icon-container" style={iconContainerStyle}>
                            {iconsWithTitles.map((icon, index) => (
                        <div key={index} className="icon-item">
                            <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon.name}/${icon.name}-plain.svg`} 
                            alt={icon.title}  title={icon.title} style={resizedLogoStyle} className="resized-logo-style text-green-500"/>
                            <p className="my-2 icon-title text-green-900 font-semibold text-xl">{icon.title}</p>
     </div>
))}
     </div>
     </div>
     </div> 
                <main>
                <section id="contactpage" className="bg-green-50 dark:bg-green-900">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-green-900 dark:text-green-100" style={{ textShadow: "0 2px 2px rgba(128, 128, 128, 0.9)" }}>Contact KyleDev</h2>
                        <p className="mb-8 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">For more Inquiries or Business plans/proposal Let me Know.</p>
                            <form action="" className="space-y-6">
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
                <div className='bg-gray-200 py-2 shadow shadow-sm'>
                  <h3 className='text-center font-semibold'>All Rights Reserved to Kyle Joseph Ardepuela. Est 2023</h3></div>
     </div>
   </section>
    </main>
    </>
  )
}
