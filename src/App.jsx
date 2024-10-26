import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technology from './components/Technology';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`overflow-x-hidden antialiased selection:bg-cyan-300 selection:text-cyan-900 ${isDarkTheme ? 'text-neutral-300' : 'text-black'}`}>
      <div className='fixed top-0 -z-10 h-full w-full'>
        {isDarkTheme ? (
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-gradient-to-br from-slate-800 to-indigo-500 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(75,0,130,0.8),rgba(0,0,0,0))]"></div>

        ) : (
          <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>
        )}
      </div>
      <div className='container mx-auto px-8'>
        <Navbar onThemeToggle={handleThemeToggle} isDarkTheme={isDarkTheme} />
        <Hero isDarkTheme={isDarkTheme} />
        <About isDarkTheme={isDarkTheme} />
        <Technology isDarkTheme={isDarkTheme} />
        <Projects isDarkTheme={isDarkTheme} />
        <Experience isDarkTheme={isDarkTheme} />
        <Contact isDarkTheme={isDarkTheme} />
        <Footer isDarkTheme={isDarkTheme} />
      </div>
    </div>
  );
};

export default App;
