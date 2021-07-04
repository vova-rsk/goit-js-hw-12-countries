import templateCountryInfo from '../templates/country-info.hbs';
import templateCountriesList from '../templates/country-list.hbs';
import refs from './refs';
import notice from './notification';

export const renderCountryInfo = data => {
    if (data.length === 1) {
        refs.outputRef.innerHTML = templateCountryInfo(...data);
    } else if (data.length <= 10) {
        refs.outputRef.innerHTML = templateCountriesList(data);
    } else {
        clearMarkup();
        notice("Too many matches found. Please enter a more specific query!");
    }
};

export const clearMarkup = () => {
    refs.outputRef.innerHTML = '';
};