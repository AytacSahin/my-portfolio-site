import './App.css';

import UserPreferences from './components/UserPreferences';
import NavLinkBar from './components/NavLinkBar';
import Header from './components/Header';
import Abilities from './components/Abilities';
import Profile from './components/Profile';

function App() {
  return (
    <div className="w-9/12 text-center mx-32 bg-[#F5F5F5]">
      <UserPreferences />
      <hr />
      <NavLinkBar />
      <hr />
      <Header />
      <hr />
      <Abilities />
      <hr />
      <Profile />
    </div>
  );
}

export default App;
