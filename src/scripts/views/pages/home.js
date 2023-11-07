import FoodData from '../../data/FOOD.json';
import TheRestaurantDbSource from '../../data/therestaurantdb-source.js';
import { createErrorMessageTemplate } from '../templates/template-creator';

// Component
import '../../component/header/jumbotron';
import '../../component/header/marquee';
import '../../component/main/rec-food-list';
import '../../component/main/restaurant-list';

const Home = {
    async render() {
        return `
            <jumbotron-container></jumbotron-container>
            <marquee-container></marquee-container>
            <div class="content">
                <rec-food-list></rec-food-list>
                <restaurant-list></restaurant-list>
            </div>
        `;
    },

    async afterRender() {
        const recommendedFoodList = document.querySelector('rec-food-list');
        try {
            const result = await FoodData.foods;
            recommendedFoodList.foods = result;
        } catch (error) {
            console.error(error);
        }

        const restaurantList = document.querySelector('restaurant-list');
        try {
            const result = await TheRestaurantDbSource.listOfRestaurant();
            restaurantList.restaurants = result;
        } catch (error) {
            $('.content').innerHTML = createErrorMessageTemplate('The request is failed. Please reload the page');
        }
    },
};

export default Home;
