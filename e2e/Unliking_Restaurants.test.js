const assert = require('assert');

Feature('Unliking Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/favourite');
});

Scenario('unliking one restaurant', async ({ I }) => {
    I.seeElement('.emptyFavouriteMessage');
    I.see('You don\'t have favourite restaurant', '.emptyFavouriteMessage');

    I.amOnPage('/');

    I.seeElement('.viewDetailBtn');
    const firstRestaurant = locate('.viewDetailBtn').first();
    const firstRestaurantTitle = await I.grabTextFrom('.restaurantName');
    I.click(firstRestaurant);

    I.waitForElement('#likeButton', 3);
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favourite');
    I.seeElement('restaurant-item');
    const likedRestaurantTitle = await I.grabTextFrom('.restaurantName');

    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

    I.seeElement('.viewDetailBtn');
    const firstUnlikeRestaurant = locate('.viewDetailBtn').first();
    const firstUnlikeRestaurantTitle = await I.grabTextFrom('.restaurantName');
    I.click(firstUnlikeRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');
    const unlikedRestaurantTitle = await I.grabTextFrom('.restaurantName');
    assert.strictEqual(firstUnlikeRestaurantTitle, unlikedRestaurantTitle);
    I.amOnPage('/#/favourite');
    I.see('You don\'t have favourite restaurant', '.emptyFavouriteMessage');
});
