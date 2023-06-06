import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    tr: {
        translation: {
            // -------- Toggle.js -------- //
            dark_mode: 'DARK MODE',
            light_mode: 'LIGHT MODE',
            // -------- NavLinkBar.js -------- //
            skills: 'Skills',
            projects: 'Projects',
            hire_me: 'Hire me',
            // -------- Header.js -------- //
            aytac_sahin: 'Aytac Sahin',


        }
    },
    en: {
        translation: {
            // -------- Toggle.js -------- //
            dark_mode: 'GECE MODU',
            light_mode: 'GÜNDÜZ MODU',
            // -------- NavLinkBar.js -------- //
            skills: 'Yetkinlikler',
            projects: 'Projeler',
            hire_me: 'Bana Ulaş',
            // -------- Header.js -------- //
            aytac_sahin: 'Aytaç Şahin',
        }
    }
}

i18next
    .use(initReactI18next)
    .init({
        lng: 'tr',
        resources: resources
    })

export default i18next