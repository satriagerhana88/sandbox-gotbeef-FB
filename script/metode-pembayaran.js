
// bottom sheet
function show() {
    let container = document.querySelector ('#overlay');
    let bottomSheet = document.querySelector ('#overlay #bottomSheet');

    container.classList.add('active');
    setTimeout(() => {
        bottomSheet.classList.add('active');
    }, 1);
}

function hideOverlay() {
    let container = document.querySelector ('#overlay');
    let bottomSheet = document.querySelector ('#overlay #bottomSheet');

    bottomSheet.classList.remove('active');

    setTimeout(() => {
        container.classList.remove('active')
    }, 400)
}


// bottom sheet
function show2() {
    let container2 = document.querySelector ('#overlay2');
    let bottomSheet2 = document.querySelector ('#overlay2 #bottomSheet2');

    container2.classList.add('active');
    setTimeout(() => {
        bottomSheet2.classList.add('active');
    }, 1);
}

function hideOverlay2() {
    let container2 = document.querySelector ('#overlay2');
    let bottomSheet2 = document.querySelector ('#overlay2 #bottomSheet2');

    bottomSheet2.classList.remove('active');

    setTimeout(() => {
        container2.classList.remove('active')
    }, 400)
}



