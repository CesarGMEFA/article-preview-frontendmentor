const bottom = document.getElementById('share-row');
const active = document.getElementById("active");


bottom.addEventListener('click', () => {
    active.classList.toggle("activation")
});
