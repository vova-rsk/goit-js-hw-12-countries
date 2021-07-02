import { renderCountryInfo } from './render';

const fetchCountry = name => {
    return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });
};

export const onCountrySearchInput = e => {
    const countryName = e.target.value.trim();
    if (countryName === "") {
        renderCountryInfo(countryName);
        return;
    }
        
    fetchCountry(countryName)
        .then(countriesList => {
            renderCountryInfo(countriesList);
        })
        .catch(error => {
            console.log(error)
        });
};