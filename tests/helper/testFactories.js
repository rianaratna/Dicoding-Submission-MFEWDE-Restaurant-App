import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavouriteRestaurantIdb from '../../src/scripts/data/favourite-restaurant-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
    await LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurant: FavouriteRestaurantIdb,
        restaurant,
    });
};

export { createLikeButtonPresenterWithRestaurant };
