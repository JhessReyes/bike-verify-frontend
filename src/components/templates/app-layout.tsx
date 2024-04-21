import React from 'react';

type AppLayoutProps = {
    children: React.ReactNode;
};

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            {/*
                <header className="bg-gray-800 py-4">
                    Your header content 
                </header> 
            */}
            <main className="flex-grow">
                {children}
            </main>
            {/*      
                <footer className="bg-gray-800 py-4">
                    Your footer content
                </footer> 
            */}
        </div>
    );
};

export default AppLayout;
