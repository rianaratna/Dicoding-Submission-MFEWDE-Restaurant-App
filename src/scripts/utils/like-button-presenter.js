import $ from 'jquery';
import { createLikeRestaurantButtonTemplate, createUnlikeRestaurantButtonTemplate } from '../views/templates/template-creator';

const LikeButtonPresenter = {
    async init({ likeButtonContainer, favoriteRestaurant, restaurant }) {
        this._likeButtonContainer = likeButtonContainer;
        this._favoriteRestaurant = favoriteRestaurant;
        this._restaurant = restaurant;

        await this._renderButton();
    },

    async _renderButton() {
        this._buttonTopPositioning();
        const { id } = this._restaurant;

        if (await this._isRestaurantExist(id)) {
            this._renderLiked();
        } else {
            this._renderLike();
        }
    },

    async _isRestaurantExist(id) {
        const restaurant = await this._favoriteRestaurant.getRestaurant(id);
        return !!restaurant;
    },

    _renderLike() {
        this._likeButtonContainer.innerHTML = createLikeRestaurantButtonTemplate();

        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
            await this._favoriteRestaurant.putRestaurant(this._restaurant);
            this._renderButton();
            alert(`${this._restaurant.name} is succesfully added to Favourites`);
        });
        this._buttonTopPositioning();
    },

    _renderLiked() {
        this._likeButtonContainer.innerHTML = createUnlikeRestaurantButtonTemplate();

        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
            await this._favoriteRestaurant.deleteRestaurant(this._restaurant.id);
            this._renderButton();
            alert(`${this._restaurant.name} is succesfully removed from Favourites`);
        });
        this._buttonTopPositioning();
    },

    _buttonTopPositioning() {
        $('.like').css({
            top: $('app-bar').outerHeight(),
        });
    },
};

export default LikeButtonPresenter;
