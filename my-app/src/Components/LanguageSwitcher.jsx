import React, { useState } from 'react';

const LanguageSwitcher = () => {
    const [language, setLanguage] = useState('RU');

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
    };

    return (
        <div className="langSwitch">

            <button
                className={`langButton ${language === 'RU' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('RU')}
            >
                RU
            </button>
            <button
                className={`langButton ${language === 'EN' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('EN')}
            >
                EN
            </button>
        </div>
    );
};

export default LanguageSwitcher;

