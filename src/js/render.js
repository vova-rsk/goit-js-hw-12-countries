import templateCountryInfo from '../templates/country-info.hbs';
import templateCountriesList from '../templates/country-list.hbs';
import refs from './refs';
import notice from './notification';

export const renderCountryInfo = data => {
    refs.outputRef.innerHTML = (data.length === 1)
        ? templateCountryInfo(...data)
        : templateCountriesList(data);    
    
    if (data.length >= 10) {
        notice("Too many matches found. Please enter a more specific query!");
    }
};

export const clearMarkup = () => {
    refs.outputRef.innerHTML = '';
    notice("No matches found. Please enter a new query!");
};