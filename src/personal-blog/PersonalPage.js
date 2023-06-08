import React from 'react'
import { useTranslation } from 'react-i18next'
import { personalPageDataEn, personalPageDataTr } from '../sources/data/personalPageData'
import { useForm } from 'react-hook-form'
import PersonalPageHeader from './PersonalPageHeader'

const PersonalPage = () => {

    const { t, i18n } = useTranslation()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const onSubmit = () => {

    }

    return (
        <div>
            <PersonalPageHeader />
            <div className='flex flex-col items-center w-full'>

                <h1 className='text-5xl text-[#1F2937] dark:text-[#AEBCCF]'>Yazılım Günlükleri</h1>
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
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 p-8 flex-1"            >
                    <div>
                        <p className="text-xs">
                            İsminiz Nedir?
                        </p>
                        <input
                            className=""
                            {...register("g1", { required: "Bu alan zorunludur" })}
                        />
                        {errors.g1 && (
                            <p className="text-sm text-rose-700 py-1">{errors.g1.message}</p>
                        )}
                    </div>
                    <div>
                        <p className="text-xs">
                            Mail Adresiniz:
                        </p>
                        <input
                            className=""
                            {...register("g2", { required: "Bu alan zorunludur" })}
                        />
                    </div>
                    <div>
                        <p className="text-xs">
                            Benimle Paylaşmak İstediğin Not:
                        </p>
                        <textarea
                            className=""
                            placeholder="Bu sayfada neleri görmek istersin, paylaşmak ister misin?"
                            {...register("g3")}
                        />
                    </div>

                    <button type="submit" className="myButton">
                        Gönder!
                    </button>
                </form>
            </div>
        </div>
    )
}

export default PersonalPage