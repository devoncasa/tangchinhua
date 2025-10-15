import React from 'react';
import { ChecklistTask } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface ChecklistItemCardProps {
  task: ChecklistTask;
}

const ChecklistItemCard: React.FC<ChecklistItemCardProps> = ({ task }) => {
  const { getMultilingual } = useLanguage();

  return (
    <div className="bg-light-bg/70 backdrop-blur-sm rounded-lg shadow-md overflow-hidden border border-legacy-gold/20 flex flex-col p-3 text-center h-full">
      <div className="relative w-full pb-[100%] mb-3">
        <img src={task.imageUrl} alt={getMultilingual(task.name)} className="absolute h-full w-full object-cover rounded-md" />
      </div>
      <div className="flex flex-col flex-grow justify-start">
        <h3 className="font-semibold text-sm text-light-text mb-1 leading-tight">
          {getMultilingual(task.name)}
        </h3>
        <p className="text-xs text-light-text/70 line-clamp-2 leading-snug">
            {getMultilingual(task.description)}
        </p>
      </div>
    </div>
  );
};

export default ChecklistItemCard;
