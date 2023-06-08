import React from 'react'
import { useTranslation } from 'react-i18next'
import { personalPageDataEn, personalPageDataTr } from '../sources/data/personalPageData'
import { useForm } from 'react-hook-form'
import PersonalPageHeader from './PersonalPageHeader'
import { toast } from 'react-toastify'
import axios from 'axios'

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
        toast.info(t("toast_info_message"), { position: toast.POSITION.BOTTOM_RIGHT });
        axios
            .post("https://reqres.in/api/workintech", formData)
            .then((res) => {
                console.log(res.data);
                    toast.success("Notunuz bize ulaştı !", { position: toast.POSITION.TOP_RIGHT });
                    reset()
            })
            .catch((error) => {
                toast.warning("Bir Hata Oluştu, Daha Sonra Tekrar Deneyin !", { position: toast.POSITION.BOTTOM_RIGHT });
                    console.log(error)
            });
    }

    return (
        <div>
            <PersonalPageHeader />
            <div className='flex flex-col items-center w-full'>

                <h1 className='text-5xl text-[#1F2937] dark:text-[#AEBCCF]'>{t("blog_title")}</h1>
                {(i18n.language === "tr" ? personalPageDataEn : personalPageDataTr)
                    .map((item, index) => (
                        <div key={index}>
                            <div className='mb-10 mt-10'>
                                <h2 className='text-3xl text-[#4338CA] dark:text-[#B7AAFF]'>{item.title}</h2>
                            </div>
                            <div>
                                <h3 className='text-[#1F2937] dark:text-[#AEBCCF]'>{item.description}</h3>
                            </div>
                        </div>
                    ))}

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-between items-center  mt-20 h-[20rem] mb-40"            >
                    <div>
                        <p className="text-2xl text-left text-[#4338CA] dark:text-[#B7AAFF]">
                            {t("form_name")}
                        </p>
                        <input
                            className="w-[40rem] h-8"
                            {...register("g1", { required: t("form_valid_1") })}
                        />
                        {errors.g1 && (
                            <p className="text-m text-rose-700 py-1">{errors.g1.message}</p>
                        )}
                    </div>
                    <div>
                        <p className="text-2xl text-left text-[#4338CA] dark:text-[#B7AAFF]">
                            {t("form_mail")}
                        </p>
                        <input
                            className="w-[40rem] h-8"
                            {...register("g2", { required: t("form_valid_2") })}
                        />
                        {errors.g2 && (
                            <p className="text-m text-rose-700 py-1">{errors.g2.message}</p>
                        )}
                    </div>
                    <div>
                        <p className="text-2xl text-left text-[#4338CA] dark:text-[#B7AAFF]">
                            {t("form_note")}
                        </p>
                        <textarea
                            className="w-[40rem] h-20"
                            {...register("g3")}
                        />
                        {errors.g3 && (
                            <p className="text-m text-rose-700 py-1">{errors.g3.message}</p>
                        )}

                    </div>

                    <h1 className="text-2xl mt-5 mb-10 text-[#1F2937] dark:text-[#AEBCCF]">
                        {t("send_me")}
                    </h1>

                    <button to="/" className="text-[#3730A3] text-lg leading-7 font-medium bg-[#F5F5F5] w-48 h-12 border-2 border-[#3730A3] hover:bg-[#3730A3] hover:text-[#FFFFFF] rounded-md inline-flex items-center dark:bg-[#383838] dark:text-[#E1E1FF] dark:border-[#E1E1FF] dark:hover:bg-[#E1E1FF] dark:hover:text-[#000000] mb-2 px-16">
                        {t('form_submit')}
                    </button>

                </form>
            </div>
        </div>
    )
}

export default PersonalPage