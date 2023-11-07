import API_ENDPOINT from '../globals/api-endpoint';

class TheRestaurantDbSource {
    static async listOfRestaurant() {
        const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
        const responseJson = await response.json();
        return responseJson.restaurants;
    }

    static async detailRestaurant(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        const responseJson = await response.json();
        return responseJson.restaurant;
    }

    static async reviewRestaurant(data) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: data.id,
                name: data.name,
                review: data.review,
            }),
        };

        const response = await fetch(API_ENDPOINT.REVIEW, options);
        return response.json();
    }
}

export default TheRestaurantDbSource;
