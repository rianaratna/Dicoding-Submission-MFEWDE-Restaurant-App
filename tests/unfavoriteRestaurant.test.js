import { afterEach } from '@jest/globals';
import FavouriteRestaurantIdb from '../src/scripts/data/favourite-restaurant-idb';
import * as TestFactories from './helper/testFactories';

describe('Unliking A Restaurant', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    };

    beforeEach(async () => {
        addLikeButtonContainer();
        await FavouriteRestaurantIdb.putRestaurant({ id: 1 });
    });

    afterEach(async () => {
        await FavouriteRestaurantIdb.deleteRestaurant(1);
    });

    it('should display unlike widget when the restaurant has been liked', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

        expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
    });

    it('should not display like widget when the restaurant has been liked', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

        expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy();
    });

    it('should be able to remove liked restaurant from the list', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

        document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

        expect(await FavouriteRestaurantIdb.getAllRestaurant()).toEqual([]);
    });

    it('should not throw error when user click unlike widget if the unliked movie is not in the list', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

        // Hapus dulu film dari daftar film yang disukai
        await FavouriteRestaurantIdb.deleteRestaurant(1);

        // Simulasikan pengguna menekan widget batal menyukai restaurant
        document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
        expect(await FavouriteRestaurantIdb.getAllRestaurant()).toEqual([]);
    });
});
