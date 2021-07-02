import templateCountryInfo from '../templates/country-info.hbs';
import templateCountriesList from '../templates/country-list.hbs';
import { outputRef } from '../index';

export const renderCountryInfo = data => {
    if (data === '') {
        outputRef.innerHTML = '';
    } else {
        outputRef.innerHTML = (data.length === 1)
        ? templateCountryInfo(...data)
        : templateCountriesList(data);    
    }
};