import CONFIG from '../../globals/config';
import './restaurant-detail';

class RestaurantItem extends HTMLElement {
    constructor() {
        super();
    }

    set restaurant(restaurant) {
        this._restaurant = restaurant;
        this.render();
    }

    async render() {
        this.innerHTML = `
            <section id="${this._restaurant.id}" class="restaurantItem card">
                <div class="restaurantContent">
                    <div class="restaurantInfoSection">
                        <h3 class="restaurantName" tabindex="0" aria-label="restaurant ${this._restaurant.name}">${this._restaurant.name}</h3>
                        <div class="wrapper">
                            <h4 class="restaurantCity" tabindex="0" aria-label="located in ${this._restaurant.city}">${this._restaurant.city}</h4>
                            <div class="restaurantRating">
                                <span class="material-symbols-rounded">
                                    star
                                </span>
                                <h4 class="ratingScale" tabindex="0" aria-label="rating ${this._restaurant.rating}">${this._restaurant.rating}</h4>
                            </div>
                        </div>
                        <p class="restaurantDesc" tabindex="0">${this._restaurant.description}</p>
                        <a aria-label="View the detail of ${this._restaurant.name}" class="viewDetailBtn textButton" tabindex="0" href="/#/detail/${this._restaurant.id}">View detail ></a>
                    </div>
                    <div class="restaurantImgSection">
                        <img src="${CONFIG.BASE_IMAGE_URL.MEDIUM + this._restaurant.pictureId}" alt="${this._restaurant.name}" class="restaurantPic">
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('restaurant-item', RestaurantItem);
