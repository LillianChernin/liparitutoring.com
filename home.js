const slideshowContainer = document.getElementsByClassName("slideshowContainer")[0];
const reviewCardContainer = document.getElementsByClassName("reviewCardContainer")[0];
const selectorContainer = document.getElementsByClassName("selectorContainer")[0];

const maxReviewLength = 300;

let currentReviewNumber = 0;
let isReviewTruncated = false;
let selectorsList = [];

//populate initial review card to display
reviewCardContainer.appendChild(createReviewCard(reviews[0]));

//populate selectors based on number of reviews
for (let i = 0; i < reviews.length; i++){
    let currentSelector = createSelector();
    let currentSelectorId = "selector#"+i;
    currentSelector.classList.add(currentSelectorId);
    currentSelector.id = currentSelectorId;
    selectorsList.push(currentSelectorId);
    currentSelector.addEventListener("click", displaySelectedReview);
    selectorContainer.appendChild(currentSelector);
}

updateSelectorsAppearance();

function displaySelectedReview(event){
    //review previous review
    reviewCardContainer.removeChild(reviewCardContainer.firstChild);
    //display new review
    reviewCardContainer.appendChild(createReviewCard(reviews[updateCurrentReviewNumber(event.target.id)]));
    updateSelectorsAppearance();
}

function updateSelectorsAppearance() {
    selectorsList.forEach(element => {
        let currentSelector = document.getElementById(element);
        if (Number(element.charAt(element.length - 1)) === currentReviewNumber) {
            currentSelector.classList.add("currentSelector");
        } else {
            currentSelector.classList.remove("currentSelector");
        }
    });
}

function updateCurrentReviewNumber(currentId) {
    let length = currentId.length;
    currentReviewNumber = Number(currentId.charAt(length - 1));
    return currentReviewNumber;
}

function createSelector(){
    let selector = document.createElement("div");
    selector.classList.add("selector");
    return selector;
}

function createReviewCard (reviewObject){
    let reviewCard = document.createElement("div");
    let review = document.createElement("div");
    let reviewer = document.createElement("div");
    
    reviewCard.classList.add("reviewCard");
    review.classList.add("review");
    reviewer.classList.add("reviewer");

    let reviewToDisplay = reviewObject["review"];

    if (reviewToDisplay.length >= maxReviewLength) {
        reviewToDisplay = reviewToDisplay.substr(0, maxReviewLength) + "...";
        isReviewTruncated = true;
    } else {
        isReviewTruncated = false;
    }

    review.appendChild(document.createTextNode(reviewToDisplay));
    reviewer.appendChild(document.createTextNode(reviewObject["reviewerName"]));
    
    reviewCard.appendChild(review);
    reviewCard.appendChild(reviewer);

    return reviewCard;
}