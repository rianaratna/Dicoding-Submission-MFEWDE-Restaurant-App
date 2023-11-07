import './restaurant-item.js';

class RestaurantList extends HTMLElement {
    constructor() {
        super();
    }

    set restaurants(restaurants) {
        this._restaurants = restaurants;
        this.render();
    }

    async render() {
        this.innerHTML = '';
        this.innerHTML = `
            <h2 class="secondaryTitle restaurantTitle" tabindex="0">Explore Restaurant</h2>
            <div class="wavyLineBack" aria-hidden="true"></div>
        `;

        this._restaurants.forEach((restaurant) => {
            const restaurantItem = document.createElement('restaurant-item');
            restaurantItem.restaurant = restaurant;
            this.appendChild(restaurantItem);
        });
    }
}

customElements.define('restaurant-list', RestaurantList);
