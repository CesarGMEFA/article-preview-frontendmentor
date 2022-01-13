const bottom = document.getElementById('share-row');
const active = document.getElementById("active");
const paragraph = document.getElementById("active-share_p");
const arrow = document.getElementById("share-row_img");
const bottomClose = document.querySelector('active-arrow');


bottom.addEventListener('click', () => {
    active.classList.toggle("activation");
});

// arrow.addEventListener('click', () => {
//     active.classList.toggle("activation");
// });


window.addEventListener('click', e => {
    console.log(e.target)
    if ( e.target !== bottom &&  
        e.target !== active && 
        active.classList.contains("activation") &&
        e.target !== paragraph &&
        e.target !== arrow) 
    {
        active.classList.toggle("activation");
    };
});
