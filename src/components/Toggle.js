import React, { useEffect, useState } from 'react'
import DayNightToggle from 'react-day-and-night-toggle'

const UserPreferences = () => {

  const [theme, setTheme] = useState(() => {
    if (localStorage.getItem("theme") === "light") {
      return "light";
    } else if (localStorage.getItem("theme") === "dark") {
      return "dark";
    }
  });

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      localStorage.setItem("theme", "dark");

    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem("theme", "light");
    }
  }, [theme])

  return (
    <div className='pt-6 pb-6 text-right'>

      <div className='flex justify-end'>

        <DayNightToggle
          onChange={() => changeTheme()}
          checked={theme === "dark"}
          size={"18"}>
        </DayNightToggle>
        <span>{theme === "light" ? "DARK MODE" : "LIGHT MODE"}</span>
        <span>| TÜRKÇE'YE GEÇ</span>

      </div>

    </div>
  )
}

export default UserPreferences