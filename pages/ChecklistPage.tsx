import React, { useState, useEffect } from 'react';
import { useAppContext } from '../contexts/AppContext';
import { useLanguage } from '../contexts/LanguageContext';
import SEOManager from '../components/SEOManager';
import SectionBackground from '../components/SectionBackground';
import Breadcrumbs, { type BreadcrumbLink } from '../components/Breadcrumbs';

const ChecklistPage = () => {
    const { checklistData } = useAppContext();
    const { t, getMultilingual } = useLanguage();

    const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
        try {
            const saved = localStorage.getItem('weddingChecklist');
            return saved ? JSON.parse(saved) : {};
        } catch {
            return {};
        }
    });

    useEffect(() => {
        localStorage.setItem('weddingChecklist', JSON.stringify(checkedItems));
    }, [checkedItems]);

    const handleToggle = (taskId: string) => {
        setCheckedItems(prev => ({
            ...prev,
            [taskId]: !prev[taskId],
        }));
    };
    
    // Guard clause to prevent rendering with incomplete data
    if (!checklistData || checklistData.length === 0) {
        return (
            <SectionBackground>
                <div className="container mx-auto px-6 py-40 text-center">
                    <h1 className="text-2xl font-bold text-brand-red">Loading Checklist...</h1>
                </div>
            </SectionBackground>
        );
    }
    
    const totalTasks = checklistData.reduce((sum, category) => sum + category.tasks.length, 0);
    const completedTasks = Object.values(checkedItems).filter(Boolean).length;
    const progress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

    const breadcrumbLinks: BreadcrumbLink[] = [
        { name: t('home'), to: '/' },
        { name: t('weddingChecklist'), to: '/checklist' },
    ];

    return (
        <>
            <SEOManager
                title={t('meta_title_checklist')}
                description={t('meta_desc_checklist')}
            />
            <Breadcrumbs links={breadcrumbLinks} />
            <SectionBackground>
                <div className="container mx-auto px-6 py-20">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-serif-zh font-bold text-brand-red mb-4" data-aos="fade-down">{t('checklistTitle')}</h1>
                        <p className="text-lg max-w-2xl mx-auto opacity-90" data-aos="fade-down" data-aos-delay="100">{t('checklistIntro')}</p>
                    </div>

                    <div className="max-w-4xl mx-auto" data-aos="fade-up">
                        {/* Progress Bar */}
                         <div className="mb-12 p-6 bg-light-bg/60 backdrop-blur-sm rounded-lg border border-legacy-gold/30">
                            <div className="flex justify-between items-center mb-2 font-bold">
                                <span className="text-brand-red">{t('progress')}</span>
                                <span className="text-brand-dark-gold">{completedTasks} / {totalTasks}</span>
                            </div>
                            <div className="w-full bg-legacy-gold/20 rounded-full h-4">
                                <div
                                    className="bg-gradient-to-r from-brand-dark-gold to-legacy-gold h-4 rounded-full transition-all duration-500"
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                        </div>

                        {checklistData.map((category) => (
                            <div 
                                key={category.id} 
                                className="mb-12 bg-light-bg/50 p-6 sm:p-8 rounded-lg backdrop-blur-sm border border-legacy-gold/20"
                            >
                                <h2 className="text-3xl font-serif-zh font-bold text-brand-red border-b-2 border-legacy-gold/50 pb-3 mb-8">
                                    {getMultilingual(category.category)}
                                </h2>
                                <ul className="space-y-6">
                                    {category.tasks.map(task => (
                                        <li key={task.id}>
                                           <div
                                                onClick={() => handleToggle(task.id)}
                                                className={`relative flex items-center p-4 rounded-lg shadow-md border transition-all duration-300 cursor-pointer overflow-hidden ${
                                                    checkedItems[task.id] 
                                                    ? 'bg-green-50 border-green-300' 
                                                    : 'bg-light-bg border-legacy-gold/20 hover:shadow-lg hover:border-legacy-gold/50'
                                                }`}
                                            >
                                                <img 
                                                    src={task.imageUrl} 
                                                    alt={getMultilingual(task.name)} 
                                                    className={`w-20 h-20 md:w-24 md:h-24 rounded-md object-cover transition-all duration-300 ${
                                                        checkedItems[task.id] ? 'grayscale-[50%] opacity-60' : ''
                                                    }`} 
                                                />
                                                <div className="flex-1 ml-4 md:ml-6">
                                                    <h3 className={`font-bold text-lg md:text-xl transition-all duration-300 ${
                                                        checkedItems[task.id] 
                                                        ? 'line-through text-gray-500' 
                                                        : 'text-light-text'
                                                    }`}>
                                                        {getMultilingual(task.name)}
                                                    </h3>
                                                    <p className={`text-sm md:text-base mt-1 transition-all duration-300 ${
                                                         checkedItems[task.id] 
                                                         ? 'text-gray-400' 
                                                         : 'text-light-text/80'
                                                    }`}>
                                                        {getMultilingual(task.description)}
                                                    </p>
                                                </div>
                                                
                                                {checkedItems[task.id] && (
                                                    <div className="absolute top-2 right-2 md:top-4 md:right-4">
                                                        <div className="w-8 h-8 md:w-10 md:h-10 bg-green-500/80 rounded-full flex items-center justify-center text-white">
                                                            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionBackground>
        </>
    );
};

export default ChecklistPage;