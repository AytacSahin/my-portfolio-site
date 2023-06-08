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
            about_text_one: "Hello, I'm Aytac. I was born in Kirklareli. I have been living in Istanbul for a long time. I graduated from Yildiz Technical University, Department of Civil Engineering. In my long professional career, I took part in many roles such as project management, project coordinator and director.",
            about_text_two: "I am actively studying web software. As part of my studies, I received a 6-month 'Full Stack Web Developer' training at the Workintech educational institution. This enriching experience has fueled my passion for a professional career in software. I aim not to lose my passion for learning throughout my life.",
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
            send_me: "SEND ME A MESSAGE!",
            // -------- PersonalPage.js -------- //
            form_valid_1: "This field is required.",
            form_valid_2: "Please enter your e-mail address.",
            toast_info_message: "Your note is being forwarded.",
            toast_success_message: "your note has been forwarded to us! Thanks..",
            toast_error_message: "An error has occurred, try again later.",
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
            about_text_one: "Merhaba, ben Aytaç. Kırklareli'de doğdum. Uzun süredir İstanbul'da yaşıyorum. Yıldız Teknik Üniversitesi, İnşaat Mühendisliği bölümünden mezun oldum. Uzun süreli meslek kariyerimde, proje yönetimi, proje koordinatörü ve direktör gibi bir çok rolde görev aldım.",
            about_text_two: "Aktif olarak, web yazılım eğitimi alıyorum. Çalışmalarımın bir parçası olarak Workintech eğitim kurumunda 6 aylık bir 'Full Stack Web Developer' eğitimi aldım. Bu zenginleştirici deneyim, yazılım alanında profesyonel bir kariyere yönelik tutkularımı güçlendirdi. Öğrenme tutkumu hayatım boyunca kaybetmemeyi hedefliyorum.",
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
            send_me: "BANA MESAJ İLET!",
            // -------- PersonalPage.js -------- //
            form_valid_1: "Bu alan zorunludur.",
            form_valid_2: "Lütfen mail adresinizi giriniz.",
            toast_info_message: "Notun iletiliyor.",
            toast_success_message: "Notunuz bize ulaştı ! Teşekkür ederim.",
            toast_error_message: "Bir hata oluştu, lütfen daha sonra tekrar dene.",
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


