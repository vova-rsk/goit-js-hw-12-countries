import { renderCountryInfo, clearMarkup } from './render';
import fetchCountries from './fetchCountries';
import notice from './notification';


const onCountrySearchInput = e => {
    const countryName = e.target.value.trim();
    if (countryName === "") {
        return;
    }
        
    fetchCountries(countryName)
        .then(renderCountryInfo)
        .catch(() => {
            clearMarkup();
            notice("No matches found. Please enter a new query!");
        })
        .finally(() => {
            e.target.value = '';
        });
};

export default onCountrySearchInput;