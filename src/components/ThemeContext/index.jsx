import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();  // Creating the context

export const useTheme = () => useContext(ThemeContext);  // Custom hook for easy context usage

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        // Check for theme preference in localStorage or default to 'light'
        return localStorage.getItem('theme') || 'light';
    });

    // Apply the theme class to the body element
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    // Function to toggle the theme
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);  // Persist the theme in localStorage
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
