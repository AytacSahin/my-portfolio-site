import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    tr: {
        translation: {
            // -------- Toggle.js -------- //
            dark_mode: 'DARK MODE',
            light_mode: 'LIGHT MODE',
            // -------- NavLinkBar.js---HeaderButton.js---Skills.js--- //
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Hire me',
            // -------- Header.js -------- //
            aytac_sahin: 'H. Aytac Sahin',
            promotional_text: 'Creative ideas Great Projects',
            about_me: "Hi, I'm Aytac Sahin. I'm a web developer. If you are looking for great and accurate designs, perfectionist solutions and useful UI (user interface) designs.. Let's shake hands with me.",
            // -------- Profile.js -------- //
            profile: 'Profile',
            about_header: 'About Me',
            about_text_one: "Hello, I'm Aytac. I was born in Kirklareli, but I have been living in Istanbul for a long time. I graduated from Yildiz Technical University, Department of Civil Engineering. In my long professional career, I took part in many roles such as project management, project coordinator and director.",
            about_text_two: "I am actively studying web software. As part of my studies, I received a 6-month 'Full Stack Web Developer' training at the Workintech educational institution. This enriching experience has fueled my passion for a professional career in software. I aim not to lose my passion for learning throughout my life.",
            // -------- Profile.js -------- //
            projects: 'Projects',
            view_site: 'View Site',
            // -------- Profile.js -------- //
            footer_descripton: 'Lets work together on your next product.',
            personal_blog: 'Personal Blog',
        }
    },
    en: {
        translation: {
            // -------- Toggle.js -------- //
            dark_mode: 'GECE MODU',
            light_mode: 'GÜNDÜZ MODU',
            // -------- NavLinkBar.js---HeaderButton.js---Skills.js--- //
            skills: 'Yetkinlikler',
            projects: 'Projeler',
            contact: 'İletişim',
            // -------- Header.js -------- //
            aytac_sahin: 'H. Aytaç Şahin',
            promotional_text: 'Yaratıcı fikirler Şahane Projeler',
            about_me: "Merhaba, ben Aytaç Şahin. Ben bir web geliştiricisiyim. Harika ve doğru tasarımlar, mükemmeliyetçi çözümler ve kullanışlı UI (kullanıcı arayüzü) tasarımları arıyorsanız eğer.. Hadi benimle el sıkışın.",
            // -------- Profile.js -------- //
            profile: 'Profil',
            about_header: 'Hakkımda',
            about_text_one: "Merhaba, ben Aytaç. Kırklareli'de doğdum fakat uzun süredir İstanbul'da yaşıyorum. Yıldız Teknik Üniversitesi, İnşaat Mühendisliği bölümünden mezun oldum. Uzun süreli meslek kariyerimde, proje yönetimi, proje koordinatörü ve direktör gibi bir çok rolde görev aldım.",
            about_text_two: "Aktif olarak, web yazılım eğitimi alıyorum. Çalışmalarımın bir parçası olarak Workintech eğitim kurumunda 6 aylık bir 'Full Stack Web Developer' eğitimi aldım. Bu zenginleştirici deneyim, yazılım alanında profesyonel bir kariyere yönelik tutkularımı güçlendirdi. Öğrenme tutkumu hayatım boyunca kaybetmemeyi hedefliyorum.",
            // -------- Profile.js -------- //
            projects: 'Projeler',
            view_site: 'Siteye Git',
            // -------- Profile.js -------- //
            footer_descripton: 'Sıradaki projenizde birlikte çalışalım.',
            personal_blog: 'Kişisel Blog',
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