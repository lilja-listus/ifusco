import React, { ChangeEventHandler } from 'react';
import i18n from 'i18next';

const LanguageSwitch = (): JSX.Element => {
    const onLanguageChange = (event: React.ChangeEvent<HTMLInputElement>): ChangeEventHandler<HTMLSelectElement> => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <div>
            <select name="Lanuage" onChange={onLanguageChange}>
                <option value="en">English</option>
                <option value="ru">Russian</option>
            </select>
        </div>
    );
};

export default LanguageSwitch;
