import { itActAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';

let favoriteRestaurants = [];

const FavoriteRestaurantArray = {
    getRestaurant(id) {
        if (!id) {
            return;
        }

        // eslint-disable-next-line consistent-return
        return favoriteRestaurants.find((restaurant) => restaurant.id == id);
    },

    getAllRestaurant() {
        return favoriteRestaurants;
    },

    putRestaurant(restaurant) {
        // eslint-disable-next-line no-prototype-builtins
        if (!restaurant.hasOwnProperty('id')) {
            return;
        }

        // pastikan id ini belum ada dalam daftar favoriteRestaurants
        if (this.getRestaurant(restaurant.id)) {
            return;
        }

        favoriteRestaurants.push(restaurant);
    },

    deleteRestaurant(id) {
        favoriteRestaurants = favoriteRestaurants.filter((restaurant) => restaurant.id != id);
    },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
    afterEach(() => {
        favoriteRestaurants = [];
    });

    itActAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});
