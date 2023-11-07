import UrlParser from '../../routes/url-parser';
import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FormReviewInitiator from '../../utils/form-review-initiator';
import { createErrorMessageTemplate } from '../templates/template-creator';

// Component
import '../../component/main/restaurant-detail';
import '../../component/loading-indicator';

const Detail = {
    async render() {
        return `
            <div class="content">
                <loading-indicator></loading-indicator>
                <restaurant-detail></restaurant-detail>
                <div id="likeButtonContainer"></div>
            </div>
        `;
    },

    async afterRender() {
        $('loading-indicator').css({ display: 'flex' });
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurantContainer = document.querySelector('restaurant-detail');

        setTimeout(async () => {
            try {
                const restaurant = await TheRestaurantDbSource.detailRestaurant(url.id);
                $('loading-indicator').css({ display: 'none' });
                restaurantContainer.detail = restaurant;

                await LikeButtonInitiator.init({
                    likeButtonContainer: document.querySelector('#likeButtonContainer'),
                    restaurant: {
                        id: restaurant.id,
                        name: restaurant.name,
                        description: restaurant.description,
                        pictureId: restaurant.pictureId,
                        city: restaurant.city,
                        rating: restaurant.rating,
                    },
                });

                await FormReviewInitiator.init({
                    reviewContainer: document.querySelector('.othersReviewContainer'),
                    form: document.querySelector('.addReviewForm'),
                    restaurantId: this._detail.id,
                    nameInput: document.querySelector('#name'),
                    reviewInput: document.querySelector('#review'),
                    submitButton: document.querySelector('.submitReview'),
                });
            } catch (error) {
                $('.content').innerHTML = createErrorMessageTemplate('The request is failed. Please reload the page');
            }
        }, 2000);
    },
};

export default Detail;
