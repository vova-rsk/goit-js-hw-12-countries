import debounce from 'lodash.debounce';
import 'modern-normalize';
import '@pnotify/core/dist/BrightTheme.css';
import './sass/main.scss';
import { onCountrySearchInput } from './js/search';

const inputRef = document.querySelector('#country-search');
export const outputRef = document.querySelector('.search-result');

inputRef.addEventListener('input', debounce(onCountrySearchInput,500));

