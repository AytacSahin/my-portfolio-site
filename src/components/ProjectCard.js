import React from 'react';

const ProjectCard = ({ project, t }) => {
    return (
        <div className='mx-auto flex flex-col justify-between mb-12 w-[20rem] h-[36rem] sm:w-[20rem] sm:h-[39rem] max-[640px]:w-[20rem] max-[640px]:h-[40rem]'>
            <div className='mb-8 text-center'>
                <a href={project.deployLink}>
                    <img className='hover:scale-110 transition duration-500 cursor-pointer w-[20rem] h-[14rem] object-fill hover:opacity-70' src={project.img} alt='project_picture' />
                </a>
                <h3 className='text-[#4338CA] text-3xl leading-7 font-medium mt-8 dark:text-[#B7AAFF] mb-6'>{project.title}</h3>
                <h4 className='text-[#6B7280] text-sm leading-tight font-normal dark:text-[#FFFFFF]'>{project.description}</h4>
            </div>
            <div className='mb-4 flex sm:flex-row max-[640px]:flex-col max-[640px]:gap-1'>
                {project.methodsofproject.map((method, index) => (
                    <span key={index} className='text-[#3730A3] border-2 border-solid rounded-md border-[#3730A3] p-2 mr-4 dark:text-[#8F88FF] dark:border-[#8F88FF dark:bg-[#383838]'>
                        {method}
                    </span>
                ))}
            </div>
            <div className='flex justify-between mb-4 underline text-[#3730A3] dark:text-[#E1E1FF]'>
                {project.githubLink !== '' && <a href={project.githubLink}>Github</a>}
                <a href={project.deployLink}>{t('view_site')}</a>
            </div>
        </div>
    );
};

export default ProjectCard;
