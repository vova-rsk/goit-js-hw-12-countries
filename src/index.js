import debounce from 'lodash.debounce';
import 'modern-normalize';
import '@pnotify/core/dist/BrightTheme.css';
import './sass/main.scss';
import refs from './js/refs';
import onCountrySearchInput from './js/search';

refs.inputRef.addEventListener('input', debounce(onCountrySearchInput,500));

