import React from 'react';
  import { useTranslation } from 'react-i18next';

  const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };

    return (
      <div className="flex items-center space-x-2">
        <button
          onClick={() => changeLanguage('id')}
          className={`px-2 py-1 text-sm rounded ${i18n.language.split('-')[0] === 'id' ? 'bg-gray-700' : ''}`}
        >
          ID
        </button>
        <button
          onClick={() => changeLanguage('en')}
          className={`px-2 py-1 text-sm rounded ${i18n.language.split('-')[0] === 'en' ? 'bg-gray-700' : ''}`}
        >
          EN
        </button>
      </div>
    );
  };

  export default LanguageSwitcher;