import { renderCountryInfo, clearMarkup } from './render';

const fetchCountry = name => {
    return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });
};

const onCountrySearchInput = e => {
    const countryName = e.target.value.trim();
    if (countryName === "") {
        return;
    }
        
    fetchCountry(countryName)
        .then(renderCountryInfo)
        .catch(error => {
            clearMarkup();
            console.log(error);
        })
        .finally(() => {
            e.target.value = '';
        });
};

export default onCountrySearchInput;