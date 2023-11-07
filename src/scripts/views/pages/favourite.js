import FavouriteRestaurantIdb from '../../data/favourite-restaurant-idb';
import { createErrorMessageTemplate } from '../templates/template-creator';

// Components
import '../../component/main/restaurant-list';
import '../../component/main/restaurant-item';
import '../../component/loading-indicator';

const Favourite = {
    async render() {
        return `
            <div class="content favouriteSection">
                <loading-indicator></loading-indicator>
                <h2 class="secondaryTitle favouriteTitle" tabindex="0">Favourite</h2>
                <div id="favourites" class="favourites">
                    <restaurant-list></restaurant-list>
                </div>
            </div>
        `;
    },

    async afterRender() {
        $('loading-indicator').css({ display: 'flex' });

        setTimeout(async () => {
            try {
                const results = await FavouriteRestaurantIdb.getAllRestaurant();
                $('loading-indicator').css({ display: 'none' });
                if (results.length === 0) {
                    document.querySelector('#favourites').innerHTML = `
                        <p class="emptyFavouriteMessage" tabindex="0">You don't have favourite restaurant</p>
                    `;
                } else {
                    const restaurantList = document.querySelector('restaurant-list');
                    restaurantList.restaurants = results;
                    $('.secondaryTitle.restaurantTitle').css({ display: 'none' });
                }
            } catch (error) {
                $('.content').innerHTML = createErrorMessageTemplate('The request is failed. Please reload the page');
            }
        }, 2000);
    },
};

export default Favourite;
