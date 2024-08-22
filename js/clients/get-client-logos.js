async function getClientLogoImage() {
    try {
        const data = await fetchData();
        const imageElements = createImageElements(data);
        renderSliderImages(imageElements);
        initializeSwiper()
    } catch (error) {
        console.error(error);
    }
}

async function fetchData() {
    const url = `${API_URL}?token=${API_TOKEN}&db=clients`;
    return await httpGetPromises(url);
}

function createImageElements(data) {
    return data.data.map((imageData) => createSliderImageElement(imageData));
}

function createSliderImageElement(imageData) {
    return `<div class="item"><div class="testimony-wrap-2 d-flex justify-content-center"><img class="user-img" src="${imageData.image}" alt="${imageData.id}"></div></div>`
}

function renderSliderImages(imageElements) {
    document.getElementById('client-logo-image').innerHTML = imageElements.join('');
}

function initializeSwiper(){
    $('.carousel-testimony').owlCarousel({
        autoplay: true,
        center: true,
        loop: true,
        items:1,
        margin: 30,
        stagePadding: 0,
        nav: false,
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