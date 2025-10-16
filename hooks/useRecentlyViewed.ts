import { useState, useEffect, useCallback } from 'react';

const MAX_RECENTLY_VIEWED = 10;
const STORAGE_KEY = 'recentlyViewed';

export const useRecentlyViewed = () => {
    const [recentlyViewed, setRecentlyViewed] = useState<string[]>([]);

    useEffect(() => {
        try {
            const items = window.localStorage.getItem(STORAGE_KEY);
            setRecentlyViewed(items ? JSON.parse(items) : []);
        } catch (error) {
            console.error('Failed to parse recently viewed items from localStorage', error);
            setRecentlyViewed([]);
        }
    }, []);

    const addProductToRecentlyViewed = useCallback((productId: string) => {
        setRecentlyViewed(prev => {
            // Remove the product if it already exists to move it to the front
            const updatedList = prev.filter(id => id !== productId);
            
            // Add the new product to the front
            const newList = [productId, ...updatedList];

            // Limit the list to the max size
            if (newList.length > MAX_RECENTLY_VIEWED) {
                newList.length = MAX_RECENTLY_VIEWED;
            }

            try {
                window.localStorage.setItem(STORAGE_KEY, JSON.stringify(newList));
            } catch (error) {
                console.error('Failed to save recently viewed items to localStorage', error);
            }
            
            return newList;
        });
    }, []);
    
    return { recentlyViewedProductIds: recentlyViewed, addProductToRecentlyViewed };
};
