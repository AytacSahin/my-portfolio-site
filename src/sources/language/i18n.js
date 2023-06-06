import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { skillsDataEn } from "../data/skillsData";

const resources = {
    tr: {
        translation: {
            // -------- Toggle.js -------- //
            dark_mode: 'DARK MODE',
            light_mode: 'LIGHT MODE',
            // -------- NavLinkBar.js ---HeaderButton.js----- //
            skills: 'Skills',
            projects: 'Projects',
            hire_me: 'Hire me',
            // -------- Header.js -------- //
            aytac_sahin: 'H. Aytac Sahin',
            promotional_text: 'Creative ideas Great Projects',
            about_me: "Hi, I'm Aytac Sahin. I'm a web developer. If you are looking for great and accurate designs, perfectionist solutions and useful UI (user interface) designs.. Let's shake hands with me.",
        }
    },
    en: {
        translation: {
            // -------- Toggle.js -------- //
            dark_mode: 'GECE MODU',
            light_mode: 'GÜNDÜZ MODU',
            // -------- NavLinkBar.js ---HeaderButton.js----- //
            skills: 'Yetkinlikler',
            projects: 'Projeler',
            hire_me: 'Bana Ulaş',
            // -------- Header.js -------- //
            aytac_sahin: 'H. Aytaç Şahin',
            promotional_text: 'Yaratıcı fikirler Şahane Projeler',
            about_me: "Merhaba, ben Aytaç Şahin. Ben bir web geliştiricisiyim. Harika ve doğru tasarımlar, mükemmeliyetçi çözümler ve kullanışlı UI (kullanıcı arayüzü) tasarımları arıyorsanız eğer.. Hadi benimle el sıkışın.",
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