import TheRestaurantDbSource from '../data/therestaurantdb-source';
import { createFormReviewTemplate } from '../views/templates/template-creator';

const FormReviewInitiator = {
    async init({
        reviewContainer, form, restaurantId, nameInput, reviewInput, submitButton,
    }) {
        this._reviewContainer = reviewContainer;
        this._form = form;
        this._restaurantId = restaurantId;
        this._nameInput = nameInput;
        this._reviewInput = reviewInput;
        this._submitButton = submitButton;

        await this._renderReview();
    },

    async _renderReview() {
        this._submitButton.addEventListener('click', (event) => {
            event.preventDefault();
            const data = {
                id: this.restaurantId,
                name: this._nameInput.value,
                review: this._reviewInput.value,
            };

            if (this._nameInput.value === '') {
                this.reviewFailedToBeProcessed('name');
            } else if (this._reviewInput.value === '') {
                this.reviewFailedToBeProcessed('review');
            } else {
                this.reviewSuccessToBeProcessed(data);
            }
        });
    },

    async reviewSuccessToBeProcessed(data) {
        await TheRestaurantDbSource.reviewRestaurant(data);
        this._form.reset();
        const date = new Date().toLocaleString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });
        alert('Thank you for your review.');
        // eslint-disable-next-line max-len
        this._reviewContainer.innerHTML += createFormReviewTemplate(data.name, data.review, date);
    },

    async reviewFailedToBeProcessed(componentName) {
        alert(`The ${componentName} text field should not be empty. Please enter it first before submitting.`);
    },
};

export default FormReviewInitiator;
