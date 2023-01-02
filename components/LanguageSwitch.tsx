import React from 'react';
import i18n from 'i18next';

const LanguageSwitch = (): JSX.Element => {
    const onLanguageChange = (value): void => {
        i18n.changeLanguage(value);
    };

    return (
        <div>
            <select name="Language" onChange={(event: React.ChangeEvent<HTMLSelectElement>): void => onLanguageChange(event.target.value)}>
                <option value="en">English</option>
                <option value="ru">Russian</option>
            </select>
        </div>
    );
};

export default LanguageSwitch;
