import templateCountryInfo from '../templates/country-info.hbs';
import templateCountriesList from '../templates/country-list.hbs';
import { outputRef } from '../index';
import { notice } from './pnotify';

export const renderCountryInfo = data => {
    if (data === '') {
        outputRef.innerHTML = '';
        return;
    }
    
    outputRef.innerHTML = (data.length === 1)
        ? templateCountryInfo(...data)
        : templateCountriesList(data);    
    
    if (data.length >= 10) {
        notice();
    }
};