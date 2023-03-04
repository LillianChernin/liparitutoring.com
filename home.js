const slideshowContainer = document.getElementsByClassName("slideshowContainer")[0];
const reviewCardContainer = document.getElementsByClassName("reviewCardContainer")[0];
const selectorContainer = document.getElementsByClassName("selectorContainer")[0];

reviewCardContainer.appendChild(createReviewCard(reviews[0]));

for (let i = 0; i < reviews.length; i++){
    let currentSelector = createSelector();
    currentSelector.classList.add("selector#"+i);
    selectorContainer.appendChild(currentSelector);
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
    reviewer.classList.add("reviwer");

    review.appendChild(document.createTextNode(reviewObject["review"]));
    reviewer.appendChild(document.createTextNode(reviewObject["reviewerName"]));
    
    reviewCard.appendChild(review);
    reviewCard.appendChild(reviewer);

    return reviewCard;
}