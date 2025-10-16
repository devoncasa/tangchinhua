
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const ConsultationIcon = () => (
    <svg className="w-12 h-12 text-brand-rose-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);

const SelectionIcon = () => (
    <svg className="w-12 h-12 text-brand-rose-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4m16 0l-4-4m4 4l-4 4M4 12l4-4M4 12l4 4m-4 4h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const CelebrationIcon = () => (
    <svg className="w-12 h-12 text-brand-rose-pink" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.6,14.062c-0.375,0-0.688,0.312-0.688,0.688v1.074h-1.074c-0.375,0-0.688,0.312-0.688,0.688s0.312,0.688,0.688,0.688h1.074v1.074c0,0.375,0.312,0.688,0.688,0.688s0.688-0.312,0.688-0.688v-1.074h1.074c0.375,0,0.688-0.312,0.688-0.688s-0.312-0.688-0.688-0.688h-1.074v-1.074C13.288,14.375,12.975,14.062,12.6,14.062z M17.25,10.312h-1.074c-0.375,0-0.688,0.312-0.688,0.688s0.312,0.688,0.688,0.688h1.074v1.074c0,0.375,0.312,0.688,0.688,0.688s0.688-0.312,0.688-0.688v-1.074h1.074c0.375,0,0.688-0.312,0.688-0.688s-0.312-0.688-0.688-0.688h-1.074V9.238c0-0.375-0.312-0.688-0.688-0.688s-0.688,0.312-0.688,0.688V10.312z M17.938,3.75c-0.375,0-0.688,0.312-0.688,0.688v1.074h-1.074c-0.375,0-0.688,0.312-0.688,0.688s0.312,0.688,0.688,0.688h1.074v1.074c0,0.375,0.312,0.688,0.688,0.688s0.688-0.312,0.688-0.688V6.887h1.074c0.375,0,0.688-0.312,0.688-0.688S20.087,5.512,19.713,5.512h-1.074V4.438C18.625,4.062,18.312,3.75,17.938,3.75z M7.062,12.375c-0.375,0-0.688,0.312-0.688,0.688s0.312,0.688,0.688,0.688h1.074v1.074c0,0.375,0.312,0.688,0.688,0.688s0.688-0.312,0.688-0.688v-1.074h1.074c0.375,0,0.688-0.312,0.688-0.688s-0.312-0.688-0.688-0.688H9.512v-1.074c0-0.375-0.312-0.688-0.688-0.688S8.137,11.3,8.137,11.675v1.074H7.062z M8.812,3.75c-0.375,0-0.688,0.312-0.688,0.688v1.074H7.05c-0.375,0-0.688,0.312-0.688,0.688s0.312,0.688,0.688,0.688h1.074v1.074c0,0.375,0.312,0.688,0.688,0.688s0.688-0.312,0.688-0.688V6.887h1.074c0.375,0,0.688-0.312,0.688-0.688S11.262,5.512,10.887,5.512H9.812V4.438C9.5,4.062,9.187,3.75,8.812,3.75z M4.5,12.375H3.426v-1.074c0-0.375-0.312-0.688-0.688-0.688S2.05,11.3,2.05,11.675v1.074H0.975c-0.375,0-0.688,0.312-0.688,0.688s0.312,0.688,0.688,0.688h1.074v1.074c0,0.375,0.312,0.688,0.688,0.688s0.688-0.312,0.688-0.688v-1.074h1.074c0.375,0,0.688-0.312,0.688-0.688S4.875,12.375,4.5,12.375z M23.025,12.375h-1.074v-1.074c0-0.375-0.312-0.688-0.688-0.688s-0.688,0.312-0.688,0.688v1.074h-1.074c-0.375,0-0.688,0.312-0.688,0.688s0.312,0.688,0.688,0.688h1.074v1.074c0,0.375,0.312,0.688,0.688,0.688s0.688-0.312,0.688-0.688v-1.074h1.074c0.375,0,0.688-0.312,0.688-0.688S23.4,12.375,23.025,12.375z"/>
    </svg>
);


const GuideSection = () => {
    const { t } = useLanguage();

    const steps = [
        {
            icon: <ConsultationIcon />,
            title: t('guideStep1Title'),
            description: t('guideStep1Desc'),
        },
        {
            icon: <SelectionIcon />,
            title: t('guideStep2Title'),
            description: t('guideStep2Desc'),
        },
        {
            icon: <CelebrationIcon />,
            title: t('guideStep3Title'),
            description: t('guideStep3Desc'),
        },
    ];

    return (
        <section className="py-20 bg-light-bg">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-serif-zh font-bold text-brand-red mb-4" data-aos="fade-up">
                    {t('guideTitle')}
                </h2>
                <p className="text-lg text-charcoal-ink/80 max-w-2xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="100">
                    {t('fiftyYears')}
                </p>
                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                            <div className="bg-brand-soft-pink p-5 rounded-full mb-6">
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-serif-en font-bold text-brand-red mb-2">{step.title}</h3>
                            <p className="text-charcoal-ink/70 leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GuideSection;