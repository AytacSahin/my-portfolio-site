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
    <div className='bg-[#F5F5F5] dark:bg-[#252128]'>
      <div className="m-auto w-9/12 ">
        <Toggle />
        <NavLinkBar />
        <Header />
        <Skills />
        <hr className='h-0.5 bg-[#BAB2E7]'/>
        <Profile />
        <hr className='h-0.5 bg-[#BAB2E7]'/>
        <Projects />
        <hr className='h-0.5 bg-[#BAB2E7]'/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
