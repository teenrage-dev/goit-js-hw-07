import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryBox = document.querySelector(".gallery");
const galleryMarkup = createGallery(galleryItems);

galleryBox.insertAdjacentHTML("afterbegin", galleryMarkup);

function createGallery(galleryItems) {
    return galleryItems.reduce((acc, {preview, original, description}) => acc + `
        <a class="gallery__item" href="${original}">
            <img 
            class="gallery__image" 
            src="${preview}" 
            alt="${description}" />
        </a>
`
, "")
};
    const lightbox = new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250,});
