import React, { useEffect, useState } from 'react'
import DayNightToggle from 'react-day-and-night-toggle'
import { useTranslation } from 'react-i18next'

const UserPreferences = () => {
  const { t, i18n } = useTranslation()
  // console.log(i18n.language)

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

  const languageHandler = (language) => {
    i18n.changeLanguage(language);
  }

  useEffect(() => { localStorage.setItem("language", i18n.language ==="tr" ? "en" : "tr") }, [i18n.language])


  return (
    <div className='pt-6 pb-6 text-right text-[#777777] text-[15px] leading-[18.15px] font-bold tracking-[0.1rem] sm:text-[15px] max-[640px]:text-[9px] max-[320px]:text-[9px]'>
      <div className='flex justify-end items-center lg:justify-end sm:justify-center max-[640px]:justify-center max-[320px]:justify-center'>

        <DayNightToggle
          checked={theme === "dark"}
          size={16}
          // Todo: make an animation while switch dark mode toggle (7.6.2023)
          // startInactive="true"
          // animationInactive="false"
          onChange={() => changeTheme()} />

        <div className='flex pl-3 '>
          <h5 className='pr-4 dark:text-[#D9D9D9]'>{theme === "light" ? t('dark_mode') : t('light_mode')}</h5>
          <h5>|</h5>

          {i18n.language === "tr" ?

            <h5 onClick={() => { languageHandler("en") }} className='cursor-pointer pl-4 dark:text-[#777777]'><span className=' text-[#4731D3] dark:text-[#BAB2E7]' >TÜRKÇE</span>'YE GEÇ</h5>

            :

            <h5 className='cursor-pointer text-[#4731D3] dark:text-[#BAB2E7]' onClick={() => { languageHandler("tr") }}>
              <span className='pl-4 text-[#777777] dark:text-[#777777]' >
                SWITCH
              </span>{" "}ENGLISH
            </h5>

          }
        </div>
      </div>
    </div >
  )
}

export default UserPreferences