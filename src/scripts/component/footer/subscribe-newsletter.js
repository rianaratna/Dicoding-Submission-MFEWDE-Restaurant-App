class SubscribeNewsletter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector('#email').value;
    }

    render() {
        this.innerHTML = `
            <div class="subNewsInfo">
                <h2 class="subNewsTitle" tabindex="0">Subscribe to Our NewsLetter</h2>
                <p class="subDesc" tabindex="0">To Stay Updated with Our Culinary Delights</p>
            </div>
            <div class="action">
                <div class="subNewsInput">
                    <span class="material-symbols-outlined">
                        mail
                    </span>
                    <input type="email" name="email" id="email" placeholder="Enter your email">
                </div>
                <button aria-label="Subscribe To Our Newsletter" class="subNewsButton textButton">Subscribe</button>
            </div>
        `;

        this.querySelector('.subNewsButton').addEventListener('click', this._clickEvent);
    }
}

customElements.define('subscribe-newsletter', SubscribeNewsletter);
