
import { useState, useEffect } from 'react';

const getDayOfYear = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = (now.getTime() - start.getTime()) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
};

export const useDailyContent = <T,>(items: T[]): T | null => {
  const [dailyItem, setDailyItem] = useState<T | null>(null);

  useEffect(() => {
    if (items && items.length > 0) {
      const dayIndex = getDayOfYear();
      const itemIndex = dayIndex % items.length;
      setDailyItem(items[itemIndex]);
    }
  }, [items]);

  return dailyItem;
};


export const useDailyShuffledArray = <T,>(items: T[], count: number): T[] => {
    const [shuffledItems, setShuffledItems] = useState<T[]>([]);

    useEffect(() => {
        if (items && items.length > 0) {
            const dayIndex = getDayOfYear();
            const shuffled = [...items].sort(() => {
                // Simple pseudo-random shuffle based on the day of the year
                const random = Math.sin(dayIndex);
                return 0.5 - random;
            });
            setShuffledItems(shuffled.slice(0, count));
        }
    }, [items, count]);

    return shuffledItems;
};
