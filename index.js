const bottom = document.querySelector(".share-arrow");
const bottomActive = document.querySelector(".active-arrow");
const active = document.querySelector(".active");


bottom.addEventListener('click', () => {
    active.classList.toggle("activation")
});
