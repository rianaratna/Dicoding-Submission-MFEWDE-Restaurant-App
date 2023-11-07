class LoadingIndicator extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="loader">
            <div class="loaderDot"></div>
            <div class="loaderDot"></div>
            <div class="loaderDot"></div>
            <div class="loaderDot"></div>
            <div class="loaderDot"></div>
            <div class="loaderDot"></div>
            <div class="loaderText" tabindex="0" aria-label="Page is On Loading"></div>
        </div>
        `;
    }
}

customElements.define('loading-indicator', LoadingIndicator);
