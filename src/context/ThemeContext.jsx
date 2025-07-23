import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [dark, setDark] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? JSON.parse(savedTheme) : false;
    });

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(dark));
    }, [dark]);

    function toggleTheme() {
        setDark(prev => !prev);
    }

    return (
        <ThemeContext.Provider value={{ dark, toggleTheme }}>
            <div className={`font-cairo ${dark ? 'dark' : ''}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;