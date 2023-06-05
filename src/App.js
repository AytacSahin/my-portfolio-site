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
        <hr />
        <Skills />
        <hr />
        <Profile />
        <hr />
        <Projects />
        <hr />
        <Footer />
      </div>
    </div>
  );
}

export default App;
