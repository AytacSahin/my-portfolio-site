import Toggle from './components/Toggle';
import NavLinkBar from './components/NavLinkBar';
import Header from './components/Header';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';

import { Switch, Route } from "react-router-dom";
import PersonalPage from './personal-blog/PersonalPage';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

function App() {

  useEffect(() => {
    toast.success("hoşgeldiniz");
  }, [])

  return (
    <div>
      <div className='bg-[#F9F9F9] dark:bg-[#252128]'>
        <div className="flex flex-col justify-center mx-auto w-[80%] 2xl:w-[76.8rem]">
          <div id="top"></div>
          <Toggle />

          <Switch>
            <Route path="/personal-blog">
              <PersonalPage />
            </Route>

            <Route exact path="/">
              <NavLinkBar />
              <Header />
              <div id="skilssLink"></div>
              <Skills />
              <hr className='h-0.5 bg-[#BAB2E7]' />
              <Profile />
              <hr className='h-0.5 bg-[#BAB2E7]' />
              <div id="projectLink"></div>
              <Projects />
            </Route>

          </Switch>
        </div>
      </div >
      <div className='bg-[#F5F5F5] dark:bg-[#141414]'>
        <div className="mx-auto w-[80%] 2xl:w-[76.8rem]">
          <Footer />
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose="3000"
        closeOnClick="true"
        pauseOnHover="true"
        draggable="true"
        theme="light"
      />
    </div>
  );
}

export default App;
