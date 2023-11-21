import './library/vendor.js';
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import App from './views/app';
import cssSetting from './views/css-setting';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import './component/header/app-bar';
import './component/footer/subscribe-newsletter';
import './component/main/restaurant-detail';

// eslint-disable-next-line no-unused-vars
const START = 10;
// eslint-disable-next-line no-unused-vars
const NUMBER_OF_IMAGES = 100;

const app = new App({
    logo: document.querySelector('.logoContainer'),
    menuButton: document.querySelector('#hamburger'),
    closeButton: document.querySelector('.navigationMenu .closeButton'),
    drawer: document.querySelector('.navigationMenu'),
    menuList: document.querySelectorAll('.navigationMenu a'),
    appBar: document.querySelector('app-bar'),
    content: document.querySelector('#mainContent'),
    footer: document.querySelector('footer'),
});

const OtherConfiguration = () => {
    setTimeout(() => {
        // eslint-disable-next-line no-unused-expressions
        cssSetting;
    }, 1000);
};

window.addEventListener('hashchange', () => {
    app.renderPage();
    OtherConfiguration();
});

window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
    OtherConfiguration();
});
