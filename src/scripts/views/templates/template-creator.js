const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <span class="material-symbols-outlined">
            favorite
        </span>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
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
            <h3 class="othersName">${name}</h3>
        </div>
        <p class="othersReview">${review}</p>
        <h5 class="othersReviewDate">${date}</h5>
    </div>
`;

const createErrorMessageTemplate = (message) => `
    <div class="errorMessageContainer">
        <p class="errorMessage">${message}</p>
    </div>
`;

export {
    createLikeButtonTemplate,
    createLikedButtonTemplate,
    createFormReviewTemplate,
    createErrorMessageTemplate,
};
