import React from 'react';
import './Techstack.css';
import Footer from '@/app/components/footer/footer';

export default function Techstack() {
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
        <main>
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
</main> 
    );
}