import React from 'react'
import { useTranslation } from 'react-i18next'
import { personalPageDataEn, personalPageDataTr } from '../sources/data/personalPageData'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import axios from 'axios'
import PersonalPageHeader from './PersonalPageHeader'

const PersonalPage = () => {

    const { t, i18n } = useTranslation()

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({ mode: "onChange" });

    const onSubmit = (formData) => {
        // console.log(formData);
        toast.info(t("toast_info_message"));
        axios
            .post("https://reqres.in/api/workintech", formData)
            .then((res) => {
                console.log(res.data);
                setTimeout(() => {
                    toast.success(t("toast_success_message"));
                }, 2000);
                reset()
            })
            .catch((error) => {
                toast.warning(t("toast_error_message"));
                console.log(error)
            });
    }

    return (
        <div>
            <div id="goingontop" className='flex justify-start lg:justify-start md:justify-center sm:justify-center max-[640px]:justify-center max-[320px]:justify-center'>
                <PersonalPageHeader />
            </div>
            <div className='flex flex-col items-center w-full'>

                <h1 className='text-5xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-3xl max-[640px]:text-2xl max-[320px]:text-xl text-center mt-10 mb-10 text-[#1F2937] dark:text-[#AEBCCF]'>{t("blog_title")}</h1>

                {(i18n.language === "tr" ? personalPageDataEn : personalPageDataTr)
                    .map((item, index) => (
                        <div key={index} className='w-[90%] flex flex-row mb-20 lg:flex-row md:flex-col sm:flex-col max-[640px]:flex-col max-[320px]:flex-col md:items-center sm:items-center max-[640px]:items-center max-[320px]:items-center'>
                            <div className='w-[50%] lg:w-[50%] md:w-[80%] sm-[90%] mt-0 mr-8 lg:mr-8 md:mr-0 sm:mr-0 max-[640px]:mr-0 max-[320px]:mr-0'>
                                <img src={item.image} className='text-[#1F2937] dark:text-[#AEBCCF]' alt="blog_picture" />
                            </div>
                            <div className='w-[50%] lg:w-[50%] md:w-[80%] sm:w-[80%] max-[640px]:w-[80%] max-[320px]:w-[80%]'>
                                <div >
                                    <h2 className='mb-4 mt-4 text-3xl xl:text-3xl lg:text-2xl md:text-2xl sm:text-xl max-[640px]:text-lg max-[320px]:text-base text-[#4338CA] dark:text-[#B7AAFF]'>{item.title}</h2>
                                </div>
                                <div>
                                    <h3 className='text-lg xl:text-base lg:text-base md:text-sm sm:text-sm max-[640px]:text-xs max-[320px]:text-xs text-[#1F2937] dark:text-[#AEBCCF]'>{item.description}</h3>
                                </div>
                            </div>
                        </div>
                    ))}

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-between items-center mt-20 h-[20rem]">
                    <div>
                        <p className="text-2xl text-left text-[#4338CA] dark:text-[#B7AAFF]">{t("form_name")}</p>
                        <input className="w-[40rem] sm:w-[40rem] max-[640px]:w-[20rem] max-[320px]:w-[15rem] h-8"{...register("g1", { required: t("form_valid_1") })} />
                        {errors.g1 && (<p className="text-m text-rose-700 py-1">{errors.g1.message}</p>
                        )}
                    </div>
                    <div>
                        <p className="text-2xl text-left text-[#4338CA] dark:text-[#B7AAFF]">{t("form_mail")}</p>
                        <input className="w-[40rem] sm:w-[40rem] max-[640px]:w-[20rem] max-[320px]:w-[15rem] h-8"{...register("g2", { required: t("form_valid_2") })} />
                        {errors.g2 && (<p className="text-m text-rose-700 py-1">{errors.g2.message}</p>)}
                    </div>
                    <div>
                        <p className="text-2xl text-left text-[#4338CA] dark:text-[#B7AAFF]">{t("form_note")}</p>
                        <textarea className="w-[40rem] sm:w-[40rem] max-[640px]:w-[20rem] max-[320px]:w-[15rem] h-20"{...register("g3")} />
                        {errors.g3 && (<p className="text-m text-rose-700 py-1">{errors.g3.message}</p>)}
                    </div>

                    <div>
                        <h1 className="text-2xl text-[#1F2937] dark:text-[#AEBCCF]">{t("send_me")}</h1>
                        <button to="/" className="text-[#3730A3] text-lg leading-7 font-medium bg-[#F9F9F9] w-48 h-12 border-2 border-[#3730A3] hover:bg-[#3730A3] hover:text-[#FFFFFF] rounded-md inline-flex items-center dark:bg-[#383838] dark:text-[#E1E1FF] dark:border-[#E1E1FF] dark:hover:bg-[#E1E1FF] dark:hover:text-[#000000] mb-2 px-16" data-test-id="buttonSubmit">
                            {t('form_submit')}
                        </button>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default PersonalPage