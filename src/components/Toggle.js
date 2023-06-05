import React, { useEffect, useState } from 'react'
import DayNightToggle from 'react-day-and-night-toggle'

const UserPreferences = () => {

  const [theme, setTheme] = useState(
    localStorage.getItem("theme" === "dark" ? "dark" : "light")
  )

  useEffect(() => {
    if (localStorage.getItem("theme") === 'dark') {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark');
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark')
      localStorage.setItem("theme", "light");
    }
  }, [theme])

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  return (
    <div className='pt-6 pb-6 text-right'>

      <div className='flex justify-end'>

        <DayNightToggle className='' onChange={changeTheme} checked={theme === "light"} size={"18"}></DayNightToggle>
        <span>DARK MODE</span>
        <span>| TÜRKÇE'YE GEÇ</span>

      </div>

    </div>
  )
}

export default UserPreferences