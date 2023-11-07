import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
    constructor({
        logo, menuButton, closeButton, drawer, menuList, appBar, content, footer,
    }) {
        this._logo = logo;
        this._menuButton = menuButton;
        this._closeButton = closeButton;
        this._drawer = drawer;
        this._menuList = menuList;
        this._appBar = appBar;
        this._content = content;
        this._footer = footer;
        this._initialAppShell();
    }

    _initialAppShell() {
        DrawerInitiator.init({
            menuButton: this._menuButton,
            closeButton: this._closeButton,
            drawer: this._drawer,
            menuList: this._menuList,
        });
    }

    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        if (url === '/' || url === '/home') {
            $(this._appBar).css({ 'background-color': 'transparent' });
            $(this._content).css({ 'margin-top': 0 });
        } else {
            $(this._appBar).css({ 'background-color': '#000000' });

            if (url === '/favourite') {
                $(this._content).css({ 'margin-top': $(this._appBar).outerHeight() });
            } else {
                $(this._content).css({ 'margin-top': 0 });
            }
        }
        this._content.innerHTML = await page.render();
        await page.afterRender();

        const skipLink = document.querySelector('.skipLink');
        skipLink.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector('#mainContent').focus();
        })
    }
}

export default App;
