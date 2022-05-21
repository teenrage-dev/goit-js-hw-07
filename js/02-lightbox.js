import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryBox = document.querySelector(".gallery");
const galleryMarkup = createGallery(galleryItems);
galleryBox.insertAdjacentHTML("afterbegin", galleryMarkup);

function createGallery(galleryItems) {
    return galleryItems.reduce((acc, {preview, original, description}) => acc + `
    <div class="gallery__item">
        <a class="gallery__item" href="large-image.jpg">
            <img 
            class="gallery__image" 
            src="${preview}" 
            data-source="${original}"
            alt="${description}" />
        </a>
    </div>
    `
, "")
};


console.log(galleryMarkup);
