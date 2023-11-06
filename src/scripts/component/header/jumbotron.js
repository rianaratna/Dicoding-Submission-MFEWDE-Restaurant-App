class Jumbotron extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="overlay">
                <h1 class="heroTitle">Experience Indonesia, One Bite at a Time</h1>
            </div>
        `;

        this.setAttribute('aria-hidden', 'true');
    }
}

customElements.define('jumbotron-container', Jumbotron);
