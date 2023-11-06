import FavouriteRestaurantIdb from '../../data/favourite-restaurant-idb';

// Components
import '../../component/main/restaurant-list';
import '../../component/loading-indicator';

const Favourite = {
    async render() {
        return `
            <div class="content favouriteSection">
                <h2 class="secondaryTitle favouriteTitle" tabindex="0">Favourite</h2>
                <div id="favourites" class="favourites">
                    <restaurant-list></restaurant-list>
                </div>
                <loading-indicator></loading-indicator>
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
                    const emptyFavouriteListMessage = `
                        <style>
                            .emptyFavouriteMessage {
                                text-align: center;
                                font-size: clamp(1.5em, calc(3vw + 1em), 3.125em); 
                                color: black;
                            }
                        </style>
                        <p class="emptyFavouriteMessage">You don't have favourite restaurant</p>
                    `;
                    $('#favourites').innerHTML = emptyFavouriteListMessage;
                } else {
                    const restaurantList = document.querySelector('restaurant-list');
                    restaurantList.restaurants = results;
                    console.log(restaurantList);

                    // results.forEach((result) => {
                    //     const restaurantItem = document.querySelector('restaurant-item');
                    //     restaurantItem.restaurant = result;
                    //     console.log(restaurantItem);
                    //     $('#favourites').innerHTML += restaurantItem;
                    // });
                }
            } catch (error) {
                console.error('Error in favourite page...', error);
            }
        }, 2000);
    },
};

export default Favourite;
