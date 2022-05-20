import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryBox = document.querySelector(".gallery");
const galleryMarkup = createGalleryItems(galleryItems);

galleryBox.insertAdjacentHTML("afterbegin", galleryMarkup);

function createGalleryItems(galleryItems){
    galleryItems.reduce((acc, {preview, original, description}) => acc + `
    <div class="gallery__item">
        <a class="gallery__item" href="large-image.jpg">
            <img 
            class="gallery__image" 
            src="${preview}" 
            alt="${description}" />
            data-source="${original}"
        </a>
    </div>
    `
, "")
};
console.log(galleryMarkup);
