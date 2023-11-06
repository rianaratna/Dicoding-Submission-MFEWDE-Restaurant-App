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
                <a id="hamburger" class="iconButton">
                    <span class="material-symbols-outlined">
                        menu
                    </span>
                </a>
                <div class="logoContainer">
                    <img src="../../../images/logo.png" alt="">
                    <h1 class="appName">Local Foodie Map</h1>
                </div>
            </div>
            
            <nav id="drawer" class="navigationMenu">
                <ul class="navList">
                    <li>
                        <a href="#/home" tabindex="-1">Home</a>
                    </li>
                    <li>
                        <a href="#/favourite" tabindex="-1">Favourite</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/rianaratna" tabindex="-1">About Us</a>
                    </li>
                </ul>
                <button aria-label="close the navigation" class="closeButton iconButton" tabindex="-1">
                    <span class="material-symbols-outlined">
                        close
                    </span>
                </button>
            </nav>
        `;
    }
}

customElements.define('app-bar', AppBar);
