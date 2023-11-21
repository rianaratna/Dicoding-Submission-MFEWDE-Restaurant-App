class AppBar extends HTMLElement {
    constructor() {
        super();
    }

    set info(info) {
        this._info = info;
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="hero">
                <button id="hamburger" class="iconButton" tabindex="0">
                    <span class="material-symbols-outlined">
                        menu
                    </span>
                </button>
                <div class="logoContainer">
                    <img data-src="../../../images/logo.png" alt="" class="lazyload">
                    <h1 class="appName">Local Foodie Map</h1>
                </div>
            </div>
            
            <nav id="drawer" class="navigationMenu">
                <ul class="navList">
                    <li>
                        <a href="#/home">Home</a>
                    </li>
                    <li>
                        <a href="#/favourite">Favourite</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/rianaratna">About Us</a>
                    </li>
                </ul>
                <button aria-label="close the navigation" class="closeButton iconButton">
                    <span class="material-symbols-outlined">
                        close
                    </span>
                </button>
            </nav>
        `;

        if (window.matchMedia('(max-width: 499px)').matches) {
            $('.navigationMenu a, .navigationMenu button').attr('tabindex', '-1');
        } else {
            $('.navigationMenu a, .navigationMenu button').removeAttr('tabindex');
        }
    }
}

customElements.define('app-bar', AppBar);
