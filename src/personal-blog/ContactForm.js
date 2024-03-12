import React from 'react'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import PersonalPageHeader from './PersonalPageHeader'
import emailjs from '@emailjs/browser'
import contactImage from '../sources/svg/contact.svg'

const ContactForm = () => {
    const { t } = useTranslation()

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({ mode: "onChange" });

    const validateForm = () => {
        // Burada gerekli bilgi doğrulamalarını yapabilirsiniz
        // Örneğin, isim ve e-posta boş olmamalı, e-posta formatı doğru olmalı, vb.
        return true;  // Doğrulama başarılı ise true döndür
    };

    const onSubmit = (formData) => {

        if (validateForm()) {

            // const serviceId = 'service_vxw0ter';
            // const templateId = 'template_f7l6rzo';
            // const publicKey = '99fZJVdXOv7gk8eKt';

            const serviceId = process.env.REACT_APP_SERVICE_ID;
            const templateId = process.env.REACT_APP_TEMPLATE_ID;
            const publicKey = process.env.REACT_APP_PUBLIC_KEY;

            const templateParams = {
                from_name: formData.g1,
                from_email: formData.g2,
                to_name: 'Aytac',
                message: formData.g3
            };

            toast.info('Mail is sending to us...', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

            emailjs.send(serviceId, templateId, templateParams, publicKey)
                .then((response) => {
                    toast.success('Email sent successfully!', {
                        position: 'bottom-left',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'dark',
                    });
                    reset();
                })
                .catch((error) => {
                    console.log(error);
                    toast.error('Failed to send email. Please try again later, or call us.', {
                        position: 'bottom-left',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'dark',
                    });
                });
        } else {
            toast.error('Please check your informations.', {
                position: 'bottom-left',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });
        }
    };

    return (
        <div>
            <PersonalPageHeader />
            <div className='flex max-[640px]:flex-col sm:flex-row max-[640px]:gap-2 sm:gap-20'>

                <form onSubmit={handleSubmit(onSubmit)} className='mt-20 max-[640px]:mb-6 sm:mb-20 max-[640px]:w-[100%] sm:w-[80%]'>
                    <div className="mb-10">
                        <label htmlFor="name" className="block text-sm font-medium text-[#4338CA] dark:text-white">
                            {t("form_name")}
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="dark:text-[#f9f9f9] text-[#303030] border-b-2 pl-2 border-opacity-50 border-[#1C242E] dark:border-[#f9f9f9] focus:outline-none focus:border-black dark:focus:border-white w-full py-2 bg-[#F9F9F9] dark:bg-[#252128]"
                            {...register("g1", { required: t("form_valid_1") })} />
                        {errors.g1 && (<p className="text-m text-rose-700 py-1">{errors.g1.message}</p>)}
                    </div>

                    <div className="mb-10">
                        <label htmlFor="email" className="block text-sm font-medium text-[#4338CA] dark:text-white">
                            {t("form_mail")}
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="dark:text-[#f9f9f9] text-[#303030] border-b-2 pl-2 border-opacity-50 border-[#1C242E] dark:border-[#f9f9f9] focus:outline-none focus:border-black dark:focus:border-white w-full py-2 bg-[#F9F9F9] dark:bg-[#252128]"
                            {...register("g2", { required: t("form_valid_2") })} />
                        {errors.g2 && (<p className="text-m text-rose-700 py-1">{errors.g2.message}</p>)}
                    </div>

                    <div className="mb-10">
                        <label htmlFor="message" className="block text-sm font-medium text-[#4338CA] dark:text-white mb-4">
                            {t("form_note")}
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="6"
                            className="dark:text-[#f9f9f9] text-[#303030] border-2 border-opacity-50 pl-2 border-[#1C242E] focus:outline-none focus:border-black w-full py-2 px-3 resize-none bg-[#F9F9F9] dark:bg-[#273240]"
                            {...register("g3")} />
                        {errors.g3 && (<p className="text-m text-rose-700 py-1">{errors.g3.message}</p>)}
                    </div>

                    <button
                        type="submit"
                        className="mx-auto block text-[26px] text-[#303030] dark:text-[#f9f9f9] font-light hover:scale-125 transition-transform mb-8">
                        {t('form_submit')}
                    </button>
                </form>
                <div className='w-full flex items-center'>
                    <img src={contactImage} alt="Contact Me" />
                </div>
            </div>
        </div>

    )
}

export default ContactForm