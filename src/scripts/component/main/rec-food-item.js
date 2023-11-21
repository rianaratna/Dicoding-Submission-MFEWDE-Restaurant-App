class RecommendationFoodItem extends HTMLElement {
    constructor() {
        super();
    }

    set food(food) {
        this._food = food;
        this.render();
    }

    async render() {
        this.innerHTML = `
            <section id="${this._food.id}" class="foodItem card">
                <div class="foodContent">
                    <div id="front">
                        <img data-src="${this._food.image}" alt="${this._food.name}" class="foodImg lazyload">
                        <div class="nextBtn filledIconButton">
                            <span class="material-symbols-outlined">
                                chevron_right
                            </span>
                        </div>
                    </div>
                    <div id="back">
                        <h3 class="foodName" aria-hidden="true">${this._food.name}</h3>
                        <p class="foodDesc">${this._food.description}</p>
                    </div>
                </div>
            </section>
        `;
        this.setAttribute('tabindex', '0');
    }
}

customElements.define('rec-food-item', RecommendationFoodItem);
