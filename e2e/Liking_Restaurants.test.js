const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/favourite');
});

Scenario('liking one restaurant', async ({ I }) => {
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
});
