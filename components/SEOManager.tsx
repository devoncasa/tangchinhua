import React, { useEffect } from 'react';

interface SEOManagerProps {
  title: string;
  description: string;
}

const SEOManager: React.FC<SEOManagerProps> = ({ title, description }) => {
  useEffect(() => {
    if (title) {
        document.title = title;
    }

    if (description) {
        let metaDescription = document.querySelector('meta[name="description"]');
        
        if (!metaDescription) {
          metaDescription = document.createElement('meta');
          metaDescription.setAttribute('name', 'description');
          document.head.appendChild(metaDescription);
        }

        metaDescription.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
};

export default SEOManager;