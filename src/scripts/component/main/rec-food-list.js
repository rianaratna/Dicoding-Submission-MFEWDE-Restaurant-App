import './rec-food-item.js';

class RecommendationFoodList extends HTMLElement {
    constructor() {
        super();
    }

    set foods(foods) {
        this._foods = foods;
        this.render();
    }

    async render() {
        this.innerHTML = '';
        this.innerHTML = `
            <h2 class="secondaryTitle recFoodTitle" tabindex="0">Food Items You Should Try In Medan</h2>
        `;

        this._foods.forEach((food) => {
            const recFoodItem = document.createElement('rec-food-item');
            recFoodItem.food = food;
            this.appendChild(recFoodItem);

            // While Next Button On Click at Food Card
            $(`#${food.id} .nextBtn`).on('click', () => {
                $(`#${food.id} .foodContent`).addClass('clickedFlip');

                $(`#${food.id} .nextBtn`).on('mouseleave', () => {
                    $(`#${food.id} .foodContent`).removeClass('clickedFlip');
                });
            });
        });
    }
}

customElements.define('rec-food-list', RecommendationFoodList);
