class Marquee extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <marquee behavior="scroll" direction="right">
            <div class="marqueeSet"></div>
        </marquee>
        `;

        const marqueeSet = document.querySelector('.marqueeSet');
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i <= 20; i++) {
            const li = document.createElement('li');
            li.innerText = 'INDONESIA';
            marqueeSet.appendChild(li);
        }

        // const height = $('jumbotron-container').outerHeight() - $('app-bar').outerHeight();
        // $(this).css({ top: height });
    }
}

customElements.define('marquee-container', Marquee);
