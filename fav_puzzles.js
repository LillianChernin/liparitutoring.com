const numberGuessing = document.getElementById("numberGuessing");
const thousandLockersProblem = document.getElementById("thousandLockersProblem");
const paintingACarousel = document.getElementById("paintingACarousel");
const measuringAPipe = document.getElementById("measuringAPipe");

const numberGuessingTab = document.getElementById("numberGuessingTab");
const thousandLockersProblemTab = document.getElementById("thousandLockersProblemTab");
const paintingACarouselTab = document.getElementById("paintingACarouselTab");
const measuringAPipeTab = document.getElementById("measuringAPipeTab");

const puzzles = [
    [numberGuessing, numberGuessingTab],
    [thousandLockersProblem, thousandLockersProblemTab],
    [paintingACarousel, paintingACarouselTab],
    [measuringAPipe, measuringAPipeTab]
];

function hidePuzzle(puzzle) {
    if (!puzzle[0].classList.contains("hiddenObject")){
        puzzle[0].classList.add("hiddenObject");
    }
    if (puzzle[1].classList.contains("currentPuzzleTab")){
        puzzle[1].classList.remove("currentPuzzleTab");
    }
}

function hideAllBut(puzzle) {
    puzzles.forEach(element => {
        if (element[1].id != puzzle[1].id) {
            hidePuzzle(element);
        }
    });
}

puzzles.forEach(element => {
    element[1].addEventListener("click", function(){
        if (element[0].classList.contains("hiddenObject")) {
            element[1].classList.add("currentPuzzleTab");
            element[0].classList.remove("hiddenObject");
        }
        hideAllBut(element);
    })
});

