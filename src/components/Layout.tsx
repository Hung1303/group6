import React from 'react';
import Navigation from './Navigation';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  return (
    <div className={`layout ${className}`}>
      <Navigation />
      <main className="layout-main">
        {children}
      </main>
    </div>
  );
};

export default Layout;
