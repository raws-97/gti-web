async function getClientLogoImage(elementId, source) {
    try {
        const data = await fetchData(source);
        const imageElements = createImageElements(data);
        renderSliderImages(imageElements, elementId);
        initializeSwiper(elementId)
    } catch (error) {
        console.error(error);
    }
}

async function fetchData(source) {
    const url = `${API_URL}?token=${API_TOKEN}&db=${source}`;
    return await httpGetPromises(url);
}

function createImageElements(data) {
    return data.data.map((imageData) => createSliderImageElement(imageData));
}

function createSliderImageElement(imageData) {
    return `<div class="item"><div class="testimony-wrap-2 d-flex justify-content-center"><img class="user-img" src="${imageData.image}" alt="${imageData.id}"></div></div>`
}

function renderSliderImages(imageElements, elementId) {
    document.getElementById(elementId).innerHTML = imageElements.join('');
}

function initializeSwiper(elementId){
    $(`#${elementId}`).owlCarousel({
        autoplay: true,
        center: true,
        loop: true,
        items:1,
        margin: 30,
        stagePadding: 0,
        nav: false,
        dots: false,
        navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 1
            },
            1000:{
                items: 3
            }
        }
    });
}