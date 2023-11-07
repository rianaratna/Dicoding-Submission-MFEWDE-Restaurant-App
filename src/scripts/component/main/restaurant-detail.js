import CONFIG from '../../globals/config';
import FormReviewInitiator from '../../utils/form-review-initiator';
import { createFormReviewTemplate } from '../../views/templates/template-creator';

class RestaurantDetail extends HTMLElement {
    constructor() {
        super();
    }

    set detail(detail) {
        this._detail = detail;
        this.render();
    }

    async render() {
        this.innerHTML = `
            <img src="${CONFIG.BASE_IMAGE_URL.MEDIUM + this._detail.pictureId}" alt="${this._detail.name}" class="restaurantImg">
            <div class="detailContainer">
                <div class="titleAndAboutRestaurantSection">
                    <div class="titleContainer">
                        <h3 class="restaurantCity" tabindex="0" aria-label="located in ${this._detail.city}">${this._detail.city}</h3>
                        <h1 class="restaurantName" tabindex="0" aria-label="restaurant ${this._detail.name}">${this._detail.name}</h1>
                    </div>
                    <div class="aboutRestaurant">
                        <div class="ratingAndAddress">
                            <div class="restaurantRating">
                                <span class="material-symbols-rounded starIcon">
                                    star
                                </span>
                                <div class="ratingWrapper">
                                    <h2 class="ratingTitle" tabindex="0">Rating</h2>
                                    <h3 class="ratingScale" tabindex="0" ${this._detail.rating}">${this._detail.rating}</h3>
                                </div>
                            </div>
                            <div class="restaurantAddress">
                                <span class="material-symbols-sharp locationIcon">
                                    location_on
                                </span>
                                <div class="addressWrapper">
                                    <h2 class="addressTitle" tabindex="0">Address</h4>
                                    <h3 class="addressName" tabindex="0">${this._detail.address}</h3>
                                </div>
                            </div>
                        </div>
                        <section class="restaurantDescSection">
                            <h2 tabindex="0">Description</h2>
                            <p class="restaurantDesc" tabindex="0">${this._detail.description}</p>
                        </section>
                    </div>
                </div>

                <section class="restaurantMenu">
                    <h2 class="menuTitle secondaryTitle" tabindex="0">Menu</h2>
                    <div class="tabButton">
                        <button href="" class="foodsCategory" aria-label="Foods Category">Foods</button>
                        <button href="" class="drinksCategory" aria-label="Drinks Category">Drinks</button>
                        <span class="rectangleToFill"></span>
                    </div>
                    <div class="menuItemContainer">
                        <div id="foods" class="foodItemContainer">
                            ${this._detail.menus.foods.map((food) => `
                                <div class="foodItemList">
                                    <img src="./images/twemoji_pot-of-food.svg" alt="" class="foodIcon">
                                    <h4 class="foodItemName" tabindex="0">${food.name}</h4>
                                </div>
                            `)}
                        </div>
                        <div id="drinks" class="drinkItemContainer">
                            ${this._detail.menus.drinks.map((drink) => `
                                <div class="drinkItemList">
                                    <img src="./images/emojione_tropical-drink.svg" alt="" class="drinkIcon">
                                    <h4 class="drinkItemName" tabindex="0">${drink.name}</h4>
                                </div>
                            `)}
                        </div>
                    </div>
                </section>

                <section class="restaurantReviews">
                    <h2 class="reviewTitle secondaryTitle" tabindex="0">Customer Reviews</h2>
                    <div class="addReview">
                        <div class="reviewTitleContainer">
                            <h4 class="addReviewSubTitle" tabindex="0">What do you think about this restaurant?</h4>
                            <h3 class="addReviewTitle" tabindex="0">Add your review to help others</h3>
                        </div>
                        <form class="addReviewForm">
                            <div class="addNameSection">
                                <span class="material-symbols-outlined">
                                    person
                                </span>
                                <input type="text" name="customer_name" id="name" placeholder="Enter your name">
                            </div>
                            <div class="addReviewSection">
                                <span class="material-symbols-outlined">
                                    description
                                </span>
                                <textarea name="customer_review" id="review" rows="1" placeholder="Enter your review" aria-label="Enter your review"></textarea>
                            </div>
                            <button type="submit" class="submitReview textButton">
                                Send Review
                            </button>
                        </form>
                    </div>
                    <div class="othersReviewContainer" tabindex="0" aria-label="Others' Reviews">
                        ${this._detail.customerReviews.map((customer) => createFormReviewTemplate(customer.name, customer.review, customer.date))}
                    </div>
                </section>
            </div>
        `;

        await FormReviewInitiator.init({
            reviewContainer: document.querySelector('.othersReviewContainer'),
            form: document.querySelector('.addReviewForm'),
            restaurantId: this._detail.id,
            nameInput: document.querySelector('#name'),
            reviewInput: document.querySelector('#review'),
            submitButton: document.querySelector('.submitReview'),
        });

        document.querySelector('.foodItemContainer').innerHTML = document.querySelector('.foodItemContainer').innerHTML.replace(/,/g, '');
        document.querySelector('.drinkItemContainer').innerHTML = document.querySelector('.drinkItemContainer').innerHTML.replace(/,/g, '');
        document.querySelector('.othersReviewContainer').innerHTML = document.querySelector('.othersReviewContainer').innerHTML.replace(/,/g, '');
        this.classList.add('id', `${this._detail.id}`);

        $('.restaurantImg').css({
            'margin-top': $('app-bar').outerHeight(),
        });

        this._tabButtonOnClick();
    }

    // eslint-disable-next-line class-methods-use-this
    _tabButtonOnClick() {
        const foodCategoryOnClick = () => {
            $('.foodsCategory').addClass('clicked');
            $('.drinksCategory').removeClass('clicked');
            $('.foodItemContainer').show();
            $('.drinkItemContainer').hide();
        };

        foodCategoryOnClick();

        $('.foodsCategory').on('click', () => {
            foodCategoryOnClick();
        });

        $('.drinksCategory').on('click', () => {
            $('.drinksCategory').addClass('clicked');
            $('.foodsCategory').removeClass('clicked');
            $('.foodItemContainer').hide();
            $('.drinkItemContainer').show();
        });
    }
}

customElements.define('restaurant-detail', RestaurantDetail);
