import React from 'react';
import { useTranslation } from 'react-i18next';
import { projectsDataEn, projectsDataTr } from '../sources/data/projectData.js';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const { t, i18n } = useTranslation();

    const projectsData = i18n.language === 'tr' ? projectsDataEn : projectsDataTr;

    return (
        <div className='mt-10 pb-20'>
            <h2 className='text-[#1F2937] text-5xl leading-none font-semibold dark:text-[#AEBCCF] mb-10'>{t('projects')}</h2>
            <div className='flex flex-wrap'>
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} t={t} />
                ))}
            </div>
        </div>
    );
};

export default Projects;