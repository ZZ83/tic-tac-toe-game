/**
 * Listens for click on `.mark-selection`,
 * Add selected class to current target,
 * Remove the selected class from its sibling
 */
const markSelection = document.querySelector(".mark-selection");
markSelection.addEventListener("click", function (event) {
    if (event.target.classList.contains("mark-selection__x")) {
        event.target.classList.add("selected");
        event.target.nextElementSibling.classList.remove("selected");
    } else {
        event.target.classList.add("selected");
        event.target.previousElementSibling.classList.remove("selected");
    }
});
