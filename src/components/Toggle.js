import React, { useEffect, useState } from 'react'
import DayNightToggle from 'react-day-and-night-toggle'

const UserPreferences = () => {

  const [crrLanguage, setCrrLanguage] = useState("TÜRKÇE")

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

  const languageHandler = () => {
    crrLanguage === "TÜRKÇE" ? setCrrLanguage("İNGİLİZCE") : setCrrLanguage("TÜRKÇE")
  }

  return (
    <div className='pt-6 pb-6 text-right'>

      <div className='flex justify-end items-center'>

        <DayNightToggle
          onChange={() => changeTheme()}
          checked={theme === "dark"}
          size={"16"}>
        </DayNightToggle>

        <div className='flex pl-3 '>
          <h5 className='pr-4 dark:text-[#D9D9D9]'>{theme === "light" ? "DARK MODE" : "LIGHT MODE"}</h5>
          <h5>|</h5>
          <h5 className='pl-4 dark:text-[#777777]'><span className=' text-[#4731D3] dark:text-[#BAB2E7]' onClick={() => { languageHandler() }}>{crrLanguage}</span>'YE GEÇ</h5>
        </div>

      </div>
    </div >
  )
}

export default UserPreferences