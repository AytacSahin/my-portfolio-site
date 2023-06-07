import './App.css';

import Toggle from './components/Toggle';
import NavLinkBar from './components/NavLinkBar';
import Header from './components/Header';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div className='bg-[#F5F5F5] dark:bg-[#252128] 2xl:bg-blue-500 xl:bg-green-600 lg:bg-orange-600 md:bg-yellow-500 sm:bg-fuchsia-500 max-[640px]:bg-rose-500 max-[320px]:bg-blue-500'>
        <div className="flex flex-col justify-center mx-auto w-[80%] 2xl:w-[76.8rem]">
          <Toggle />
          <NavLinkBar />
          <Header />
          <div id="skilssLink"></div>
          <Skills />
          <hr className='h-0.5 bg-[#BAB2E7]' />
          <Profile />
          <hr className='h-0.5 bg-[#BAB2E7]' />
          <div id="projectLink"></div>
          <Projects />
        </div>
      </div >
      <div className='bg-[#F9F9F9] dark:bg-[#141414]'>
        <div className="mx-auto w-[80%] 2xl:w-[76.8rem]">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
