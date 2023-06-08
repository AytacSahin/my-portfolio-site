import headerImage_1 from '../images/projects/headerImage_1.png'
import headerImage_2 from '../images/projects/headerImage_2.png'
import headerImage_3 from '../images/projects/headerImage_3.png'
import headerImage_4 from '../images/projects/headerImage_4.png'
import headerImage_5 from '../images/projects/headerImage_5.png'
import headerImage_6 from '../images/projects/headerImage_6.png'

export const projectsDataEn = () => {
    return [
        {
            id: 0,
            img: headerImage_1,
            title: "To Do List Project",
            description: "This project, which I realized during my education period, is the 'To Do List'. In the UI, a to-do box can be added, a new note can be added, a to-do list can be specified, and a new contact can be added. At the same time, after the task is added, the completion process of the task is also reflected in the UI.",
            methodsofproject: ["useForm", "Toastify", "DateFNS"],
            githubLink: "https://github.com/AytacSahin/fsweb-s9g2-task-yonetimi-2.git",
            deployLink: "https://todo-list-git-main-aytacsahin.vercel.app/"
        },
        {
            id: 1,
            img: headerImage_2,
            title: "Basic Calculator",
            description: "A simple calculator interface. In this first calculator project, which is open to developments, simple mathematical operations can be done, as well as storing and deleting from memory.",
            methodsofproject: ["useReducer", "custom hooks"],
            githubLink: "https://github.com/AytacSahin/fsweb-s10g1-reducer-calculator.git",
            deployLink: "https://fsweb-s10g1-reducer-calculator-weld.vercel.app/"
        },
        {
            id: 2,
            img: headerImage_3,
            title: "Movie List",
            description: "In this project, which includes many films, the score of the films, the director, the actors, etc. You can read the features and add the movies you want to your favorite list. You can also switch between movies.",
            methodsofproject: ["Redux", "UseSelector", "useDispatch"],
            githubLink: "https://github.com/AytacSahin/fsweb-s10g2-redux-filmler.git",
            deployLink: "https://watchlist-movies-kappa.vercel.app/"
        },
        {
            id: 3,
            img: headerImage_4,
            title: "Random Jokes",
            description: "Enjoy the jokes! This site contains many jokes about software. Just click on it to see the answer. At the same time, you can save the jokes you like and view them when you re-enter the site in the future.",
            methodsofproject: ["Redux", "Thunk", "Middleware"],
            githubLink: "https://github.com/AytacSahin/fsweb-s10g4-thunk-and-apis.git",
            deployLink: "https://random-jokes-olive.vercel.app/"
        },
        {
            id: 4,
            img: headerImage_5,
            title: "Gratitude Journal",
            description: "Gratitude diary is perhaps one of the only interfaces we need! Do you want to try ? You can add a new gratitude note, delete it, and view the notes you saved in the future. I wish you many grateful days!",
            methodsofproject: ["Redux", "LocalStorage", "Nanoid"],
            githubLink: "https://github.com/AytacSahin/fsweb-s10-challenge.git",
            deployLink: "https://gratitude-journal-three.vercel.app/"
        },
        {
            id: 5,
            img: headerImage_6,
            title: "Book Shopping Card",
            description: "Do you like books? Select the book you want from the list and add it to your cart. Add lots of books, it doesn't matter. Happy shopping...",
            methodsofproject: ["React", "Context API"],
            githubLink: "https://github.com/AytacSahin/fsweb-s11g1-shopping-cart.git",
            deployLink: "https://shopping-cart-git-main-aytacsahin.vercel.app/"
        },
    ]
}

export const projectsDataTr = () => {
    return [

        {
            id: 0,
            img: headerImage_1,
            title: "Yapılacaklar Listesi",
            description: "Öğrenim sürecinde gerçekleştirdiğim bu proje, 'Yapılacaklar Listesi'. Kullanıcı arayüzünde yapılacaklar muhafazası yeni bir not eklenebilir, kimlerin yapacağı belirtilebilir ve yeni kişi eklenebilir. Aynı zamanda görev eklendikten sonra, görevin tamamlanma süreci de UI'da yansıtılmaktadır.",
            methodsofproject: ["useForm", "Toastify", "DateFNS"],
            githubLink: "https://github.com/AytacSahin/fsweb-s9g2-task-yonetimi-2.git",
            deployLink: "https://todo-list-git-main-aytacsahin.vercel.app/"
        },
        {
            id: 1,
            img: headerImage_2,
            title: "Başlangıç Hesap Makinesi",
            description: "Basit bir hesap makinesi arayüzü. Geliştirmelere açık bu ilk hesap makinesi projemde basit matematik işlemleri yapılabilir, ayrıca hafızaya alma, hafızadan silme işlemleri de yapılabilmektedir.",
            methodsofproject: ["useReducer", "custom hooks"],
            githubLink: "https://github.com/AytacSahin/fsweb-s10g1-reducer-calculator.git",
            deployLink: "https://fsweb-s10g1-reducer-calculator-weld.vercel.app/"
        },
        {
            id: 2,
            img: headerImage_3,
            title: "Film Listesi",
            description: "Bir çok film içeren bu projede, filmlere ait puan, yönetmen, oyuncular vb. özellikleri okuyabilir, dilediğiniz filmleri kendi favori listenize ekleyebilirsiniz. Ayrıca filmler arasında geçiş yapabilirsiniz.",
            methodsofproject: ["Redux", "UseSelector", "useDispatch"],
            githubLink: "https://github.com/AytacSahin/fsweb-s10g2-redux-filmler.git",
            deployLink: "https://watchlist-movies-kappa.vercel.app/"
        },
        {
            id: 3,
            img: headerImage_4,
            title: "Rastgele Şakalar",
            description: "Şakalardan şaka beğen! Bu site yazılım üzerine bir çok şaka içermektedir. Cevabı görmeniz için üzerine tıklamanız yeterli. Aynı zamanda beğendiğiniz şakaları kaydedebilir, ileride siteye tekrar girdiğinizde bunları görüntüleyebilirsiniz.",
            methodsofproject: ["Redux", "Thunk", "Middleware"],
            githubLink: "https://github.com/AytacSahin/fsweb-s10g4-thunk-and-apis.git",
            deployLink: "https://random-jokes-olive.vercel.app/"
        },
        {
            id: 4,
            img: headerImage_5,
            title: "Minnet Günlüğü",
            description: "Minnet günlüğü belki de ihtiyacımız olan yegane arayüzlerden birisi ! Denemek ister misin ? Yeni bir minnet notu ekleyebilir, silebilir, ileride kaydettiğin notları yine görüntüleyebilirsin. Bol minnetli günler dilerim !",
            methodsofproject: ["Redux", "LocalStorage", "Nanoid"],
            githubLink: "https://github.com/AytacSahin/fsweb-s10-challenge.git",
            deployLink: "https://gratitude-journal-three.vercel.app/"
        },
        {
            id: 5,
            img: headerImage_6,
            title: "Kitap Alışveriş Sitesi",
            description: "Kitap okumayı sever misin ? Listede dilediğin kitabı seç ve sepetine ekle. Bol bol kitap seçebilirsin, hiç önemli değil. Mutlu alışverişler...",
            methodsofproject: ["React", "Context API"],
            githubLink: "https://github.com/AytacSahin/fsweb-s11g1-shopping-cart.git",
            deployLink: "https://shopping-cart-git-main-aytacsahin.vercel.app/"
        },
    ]
}

