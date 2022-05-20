import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryBox = document.querySelector(".gallery");
const galleryMarkup = createGallery(galleryItems);

galleryBox.insertAdjacentHTML("afterbegin", galleryMarkup);
galleryBox.addEventListener("click", onGalleryBoxClick)

function createGallery(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
            <div class="gallery__item">
                <a href="${original}" class="gallery__link" onclick="event.preventDefault()">
                    <img 
                    src="${preview}" 
                    data-source="${original}"
                    alt="${description}" 
                    class="gallery__image">
                </a>
            </div>
`
    })
    .join('');
};

function onGalleryBoxClick(e){
    const isImgEl = e.target.classList.contains("gallery__image");
    if(!isImgEl){
        return;
    }
    else{
        const imagesCreate = basicLightbox.create(`
            <img src="${e.target.dataset.source}">
        `);
        imagesCreate.show();
    }
}


























// const instance = basicLightbox.create(`
//     <img src="https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg" width="800" height="600">
// `)

// instance.show()