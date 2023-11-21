import { itActAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';
import FavouriteRestaurantIdb from '../src/scripts/data/favourite-restaurant-idb';

describe('Favorite Movie Idb Contract Test Implementation', () => {
    afterEach(async () => {
        (await FavouriteRestaurantIdb.getAllRestaurant()).forEach(async (restaurant) => {
            await FavouriteRestaurantIdb.deleteRestaurant(restaurant.id);
        });
    });

    itActAsFavoriteRestaurantModel(FavouriteRestaurantIdb);
});
