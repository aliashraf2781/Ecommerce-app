import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext'; // عدل المسار لو مختلف

const useTheme = () => {
    const context = useContext(ThemeContext);

    return context;
};

export default useTheme;
