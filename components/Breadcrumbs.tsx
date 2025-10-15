import React from 'react';
import { Link } from 'react-router-dom';

export interface BreadcrumbLink {
  name: string;
  to: string;
}

interface BreadcrumbsProps {
  links: BreadcrumbLink[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ links }) => {
  return (
    <nav aria-label="breadcrumb" className="bg-antique-cream/50 py-3 shadow-sm">
      <div className="container mx-auto px-6">
        <ol className="flex items-center space-x-2 text-sm text-light-text">
          {links.map((link, index) => {
            const isLast = index === links.length - 1;
            return (
              <li key={index} className="flex items-center">
                {index > 0 && <span className="mx-2 text-legacy-gold/80">/</span>}
                {isLast ? (
                  <span className="font-bold text-brand-red" aria-current="page">
                    {link.name}
                  </span>
                ) : (
                  <Link
                    to={link.to}
                    className="hover:text-brand-red hover:underline transition-colors"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
