const imageGallery = () => {

    const mainImage = document.querySelector('.js-gallery-image img');
    const thumbImages = document.querySelectorAll('.js-gallery-thumbnails img');

    if (!mainImage || !thumbImages) return;

    thumbImages.forEach((thumbImage)=>{
        thumbImage.addEventListener('mouseover', (event) => {
            mainImage.src = event.target.src;
            mainImage.animate({opacity: [0, 1]}, 500);
        });
    });
};

imageGallery();