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
    <div className="m-auto w-9/12 bg-[#F5F5F5] dark:bg-[#252128] dark:">
      <Toggle />
      <hr />
      <NavLinkBar />
      <hr />
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
  );
}

export default App;
