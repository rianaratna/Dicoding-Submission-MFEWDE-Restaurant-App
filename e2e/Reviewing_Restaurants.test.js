Feature('Reviewing Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/favourite');
});

Scenario('reviewing one restaurant', async ({ I }) => {
    I.seeElement('.emptyFavouriteMessage');
    I.see('You don\'t have favourite restaurant', '.emptyFavouriteMessage');

    I.amOnPage('/');

    I.seeElement('.viewDetailBtn');
    I.click(locate('.viewDetailBtn').first());

    I.seeElement('.addReview');

    const name = 'User Name';
    const review = 'End To End Testing';

    I.fillField('#name', name);
    I.fillField('#review', review);
    I.click('.submitReview');

    I.see(name, '.othersName');
    I.see(review, '.othersReview');
});
