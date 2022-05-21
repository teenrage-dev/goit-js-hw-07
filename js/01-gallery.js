import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryBox = document.querySelector(".gallery");
const galleryMarkup = createGallery(galleryItems);

galleryBox.insertAdjacentHTML("afterbegin", galleryMarkup);
galleryBox.addEventListener("click", onGalleryBoxClick);

function createGallery(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
            <div class="gallery__item">
                <a href="${original}" class="gallery__link"">
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
        function onCloseImgEsc(e){
            if(e.code === 'Escape'){
                imagesCreate.close();
                window.removeEventListener("keydown", onCloseImgEsc);
            }
        }
        if(imagesCreate.visible()){
            return  window.addEventListener("keydown", onCloseImgEsc);
        }
    }
}


