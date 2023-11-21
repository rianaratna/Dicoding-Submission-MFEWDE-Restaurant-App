const createLikeRestaurantButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like" tabindex="0">
        <span class="material-symbols-outlined">
            favorite
        </span>
    </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like" tabindex="0">
        <span class="material-symbols-sharp">
            favorite
        </span>
    </button>
`;

const createFormReviewTemplate = (name, review, date) => `
    <div class="othersReviewList">
        <div class="othersInfo">
            <span class="material-symbols-rounded othersProfilePic">
                person
            </span>
            <h3 class="othersName" tabindex="0">${name}</h3>
        </div>
        <p class="othersReview" tabindex="0">${review}</p>
        <h5 class="othersReviewDate" tabindex="0">${date}</h5>
    </div>
`;

const createErrorMessageTemplate = (message) => `
    <div class="errorMessageContainer">
        <p class="errorMessage" tabindex="0">${message}</p>
    </div>
`;

export {
    createLikeRestaurantButtonTemplate,
    createUnlikeRestaurantButtonTemplate,
    createFormReviewTemplate,
    createErrorMessageTemplate,
};
