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
            about_text_one: "Hello, I'm Aytac. I was born on 03.07.1991 in Kırklareli and I am currently a software developer living in Istanbul. After graduating from Yıldız Technical University in 2013, I worked in various roles such as project management, coordinator and director for a long time. Last year, I strengthened my software skills by taking 'Full Stack Web Developer' training at Workintech educational institution.",
            about_text_two: "This experience shaped my professional career goals. I am currently working in a software company and increasing my knowledge with the experiences I have gained. I am determined to continue my passion for learning and I constantly improve myself by following the developments in the software world.",
            // -------- Profile.js -------- //
            view_site: 'View Site',
            // -------- Footer.js -------- //
            footer_descripton: 'Lets work together on your next product.',
            personal_blog: 'Personal Blog',

            // -------- Footer.js -------- //
            main_page: 'Main Page',
            blog_title: "Developer's Diary",
            form_name: "Name",
            form_mail: "Mail Address",
            form_note: "Your Note",
            form_submit: "Send",
            // -------- PersonalPage.js -------- //
            form_valid_1: "This field is required.",
            form_valid_2: "Please enter your e-mail address.",
            toast_info_message: "⏰ Waiting...",
            toast_success_message: "🤌 Your note has been forwarded to us! Thanks..",
            toast_error_message: "⛔ An error has occurred, try again later.",
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
            about_text_one: "Merhaba ben Aytaç. 03.07.1991 Kırklareli doğumluyum ve şu anda İstanbul'da yaşayan bir yazılımcıyım. 2013 yılında Yıldız Teknik Üniversitesi'nden mezun olduktan sonra uzun süre proje yönetimi, koordinatör, direktör gibi çeşitli rollerde çalıştım. Geçtiğimiz yıl Workintech eğitim kurumunda 'Full Stack Web Developer' eğitimi alarak yazılım becerilerimi güçlendirdim. ",
            about_text_two: "Bu deneyim mesleki kariyer hedeflerimi şekillendirdi. Şu anda bir yazılım firmasında çalışmaktayım ve edindiğim tecrübelerle bilgilerimi arttırıyorum. Öğrenme tutkumu sürdürmeye kararlıyım ve yazılım dünyasındaki gelişmeleri takip ederek kendimi sürekli geliştiriyorum.",
            // -------- Profile.js -------- //
            view_site: 'Siteye Git',
            // -------- Footer.js -------- //
            footer_descripton: 'Sıradaki projenizde birlikte çalışalım.',
            personal_blog: 'Kişisel Blog',

            // -------- Footer.js -------- //
            main_page: 'Ana Sayfa',
            blog_title: "Yazılımcı'nın Günlüğü",
            form_name: "İsim",
            form_mail: "Mail Adresi",
            form_note: "Notunuz",
            form_submit: "Gönder!",
            // -------- PersonalPage.js -------- //
            form_valid_1: "Bu alan zorunludur.",
            form_valid_2: "Lütfen mail adresinizi giriniz.",
            toast_info_message: "⏰ Bekleniyor...",
            toast_success_message: "🤌 Notunuz bize ulaştı ! Teşekkür ederim.",
            toast_error_message: "⛔ Bir hata oluştu, lütfen daha sonra tekrar dene.",
        }
    }
}

i18next
    .use(initReactI18next)
    .init({
        lng: localStorage.getItem("language") ? localStorage.getItem("language") === "tr" ? "en" : "tr" : "en",
        resources: resources
    })

export default i18next


